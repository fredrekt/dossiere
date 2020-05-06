import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBBtn, MDBIcon } from 'mdbreact'

const BlogMain = props => {
    const data = props.data
    const blogData = data.map((post)=>
         <MDBRow className="mt-5 mb-5" key={post._id}>
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
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{post.title}</strong>
            </h3>
           
            <p>
              {post.content}
            </p>
            <div>
              by &nbsp;
              <a href="#!">
                <strong>{post.user}</strong>
              </a>
              <div style={{ fontSize: "small" }}>{post.date}</div>
            </div>
            <MDBBtn href="/blog/3" color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
    )
    return (
        <div>
            {blogData}
        </div>
    )
}

export default BlogMain
