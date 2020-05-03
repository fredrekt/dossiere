import React from "react";
import { MDBCol, MDBContainer, MDBRow,
   MDBFooter, MDBBtn, MDBBox, MDBIcon } from "mdbreact";
import Input from './Input'

const FooterPage = () => {
  return(
    <MDBFooter color='white' className="footer-shadow font-small pt-4 mt-4 black-text">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" style={{ fontWeight:'bold' }}>
              CMS BLOG
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <div className="subscribe-container">
              <div className="subscribe-title">
                Get the content management system blog news
              </div>
              <div className="subscribe-action">
                <Input id="subscribe-email" label="Your Email"/>       
                <MDBBtn id="subscribe-btn" size="md" outline color="grey">
                    Subscribe
                </MDBBtn> 
              </div>
            </div>
            <div>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div className="footer-links-container">
              <h5 className="link-title ml-4">Information</h5>
              <div className="links-list ml-4">
                <div className="footer-link">
                  <a className="black-text" href="#!">About CMS</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Porfolio</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Blog</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Testimonials</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Partners</a>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div className="footer-links-container">
              <h5 className="link-title ml-4">Helpful Links</h5>
              <div className="links-list ml-4">
                <div className="footer-link">
                  <a className="black-text" href="#!">Developer</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Support</a>
                </div>
                <div className="footer-link">
                  <a className="black-text" href="#!">Privacy Policy</a>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div style={{ backgroundColor: "#bdbdbd" }} className="footer-copyright py-3">
        <MDBContainer fluid>
          <MDBBox display="flex" flex="row">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            <MDBBox className="footer-social-links" display="flex" flex="row">
              <div className="footer-link ml-2 mr-2">
                <a href="http://www.facebook.com">
                  <MDBIcon fab icon="facebook-square" />
                </a>
              </div>
              <div className="footer-link ml-2 mr-2">
                <a href="http://www.instagram.com">
                  <MDBIcon fab icon="instagram" />
                </a>
              </div>
              <div className="footer-link ml-2 mr-2">
                <a href="http://www.linkedin.com">
                  <MDBIcon fab icon="linkedin" />
                </a>
              </div>
              <div className="footer-link ml-2 mr-2">
                <a href="http://www.applestore.com">
                  <MDBIcon fab icon="app-store-ios" />
                </a>
              </div>
            </MDBBox>
          </MDBBox>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;