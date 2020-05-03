import React from "react";
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardBody, MDBIcon,
    MDBBox, MDBCardText } from "mdbreact";
import Breadcrumbs from './Breadcrumbs'
import Comments from './Comments'

const SingleBlog = () => {
  return (
    <>
    <Breadcrumbs
      bcrumbs_color="white"
      bcrumbs_header="Blog Posts"
      bcrumbs_current="Blog"
    />
        <MDBContainer fluid className="mb-5">
          <MDBRow>
            <MDBCol style={{'background':'#36454F','color':'white'}} md="4">
              {/* <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" alt="Sample image"/> */}
              <MDBBox display="flex"  className="post-title-container p-5">
                <div style={{'border-bottom':'1px solid white'}} className="post-title text-uppercase">
                  <h1>Header Post</h1>
                </div>
              </MDBBox>
              <MDBBox style={{'margin-top':'70%'}} alignItems="flex-end" display="flex" className="author-container p-5">
                <MDBBox display="flex" className="author-pp">
                  <MDBIcon size="3x" icon="user-circle" />
                </MDBBox>
                <MDBBox alignItems="center" display="flex" className="author-name ml-2">
                  Fredrick Garingo
                </MDBBox>
              </MDBBox>
            </MDBCol>
            <MDBCol md="8">
              <MDBContainer>
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
                    <MDBIcon className="red-text mr-3" size="2x" icon="heart" />
                  </MDBBox>
                </MDBCard>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
          <Comments/>
        </MDBContainer>
      </>
  );
}

export default SingleBlog;