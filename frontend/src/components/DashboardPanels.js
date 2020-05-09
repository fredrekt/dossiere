import React from 'react'
import { MDBProgress } from 'mdbreact'
const DashboardPanels = (props) => {
    return (
        <>
        <div className="col-lg-3 col-md-12 mb-4">
            <div className="card z-depth-2 mt-3">
            <div className="">
                <i className={props.className}></i>
                <div className="float-right text-right p-3">
                <p style={{ fontSize: "small" }} className="text-uppercase font-weight-bold mb-1"><b>{props.title}</b></p>
                <h4 className="mb-0">{props.count}</h4>
                </div>
            </div>
            <div className="card-body pt-0">
                <MDBProgress className="mb-1" color="default" material max={100} value={props.progressValue} />
                <p className="card-text">{props.progressText}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default DashboardPanels
