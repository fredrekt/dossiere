import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import Slide from 'react-reveal'
import blob1 from '../../img/blob-landing.svg'
 
const Services = () => {
    return (
        <>
        <Slide cascade slide bottom>
            <div className="services-wrapper">
            <MDBContainer style={{ marginBotton: "10%" }}>
                <div style={{ marginBottom: '10%', marginTop: '15%' }} className="text-center">
                    <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="h1-responsive mb-3">
                        Services
                    </h1> 
                    <h6 className="h6-responsive">
                        Below are the features that you can access and opt for upgrade
                    </h6>
                </div>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <div className="landing-services-name text-center">
                                    <small>Free</small>
                                </div>
                                <div className="d-flex justify-content-center">   
                                    <div className="services-pricing-container">
                                        <span id="pricing-currency">$</span>
                                        <span id="pricing-price">0</span>
                                        <span id="pricing-duration">/mo</span>
                                    </div>
                                </div>
                                <div className="services-features-list-container">
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Feature with actual shit
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Delore ipsum dolor sitos
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet selot
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10%' }} className="text-center">
                                    <button className="services-features-button z-depth-1 landing-btn mt-3">
                                        sign me up
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <div className="landing-services-name text-center">
                                    <small>Standard</small>
                                </div>
                                <div className="d-flex justify-content-center">   
                                    <div className="services-pricing-container">
                                        <span id="pricing-currency">$</span>
                                        <span id="pricing-price">49</span>
                                        <span id="pricing-duration">/mo</span>
                                    </div>
                                </div>
                                <div className="services-features-list-container">
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Feature with actual shit
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Delore ipsum dolor sitos
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet selot
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10%' }} className="text-center">
                                    <button className="services-features-button z-depth-1 landing-btn mt-3">
                                        sign me up
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <div className="landing-services-name text-center">
                                    <small>Deluxe</small>
                                </div>
                                <div className="d-flex justify-content-center">   
                                    <div className="services-pricing-container">
                                        <span id="pricing-currency">$</span>
                                        <span id="pricing-price">99</span>
                                        <span id="pricing-duration">/mo</span>
                                    </div>
                                </div>
                                <div className="services-features-list-container">
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Feature with actual shit
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Delore ipsum dolor sitos
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet selot
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10%' }} className="text-center">
                                    <button className="services-features-button z-depth-1 landing-btn mt-3">                                        
                                        sign me up
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <div className="landing-services-name text-center">
                                    <small>Professional</small>
                                </div>
                                <div className="d-flex justify-content-center">   
                                    <div className="services-pricing-container">
                                        <span id="pricing-currency">$</span>
                                        <span id="pricing-price">199</span>
                                        <span id="pricing-duration">/mo</span>
                                    </div>
                                </div>
                                <div className="services-features-list-container">
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Feature with actual shit
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Delore ipsum dolor sitos
                                        </div>
                                    </div>
                                    <div className="services-features-container d-flex flex-row justify-content-center">
                                        <div>
                                            <MDBIcon size="1x" far className="green-text ml-2 mr-2" icon="check-circle" />
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet selot
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10%' }} className="text-center">
                                    <button className="services-features-button z-depth-1 landing-btn mt-3">                                        
                                        sign me up
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        </Slide>
        </>
    )
}

export default Services
