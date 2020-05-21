import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from './Home'
import BlogPage from '../BlogPage'
import { MDBContainer } from 'mdbreact'
import BlogGridView from '../BlogGridView'
import BlogPageCarousel from '../BlogPageCarousel'
import Landing from '../LandingPage/Landing'
import Login from '../Admin/auth/Login'
import Register from '../Admin/auth/Register'
import Portfolio from './Home'

// Application Visitor/Client 


const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Landing}/>   
                    <Route exact path="/portfolio" component={Portfolio}/>            
                    <MDBContainer style={{ marginBottom: "10%", marginTop: '10%' }}>
                        {/* Import path for the blogs  */}
                        {/* <Route exact path="/blog-gridview" component={BlogGridView}/> */}
                        <Route exact path="/blog" component={BlogPage}/>      
                        <Route exact path="/blog/:id" component={BlogPageCarousel}/> 
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>  
                    </MDBContainer> 
                </Switch>
            </Router>
        </>
    )
}

export default App
