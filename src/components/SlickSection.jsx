import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { quote } from "../Data";


const SlickSection =()=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 2000,
        pauseOnHover: true,
      };
  return (
    <section className="slick-container">
    <Slider {...settings}>
      {
        quote.map((person)=>{
            const{ id, image, name, quote } = person
            return(
                <article key={id}>
                   <div className="slider">
                   <img className="person-img" src={image} alt={name} />
                    <p className="text">{quote}</p>
                    <h5 className="name">{name}</h5>
                   </div>
                </article>
            )
        })
      }
    </Slider>
    </section>
  )
}

export default SlickSection