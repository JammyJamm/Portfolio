import "./style.scss";
import { ReactComponent as AboutLanch } from "../assert/aboutLaunch.svg";
import { ReactComponent as Signature } from "../assert/signature.svg";
const About = () => {
  return (
    <div className="ui-about ">
      <div className="container-fluid ">
        <div className="col hori_center">
          <div className="col-6 experience">
            <div className="box">
              <b>7</b>
              <label>Year of Experience</label>
              <AboutLanch
                width="50px"
                style={{ position: "absolute", top: "0px", right: "-100px" }}
              />
            </div>
          </div>
          <div className="col-6 text">
            <h1>About Me</h1>
            <p>
              With 7 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I enjoy every step of the design process, from discussion
              and collaboration.
            </p>
            <div className="btn-group signature">
              <button className="btn-secondary">Contact me</button>
              <Signature width="300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
