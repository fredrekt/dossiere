const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
        },
        subject:{
            type: String,
            required: true
        },
        message:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
})

module.exports = Contact = mongoose.model('contact', ContactSchema)