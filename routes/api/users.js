const express = require('express')
const route = express.Router()
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')


route.post('/', [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6 })

],
async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.status(400).json({ errors: errors.array });
    }
    const { name, email, password } = req.body
    try{
        //verify user exists
        let user = await User.findOne({ email })
        if(user){
            res.status(400).json({ errors: [{msg: 'Permission Denied: Cant create account!'}] })
        }
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        user = new User({
            name,
            email,
            avatar,
            password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()
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
                console.log(res.json({token}))
                //console.log(token)
            })
    }
    catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
})



module.exports = route