import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon,
    MDBBox, MDBCardText, MDBBtn, MDBInput } from "mdbreact"; 
import Comments from './Comments'
import pp from '../img/fred.jpg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPost, addLike, removeLike } from '../actions/post'
import Moment from 'react-moment'
import CreateComment from './CreateComment';
import Lottie from 'lottie-react-web'
import heart from '../img/heart.json'
import loadspinner from '../img/loading.json'

const BlogPageCarousel = ({ getPost, addLike, removeLike, post: { post, loading }, match }) => {
    
    useEffect(()=>{
        getPost(match.params.id)
    }, [getPost])

    const [ play, setPlay ] = useState(false) 
    
    return loading || post === null ? 
    (
        <>
        <Lottie
            options={{
                animationData: loadspinner
            }}
            width = "45%"
            height = "45%"
        />
        <div style={{ marginTop: "0" }} className="text-center grey-text">
            Taking you to the skies or wherever you want to go
        </div>
        </>
    )
    :
    (
        <>
            {/* <Breadcrumbs
                bcrumbs_color="white"
                bcrumbs_header="My Blogs"
                bcrumbs_current="Blogs"
                /> */}
            <div className="blog-carousel-container p-5">
                <div className="blog-carousel-title p-2">
                    {post ? post.title : ' How hard to be a Full Stack Developer?'}
                </div>
                <div className="blog-carousel-date-container p-2">
                    <div className="blog-carousel-date">
                        {post ? 
                        <Moment format="MMM DD, YYYY">{post.date}</Moment>
                        : 'AUG 18, 2020'
                        }
                    </div>
                </div>
            </div>
            <div className="container mt-5">
            <section className="text-center">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg" className="img-fluid z-depth-2 rounded mb-4 hoverable"
                alt=""/>
                <p className="mb-4">
                <strong>
                    <a href="#imgcarousel" className="indigo-text mx-2">
                    <img src={pp} alt="img" className="z-depth-2"
                        style={{"width": "40px", "height": "40x","border-radius":"50px"}}/>
                    <strong className="ml-1">
                        {post ? post.user : ' Fred Garingo' }
                    </strong>
                    </a>
                </strong>
                </p>

                <div className="social-buttons smooth-scroll">
                <button type="button" className="btn btn-sm btn-fb my-0">
                    <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-sm btn-tw my-0">
                    <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-sm btn-li my-0">
                    <i className="fab fa-linkedin-in"></i>
                </button>

                <button onClick={(e)=>{
                    setPlay(!play)
                    {!play ? addLike(post._id) : removeLike(post._id) }
                    }} type="button" className="btn btn-sm btn-li my-0">
                    
                   {!play ? 
                   <MDBIcon className="grey-text" icon="heart"/> 
                   : 
                   <Lottie
                        style={{ backgroundColor: null }}
                        direction={play ? 1: -1}
                        options={{
                            animationData: heart,
                            autoplay: false
                        }}
                        width = "20%"
                        height = "20%"
                    />}
                </button>

                <a role="button" className="btn btn-sm btn-unique my-0" href="#section-comments">
                    <i className="far fa-comments mr-1"></i> Comments {post ? `(${post.comments.length})` :<span>(4)</span>}
                </a>
                </div>

                <MDBContainer style={{marginTop:'5%', marginBottom:'5%'}}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardText className="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus. Ut varius risus nec nulla ornare rhoncus. Nullam consectetur suscipit lacinia. Nullam vehicula gravida tellus id eleifend. Sed mollis nunc at metus ultrices fringilla. Nam luctus tortor id risus mattis interdum. Integer facilisis pulvinar dictum.

                    Nam lobortis iaculis tellus non aliquam. Proin maximus purus lacus, a imperdiet mauris sodales sit amet. Curabitur tempus a ex pharetra efficitur. Donec lacinia blandit nunc, sit amet molestie turpis interdum non. Aliquam tellus velit, gravida nec rutrum vel, consequat vitae odio. Suspendisse at dolor nisl. Integer porta consequat erat et laoreet. Integer sed eleifend nunc. Aenean cursus consequat condimentum. Aenean at euismod lacus. Nam egestas, tortor vitae porta pretium, elit quam imperdiet nisl, eu ultrices sapien arcu volutpat mi.

                    Cras vitae libero ut ligula eleifend tempus. Aliquam quis nibh justo. Morbi massa massa, blandit suscipit dui non, finibus fringilla ex. Mauris quis suscipit tortor. Nullam in justo sed felis commodo blandit. Suspendisse consequat tincidunt venenatis. Vivamus luctus mi vel bibendum tincidunt. Cras tempor molestie tortor, in interdum massa elementum a. Nam id pretium lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    </MDBCardText>
                    <MDBCardText className="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus. Ut varius risus nec nulla ornare rhoncus. Nullam consectetur suscipit lacinia. Nullam vehicula gravida tellus id eleifend. Sed mollis nunc at metus ultrices fringilla. Nam luctus tortor id risus mattis interdum. Integer facilisis pulvinar dictum.

                    Nam lobortis iaculis tellus non aliquam. Proin maximus purus lacus, a imperdiet mauris sodales sit amet. Curabitur tempus a ex pharetra efficitur. Donec lacinia blandit nunc, sit amet molestie turpis interdum non. Aliquam tellus velit, gravida nec rutrum vel, consequat vitae odio. Suspendisse at dolor nisl. Integer porta consequat erat et laoreet. Integer sed eleifend nunc. Aenean cursus consequat condimentum. Aenean at euismod lacus. Nam egestas, tortor vitae porta pretium, elit quam imperdiet nisl, eu ultrices sapien arcu volutpat mi.

                    Cras vitae libero ut ligula eleifend tempus. Aliquam quis nibh justo. Morbi massa massa, blandit suscipit dui non, finibus fringilla ex. Mauris quis suscipit tortor. Nullam in justo sed felis commodo blandit. Suspendisse consequat tincidunt venenatis. Vivamus luctus mi vel bibendum tincidunt. Cras tempor molestie tortor, in interdum massa elementum a. Nam id pretium lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    </MDBCardText>
                   </MDBCardBody>
                  <MDBBox className="p-4" display="flex" justifyContent="center">
                    <MDBContainer>
                        <div className="blog-carousel-update">
                            {post ? 
                            <>
                            <span>UPDATED </span>
                            <Moment format="hh:mm A">
                                {post.date}
                            </Moment>
                            </>
                            :
                            'UPDATED 4:09 PM'
                            }
                        </div>
                    </MDBContainer>
                    <MDBIcon className="blog-carousel-o ptions mr-3" onClick={()=>alert("Clicked Options")} size="2x" icon="ellipsis-h" />
                  </MDBBox>
                </MDBCard>
              </MDBContainer>

            </section>
            </div>
            <MDBContainer>
                {/* <Comments key={post.comments._id} postId={post._id} comments={post.comments}/> */}
                {post.comments.map((com)=>
                <MDBBox className="pt-4 pb-4" display="flex">
                    <MDBBox display="flex">
                        {post.comments.user === null ? 
                        <MDBIcon size="3x" icon="user-circle" />
                        :
                        <div className="comment-avatar">
                            <img src={pp} alt=""/>  
                        </div>  
                        }            
                    <MDBBox flex="column" display="flex" className="ml-3">
                        <MDBBox alignItems="center" display="flex" justifyContent="between">
                        <div className="comment-author">
                            Fred Garingo
                        </div>
                        <div className="comment-reply">
                            <MDBBtn color="info" outline size="sm">
                            Reply
                            </MDBBtn>
                        </div>
                        </MDBBox>
                        <div className="comment-date mt-0">
                        <Moment format="MMM DD, YYYY" >
                            {com.date}
                        </Moment>
                        <span>: </span>
                        <Moment fromNow>{com.date}</Moment>
                        {/* AUG 28, 2019 20:29 */}
                        </div>
                        <div className="comment-content mt-3">
                              {com.comment}  
                        </div>
                    </MDBBox>
                    </MDBBox>
                </MDBBox> 
                )}

            </MDBContainer>
            <CreateComment postId={post._id}/>
        </>
    )
}

BlogPageCarousel.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost, addLike, removeLike } )(BlogPageCarousel)
