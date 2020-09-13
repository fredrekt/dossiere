import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact' 
import Lottie from 'lottie-react-web'
import dev from '../../img/developer-landing.json'
import Slide from 'react-reveal'

const About = () => {
    const [ hover, setHover ] = useState(false)

    const styledContainer = {
        marginTop: "50%",
        marginLeft: "30%"
    }

    const styledButton = { 
        color:  !hover ? "white" : '#0099ff',
        border: 0,
        background: !hover ? "#0099ff" : '#fff',
        padding: "12px 29px",
        textTransform: "uppercase",
        fontSize: "medium",
        'transition-duration': "0.6s",
        display: 'inline-block',
        fontWeight: '900'
    }

    return (
        <>
        <Slide slide bottom cascade>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBContainer style={styledContainer}>
                            <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="h1-responsive mb-4">
                                Developer Information.
                            </h1>
                            <h5 className="h5-responsive mb-4">
                                My name is Fred Garingo, I am a Full Stack Developer. I love using JavaScript, i think and feel 
                                invincible when i code with javascript, can do anything and build anything using it. Studied real
                                hard to get where i am, and become what i've always dreamed about. I feel like you can do almost 
                                anything using JavaScript. 
                            </h5>
                            <h5 className="h5-responsive mb-4">
                                Always believe in yourself no matter how hard you screw up, everybody is owed a redemption. Most
                                importantly you gotta love what you gotta do. Failing
                                is normal, you just gotta figure out what to do with it.
                            </h5>
                            <a href="mailto:fredrickjohng6@gmail.com" className="z-depth-1" onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} style={styledButton}>
                                get in touch 
                            </a>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol md="8">
                        <MDBContainer>
                            <Lottie
                                options={{
                                    animationData: dev
                                }}
                            />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Slide>
        </>
    )
}

export default About
