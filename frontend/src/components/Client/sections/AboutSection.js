import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import think from '../../../img/thinking-vector.jpg'


const AboutSection = (props) => {
    return (
        <>
        <MDBContainer fluid className="about-container-wrapper">
            <MDBContainer  className="mt-5">
                <div className="about-title text-center">
                    <h1>
                        About Me
                    </h1>
                    <p className="black-text">
                        I develop next generation applications that help people all around the world
                    </p>
                </div>
                <MDBRow>
                    <MDBCol md="6">
                        <div className="about-img">
                            <img src={think} className="w-100" alt=""/>
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="about-content">
                            <div className="about-content-title">
                                <h3>
                                Why you hire me as a developer for your project?
                                </h3>
                            </div>
                            <div className="about-content-description mt-4">
                                <div className="content-1">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at erat non felis cursus finibus. 
                                    Vestibulum tempus rutrum finibus. Sed aliquet lacus a ante ultrices, ut bibendum massa gravida. 
                                    Praesent suscipit vehicula ante, eget sagittis sapien bibendum ac. Pellentesque ut tellus a ipsum.
                                    </p>
                                </div>
                                <div className="content-2">
                                    <p>
                                    Suspendisse quis ipsum ornare, cursus lectus ac, pharetra turpis. Integer vehicula, nisl nec facilisis
                                    tempor, massa turpis suscipit ex, volutpat imperdiet orci lorem a massa. Vivamus in diam suscipit, 
                                    scelerisque enim sed, blandit eros. Morbi ullamcorper elit id sapien placerat, at pharetra diam finibus.
                                    Morbi cursus dapibus risus vel pretium. Sed blandit tellus neque, nec eleifend odio suscipit sit amet. 
                                    </p>
                                </div>
                            </div>
                            <div className="about-actions">
                                <MDBBtn onClick={props.contactOnclick} size="md">
                                    Get In touch
                                </MDBBtn>
                                <a className="btn btn-outline-default btn-md" download href={props.portfolioLinkDownload} onClick={props.getPortfolioOnclick}>
                                    Get porfolio
                                </a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
        </>
    )
}

export default AboutSection
