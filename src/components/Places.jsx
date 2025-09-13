import { data } from "../Data";



const Card = ({ location, country, price, reviews, duration, image }) => {
 
};

const PopularPlaces = () => {
  return (
    <section className="popular-places">
      <h2>Popular Places</h2>
      <p>
        Suffered alteration in some form, by injected humour or good day <br />
        randomised booth anim 8-bit hella wolf moon beard words.
      </p>
      <div className="card-container">
        {
           data.map((item) => {
            const { id, location, country, price, reviews, duration, image } = item
            return (
              <div className="card" key={id}>
                <img src={image} alt={location} className="card-image" />
                <div className="card-content">
                  <div className="card-price">{price}</div>
                <h3>{location}</h3>
                  <p>{country}</p>
                  <div className="card-info">
                    <span className="card-rating">★★★★★ ({reviews} Reviews)</span>
                    <span className="card-day">{duration}</span>
                  </div>
                </div>
              </div>
            );
        })
    }
      </div>

      <button className="places-btn">More Places</button>
    </section>
  );
};


export default PopularPlaces;
