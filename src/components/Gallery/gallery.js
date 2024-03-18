import React from 'react';
import "./gallery.css";
import conveter from "../../images/Conveter.jpg";
import bank from "../../images/bank.jpg";
import tax from "../../images/tax conveter.png";
import theebest from "../../images/thee best.jpg";

class Gallery extends React.Component {
  state = {
    images: [
      { url: theebest, caption: 'Construction website' },
      { url: conveter, caption: 'The Unit converter' },
      { url: bank, caption: 'The Bank app' },
      { url: tax, caption: 'The Tax converter' },
    ],
    currentIndex: 0
  };

  componentDidMount() {

    this.startSlideShow();
  }

  componentWillUnmount() {
    this.stopSlideShow();
  }

  startSlideShow = () => {
    this.slideShowInterval = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % prevState.images.length
      }));
    }, 3000); //
  };

  stopSlideShow = () => {
    clearInterval(this.slideShowInterval);
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <section id="gallery">
      <div className="gallery-container">
        <h1 className="gallery-heading">My Gallery</h1>
        <h2 className="gallery-subheading">Software Showcase</h2>
        <p className="moving-sentence">Each image tells a story; together, they paint the picture of my journey through creativity and passion.</p>
        <div className="image-gallery">
          <div className="image-item">
            <img src={images[currentIndex].url} alt={images[currentIndex].caption} />
            <div className="image-overlay"></div>
            <p>{images[currentIndex].caption}</p>
          </div>
        </div>
      </div>
    </section>
    
    
    );
  }
}

export default Gallery;
