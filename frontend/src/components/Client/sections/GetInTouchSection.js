import React from 'react'
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact'

const GetInTouchSection = () => {
    return (
        <>
        <MDBContainer fluid className="contact-container-wrapper">
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <MDBContainer className="p-5">
                            <MDBRow>
                                <MDBCol md="6">
                                    <h3 className="font-weight-bold">Get In Touch</h3>

                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                        molestiae
                                        numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

                                    <p><span className="font-weight-bold mr-2">Email:</span><a href="$contactcompany">contact@mycompany.com</a></p>

                                    <p><span className="font-weight-bold mr-2">Phone:</span><a href="#contactnumber">+48 123 456 789</a></p>
                                
                                </MDBCol>
                                <MDBCol md="6">
                                            
                                    <div className="contact-container">
                                        
                                        <MDBInput label="Full Name" outline className="w-100" />

                                        <MDBInput className="w-100" outline label="Your Email"/>


                                        <MDBInput className="w-100" outline label="Your Subject"/>


                                        <div className="md-form md-outline mb-3">
                                            <MDBInput type="textarea" id="form-message" label="How we can help?" className="md-textarea form-control" rows="3"/>
                                        </div>

                                        <button type="submit" className="btn btn-default btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>
                                    
                                    </div>
                                     
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </MDBContainer>
        </>
    )
}

export default GetInTouchSection
