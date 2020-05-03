const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
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
    }
})

module.exports = Contact = mongoose.model('contact', ContactSchema)