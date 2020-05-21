import React, { Component } from 'react'
import {  MDBRow, MDBCol, MDBMask,
     MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Breadcrumbs from './Breadcrumbs'
import axios from 'axios'
import BlogMain from './BlogMain';
import loadspinner from '../img/working-construction.json'
import Lottie from 'lottie-react-web'

class BlogPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
    async componentDidMount(){
      try {
        const res = await fetch('api/posts/all-posts')
        const json = await res.json()
        this.setState({posts:json})
        console.log(this.state.posts)
      } 
      catch (error) {
        console.log(error)  
      }   
    }
    render(){
      const posts = this.state.posts
        return posts.length === 0 ? 
        <>
        <Lottie
            options={{
                animationData: loadspinner
            }}
            width = "30%"
            height = "30%"
        />
        <div style={{ marginTop: "5%" }} className="text-center grey-text">
            This will just take a second while we build everything from scratch   
        </div>
        </>
        :(
            <>
            <Breadcrumbs
                bcrumbs_color="white"
                bcrumbs_header="My Blogs"
                bcrumbs_current="Blogs"
              />
        <hr style={{ marginTop:'-2%' }} className="mb-4" width="10%"/>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <BlogMain data={posts}/>
        {/* <hr className="my-5" /> */}
        </>
        )
    }
}
export default BlogPage