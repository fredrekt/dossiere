import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import AdminTitle from '../../AdminTitle'

const ProjectsPage = () => {
  const adminTitle = [{
    id: 5,
    title: "Articles, Posts & Blogs Analytics",
    className: "mt-2 ml-2",
    icon: "trash-restore",
    subTitle: "This is an example of All your archived posts & articles are shown below, made by fred."
  }]
  return (
    <>
    <AdminTitle adminTitle={adminTitle}/>
    <section className="text-center my-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="green-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon fas icon="chart-line" className="pr-2" />
                  Marketing
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="eye" className="pr-2" />
                  Entertainment
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="camera" className="pr-2" />
                  Travel
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="cyan-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="phone" className="pr-2" />
                  Technology
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit cupidatat proident
                voluptatem quia numquam.
              </p>
              <MDBBtn color="success" rounded>
                MDBView more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
    </>
  );
}

export default ProjectsPage;