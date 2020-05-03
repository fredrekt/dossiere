import React from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon,
    MDBBox, MDBCardText } from "mdbreact"; 
import Comments from './Comments'

const BlogPageCarousel = () => {
    return (
        <div>
            {/* <Breadcrumbs
                bcrumbs_color="white"
                bcrumbs_header="My Blogs"
                bcrumbs_current="Blogs"
                /> */}
            <div className="container mt-5">
            <section className="text-center">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg" className="img-fluid z-depth-1 rounded mb-4"
                alt=""/>

                <p className="mb-4">
                <strong>
                    Posted 21.10.2019 by
                    <a href="#imgcarousel" className="indigo-text mx-2">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="img" className="rounded z-depth-1"
                        style={{"width": "31px", "height": "31px"}}/>
                    <strong className="ml-1">Fred Garingo</strong>
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

                <button type="button" className="btn btn-sm btn-li my-0">
                    <MDBIcon size="1x" className="red-text" icon="heart" />
                </button>

                <a role="button" className="btn btn-sm btn-unique my-0" href="#section-comments">
                    <i className="far fa-comments mr-1"></i> Comments <span>(4)</span>
                </a>
                </div>

                <MDBContainer style={{'margin-top':'5%'}}>
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
                      SAT 29 AUGUST 20:24
                    </MDBContainer>
                    <MDBIcon className="mr-3" size="2x" icon="ellipsis-h" />
                  </MDBBox>
                </MDBCard>
              </MDBContainer>

            </section>
            </div>
            <MDBContainer>
                <Comments/>
                <Comments/>
                <Comments/>
            </MDBContainer>
        </div>
    )
}

export default BlogPageCarousel
