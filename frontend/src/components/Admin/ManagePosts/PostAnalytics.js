import React from 'react'
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import BarChart from './charts/BarChart'
import RadarChart from './charts/RadarChart'
import PieChart from './charts/PieChart'
import AdminTitle from '../../AdminTitle'

const PostAnalytics = () => {
    const adminTitle = [{
        id: 4,
        title: "Articles, Posts & Blogs Analytics",
        className: "mt-2 ml-2",
        icon: "chart-pie",
        subTitle: "This is an example of Analysis of your posts & articles are shown below, made by fred."
    }]
    return (
        <>
            <AdminTitle adminTitle={adminTitle}/>
            <MDBContainer>
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
