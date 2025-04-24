import heroimg from "../assert/home.svg";
import arrowImg from "../assert/arrow.svg";
import FollowMe from "./FollowMe";
import "./style.scss";
import { ReactComponent as Icon } from "../assert/contact.svg";
const HomePage = () => {
  return (
    <div className="container-fluid ui-homepage green">
      <div className="col hori_center">
        <div className="col-6 text">
          <h1>Senthamil Munusamy</h1>
          <label className="job">UX Designer & UI Developer </label>
          <p className="jobDescription">
            I'm creative designer based in Bangalore, and I'm very passionate
            and dedicated to my work.
          </p>
          <div className="btn-group">
            <button className="primary-btn-icon">
              Say Hello
              <Icon width="26px" height="26px" />
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
