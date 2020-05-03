import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import Sponsors from '../../Sponsors'

const PartnershipSection = () => {
    return (
        <>
            <MDBContainer>
                <div className="about-title text-center">
                    <h1>
                        Partnerships Everythingship
                    </h1>
                    <p className="black-text">
                        A few recent projects that i've worked or finished. Want more message me, mailto@gmail.com
                    </p>
                </div>
                <MDBContainer className="mt-5 mb-5">
                    <MDBRow style={{ marginTop: "5%" }}>
                        <Sponsors
                            sponsor_placement="top"
                            sponsor_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLpUpT3apna1hcAQk6B6cegPk42NKF6q8loUbqbQdWTJWJjEiU&usqp=CAU"
                            sponsor_img_alt=""
                            sponsor_tooltip="My Operating System is powered by"
                        />
                        <Sponsors
                            sponsor_placement="top"
                            sponsor_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSAjTsIkCAD0AyJyKgIZnTYcoeZSAdHBN3bJaqeEOqdIkJpcvj&usqp=CAU"
                            sponsor_img_alt=""
                            sponsor_tooltip="My computer is made by"
                        />
                        <Sponsors
                            sponsor_placement="top"
                            sponsor_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCG_PzXb3ss4elMmJqaKyfN-H48KuURhsohYLnpgdcJLvsTByQ&usqp=CAU"
                            sponsor_img_alt=""
                            sponsor_tooltip="Leonovo"
                        />
                        <Sponsors
                            sponsor_placement="top" 
                            sponsor_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRf9EP3S1CefQAmq6s4XWixKZYoK524y_sJbSZ32_671bwqxlbE&usqp=CAU"
                            sponsor_img_alt=""
                            sponsor_tooltip="Starbucks Coffee"
                        />
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        </>
    )
}

export default PartnershipSection
