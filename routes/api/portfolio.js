const express = require('express')
const route = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Portfolio = require('../../models/PortfolioProfile')
const Contact = require('../../models/Contact')

// use: get all portfolios of users
// description: 
// access: public
route.get('/', async (req, res) =>{
    try {
        const portfolios = await Portfolio.find()
        if(!portfolios || portfolios.length <= 0) return res.status(400).json({ msg: 'No active portfolios yet!' })
        res.json(portfolios)
    } 
    catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


// use: get portfolio by user auth -> req.user.id from middleware
// description: 
// access: private
route.get('/own', auth, async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({user: req.user.id})
        res.json(portfolio)
    } 
    catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})



// use: create portfolio of user
// description: 
// access: public
route.post('/createProfilePortfolio', [auth, [
    check('dailyHobby', 'Daily hobby should be alteast 115 characters!')
    .isLength({ min: 115 })
    .not()
    .isEmpty(),
    check('whatYouDo', 'What you do should be atleast 80 characters!')
    .isLength({ min: 50 })
    .not()
    .isEmpty(),
    check('whyHireMe', 'Why hire you should be alteast 700 characters!')
    .isLength({ min: 700 })
    .not()
    .isEmpty(),
    check('projectsCompleted', 'Projects completed is required')
    .not()
    .isEmpty(),
    check('happyClients', 'Happy clients are required')
    .not()
    .isEmpty(),
    check('skill', 'Selected skills are required')
    .not()
    .isEmpty(),
    check('description', 'Selected Skills description should be atleast 80 and maximum characters!')
    .isLength({ max: 110, min: 80 })
    .not()
    .isEmpty(),
    check('name', 'Testimonial name is required')
    .not()
    .isEmpty(),
    check('status', 'Testimonial status of person is required')
    .not()
    .isEmpty(),
    check('testimony', 'Testimony should be atleast 100 and max of 160 characters!')
    .isLength({ max: 160, min: 100 })
    .not()
    .isEmpty()
    ]
], 
async (req, res) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() });
    }

    const { 
        dailyHobby,
        whatYouDo,
        whyHireMe,
        projectsCompleted,
        happyClients,
        name, 
        status,
        testimony,
        skill,
        description,
    } = req.body

    const portfolioFields = {}

    portfolioFields.user = req.user.id
    if(dailyHobby) portfolioFields.dailyHobby = dailyHobby
    if(whatYouDo) portfolioFields.whatYouDo = whatYouDo
    if(whyHireMe) portfolioFields.whyHireMe = whyHireMe
    if(projectsCompleted) portfolioFields.projectsCompleted = projectsCompleted
    if(happyClients) portfolioFields.happyClients = happyClients

    portfolioFields.testimonials = {}

    if(name) portfolioFields.testimonials.name = name
    if(status) portfolioFields.testimonials.status = status
    if(testimony) portfolioFields.testimonials.testimony = testimony

    portfolioFields.selectedSkills = {}

    if(skill) portfolioFields.selectedSkills.skill = skill
    if(description) portfolioFields.selectedSkills.description = description

    try {
        let portfolios = await Portfolio.findOne({ user: req.user.id })
        if(portfolios){
            //update existing portfolio
            portfolios = await Portfolio.findOneAndUpdate(
                { user: req.user.id },
                { $set: portfolioFields },
                { new: true }
            )
            return res.json(portfolios)
        }
        //create portfolio (no existing portfolio of user)
        portfolios = new Portfolio(portfolioFields)
        await portfolios.save()
        res.json(portfolios)
    } 
    catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


// use: update portfolios of users
// description: 
// access: public
route.post('/updatePortfolio', [auth, [
    check('dailyHobby', 'Daily hobby should be alteast 115 characters!')
    .isLength({ min: 115 })
    .not()
    .isEmpty(),
    check('whatYouDo', 'What you do should be atleast 80 characters!')
    .isLength({ min: 50 })
    .not()
    .isEmpty(),
    check('whyHireMe', 'Why hire you should be alteast 700 characters!')
    .isLength({ min: 700 })
    .not()
    .isEmpty(),
    check('projectsCompleted', 'Projects completed is required')
    .not()
    .isEmpty(),
    check('happyClients', 'Happy clients are required')
    .not()
    .isEmpty(),
    ]
], 
async (req, res) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() });
    }

    const { 
        dailyHobby,
        whatYouDo,
        whyHireMe,
        projectsCompleted,
        happyClients,
    } = req.body

    const portfolioFields = {}

    portfolioFields.user = req.user.id
    if(dailyHobby) portfolioFields.dailyHobby = dailyHobby
    if(whatYouDo) portfolioFields.whatYouDo = whatYouDo
    if(whyHireMe) portfolioFields.whyHireMe = whyHireMe
    if(projectsCompleted) portfolioFields.projectsCompleted = projectsCompleted
    if(happyClients) portfolioFields.happyClients = happyClients

    try {
        let portfolios = await Portfolio.findOne({ user: req.user.id })
        if(portfolios){
            //update existing portfolio
            portfolios = await Portfolio.findOneAndUpdate(
                { user: req.user.id },
                { $set: portfolioFields },
                { new: true }
            )
            return res.json(portfolios)
        }
        res.status(400).send(`Can't update portfolio!`)
    } 
    catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})



