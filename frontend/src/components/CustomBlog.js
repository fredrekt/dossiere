import React from 'react'
import { MDBContainer, MDBIcon, MDBCol, MDBRow,
    MDBMask, MDBView, MDBBadge
} from 'mdbreact'
// import Breadcrumbs from './Breadcrumbs'
// import pp from '../img/bcrumbs-bg.jpg'
import Testimonial from './Client/Testimonial'
import karen from '../img/karen.jpg'
import Comments from './Comments'

const CustomBlog = () => {
    return (
        <>
        {/* <Breadcrumbs
            bcrumbs_image={pp}
        />        */}
        {/* <div className="position-relative">
            <img src={pp} alt=""/>
            <div style={{ top: 0, bottom: 0, left: 0 }} className="position-absolute black-text">
                <h1>This is a title, a title indeed to save humanity</h1>
                <div className="d-flex flex-row justify-content-center">
                    <div className="author">
                        Fred Garingo
                    </div>
                    <div className="date">
                        August 28, 2020
                    </div>
                    <div className="status">
                        1 day ago
                    </div>
                </div>
            </div>
        </div> */}
            <MDBContainer className="p-0" fluid>
                <MDBView className="custom-wrapper">
                    <img src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt=""/>
                    <MDBMask className="flex-center white-text" overlay="black-strong">
                        <div>
                            <h1 className="font-weight-bold">
                                Title Lorem Ipsum Delor Color
                            </h1>
                            <div style={{ fontSize: "small" }} className="d-flex flex-row justify-content-center">
                                <div className="author ml-2 mr-2">
                                    Fred Garingo
                                </div>
                                <span>
                                    |
                                 </span>
                                <div className="date ml-2 mr-2">
                                    August 28, 2020
                                </div>
                                <span>
                                    |
                                </span>
                                <div className="status ml-2 mr-2">
                                    1 day ago
                                </div>
                            </div>
                        </div>
                    </MDBMask>
                </MDBView>
            </MDBContainer>
        
            <MDBContainer style={{ padding: "5%" }}>
                <MDBRow>
                    <MDBCol md="2">
                        <div className="icon-container">
                            <MDBIcon fab icon="linkedin"/>
                        </div>
                        <div className="icon-container">
                            <MDBIcon fab icon="linkedin"/>
                        </div>
                        <div className="icon-container">
                            <MDBIcon fab icon="linkedin"/>
                        </div>
                        <div className="icon-container">
                            <MDBIcon fab icon="linkedin"/>
                        </div>
                    </MDBCol>
                    <MDBCol md="10">
                        <div className="blog-container">
                            <h4 className="font-weight-500">
                                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                                pretium mauris pretium, ornare est id, molestie metus.</b>
                            </h4>
                            <p>
                            Donec in tempor justo, id congue odio. Cras risus nisi, lacinia in 
                            euismod a, imperdiet at sapien. Nulla vehicula efficitur luctus. Quisque 
                            a porta nisl. Integer quam nulla, porttitor in feugiat sed, finibus sit 
                            amet nunc. Ut scelerisque nunc id sapien commodo, sed malesuada felis interdum. 
                            Morbi tempor mauris ut tortor feugiat, ac ornare nisl ornare. Donec mattis libero 
                            sit amet pharetra egestas. Pellentesque placerat condimentum urna, consectetur aliquam 
                            justo aliquam vitae. Nam tellus mi, condimentum vel feugiat vel, laoreet id dolor. In 
                            tincidunt tellus malesuada aliquam gravida. Cras id aliquam augue, non facilisis mauris. 
                            Sed vitae aliquam dolor. Nullam vitae ullamcorper leo. Vivamus vestibulum, justo sed 
                            porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <hr/>
                <ol>
                <div className="mb-4">
                    <div className="h3-responsive text-capitalize">
                       <li className="font-weight-500"><b>List Item One</b></li>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                    </div>
                </div>
                <div className="mb-4">
                    <div className="h3-responsive text-capitalize">
                       <li className="font-weight-500"><b>List item two</b></li>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                    </div>
                </div>
                <div className="mb-4">
                    <div className="h3-responsive text-capitalize">
                       <li className="font-weight-500"><b>list item three</b></li>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                    </div>
                </div>
                </ol>
            </MDBContainer>
            <MDBContainer>
                <div>
                    <div>
                        <img src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-100" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <div className="grey-text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </div>
                {/* <div>
                    <div>
                        <div>
                        Praesent porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                        </div>
                        <div>
                            Fredrick Garingo
                        </div>
                    </div>
                </div> */}
                <MDBRow className="mt-4">
                    <MDBCol md="3">
                        <b className="font-weight-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                        </b>
                    </MDBCol>
                    <MDBCol md="9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                    </MDBCol>
                </MDBRow>
                <div className="mt-4">
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam facilisis lacus ac nibh dignissim tempor. Praesent 
                        porttitor facilisis, nunc leo ullamcorper nunc, id porttitor felis ex sed ex.
                    </div>
                </div>
                <MDBRow className="mt-4">
                    <MDBCol md="4">
                    <MDBBadge pill className="p-2" color="info">
                        Health & Quaranchill
                    </MDBBadge>                    
                    </MDBCol>
                    <MDBCol className="offset-md-4" md="4">
                        Share to facebook or etc.
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
            <hr/>
            <div>
                <Testimonial
                    testimonial_img={karen}
                    testimonial_name="Karen Claire Corporal"
                    testimonial_job="Psychologist"
                    testimonial_content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam facilisis lacus"
                />
            </div>
            <hr/>
            <Comments/>
            <Comments/>
            <Comments/>
            </MDBContainer>
        </>
    )
}

export default CustomBlog
