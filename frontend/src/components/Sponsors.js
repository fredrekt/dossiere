import React from 'react'
import { MDBCol, MDBTooltip } from 'mdbreact'

const Sponsors = (props) => {
    return (
        <>
        <MDBCol md="3">
            <MDBTooltip domElement tag="div" placement={props.sponsor_placement}>
                <img
                className="partnership-img w-100"
                src={props.sponsor_img} alt={props.sponsor_img_at} />
                <div>{props.sponsor_tooltip}</div>
            </MDBTooltip>
        </MDBCol>
        </>
    )
}

export default Sponsors
