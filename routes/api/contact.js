const express = require('express')
const route = express.Router()
const Contact = require('../../models/Contact')
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

// use: GET api/contact
//description: get all who sent a message to admin(owner)
route.get('/', async (req, res) =>{
    try {
        const messages = await Contact.find()
        res.json(messages)
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

// use: GET api/contact/me
//description: get all who sent a message to admin(owner)
route.get('/me', auth, async (req, res) =>{
    try {
        const messages = await Contact.find({ user: req.user.id })
        res.json(messages)
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})



// use: POST api/contact
//description: send a message to admin(owner)
route.post('/send', 
    [ 
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
        .isEmpty(),
        
    ],
    async (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array })
    }
    try {
        const sendContact = new Contact({ 
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })
        const contact = await sendContact.save()
        res.json(contact)
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

module.exports = route