// use: get portfolio by id
// description: 
// access: private
route.get('/:id', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({ user : req.params.id })
        if(!portfolio) return res.status(400).json({ msg: 'No porfolio found under user' })
        res.json(portfolio)
    } 
    catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Portfolio not found" })
        res.status(500).send('Server Error')
    }
})


// use: send message to user in portfolio route
// description: 
// access: private
route.post('/message/:user_id', [
    check('name', 'Name should be given')
    .not()
    .isEmpty(),
    check('email', 'Email should be provided')
    .not()
    .isEmpty(),
    check('subject', 'Subject should be given to address')
    .not()
    .isEmpty(),
    check('message', 'Message should be provided to know what this is about')
    .not()
    .isEmpty()
], async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const {
            name,
            email,
            subject,
            message
        } = req.body

        const portfolioContact = {
            user: req.params.user_id,
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }
        const contact = new Contact(portfolioContact)
        await contact.save()
        res.json(contact)
    } 
    catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Portfolio not found" })
        res.status(500).send('Server Error')
    }
})


// use: get messages by user id
// description: 
// access: private
route.get('/messages/:user_id', async (req, res) => {
    try {
        const contact = await Contact.find({ user: req.params.user_id })
        // if(!contact) return res.status(400).json({ msg: 'No messages found' })
        res.json(contact)
    } 
    catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Messages not found" })
        res.status(500).send('Server Error')
    }
})



// use: PUT api/portfolios/add-testimony/:id
//description: add testimony to portfolio of user
// access: private
route.put('/add-testimony/:id', [auth, [
    check('name', 'Testimonial name is required')
    .not()
    .isEmpty(),
    check('status', 'Testimonial status of person is required')
    .not()
    .isEmpty(),
    check('testimony', 'Testimony should be atleast 100 and max of 160 characters!')
    .isLength({ max: 160, min: 100 })
    .not()
    .isEmpty()
    ]
], async (req, res) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() })
    }

    const { 
        name, 
        status,
        testimony,
        image
    } = req.body

    const newTestimony = {
        name,
        status,
        testimony,
        image
    }
    
    try {
        const portfolio = await Portfolio.findOne({user: req.params.id})
        
        portfolio.testimonials.unshift(newTestimony)
        await portfolio.save()
        res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Portfolio not found" })
        res.status(500).send('Server Error')
    }
})

// use: PUT api/portfolios/add-skills/:id
//description: add skills to portfolio of user
// access: private
route.put('/add-skills/:id', [auth, [
    check('skill', 'Skill field is required')
    .not()
    .isEmpty(),
    check('description', 'Skills description should be atleast 80 and maximum of 110 characters!')
    .isLength({ max: 110, min: 80 })
    .not()
    .isEmpty()
    ]
], async (req, res) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() })
    }

    const { 
        icon,
        skill, 
        description
    } = req.body

    const newSkill = {
        icon,
        skill,
        description
    }
    
    try {
        const portfolio = await Portfolio.findOne({user: req.params.id})
        
        portfolio.selectedSkills.unshift(newSkill)
        await portfolio.save()
        res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Portfolio not found" })
        res.status(500).send('Server Error')
    }
})

// use: PUT api/portfolios/add-sponsors/:id
//description: add sponsors to portfolio of user
// access: private
route.put('/add-sponsors/:id', auth, async (req, res) =>{

    const { 
        sponsor, 
        description,
        logo
    } = req.body

    const newSponsor = {
        sponsor, 
        description,
        logo
    }
    
    try {
        const portfolio = await Portfolio.findOne({user: req.params.id})
        
        portfolio.sponsors.unshift(newSponsor)
        await portfolio.save()
        res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        if(err.kind === 'ObjectId') return res.status(400).json({ msg: "Portfolio not found" })
        res.status(500).send('Server Error')
    }
})

// use: delete api/portfolios/remove-testimony/:tes_id
// description: delete testimony from portfolio by tes_id
// access: private
route.delete('/remove-testimony/:tes_id', auth, async (req, res) =>{
    try {
       const portfolio = await Portfolio.findOne({ user:req.user.id }) 
       const removeIndex = portfolio.testimonials.map(item => item.id).indexOf
       (req.params.tes_id)
       portfolio.testimonials.splice(removeIndex, 1)
       portfolio.save()
       res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// use: delete api/portfolios/remove-skill/:skill_id
// description: delete testimony from portfolio by skill_id
// access: private
route.delete('/remove-skill/:skill_id', auth, async (req, res) =>{
    try {
       const portfolio = await Portfolio.findOne({ user:req.user.id }) 
       const removeIndex = portfolio.selectedSkills.map(item => item.id).indexOf
       (req.params.skill_id)
       portfolio.selectedSkills.splice(removeIndex, 1)
       portfolio.save()
       res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// use: delete api/portfolios/remove-sponsor/:sponsor_id
// description: delete sponsor from portfolio by sponsor_id
// access: private
route.delete('/remove-sponsor/:sponsor_id', auth, async (req, res) =>{
    try {
       const portfolio = await Portfolio.findOne({ user:req.user.id }) 
       const removeIndex = portfolio.sponsors.map(item => item.id).indexOf
       (req.params.sponsor_id)
       portfolio.sponsors.splice(removeIndex, 1)
       portfolio.save()
       res.json(portfolio)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})


// use: delete api/portfolio
// description: delete profile, user & posts
// access: private
route.delete('/', auth, async (req, res) => {
    try {
        await Portfolio.findOneAndRemove({ user:req.user.id })
        res.json({ msg: "Portfolio Deleted" })
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports = route 