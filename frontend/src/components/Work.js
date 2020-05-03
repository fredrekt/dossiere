import React from 'react'
import { MDBCol, MDBIcon } from 'mdbreact'
import CountUp from 'react-countup'

const Work = props => {
    return (
        <>
        <MDBCol md="3">
            <div className="works-container">
                <div className="work-img">
                    <MDBIcon size="3x" className="mt-3" icon={props.work_icon} />
                </div>
                <div className="work-details mt-3">
                    <div className="work-title">
                        <h4>
                            <CountUp
                            end={props.work_title}
                            duration={20}
                            />
                        </h4>
                    </div>
                    <div className="work-description">
                        {props.work_description}
                    </div>
                </div>
            </div>
        </MDBCol> 
        </>
    )
}

export default Work
