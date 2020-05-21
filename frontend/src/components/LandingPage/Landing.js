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
                    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0099FF" d="M35.8,-45.3C48.9,-39.7,64,-32.7,66.9,-22.1C69.8,-11.6,60.6,2.6,56.1,18.8C51.7,35.1,51.9,53.4,43.3,66.3C34.8,79.3,17.4,86.7,3.6,81.8C-10.2,76.9,-20.5,59.6,-29,46.7C-37.6,33.8,-44.4,25.2,-54.9,13.1C-65.4,1,-79.5,-14.7,-79.4,-29.2C-79.4,-43.7,-65.2,-57,-49.6,-61.8C-34,-66.6,-17,-63,-2.9,-59.1C11.3,-55.2,22.6,-50.9,35.8,-45.3Z" transform="translate(100 100)" />
                    </svg>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0099FF" d="M45.6,-75.4C59.9,-70.8,72.7,-60.1,76.6,-46.5C80.5,-32.9,75.4,-16.5,74.7,-0.4C74.1,15.7,77.9,31.4,73.8,44.7C69.8,58,57.9,68.9,44.3,74.5C30.7,80,15.3,80.3,2.3,76.3C-10.8,72.3,-21.5,64.1,-35.7,58.9C-49.8,53.6,-67.3,51.3,-74,42C-80.7,32.7,-76.5,16.3,-75.2,0.8C-73.9,-14.8,-75.5,-29.7,-69.2,-39.6C-62.9,-49.6,-48.7,-54.7,-35.9,-60.2C-23,-65.6,-11.5,-71.3,2.1,-74.9C15.7,-78.6,31.4,-80,45.6,-75.4Z" transform="translate(100 100)" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,240C672,277,768,299,864,266.7C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
                        <div className="w-100" style={{ backgroundImage: `url(${blob})`, backgroundRepeat: "no-repeat", backgroundPosition: "100px -50px" }}>
                            {/* <img src={blob} className="w-75" alt=""/> */}
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

            <div style={{ position: 'relative', marginTop: '15%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,197.3C672,192,768,128,864,112C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div style={{ position: 'absolute', color: "#fff", marginBottom: '3%', left: 0, right: 0, bottom: 0, fontWeight: '900' }} className="text-center">
                    Copyright {copyrightDate} | Fred Garingo
                </div>
            </div>
        </>
    )
}

export default Landing
