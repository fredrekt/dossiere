import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import Talents from '../../Talent'

const TalentsSection = (props) => {
    const data = props.skills.map((skill)=>
         <Talents
            talent_class="yellow-text"
            talent_icon={skill.icon ? skill.icon : "js-square"}
            talent_title={skill.skill ? skill.skill : "Javascript Developer"}
            talent_description={skill.description ? skill.description : "I love JavaScript, known almost all the frameworks, specializing in backend and frontend."}
        />
    )
    return (
        <>
        <MDBContainer fluid className="talents-container-wrapper"> 
           <MDBContainer>
                <div className="about-title text-center">
                    <h1>
                        My Talents
                    </h1>
                    <p className="black-text">
                        These are my talents & my skills in this beloved life
                    </p>
                </div>
               <MDBRow style={{ marginTop: '5%' }}>
                    {data}
                    {/* <Talents
                        talent_class="yellow-text"
                        talent_icon="js-square"
                        talent_title={props.skill ? props.skill : "Javascript Developer"}
                        talent_description={props.description ? props.description : "I love JavaScript, known almost all the frameworks, specializing in backend and frontend."}
                    /> */}
                    {/* <Talents
                        talent_class="blue-text"
                        talent_icon="react"
                        talent_title={props.skill2 ? props.skill2 : "React Developer"}
                        talent_description="I love building single page applications using ReactJS Library."
                    />
                    <Talents
                        talent_class="green-text"  
                        talent_icon="vuejs"
                        talent_title="Vue Developer"
                        talent_description="Lorem Ipsum delor, i am a full stack developer of AWS Cloud"
                    />
                    <Talents
                        talent_class="red-text"
                        talent_icon="laravel"
                        talent_title="Laravel Developer"
                        talent_description="Test code snippets and play with code in this environment."
                    /> */}
               </MDBRow>   
            </MDBContainer> 
        </MDBContainer>
        </>
    )
}

export default TalentsSection
