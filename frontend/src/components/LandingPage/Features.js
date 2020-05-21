import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import cloud from '../../img/cloud-feature.json'
import cms from '../../img/features-content.json'
import writer from '../../img/features-writer.json'
import Lottie from 'lottie-react-web'
import Slide from 'react-reveal'

const Features = () => {

    const [ hover, setHover ] = useState(false)

    const styledButton = { 
        color:  !hover ? "#fff" : '#0099ff',
        border: 0,
        background: !hover ? "#0099ff" : '#fff',
        padding: "6px 15px",
        textTransform: "uppercase",
        fontSize: "medium",
        'transition-duration': "0.6s",
        display: 'inline-block'
    }

    const marginBT = {
        marginTop: "5%",
        marginBottom: "5%"
    }

    return (
        <>
            <MDBContainer style={{ marginBottom: "5%", marginTop: "10%" }} fluid>
                <Slide cascade slide bottom>
                <MDBContainer>
                    <div style={marginBT} className="text-center">
                        <h1 style={{ fontWeight: '900', fontSize: 'xxx-large' }} className="h1-responsive mb-3">
                            Application Features
                        </h1> 
                        <h6 className="h6-responsive">
                            Take control on your portfolio, articles & works
                        </h6>
                    </div>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="7">
                            <Lottie 
                                options={{
                                    animationData: cloud
                                }}
                                width="80%"
                                height="90%"
                            />
                        </MDBCol>
                        <MDBCol md="5">
                            <MDBContainer style={{ marginTop: '30%' }}>
                            <h3 style={{ fontWeight: '900', fontSize: 'xx-large' }} className="h3 responsive">
                                Cloud Computing
                            </h3>
                            <h6 className="h6-responsive">
                            In the simplest terms, cloud computing means storing and accessing data and programs over the Internet instead 
                            of your computer's hard drive. The cloud is just a metaphor for the Internet. The cloud is also not about having 
                            a dedicated network attached storage (NAS) hardware or server in residence
                            </h6>
                            <button onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} className="z-depth-1 landing-btn mt-3" style={styledButton}>get started</button>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer style={{ padding: "6%" }}>
                    <MDBRow>
                        <MDBCol md="5">
                            <MDBContainer style={{ marginTop: '20%' }}>
                            <h3 style={{ fontWeight: '900', fontSize: 'xx-large' }} className="h3 responsive">
                                Write Articles
                            </h3>
                            <h6 className="h6-responsive">
                                Facere harum, minima ut maxime consequatur, dignissimos quas nam adipisci. Aliquid repellat earum vero magnam voluptate? 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum asperiores sed dolores doloribus.
                            </h6>
                            <button onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} className="z-depth-1 landing-btn mt-3" style={styledButton}>compose article</button>
                            </MDBContainer>
                        </MDBCol>
                        <MDBCol md="7">
                            <Lottie 
                                options={{
                                    animationData: writer
                                }}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer style={{ padding: '3%' }} >
                    <MDBRow>
                        <MDBCol md="7">
                            <Lottie 
                                options={{
                                    animationData: cms
                                }}
                                width="90%"
                            />
                        </MDBCol>
                        <MDBCol md="5">
                            <MDBContainer style={{ marginTop: '35%' }}>
                            <h3 style={{ fontWeight: '900', fontSize: 'xx-large' }} className="h3 responsive">
                                Manage Content
                            </h3>
                            <h6 className="h6-responsive">
                                Content management is a set of processes and technologies that supports the collection, managing, and 
                                publishing of information in any form or medium. When stored and accessed via computers, this information 
                                may be more specifically referred to as digital content, or simply as content.
                            </h6>
                            <button onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} className="z-depth-1 landing-btn mt-3" style={styledButton}>start managing</button>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </Slide>
            </MDBContainer>
        </>
    )
}

export default Features
