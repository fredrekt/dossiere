import React from 'react'
import { MDBContainer, MDBBox } from 'mdbreact'

const Testimonial = (props) => {
    return (
        <div>
            <MDBContainer style={{ marginTop: "2%" }}>
            <MDBBox className="testimonial-main-container" display="flex">
                <div className="testimonial-container">
                <div className="testimonial-img">
                    <img className="testimonial-avatar" src={props.testimonial_img} alt=""/>
                </div>
                <div className="testimonial-name">
                    <h4>
                    {props.testimonial_name}
                    </h4>
                </div>
                <div className="testimonial-job">
                    <h6>
                    {props.testimonial_job}
                    </h6>
                </div>
                <div className="testimonial-content">
                    <p>
                    {props.testimonial_content}
                    </p>
                </div>
                </div>
            </MDBBox>
            </MDBContainer>
        </div>
    )
}

export default Testimonial