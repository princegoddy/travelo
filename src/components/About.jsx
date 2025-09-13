import { bannerData } from "../Data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import specific icons

const CustomPrevArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow left`} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow right`} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="banner-container">
      <Slider {...settings}>
        {bannerData.map((banner) => {
          const { id, title, image, subtitle, buttonText } = banner;
          return (
            <div className="banner" key={id}>
              <img className="banner-image" src={image} alt="banner" />
              <div className="banner-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button>{buttonText}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default About
