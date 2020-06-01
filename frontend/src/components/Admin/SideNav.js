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
import NewProfile from './Profile'
import Portfolio from './Portfolio/Portfolio';

const SideNavbar = ({ auth: { isAuthenticated, loading }, logout }) =>{

    //commented redirect - override to use isAuthenticated declared obsolete by (ProtectedRoute)
    // if(!isAuthenticated){
    //     return <Redirect to="/login"/>
    // }
    
    return(
    <BrowserRouter>
        <SideNav 
        style={{'background':'elegant-color', 'height': '100%', position: 'fixed'}}
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
                    Configure Portfolio
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="account">
            <NavIcon>
                <MDBIcon size="1x" icon="user-circle" />
            </NavIcon>
            <NavText>
                <Link to="/profile">
                    Account Information
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
    {/* Admin View */}
    <MDBContainer style={{ marginTop: '-5%', marginLeft:'20%', marginBottom: "5%" }}>
        <PrivateRoute exact path="/admin" component={Dashboard}/>
        <PrivateRoute exact path="/create-post" component={CreatePost}/>
        <PrivateRoute exact path="/active-posts" component={ActivePosts}/>
        <PrivateRoute exact path="/analytics-posts" component={PostAnalytics}/>
        <PrivateRoute exact path="/archived-posts" component={ArchivedPosts}/>
        <PrivateRoute exact path="/contact-help" component={Portfolio}/>
        <PrivateRoute exact path="/profile" component={NewProfile}/>
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