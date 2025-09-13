
const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="subscribe-area">
        <p className="subscribe-text">
          Subscribe to get exclusive offers and updates<br />
          about new places to discover.
        </p>
        <div className="subscribe-form">
          <input
            className="subscribe-put"
            type="text"
            placeholder="Your Email"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};


export default Subscribe;