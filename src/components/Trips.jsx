import { trips } from "../Data";


const RecentTrips = () => {

  return (
    <div className="recent-trips-container">
      <h2>Recent Trips</h2>
      <div className="trips">
        {trips.map((trip, index) => {
            const {id, date, description, imageUrl} = trip
            return(
                <div  className="trip-item" key={index}>
                <img src={imageUrl} alt= {id} />
                <div className="trip-info">
                  <p>{date}</p>
                  <h3>{description}</h3>
                </div>
              </div>
            )
        }
        )}
      </div>
    </div>
  );
};

export default RecentTrips;
