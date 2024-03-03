import "../css/imageSlider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../images/1.png";
import image2 from "../images/2.png";

function ImageSlider() {
  return (
    <div className="ImageSlider">
      <AliceCarousel
        autoPlay
        infinite={"true"}
        disableButtonsControls
        autoPlayInterval="2000"
      >
        <img
          src={image1}
          id="sliderImg1"
          className="sliderimg"
          style={{ minHeight: "100px" }}
          alt=""
        />
        {/* <img src={image3} className="sliderimg" style={{minHeight:"180px"}} alt=""/> */}
        <img
          src={image2}
          id="sliderImg2"
          className="sliderimg"
          style={{ minHeight: "100px" }}
          alt=""
        />
        {/* <img src={image4} className="sliderimg" style={{minHeight:"180px"}} alt=""/> */}
      </AliceCarousel>
    </div>
  );
}

export default ImageSlider;
