import React, { useState } from 'react'
import {  MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import blob from '../../img/blob-landing.svg'
import Lottie from 'lottie-react-web'
import group from '../../img/group-landing.json'
import About from './About'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Purpose from './Purpose'
import Features from './Features'
import Services from './Services'
import footerBg from '../../img/footer-bg.svg'
import Slide from 'react-reveal'
import { Link } from 'react-router-dom'
 
const Landing = () => {

    const [ hover, setHover ] = useState(false)

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
   
    const containerStyle = {
        marginTop: "50%",
        marginLeft: "30%"
    }

    const footerStyle = {
        backgroundImage: `url(${footerBg})`,
        bottom: 0,
        width: "100%"
    }

    const copyrightDate = new Date().getFullYear().toString();

    return (
        <>
            <Slide cascade slide bottom>
            <MDBContainer style={{ marginTop: "5%" }} fluid>
                <div className="landing-wrapper">
                <MDBRow>
                    <MDBCol md="4">
                        <MDBContainer style={containerStyle}>
                            <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="text-uppercase mb-4">
                                Empowering Information.
                            </h1>
                            <h5 className="h5-responsive mb-4">
                                Our landing page template works on all devices, so you only have to set 
                                it up once, and get beautiful results forever. This Web Application is 
                                fully made and designed by Fred Garingo. Took almost 2 months to finish 
                                this startup project, hopefully it'll help and change lots of lives.
                            </h5>
                            <Link className="link-landing-custom" to="/register">
                            <button onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} className="z-depth-1 landing-btn" style={styledButton}>
                                get powered up
                            </button>
                            </Link>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol className="d-flex justify-content-end" md="8">
                        <div className="w-100" style={{ backgroundImage: `url(${blob})`, backgroundRepeat: "no-repeat", backgroundPosition: "100px -50px" }}>
                            <Lottie
                                options={{
                                    animationData: group
                                }}
                                width="95%"
                                height="100%"
                            />
                        </div>                          
                    </MDBCol>
                </MDBRow>
                </div>
            </MDBContainer>  
            </Slide>
            <>
                <Purpose/>
                <Features/>
                <About/>
                <HowItWorks/>
                <Testimonials/>
                <Services/>
            </>

            <div style={{ position: 'relative', marginTop: '15%', marginBottom: '-10%' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,197.3C672,192,768,128,864,112C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div style={{ position: 'absolute', color: "#fff", marginBottom: '3%', left: 0, right: 0, bottom: 0, fontWeight: '900' }} className="text-center">
                    Copyright {copyrightDate} | Fred Garingo
                </div>
            </div>
        </>
    )
}

export default Landing
