import React, { Component } from 'react'
import { MDBContainer, MDBAnimation } from 'mdbreact' 
import fred from '../../../img/fred.jpg'
import karen from '../../../img/karen.jpg'
import fred2 from '../../../img/fred2.jpg'
import Slider from "react-slick";
import Testimonial from '../Testimonial';

class TestimonialSection extends Component{
  render(){
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000
    };
    return (
      <>
      <div className="testimonials-title-container text-center">
        <MDBAnimation delay="2s" type="bounce" reveal>
          <div className="testimonials-title">
            <h1>Testimonials</h1>
          </div>
        </MDBAnimation>  
        <hr width="10%"/>
        <div className="testimonials-subtitle">
          You don't take my word for it, take their word for it <span role="img" aria-label="emoji"></span>
        </div>
      </div>
      <MDBContainer>
        <Slider {...settings}>
          <Testimonial
            testimonial_img={fred}
            testimonial_name="Fred Garingo"
            testimonial_job="Javascript Developer"
            testimonial_content="A great developer who loves to learn new things and everything. Been so helpful and awesome dev. Please keep up the good work!"
          />
          <Testimonial
            testimonial_img={karen}
            testimonial_name="Karen Corporal"
            testimonial_job="Frontend Developer"
            testimonial_content="A great developer who loves to learn new things and everything. Been so helpful and awesome dev. Please keep up the good work!"
          />
          <Testimonial
            testimonial_img={fred2}
            testimonial_name="Fred Garingo"
            testimonial_job="Full Stack Developer"
            testimonial_content="A great developer who loves to learn new things and everything. Been so helpful and awesome dev. Please keep up the good work!"
          />
        </Slider>
      </MDBContainer>
      </>
    )
  }
}

export default TestimonialSection
