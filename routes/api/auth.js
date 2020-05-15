const express = require('express')
const route = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const config = require('config')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



route.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    }
    catch(err){
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})


route.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password','Password cannot be leaved blank').exists()

],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try{
        //verify user exists
        let user = await User.findOne({ email })
        if(!user){
            res.status(400).json({ errors: [{msg: 'Login failed: Invalid credentials'}] })
        }
       
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            res.status(400).json({ errors: [{msg: 'Login failed: Invalid credentials'}] })
        }

        const payload = {
            user:{
                id: user.id
            }
        }
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            { expiresIn: 3600 }, 
            (err, token) => {
                if(err) throw err
                res.json({token})
                //console.log(res.json({token}))
                //console.log(token)
            })
    }
    catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
})

module.exports = route