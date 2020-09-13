import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact' 
// import Lottie from 'lottie-react-web'
import Slide from 'react-reveal'
import how from '../../img/how-landing-2.svg'

const HowItWorks = () => {
    const cardStyle = {
        borderBottom: "4px solid #0099ff"
    }

    const bgBlob = {
        marginTop: "10%",
        marginBottom: "10%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${how})`,
        backgroundPositionX: "-100px",
        backgroundPositionY: "20px"
    }

    const iconContainer = {
        borderRadius: "50px",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5%"
    }

    return (
        <>
        <Slide cascade slide bottom>
            <MDBContainer style={bgBlob} fluid>
                <MDBContainer style={{ marginBottom: "10%", marginTop: "10%" }}>
                <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="h1-responsive mb-3">
                    How It Works.
                </h1> 
                <h6 className="h6-responsive">
                    This is as easy as counting to 3, just follow the steps below.
                </h6>
                <MDBRow className="mt-5">
                    <MDBCol>
                        <MDBCard style={cardStyle}>
                            <MDBCardBody>
                                <div className="z-depth-1" style={iconContainer}>
                                    <MDBIcon icon="hammer" />
                                </div>
                                <h5 style={{ fontWeight: "900" }} className="h5-responsive">
                                    Create an account
                                </h5>
                                <p className="grey-text">
                                    First, read the terms & conditions and provide 
                                    your email and that's it!
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={cardStyle}>
                            <MDBCardBody>
                                <div className="z-depth-1" style={iconContainer}>
                                    <MDBIcon icon="handshake" />
                                </div>
                                <h5 style={{ fontWeight: "900" }} className="h5-responsive">
                                    Start Onboarding
                                </h5>
                                <p className="grey-text">
                                    Secondly, this is easy just 
                                    provide all the necessary information asked.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={cardStyle}>
                            <MDBCardBody>
                                <div className="z-depth-1" style={iconContainer}>
                                    <MDBIcon icon="cog" />
                                </div>
                                <h5 style={{ fontWeight: "900" }} className="h5-responsive">
                                    Configure Portfolio
                                </h5>
                                <p className="grey-text">
                                    Third, now this is the fun part! You get to 
                                    create your own "dossier", flex yourself.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={cardStyle}>
                            <MDBCardBody>
                                <div className="z-depth-1" style={iconContainer}>
                                    <MDBIcon icon="pencil-alt" />
                                </div>
                                <h5 style={{ fontWeight: "900" }} className="h5-responsive">
                                    Compose Articles 
                                </h5>
                                <p className="grey-text">
                                    Lastly, put those thoughts into writing and 
                                    publish them for the world to see.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </Slide>
        </>
    )
}

export default HowItWorks
