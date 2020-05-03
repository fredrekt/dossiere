import React from 'react'
import { MDBContainer } from 'mdbreact'
import Comments from './Comments'
import Carousel from './Carousel'

const SplitBlogPage = () =>{
    return(
           <div className="container my-5">

<section>
  
  <div className="card mb-4">
    
    <div className="row">

      <div className="col-md-6">
        <Carousel
          className="img-fluid rounded-left ml-0"
          carousel_img_1="https://mdbootstrap.com/img/Photos/Vertical/7.jpg"
          carousel_img_2="https://mdbootstrap.com/img/Photos/Vertical/7.jpg"
          carousel_img_3="https://mdbootstrap.com/img/Photos/Vertical/7.jpg"
          />
        {/* <img className="img-fluid rounded-left" src="https://mdbootstrap.com/img/Photos/Vertical/7.jpg" alt="project image"/> */}
      </div>

      <div className="col-md-6 p-5 align-self-center">

        <h5 className="font-weight-normal mb-3">Project detail</h5>

        <p className="text-muted">Out or geared it but to best up samples the for she phase of copy would do in divine
          of taken and the take medical or upper at him in the logbook were, we price his mostly to commas.</p>

        <ul className="list-unstyled font-small mt-5 mb-0">
          <li>
            <p className="text-uppercase mb-2"><strong>Client</strong></p>
            <p className="text-muted mb-4">Envato Inc.</p>
          </li>

          <li>
            <p className="text-uppercase mb-2"><strong>Date</strong></p>
            <p className="text-muted mb-4">June 27, 2019</p>
          </li>

          <li>
            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
            <p className="text-muted mb-4">Design, HTML, CSS, Javascript</p>
          </li>

          <li>
            <p className="text-uppercase mb-2"><strong>Address</strong></p>
            <a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
          </li>

          <li>
            <p className="text-uppercase mt-4 mb-2"><strong>Share</strong></p>
            <div className="d-flex justify-content-start">
              <a className="text-muted pr-3" href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="text-muted pr-3" href="#twitter"><i className="fab fa-twitter"></i></a>
              <a className="text-muted pr-3" href="#instagram"><i className="fab fa-instagram"></i></a>
              <a className="text-muted" href="#dribble"><i className="fab fa-dribbble"></i></a>
            </div>
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>
      <MDBContainer>
        <Comments/>
        <Comments/>
        <Comments/>
      </MDBContainer>
</div>
    )
}
export default SplitBlogPage