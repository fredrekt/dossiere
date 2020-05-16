const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true,
    },
    website:{
        type: String,
        require: true
    },
    location:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    skills:{
        type: [String],
        required: true
    },
    bio:{
        type: String,
    },
    experiences:[
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String,
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    updated_at:{
        type:Date,
        default: Date.now
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)