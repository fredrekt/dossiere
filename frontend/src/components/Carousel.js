import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = (props) => {
  return (
    <MDBContainer fluid>
      <MDBCarousel
        style={{'margin-left':'-3%'}}
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner fluid>
          <MDBCarouselItem itemId="1">
            <MDBView fluid>
            <img className="d-block w-100" src={props.carousel_img_1} alt="project carousel"/>
              {/* <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
              /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={props.carousel_img_2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={props.carousel_img_3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;