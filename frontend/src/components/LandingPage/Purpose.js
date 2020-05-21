import React, { useState }from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCollapse } from 'mdbreact'
import bg from '../../img/landing-purpose-wave.svg'
import dossier from '../../img/dossier-landing-purpose.json'
import lottieBlob from '../../img/purpose-landing-lottie.svg'
import Lottie from 'lottie-react-web'
import Slide from 'react-reveal'

const Purpose = () => {

    const [ hover, setHover ] = useState(false)

    const [ show, setShow ] = useState(false)
    
    const styledButton = { 
        color:  !hover ? "#fff" : '#0099ff',
        border: 0,
        background: !hover ? "#0099ff" : '#fff',
        padding: "12px 29px",
        textTransform: "uppercase",
        fontSize: "medium",
        'transition-duration': "0.6s",
        display: 'inline-block',
        fontWeight: '900'
    }

    const buttonStatic = {
        color: !hover ? '#0099ff' : "#fff",
        border: 0,
        background: !hover ? '#fff' : '#0099ff',
        padding: "12px 29px",
        textTransform: "uppercase",
        fontSize: "medium",
        'transition-duration': "0.6s",
        display: 'inline-block'
    }

    const bgStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bg})`,
        backgroundPositionY: '200px',
        backgroundSize: '100%'
    }

    const bgLottie = {
        backgroundImage: `url(${lottieBlob})`,
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
        <Slide cascade slide bottom>
            <MDBContainer style={bgStyle} fluid>
                <MDBRow>
                    <MDBCol style={bgLottie} md="8">
                        <Lottie 
                            options={{
                                animationData: dossier
                            }}
                            width="70%"
                            height="100%"
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBContainer style={{ marginTop: "40%" }}>
                            <h1 style={{ fontWeight: '900', fontSize: 'xxx-large', width: '80%' }} className="h1-responsive mb-4 text-capitalize">
                                How Dossiere is Awesome?
                            </h1>
                            <h5 className="h5-responsive mb-4">
                                Dynamic data is being used always to keep information up to date.
                                Too many applications nowadays being developed with ads and membership, however this
                                application is optional, you are free to use all the features either pay for special features.
                            </h5>
                            <MDBCollapse isOpen={show}>
                                <h5 className="h5-responsive mb-4">
                                    <span style={{ fontWeight: '900'}}>Dossiere</span> was developed to help people, aspiring freelancers, developers, writers, 
                                    designers and working humans just like yourself to use this application to slowly
                                    build their portfolio, experiences, skills and maybe can brag about them and be 
                                    proud of what they achieved. Without ads and for free.
                                </h5>
                            </MDBCollapse>
                            <button onClick={()=>setShow(!show)} className="z-depth-1" onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} style={!show ? styledButton : buttonStatic}>
                               {!show ? "More information" : "I understand"} 
                            </button>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Slide>
        </>
    )
}

export default Purpose
