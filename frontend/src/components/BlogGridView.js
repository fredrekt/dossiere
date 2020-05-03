import React from 'react'
import { MDBContainer, MDBView, MDBMask,
    MDBCol, MDBRow
} from 'mdbreact'
import fred from '../img/fred2.jpg'
import img from '../img/working.jpg'
import work from '../img/bcrumbs-bg.jpg'
import cup from '../img/cup.jpg'


const BlogGridView = () => {
    return (
        <>
        <MDBContainer style={{ marginTop: "10%" }}>
            <div className="blog-grid-title mb-4">
                <h2 className="h2-responsive font-weight-bold">
                    Blog Articles
                </h2>
                <p style={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus
                </p>
            </div>
            <MDBRow>
                <MDBCol md="6">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                            <img
                                className="img-fluid"
                                src={cup}
                                alt=""
                            />
                            <div className="blog-grid-wrapper">
                                <div className="blog-grid-container position-absolute flex-column white-text">
                                    <div className="blog-category">
                                        Article
                                    </div>
                                    <div className="blog-title">
                                        How Full Stack Developers paid are awesome?
                                    </div>
                                    <div className="blog-description mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus.
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <a href="/blog/4">
                            <MDBMask className="flex-center" overlay="black-strong">
                            <div className="white-text"><b>Read more about article name and description</b></div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                   <MDBCol md="3">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                        <img
                            className="img-fluid w-100 h-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPUmbMJx5XT1NiD00Bb7RqQ6zIV1A-lpIlewjZmcKqDcsm_a5W&usqp=CAU"
                            alt=""
                        />
                        <div className="blog-grid-wrapper">
                            <div className="sm-blog-grid-container position-absolute flex-column white-text">
                                <div className="sm-blog-category">
                                    Game & Leisure
                                </div>
                                <div className="sm-blog-title">
                                   Counter Strike, a dead game for everyone?
                                </div>
                                <div className="sm-blog-description mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </div>
                            </div>
                        </div>  
                        </div> 
                        <a href="#!">
                            <MDBMask className="flex-center" overlay="black-strong">
                                <div className="white-text">
                                    <b>Read more about csgo</b>
                                </div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                        <img
                            className="img-fluid"
                            src={fred}
                            alt=""
                        />
                        <div className="mod-card blog-grid-wrapper">
                            <div className="sm-blog-grid-container position-absolute flex-column white-text">
                                <div className="sm-blog-category">
                                    Personal 
                                </div>
                                <div className="sm-blog-title">
                                    Body Building, why and where and how?
                                </div>
                                <div className="sm-blog-description mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </div>
                            </div>
                        </div>  
                        </div>
                        <a href="#!">
                            <MDBMask className="flex-center" overlay="black-strong">
                                <div className="white-text">
                                    <b>Read more about me</b>
                                </div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
            </MDBRow>
            <MDBRow className="flex-row-reverse" style={{ marginTop: "2%" }}>
                <MDBCol md="6">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                            <img
                                className="img-fluid"
                                src={work}
                                alt=""
                            />
                            <div className="blog-grid-wrapper">
                                <div className="blog-grid-container position-absolute flex-column white-text">
                                    <div className="blog-category">
                                        Health & Quaranchill
                                    </div>
                                    <div className="blog-title">
                                        Doctors, Nurses modern day heroes now?
                                    </div>
                                    <div className="blog-description mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui lectus.
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <a href="/">
                            <MDBMask className="flex-center" overlay="black-strong">
                            <div className="white-text"><b>Read more about article name and description</b></div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                   <MDBCol md="3">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                        <img
                            className="img-fluid w-100 h-100"
                            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                            alt=""
                        />
                        <div className="blog-grid-wrapper">
                            <div className="sm-blog-grid-container position-absolute flex-column white-text">
                                <div className="sm-blog-category">
                                    Elegance & Beauty 
                                </div>
                                <div className="sm-blog-title">
                                    Flowers, foe or idk on our side or not?
                                </div>
                                <div className="sm-blog-description mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </div>
                            </div>
                        </div>  
                        </div> 
                        <a href="#!">
                            <MDBMask className="flex-center" overlay="black-strong">
                                <div className="white-text">
                                    <b>Read more about csgo</b>
                                </div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <div className="blog-grid-overlay position-relative">
                        <img
                            className="img-fluid"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuxrJBxB7_vvVYDSe2pu7GTixZZ2yOWYXVytDoa3Nj2jOWeacT&usqp=CAU"
                            alt=""
                        />
                        <div className="blog-grid-wrapper">
                            <div className="sm-blog-grid-container position-absolute flex-column white-text">
                                <div className="sm-blog-category">
                                    Food & Health 
                                </div>
                                <div className="sm-blog-title">
                                    Fruits, how they can prolong lives and live
                                </div>
                                <div className="sm-blog-description mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </div>
                            </div>
                        </div>  
                        </div>
                        <a href="#!">
                            <MDBMask className="flex-center" overlay="black-strong">
                                <div className="white-text">
                                    <b>Read more about me</b>
                                </div>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
            </MDBRow>
           
        </MDBContainer>
        </>
    )
}

export default BlogGridView
