const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
//dir: routes/api
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const contact = require('./routes/api/contact')
//end dir: routes/api
const app = express()
//connect to mongodb
connectDB()

//storing image files folder
app.use( '/uploads', express.static('uploads'))

//initialize middleware
app.use(express.json({ extended: false }))
// remove for deployment
// app.get('/', (req, res) => res.send('API running'))

//defining routes
//user
app.use('/api/users', users)
//auth middleware
app.use('/api/auth', auth)
//user profile
app.use('/api/profile', profile)
//posts
app.use('/api/posts', posts)
//contact 
app.use('/api/contact', contact)

//serve static asset into production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))