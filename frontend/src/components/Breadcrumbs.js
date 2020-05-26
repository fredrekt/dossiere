import React from 'react'
import { MDBMask } from 'mdbreact'
import Slide from 'react-reveal'

const Breadcrumbs = (props) => {
    return (
        <>
        <Slide cascade slide bottom>
            <div className="bcrumbs-size" >
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                    <div style={{'background':props.bcrumbs_color, backgroundImage: `url(${props.bcrumbs_image})`}} className="brc-img">
                        <div className="brc-content">
                            <div className="brc-ins-cont">
                                <h1 className="brc-header">{props.bcrumbs_header}</h1>
                                <a className='brc-bread-link' href="/">Home</a> <span className="black-text">/</span> <span className="grey-text">{props.bcrumbs_current}</span>
                            </div>
                        </div>
                    </div>      
                </MDBMask>   
            </div>
        </Slide>
        </>
    )
}

export default Breadcrumbs
