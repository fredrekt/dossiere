import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from './Home'
import BlogPage from '../BlogPage'
import { MDBContainer } from 'mdbreact'
import BlogGridView from '../BlogGridView'


// Application Visitor/Client 


const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <MDBContainer style={{ marginBottom: "10%" }}>
                        {/* Import path for the blogs  */}
                        <Route exact path="/blog-gridview" component={BlogGridView}/>
                    </MDBContainer>
                </Switch>
            </Router>
        </>
    )
}

export default App
