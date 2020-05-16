const express = require('express')
const route = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
const Profile = require('../../models/Profile')

// use: get profile logged in
// description
route.get('/me', auth , async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate(
        'user',
        ['name', 'avatar']
        )
        if(!profile){
            return res.status(400).json({ msg: 'There is no existing profile for this user' })
        }
        res.json(profile)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// use: update profile 
// description

route.post('/', 
[   auth, [
    check('status', 'Status is required')
    .not()
    .isEmpty(),
    check('firstname', 'Firstname is required')
    .not()
    .isEmpty(),
    check('lastname', 'Lastname is required')
    .not()
    .isEmpty(),
    check('email', 'Work email is required')
    .not()
    .isEmpty(),
    check('skills', 'Skills are required')
    .not()
    .isEmpty()
] ],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        firstname,
        lastname,
        email, 
        company,
        website,
        location, 
        status,
        skills,
        bio,
        twitter,
        facebook,
        linkedin,
        instagram
         } = req.body
         
    // Build profile object
    const profileFields = {}
    profileFields.user = req.user.id
    if(firstname) profileFields.firstname = firstname
    if(lastname) profileFields.lastname = lastname
    if(email) profileFields.email = email
    if(company) profileFields.company = company
    if(website) profileFields.website = website
    if(location) profileFields.location = location
    if(bio) profileFields.bio = bio
    if(status) profileFields.status = status
    if(skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }
    console.log(profileFields.skills);
    
    //Build social object
    profileFields.social = {}
    if(twitter) profileFields.social.twitter = twitter
    if(linkedin) profileFields.social.linkedin = linkedin
    if(facebook) profileFields.social.facebook = facebook
    if(instagram) profileFields.social.instagram = instagram
    console.log(profileFields.social)

    //actual storing to cloud
    try{
        let profile = await Profile.findOne({ user:req.user.id })
        if(profile){
            //Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
                ) 
            return res.json(profile)
        }
        //Create
        profile = new Profile(profileFields)
        await profile.save()
        res.json(profile)
    }
    catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }

})

// use: get all user profiles
// description
route.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar'])
        if(!profiles) return res.status(400).json({ msg: "Profiles not found" })
        res.json(profiles)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

// use: get user profile by user_id
// description
route.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id}).populate('user', ['name', 'avatar'])
        if(!profile) return res.status(400).json({ msg: "Profile not found" })
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        if(err.kind === 'ObjectId'){
            return res.status(400).json({ msg: "Profile not found" })
        }
        res.status(500).send('Server Error')
    }
})

// use: delete api/profile
// description: delete profile, user & posts
// access: private
route.delete('/', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user:req.user.id })
        await User.findOneAndRemove({ _id:req.user.id })
        res.json({ msg: "User Removed" })
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})



// use: delete api/profile
// description: add skills to user
// access: private

route.put('/newskills', [ auth, [ 
    check('skills', 'skills are required') 
    .not()
    .isEmpty()
] ], 
    async (req, res) => {
        //const skillFields = {}
        const { skills } = req.body
        // if(skills) {
        //     skillFields.skills = skills.split(',').map(skill => skill.trim())
        // }
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() })
            }
            const profile = await Profile.findOne({ user: req.user.id }) 
            profile.skills.unshift(skills)
            await profile.save()
            
            res.json(profile)
        } 
        catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
)





// use: put api/profile/experience
// description: add experience
// access: private
route.put('/experience', [ auth, 
    [
        check('title', 'Title is required')
        .not()
        .isEmpty(),
        check('company', 'Company is required required')
        .not()
        .isEmpty(),
        check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
], async (req, res) => {    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { 
        title,
        company,
        location, 
        from,
        to,
        current,
        description
        } = req.body

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id }) 
      profile.experiences.unshift(newExp)
      await profile.save()
      
      res.json(profile)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error') 
    }


})

// use: delete api/profile/experience/:exp_id
// description: delete experiences from profile by exp_id
// access: private
route.delete('/experience/:exp_id', auth, async (req, res) =>{
    try {
       const profile = await Profile.findOne({ user:req.user.id }) 
       const removeIndex = profile.experiences.map(item => item.id).indexOf
       (req.params.exp_id)
       profile.experiences.splice(removeIndex, 1)
       profile.save()
       res.json(profile)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// use: delete api/profile/skills/skill name
// description: delete experiences from profile by exp_id
// access: private
route.delete('/removeskills/:skill', auth, async (req, res) =>{
    try {
       const profile = await Profile.findOne({ user:req.user.id }) 
       const removeIndex = profile.skills.indexOf(req.params.skill)
       profile.skills.splice(removeIndex, 1)
       profile.save()
       res.json(profile)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports = route