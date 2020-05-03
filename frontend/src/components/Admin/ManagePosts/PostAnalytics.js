import React from 'react'
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import BarChart from './charts/BarChart'
import RadarChart from './charts/RadarChart'
import PieChart from './charts/PieChart'

const PostAnalytics = () => {
    return (
        <>
            <MDBContainer>
            <h2 className="h1-responsive font-weight-bold text-center">
            Articles & Posts Analytics
            </h2>
            <hr width="10%"/>
            <p className="grey-text text-center">
            Analysis of your posts & articles are shown below
            </p>
                <MDBRow>
                    <BarChart/>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <RadarChart/>
                    </MDBCol>    
                    <MDBCol>
                        <PieChart/>
                    </MDBCol>
                </MDBRow>    
            </MDBContainer> 
        </>
    )
}

export default PostAnalytics
