import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import thumbnail9 from "../../assets/thumbnail9.jpg";
import thumbnail10 from "../../assets/thumbnail10.jpg";
import thumbnail11 from "../../assets/thumbnail11.jpg";
import thumbnail12 from "../../assets/thumbnail12.jpg";
import thumbnail13 from "../../assets/thumbnail13.jpg";
import thumbnail14 from "../../assets/thumbnail14.jpg";
import thumbnail15 from "../../assets/thumbnail15.jpg";
import thumbnail16 from "../../assets/thumbnail16.jpg";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best places to visit in 2023</h2>
        <h3>TravelBro</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>USA current situation</h2>
        <h3>Country stats</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Things to do in colombo</h2>
        <h3>SL Vloger</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Beautiful New Zealand </h2>
        <h3>Cara&Nate</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Friends new season</h2>
        <h3>Movie Review</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>World most speed vehicles</h2>
        <h3>Motor Tube</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best places in UK</h2>
        <h3>Great Places</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>New lambogini model is out.!</h2>
        <h3>Car Reviews</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail9} alt="" />
        <h2>Best places to visit in 2023</h2>
        <h3>TravelBro</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail10} alt="" />
        <h2>USA current situation</h2>
        <h3>Country stats</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail11} alt="" />
        <h2>Things to do in colombo</h2>
        <h3>SL Vloger</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail12} alt="" />
        <h2>Beautiful New Zealand </h2>
        <h3>Cara&Nate</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail13} alt="" />
        <h2>Friends new season</h2>
        <h3>Movie Review</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail14} alt="" />
        <h2>World most speed vehicles</h2>
        <h3>Motor Tube</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail15} alt="" />
        <h2>Best places in UK</h2>
        <h3>Great Places</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail16} alt="" />
        <h2>New lambogini model is out.!</h2>
        <h3>Car Reviews</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
