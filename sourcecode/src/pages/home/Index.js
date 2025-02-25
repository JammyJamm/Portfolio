import heroimg from "../assert/home.svg";
import arrowImg from "../assert/arrow.svg";
import FollowMe from "./FollowMe";
const HomePage = () => {
  return (
    <div className="container-fluid ui-homepage green">
      <div className="col hori_center">
        <div className="col-6">
          <h1>I have a Creative Idea to grow up your business</h1>
          <p>
            Wherther you hvae already have a website or you are geting started.
            Learn to build from me.
          </p>
          <div className="btn-group">
            <button className="primary-btn-icon">
              Get Start Now
              <img src={heroimg} />
            </button>
            <button className="secondary-btn">
              Watch Video
              <img src={arrowImg} />
            </button>
          </div>
          <FollowMe />
        </div>
        <div className="col-6">
          <img src={heroimg} alt="homepage" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
