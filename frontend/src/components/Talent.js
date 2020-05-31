import React from 'react'
import { MDBCol, MDBIcon } from 'mdbreact'

const Talents = (props) => {
    return (
        <>
        <MDBCol className="hover-custom hoverable p-3" md="3">
            <div className="talents-container">
                <div className="talent-img">
                    <MDBIcon size="4x" className={props.talent_class} fab icon={props.talent_icon} />
                </div>
                <div className="talent-details mt-3">
                    <div className="talent-title">
                        <h4 className="text-capitalize">
                            {props.talent_title}
                        </h4>
                    </div>
                    <div className="talent-description">
                        {props.talent_description}
                    </div>
                </div>
            </div>
        </MDBCol> 
        </>
    )
}

export default Talents
