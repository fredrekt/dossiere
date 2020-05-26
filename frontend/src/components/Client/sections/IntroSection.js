import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import pp from '../../../img/pp.jpg'
import Typing from 'react-typing-animation';

const IntroSection = (props) => {
    return (
        <>
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
                                    About yourself dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                <br/>Donec vel dui lectus. Developer at heart and soul loves to watch netflix and develop shit.
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
                       <div className="portfolio-img">
                           <img className="w-100 img-fluid" src={pp} alt=""/>
                       </div>
                   </MDBCol>
               </MDBRow>
            </MDBContainer> 
        </>
    )
}

export default IntroSection
