import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import pp from '../../../img/pp-removebg-preview.png'
import Typing from 'react-typing-animation';
import introBgBlob from '../../../img/introBlob2.svg'
import introWaves from '../../../img/introWavesBg.svg' 

const IntroSection = (props) => {
    return (
        <>
        <MDBContainer fluid style={{ backgroundImage: `url(${introWaves})`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat'}}>
        <MDBContainer>
               <MDBRow>
                   <MDBCol md="6">
                       <div className="portfolio-container">
                           <h4 className="text-left">
                               Hello There!
                           </h4>
                           <Typing loop>
                                <h1 className="porfolio-header">    
                                    {props.status ? `I'm a ${props.status}` : "I'm a Full Stack Developer"}
                                </h1>
                                <Typing.Backspace count={26} />
                            </Typing>
                                <p className="portfolio-content">
                                    My name is {props.name ? props.name : 'not available'}, i currently live in {props.location ? props.location : 'location not available'}. 
                                <br/>{props.dailyHobby ? props.dailyHobby : "Donec vel dui lectus. Developer at heart and soul loves to watch netflix and develop shit."}
                                </p>
                            <div>
                                <MDBBtn outline onClick={props.porfolioOnclick} size="md">
                                    porfolio
                                </MDBBtn>
                                <MDBBtn onClick={props.moreOnclick} size="md">
                                    More about me
                                </MDBBtn>
                            </div>
                       </div>
                   </MDBCol>
                   <MDBCol md="6">
                       <div style={{ backgroundImage: `url(${introBgBlob})` }}  className="portfolio-img">
                           <img className="w-100 img-fluid" src={pp} alt=""/>
                       </div>
                   </MDBCol>
               </MDBRow>
            </MDBContainer> 
            </MDBContainer>
        </>
    )
}

export default IntroSection
