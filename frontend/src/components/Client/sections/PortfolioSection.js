import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, 
    MDBCard, MDBCardImage,
} from 'mdbreact'
// import Lightbox from '../../Lightbox'
import portfolio1 from '../../../img/portfolio-1.PNG'
import portfolio2 from '../../../img/portfolio-2.PNG'
import portfolio3 from '../../../img/portfolio-3.PNG'
import portfolio4 from '../../../img/portfolio-4.PNG'
import portfolio5 from '../../../img/portfolio-5.png'
import portfolio6 from '../../../img/portfolio-6.png'
import Lightbox from 'react-image-lightbox';

import c1 from '../../../img/coronatracker/corona-ss-1.png'
import c2 from '../../../img/coronatracker/corona-ss-2.png'
import c3 from '../../../img/coronatracker/corona-ss-3.png'
import c4 from '../../../img/coronatracker/corona-ss-4.png'
import c5 from '../../../img/coronatracker/corona-ss-5.png'
import c6 from '../../../img/coronatracker/corona-ss-6.png'
import c7 from '../../../img/coronatracker/corona-ss-7.png'

const images = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7
  ];

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }

    render(){
        const { photoIndex, isOpen } = this.state;
        return (
            <>
                <MDBContainer>
                    <div className="about-title text-center">
                        <h1>
                            My Porfolios
                        </h1>
                        <p className="black-text">
                            A few recent projects that i've worked or finished. Want more message me, mailto@gmail.com
                        </p>
                    </div>
                    <MDBRow style={{ marginTop: "5%" }}>
                        <MDBCol md="4">
                        <MDBCard onClick={() => this.setState({ isOpen: true })}>
                        <MDBCardImage className="w-100" src={portfolio1}
            waves/>
            <div>
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
                            </MDBCard> 
                        </MDBCol>
                        <MDBCol md="4">
                        <MDBCard onClick={()=> window.alert(`<img src=${portfolio2}/>`)}>
                        <MDBCardImage className="img-fluid" src={portfolio2} waves />
                            </MDBCard> 
                        </MDBCol>
                        <MDBCol md="4">
                        <MDBCard onClick={()=> window.alert(`<img src=${portfolio3}/>`)}>
                        <MDBCardImage className="img-fluid" src={portfolio3} waves />
                            </MDBCard> 
                        </MDBCol>
                    </MDBRow>
                    <div className="mt-4">
                    <MDBRow>
                        <MDBCol md="4">
                        <MDBCard onClick={()=> window.alert(`<img src=${portfolio4}/>`)}>
                        <MDBCardImage className="img-fluid" src={portfolio4} waves />
                            </MDBCard> 
                        </MDBCol>
                        <MDBCol md="4">
                        <MDBCard onClick={()=> window.alert(`<img src=${portfolio5}/>`)} style={{ "height" : "90%"}}>
                        <MDBCardImage className="img-fluid" src={portfolio5} waves />
                            </MDBCard> 
                        </MDBCol>
                        <MDBCol md="4">
                        <MDBCard onClick={()=> window.alert(`<img src=${portfolio6}/>`)}>
                        <MDBCardImage className="img-fluid" src={portfolio6} waves />
                            </MDBCard> 
                        </MDBCol>
                    </MDBRow>
                    </div>
                </MDBContainer>
            </>
        )
    }
}

export default PortfolioSection
