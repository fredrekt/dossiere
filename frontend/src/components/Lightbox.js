import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";



class LightboxPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs3b74ZPUrxLt7MUej8wlFnejZfiv1wlyzosE3DrDXmq0MHaM7&usqp=CAU/800/1200",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5XZmW5yIj2mCaiU0-xoudNXg-ohn1DeLDk9R8g1Ip9ecw8ScK&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp-p9c-2_qgjUF3PjzSk-bw6m4-9BTppkyQL7qGRjAEJ9Yv3J9&usqp=CAU",
      "//placekitten.com/800/1200",
      "//placekitten.com/1500/1500"
    ];

    return (
      <div>
        <a href="#lightboxclicked" type="button" onClick={() => this.setState({ isOpen: true })}>
          open
        </a>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
export default LightboxPage