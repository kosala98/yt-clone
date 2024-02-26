import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best youtube channel to watch travel videos</h3>
      <div className="play-video-info">
        <p>20k views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 125
          </span>
          <span>
            <img src={dislike} alt="" /> 1
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Travel Mania</p>
          <span>100k Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Best channel to watch beautiful travel videos</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          aliquid?
        </p>
        <hr />
        <h4>134 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>250</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>250</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>250</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
