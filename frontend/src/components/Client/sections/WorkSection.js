import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import Work from '../../Work'


const WorkSection = ({ projectsCompleted, happyClients, photosTaken, linesOfCode }) => {
    return (
        <>
        <MDBContainer style={{ "padding": "5%" }} fluid className="counter-fluid-background">
            <MDBContainer className="white-text">
                 <div className="about-title text-center">
                    <h1>
                        Achievements
                    </h1>
                    <p className="white-text">
                        These are real time data/information of my achievements
                    </p>
                </div>
                <MDBRow style={{ marginTop: "5%" }}>
                    <Work
                        work_icon="flag-checkered"
                        work_title={projectsCompleted ? projectsCompleted : "16"}
                        work_description="Projects Completed"
                    />
                    <Work
                        work_icon="smile-beam"
                        work_title={happyClients ? happyClients : "110"}
                        work_description="Happy Clients"
                    />
                    <Work
                        work_icon="camera-retro"
                        work_title={photosTaken ? photosTaken : "1200"}
                        work_description="Photos Taken"
                    />
                    
                    <Work
                        work_icon="code"
                        work_title={linesOfCode ? linesOfCode :"600"}
                        work_description="Lines of Code"
                    />
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
        </>
    )
}

export default WorkSection
