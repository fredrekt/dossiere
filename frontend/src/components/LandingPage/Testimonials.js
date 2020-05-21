import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import fred from '../../img/fred.jpg'
import karen from '../../img/karen.jpg'
import Slider from "react-slick";
import Slide from 'react-reveal'

const Testimonials = () => {

    const marginBT = { 
        marginTop: "5%",
        marginBottom: "5%"
    }

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        nextArrow: <MDBIcon icon="angle-double-right" />,
        prevArrow: <MDBIcon icon="angle-double-left" />
    }

    return (
        <>
        <Slide cascade slide bottom> 
            <MDBContainer style={{ marginBottom: "10%", marginTop: "10%" }}>
                <div style={marginBT} className="text-center">
                    <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="h1-responsive mb-3">
                        What they say?
                    </h1> 
                    <h6 className="h6-responsive">
                        Feedbacks, Comments & Suggestions that they said
                    </h6>
                </div>
                <MDBContainer>
                    <Slider {...settings}>
                    <div className="d-flex justify-content-center mb-2 mt-2">
                        <div className="z-depth-1 p-5 w-75">
                            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                                <div className="p-2 w-75">
                                    <MDBIcon className="m-2" icon="quote-left" />
                                    Third, read the terms & conditions and just simply create an account to use our services.
                                    Lorem, read the terms & conditions and just simply create an account to use our services.
                                </div> 
                                <div className="text-center mt-2">
                                    <img zoom src={karen} style={{ width: '10%' }} className="rounded-circle z-depth-1 ml-auto mr-auto" alt=""/>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span style={{ fontWeight: "900" }} >Karen Corporal</span>
                                </div>
                                <div className=""> 
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon far className="grey-text m-2" icon="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2 mb-2">
                        <div className="z-depth-1 p-5 w-75">
                            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                                <div className="p-2 w-75">
                                    <MDBIcon className="m-2" icon="quote-left" />
                                    Third, read the terms & conditions and just simply create an account to use our services.
                                    Lorem, read the terms & conditions and just simply create an account to use our services.
                                </div> 
                                <div className="text-center mt-2">
                                    <img src={fred} style={{ width: '10%' }} className="rounded-circle z-depth-1 ml-auto mr-auto" alt=""/>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span style={{ fontWeight: "900" }} >Fred Garingo</span>
                                </div>
                                <div className=""> 
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                    <MDBIcon className="yellow-text m-2" icon="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </MDBContainer>
            </MDBContainer>
        </Slide>
        </>
    )
}
export default Testimonials
