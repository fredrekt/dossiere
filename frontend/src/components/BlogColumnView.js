import React from 'react'
import { MDBContainer, MDBView, MDBMask,
    MDBCol, MDBRow
} from 'mdbreact'
import fred from '../img/fred2.jpg'
import img from '../img/working.jpg'
import work from '../img/bcrumbs-bg.jpg'
import cup from '../img/cup.jpg'
const BlogColumnView = () => {
    return (
        <>
        <MDBContainer>
            <MDBRow style={{ marginTop: "10%" }}>
                <MDBCol md="6">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4 h-100" hover waves>
                        <div className="blog-grid-overlay position-relative">
                            <img
                                className="img-fluid"
                                src={fred}
                                alt=""
                                style={{ "height": "505px" }}
                            />
                            <div className="blog-grid-wrapper">
                                <div style={{ padding: "10%" }} className="blog-grid-container position-absolute flex-center text-center flex-column white-text">
                                    <div className="blog-category mb-2">
                                        Article
                                    </div>
                                    <div className="blog-title mb-2 mt-1">
                                        How Full Stack Developers paid are awesome?
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
                <MDBCol md="6">
                    <MDBRow>
                        <MDBCol md="12">
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
                    </MDBRow>
                    <MDBRow className="mt-2">
                        <MDBCol md="12">
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
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer>
            <MDBRow className="flex-row-reverse" style={{ marginTop: "5%" }}>
                <MDBCol md="6">
                    <MDBView className="mod-card rounded z-depth-2 mb-lg-0 mb-4 h-100" hover waves>
                        <div className="blog-grid-overlay position-relative">
                            <img
                                className="img-fluid"
                                src={fred}
                                alt=""
                                style={{ "height": "505px" }}
                            />
                            <div className="blog-grid-wrapper">
                                <div style={{ padding: "10%" }} className="blog-grid-container position-absolute flex-center text-center flex-column white-text">
                                    <div className="blog-category mb-2">
                                        Article
                                    </div>
                                    <div className="blog-title mb-2 mt-1">
                                        How Full Stack Developers paid are awesome?
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
                <MDBCol md="6">
                    <MDBRow>
                        <MDBCol md="12">
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
                    </MDBRow>
                    <MDBRow className="mt-2">
                        <MDBCol md="12">
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
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    )
}

export default BlogColumnView
