import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { useEffect } from 'react'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link, Redirect } from 'react-router-dom'
import { MDBIcon, MDBContainer } from 'mdbreact'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import CreatePost from './ManagePosts/CreatePost'
import Dashboard from './Dashboard'
import ActivePosts from './ManagePosts/ActivePosts'
import PostAnalytics from './ManagePosts/PostAnalytics'
import ArchivedPosts from './ManagePosts/ArchivedPosts'
import ContactHelp from './Help/ContactHelp'
import Profile from './auth/Profile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import PrivateRoute from '../routing/PrivateRoute'

const SideNavbar = ({ auth: { isAuthenticated, loading }, logout }) =>{

    //commented redirect - override to use isAuthenticated declared obsolete by (ProtectedRoute)
    // if(!isAuthenticated){
    //     return <Redirect to="/login"/>
    // }

    return(
        <BrowserRouter>
        <SideNav 
        style={{'background':'elegant-color', 'height': '100%'}}
    onSelect={(selected) => {
        // Add your code here

    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <MDBIcon size="1x" icon="th-large" />
            </NavIcon>
            <NavText>
                <Link to="/admin">
                    Dashboard
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="create-post">
            <NavIcon>
                <MDBIcon far size="1x" icon="edit" />
            </NavIcon>
            <NavText>
                <Link to="/create-post">
                Write an Article
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="posts">
            <NavIcon>
                <MDBIcon size="1x" icon="camera-retro" />
            </NavIcon>
            <NavText>
                    Manage Posts
            </NavText>
            <NavItem style={{'margin-left':'10%'}} eventKey="posts/active">
                <NavText>
                    <Link className="white-text" to="/active-posts">
                        All Active Posts
                    </Link>
                </NavText>
            </NavItem>
            <NavItem style={{'margin-left':'10%'}} eventKey="posts/analytics">
                <NavText>
                    <Link className="white-text" to="/analytics-posts">
                        Posts Analytics
                    </Link>
                </NavText>
            </NavItem>
            <NavItem style={{'margin-left':'10%'}} eventKey="posts/archived">
                <NavText>
                    <Link className="white-text" to="/archived-posts">
                        Archived Posts
                    </Link>
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="help">
            <NavIcon>
                <MDBIcon size="1x" icon="question-circle" />
            </NavIcon>
            <NavText>
                <Link to="/contact-help">
                    Got a question?
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="account">
            <NavIcon>
                <MDBIcon size="1x" icon="user-circle" />
            </NavIcon>
            <NavText>
                <Link to="/profile">
                    Account
                </Link>
            </NavText>
        </NavItem>
        <NavItem onClick={logout} eventKey="logout">
            <NavIcon>
                <MDBIcon size="1x" icon="sign-out-alt" />
            </NavIcon>
            <NavText>
                Logout
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
<Switch>
    <MDBContainer style={{ marginTop: '-5%', marginLeft:'20%' }}>
        <PrivateRoute exact path="/admin" component={Dashboard}/>
        <Route exact path="/create-post" component={CreatePost}/>
        <Route exact path="/active-posts" component={ActivePosts}/>
        <Route exact path="/analytics-posts" component={PostAnalytics}/>
        <Route exact path="/archived-posts" component={ArchivedPosts}/>
        <Route exact path="/contact-help" component={ContactHelp}/>
        <Route exact path="/profile" component={Profile}/>
    </MDBContainer>
</Switch>
</BrowserRouter>
    )
}

SideNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(SideNavbar)