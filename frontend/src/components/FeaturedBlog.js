import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBMask, MDBBtn, MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const FeaturedBlog = ({ featuredArticle }) => {
    return (
        <>
        <MDBRow key={featuredArticle._id} className="mt-5 mb-5">
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
                    <MDBIcon icon="utensils" className="pr-2" /> {featuredArticle.topic}
                </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                <strong>{featuredArticle.title}</strong>
                </h3>
            
                <p class="blog-post-content">
                    {featuredArticle.content}
                </p>
                <div>
                by &nbsp;
                <a href="#!">
                    <strong>{featuredArticle.user}</strong>
                </a>
                <div className="text-capitalize" style={{ fontSize: "small" }}>
                    <Moment format="MMM DD, YYYY">{featuredArticle.date}</Moment>
                </div>
                </div>
                <Link className="white-text" to={`/blog/${featuredArticle._id}`}>
                <MDBBtn color="success" size="md" className="waves-light ml-0 mt-4">
                    Read more
                </MDBBtn>
                </Link>
            </MDBCol>
        </MDBRow>
        </>
    )
}

export default FeaturedBlog
