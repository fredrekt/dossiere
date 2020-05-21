import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, 
    MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBBtn,
    MDBModal, MDBModalBody, MDBModalHeader, MDBInput,
    MDBContainer
 } from 'mdbreact';
import logo from '../img/logo-black.JPG'
import Lottie from 'lottie-react-web'
import pageConstruction from '../img/page-construction.json'

class FullPageIntroWithFixedTransparentNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      collapse: false,
      isWideEnough: false,
      active: false,
      active2: false,
      active3: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  one = (event) => {
      event.preventDefault()
      this.setState({active:!this.state.active})
      console.log(this.state.active)
  }
  // three = () =>{
  //   scrollToComponent(this.footer, { offset: 0, align: 'middle', duration: 1000 })
  // }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  
  render() {
    return (
      <>
        <header>
            <MDBNavbar color="white" fixed="top" light expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong id="app-title">
                  <img className="w-50" src={logo} alt=""/>
                </strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav style={{ alignItems: "center" }} right>
                  <MDBNavItem className="nav-item"> 
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked blog")}>
                    <MDBNavLink to="/blog">Articles</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked about")} >
                    <MDBNavLink onClick={this.toggle2} to="#">Information</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked subscribe")} >
                    <MDBNavLink onClick={this.toggle2} to="#">Services</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBBtn onClick={this.toggle} className="custom-hover-button" size="sm" color="white">
                      <div className="black-text font-weight-bold">
                        subscribe
                      </div>
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
        {/* <section ref={(section)=>{this.footer = section}}>
          <Footer />
        </section> */}


      <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
        <MDBModalBody>
          <div className="p-5">
            <div className="text-center">
              <div>
                <h4 className="h4-responsive font-weight-bold">
                  Newsletter
                </h4>
              </div>
              <div>
                <p className="grey-text">
                  Subscribe to our newsletter to receive the latest news and 
                  exclusive offers every week. No spam
                </p>
              </div>
              <div>
                <MDBInput label="Enter your email"/>
              </div>
              <div>
                <button className="newsletter-subscription-button z-depth-1">Subscribe</button>
              </div>
              <div className="newsletter-cancel">
                <a type="button" className="black-text" onClick={this.toggle}>No Thanks</a>
              </div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>
      </MDBContainer>

      
      <MDBContainer>
      <MDBModal isOpen={this.state.modal2} toggle={this.toggle2} centered>
        <MDBModalBody>
          <div className="p-5">
            <div className="text-center">
              <div>
                <Lottie
                  options={{
                    animationData: pageConstruction
                  }}
                />
              </div>
              <div>
                <p className="grey-text">
                  Page is under construction & not yet finished, still preparing it. Please bear with us.
                </p>
              </div>
              <div>
                <button onClick={this.toggle2} className="newsletter-subscription-button z-depth-1">I understand</button>
              </div>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>
      </MDBContainer>


      </>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;