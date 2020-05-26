import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import BlogPage from './components/BlogPage'
import SingleBlog from './components/SingleBlog'
import {MDBContainer} from 'mdbreact'
import SplitBlogPage from './components/SplitBlogPage'
import Login from './components/Admin/auth/Login'
import Register from './components/Admin/auth/Register'
import Breadcrumbs from './components/Breadcrumbs'
import BlogPageCarousel from './components/BlogPageCarousel'
import Comments from './components/Comments'
import SideNav from './components/Admin/SideNav'
import Profile from './components/Admin/auth/Profile'
import CreatePost from './components/Admin/ManagePosts/CreatePost'
import ActivePosts from './components/Admin/ManagePosts/ActivePosts'
import Home from './components/Client/Home'
import LightboxPage from './components/Lightbox';
import BlogGridView from './components/BlogGridView';
import BlogColumnView from './components/BlogColumnView';
import CombinedGridView from './components/CombinedGridView';
import CustomBlog from './components/CustomBlog';
import MissingPage from './components/MissingPage'
import Alert from './components/Alert'
import ArchivedPosts from './components/Admin/ManagePosts/ArchivedPosts'
import PostAnalytics from './components/Admin/ManagePosts/PostAnalytics'
import PrivateRoute from './components/routing/PrivateRoute'
//Redux
import { Provider } from 'react-redux'
import store from './store'

//load user
import { loadUser } from './actions/auth'

//import setAuthToken function from utils
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/Admin/Dashboard';
import NavigationBar from './components/NavigationBar';
//main page 
import MainComponent from './components/NavigationBar'

//new profile
import NewProfile from './components/Admin/Profile'
import ProfileModal from './components/ProfileModal';
import Landing from './components/LandingPage/Landing';


//portfolio route
import Portfolio from './components/Client/Home'
import ContactHelp from './components/Admin/Help/ContactHelp';
import UserProfiles from './components/Client/UserProfiles';
import Profiles from './components/Client/Profiles';

// set token - to get accepted
if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}> 
      <Router> 
        {/* {localStorage.hasOwnProperty('token') ? <SideNav/> : <Navbar/>}   */}
        {/* <Navbar/> */}
        {/* <SideNav/> */}
        <MainComponent/>
        <Alert/>
        <Route exact path="/" component={Landing}/>   
        <PrivateRoute exact path="/admin" component={SideNav}/>
        <Route exact path="/portfolio/:id" component={Portfolio}/> 
        <>
          {/* Client View  */}
          <MDBContainer style={{ marginBottom: "10%", marginTop: "10%" }}>
            <Route exact path="/dossiers" component={Profiles}/> 
            <Route exact path="/login" component={Login}/>        
            <Route exact path="/register" component={Register}/>
            <Route exact path="/blog" component={BlogPage}/>      
            <Route exact path="/blog/:id" component={BlogPageCarousel}/> 
          </MDBContainer> 
        </>
      </Router>
    </Provider>
  );
}

export default App;
