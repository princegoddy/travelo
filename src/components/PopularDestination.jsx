import { destinations } from "../Data";

const PopularDestination = () => {
  return (
    <div className="popular-destination">
      <h2>Popular Destination</h2>
      <p>
        Suffered alteration in some form, by injected humour or good day <br />
        randomised booth anim 8-bit hella wolf moon beard words.
      </p>
      <div className="destination-grid">
        {destinations.map((destination, index) => {
          const {name, places, image } = destination
          return(
            <div key={index} className="destination-card">
            <img
              src={image}
              alt={name}
              className="destination-image"
            />
            <div className="destination-info">
              <h3>{name}</h3>
              <span>{places}</span>
            </div>
          </div>
          )
        }
        )}
      </div>
    </div>
  );
};

export default PopularDestination;
