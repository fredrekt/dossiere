import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, 
    MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink
 } from 'mdbreact';

class FullPageIntroWithFixedTransparentNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <>
        <header>
            <MDBNavbar color="white" fixed="top" light expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong id="app-title">CMS BLOG</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  {/* <MDBNavItem className="nav-item" active={this.state.active} onClick={this.one}> 
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked blog")}>
                    <MDBNavLink to="/blog-gridview">Blog</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked about")} >
                    <MDBNavLink onClick={this.three} to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="nav-item" onClick={()=>console.log("clicked subscribe")} >
                    <MDBNavLink onClick={this.three} to="#">Subscribe</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
        {/* <section ref={(section)=>{this.footer = section}}>
          <Footer />
        </section> */}
      </>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;