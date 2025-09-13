import video from "../images/video.png"



const VideoBackground = () => {
  return (
    <div className="video-container">
        <img className="video-bg" src={video} alt="" />
      <div className="content">
        <h1 className="title">Enjoy Video</h1>
        <button className="play-button">
          <span>&#9658;</span>
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;

