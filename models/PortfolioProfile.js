const mongoose = require('mongoose')

const PortfolioProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    dailyHobby: {
        type: String,
        required: true
    },
    whatYouDo: {
        type: String, 
        required: true
    },
    whyHireMe: {
        type: String,
        required: true        
    },
    selectedSkills: [{
        icon: {
            type: String
        },
        skill: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    portfolioItem: [{
        portfolioImage: {
            type: [String]
        },
        portfolioDescription: {
            type: String
        }
    }],
    projectsCompleted: {
        type: Number, 
        required: true
    },
    happyClients: {
        type: Number,
        required: true
    },
    testimonials: [{
        name: {
            type: String,
            required: true
            },
        status: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        testimony: {
            type: String, 
            required: true
        }
    }],
    sponsors: [{
        sponsor: {
            type: String,
            //required: true
        },
        description: {
            type: String,
            //required: true
        },
        logo: {
            type: String,
            //required: true
        }
    }],
    updated_at: {
        type:Date,
        default: Date.now
    }
})

module.exports = PortfolioProfile = mongoose.model('portfolioProfile', PortfolioProfileSchema)