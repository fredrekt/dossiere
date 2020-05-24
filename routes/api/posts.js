const express = require('express')
const route = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Post = require('../../models/Post')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

//use: GET api/posts 
//description: get all posts or blogs without auth
route.get('/all-posts', async(req, res)=>{
    try {
        const posts = await Post.find().sort({ date: -1 })
        res.json(posts)
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})



//use: GET api/posts 
//description: get all posts by user
route.get('/own', auth ,async(req, res)=>{
    try {
        //const user = await User.findById(req.params.user_id).select('-password')
        const posts = await Post.find({user: req.user.id}).sort({ date: -1 })
        res.json(posts)
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})



//use: GET api/posts 
//description: get all posts or blogs
route.get('/', auth, async(req, res) => {
    try {
      const posts = await Post.find().sort({ date: -1 })
      res.json(posts) 
    } 
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

//use: GET api/posts/:id 
//description: get post or blog by post id without auth
route.get('/current/:post_id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id).sort({ date: -1 })
        if(!post){
            return res.status(404).json({ msg: "Post not found" })
        }
        res.json(post)
    } 
    catch (err) {
        console.log(err)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: "Post not found" })
        }
        res.status(500).send('Server Error')
    }
})


//use: GET api/posts/:id 
//description: get post or blog by post id with user auth
route.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).sort({ date: -1 })
        if(!post){
            return res.status(404).json({ msg: "Post not found" })
        }
        res.json(post)
    } 
    catch (err) {
        console.log(err)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: "Post not found" })
        }
        res.status(500).send('Server Error')
    }
})


//use: POST api/posts 
//description: create post or blog
route.post('/', [auth, 
    [
    check('title', 'Title is required')
    .not()
    .isEmpty(),
    check('topic', 'A Topic is required')
    .not()
    .isEmpty(),
    check('content', 'Article content should over be a thousand characters!')
    .isLength({ min: 1000 })
    .not()
    .isEmpty()
]], 
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors.array())
            return res.status(400).json({ errors: errors.array() });
        }
   
        try {
            const user = await User.findById(req.user.id).select('-password')

            const addSection = { 
                section: req.body.section,
                sectionTitle: req.body.sectionTitle,
                sectionContent: req.body.sectionContent
            }

            //post.sections.unshift(addSection)

            const newPost = new Post({
                title: req.body.title,
                topic: req.body.topic,
                content: req.body.content,
                sections: addSection,
                user: req.user.id,
                avatar: user.avatar
            })

            const post = await newPost.save()
            res.json(post)
        } 
        catch (err) {
            console.log(err)
            res.status(500).send('Server Error')
        }
    }
)

//use: DELETE api/posts 
//description: delete post or blog by post id
route.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({ msg: "Post not found" })
        }
        if(post.user.toString() !== req.user.id){
            return res.status(401).json({ msg: "User not authorized!" })
        }
        await post.remove()
        res.json({ msg: "Post removed" })
    } 
    catch (err) {
        console.log(err)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: "Post not found" })
        }
        res.status(500).send('Server Error')
    }
})

// use: PUT api/posts/like/:id
//description: Like a post
route.put('/like/:id', auth, async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id)
        
        //like validation: if user has liked the post; wont be counted
        if(post.likes.filter(like => like.user.toString() === req.user.id).length>0){
            return res.status(400).json({ msg: "Post already liked" })
        }

        post.likes.unshift({ user: req.user.id })
        await post.save()
        res.json(post.likes)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// use: PUT api/posts/unlike/:id
//description: Unlike a post
route.put('/unlike/:id', auth, async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id)
        
        //like validation: if user has liked the post; wont be counted
        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
            return res.status(400).json({ msg: "Post has not yet been liked" })
        }

        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id)
        post.likes.splice(removeIndex, 1)
        await post.save()
        res.json(post.likes)
    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})



//use: POST api/posts/comment/:id 
//description: comment to a post or blog
route.post('/comment/:id', [
    check('comment', 'A comment is required')
    .not()
    .isEmpty()
], 
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors.array())
            return res.status(400).json({ errors: errors.array() });
        }
   
        try {
            //const user = await User.findById(req.user.id).select('-password')
            const post = await Post.findById(req.params.id)
            
            const newComment = {
                comment: req.body.comment,
                user: null,
                avatar: null
            }

            post.comments.unshift(newComment)
            await post.save()
            res.json(post.comments)
        } 
        catch (err) {
            console.log(err)
            res.status(500).send('Server Error')
        }
    }
)

//use: DELETE api/posts 
//description: delete post or blog by post id
route.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        //pull out comment 
        const comment = post.comments.find(comment => comment.id === req.params.comment_id)
        //validate comment exists
        if(!comment){
            return res.status(404).json({ msg: "Comment not found" })
        }
        //check user
        if(comment.user.toString() !== req.user.id ){
            return res.status(401).json({ msg: "User not authorized" })
        }
        //remove index
        const removeIndex = post.comments
        .map(comment => comment.user.toString())
        .indexOf(req.user.id)

        post.comments.splice(removeIndex, 1)
        await post.save()
        res.json({ msg: "Comment removed" })
    } 
    catch (err) {
        console.log(err)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: "Comment not found" })
        }
        res.status(500).send('Server Error')
    }
})


module.exports = route