import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBBtn, MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const BlogMain = props => {
    const data = props.data
    const blogData = data.map((post)=>
         <MDBRow className="mt-5 mb-5" key={post._id}>
           <hr className="my-5" />
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                {post.topic === 'Food' ? <MDBIcon icon="utensils" className="pr-2" /> : post.topic === 'News' ? <MDBIcon far icon="newspaper" className="pr-2" /> : post.topic === 'Work' ? <MDBIcon icon="briefcase" className="pr-2" /> : <MDBIcon icon="code" className="pr-2"/>}
                {!post.topic ? 'Food' : post.topic}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{post.title}</strong>
            </h3>
           
            <p class="blog-post-content">
              {post.content}
            </p>
            <div>
              by &nbsp;
              <a href="#!">
                <strong>{post.user}</strong>
              </a>
              <div className="text-capitalize" style={{ fontSize: "small" }}>
                <Moment format="MMM DD, YYYY">{post.date}</Moment>
              </div>
            </div>
            <MDBBtn color="success" size="md" className="waves-light ml-0 mt-4">
              <Link className="white-text" to={`/blog/${post._id}`}>Read more</Link>
            </MDBBtn>
          </MDBCol>
          <hr className="my-5" />
        </MDBRow>
    )
    return (
        <div>
            {blogData}
        </div>
    )
}

export default BlogMain
