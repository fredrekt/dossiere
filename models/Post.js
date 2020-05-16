const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sections: [{
        section: {
            type: Number
        },
        sectionTitle: {
            type: String
        },
        sectionContent: {
            type: String,
        }
    }],
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    views: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = Post = mongoose.model('post', PostSchema)