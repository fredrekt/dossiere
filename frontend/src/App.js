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
        <MainComponent/>
        <Alert/>
        <>
        <Route exact path="/mainpage" component={NavigationBar}/>
        <Route exact path="/login" component={Login}/>

        <Route exact path="/blog/1" component={SingleBlog}/>
        {/* Book Blog */}
        <Route exact path="/blog/2" component={SplitBlogPage}/>
        {/* Picture Blog */}
        {/* Selected Blog - Request Params - use url parameter */}
        <Route exact path="/blog/3" component={BlogPageCarousel}/>
        {/* Article Blog */}
        <Route exact path="/blog/4" component={CustomBlog}/>
        {/* 404 Page/ Page Not Found */}
        {/* <Route path="/*" component={MissingPage}/> */}
        <MDBContainer style={{ marginBottom: "10%" }}>
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/blog-gridview" component={BlogGridView}/>
          <Route exact path="/blog-columnview" component={BlogColumnView}/>
          <Route exact path="/blog-allviews" component={CombinedGridView}/>     
        </MDBContainer>
        {/* Blog Main Page */}
        <Route exact path="/lightbox" component={LightboxPage}/>
        {/* <Footer/> */}
        {/* <Route exact="/" component={SplitBlogPage}/> */}
        <PrivateRoute exact path="/admin" component={SideNav}/>            
        <Route exact path="/comments" component={Comments}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/b" component={Breadcrumbs}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/create-post" component={CreatePost}/>
        <Route exact path="/active-posts" component={ActivePosts}/>
        </>
      </Router>
      {/* <MDBContainer>
        <BlogPage/>
      </MDBContainer> */}
      {/* <MDBContainer>
        <SingleBlog/>
      </MDBContainer> */}
      {/* <Footer/> */}
      {/* <Dashboard/> */}
      {/* <SplitBlogPage/> */}
      {/* <Login/> */}
    </Provider>
  );
}

export default App;
