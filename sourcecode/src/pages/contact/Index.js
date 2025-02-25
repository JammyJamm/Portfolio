import "./style.scss";
// import behance from "../assert/behance.svg";
import { ReactComponent as Behance } from "../assert/behance.svg";
import FollowMe from "../home/FollowMe";
const Contact = () => {
  const name = "Senthamil M";
  console.log(name);
  const rotateName = name.split("").map((char, i) => {
    const rotationValue = i * 30 - 3;
    return (
      <span
        style={{
          transform: `rotateZ(${rotationValue}deg)`,
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <div className="ui-contact">
      <div className="container-fluid ">
        <div className="mainLayout">
          <div className="col hori_center">
            <div className="col-3">
              <div className="box">
                <div className="circleText">
                  <p>{rotateName}</p>
                </div>
              </div>
            </div>
            <div className="col-6 box-contact text">
              <h3>Let's work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="col-3 col verti_center hori_center">
              <div className="box">
                <button class="primary-btn-icon">Say Hello </button>
              </div>
            </div>
          </div>
          <div className="col hori_center bottomText">
            <div className="col-4">
              <div className="box">
                <label>Call :</label>
                <button class="secondary-btn">+91 7010314568</button>
              </div>
            </div>
            <div className="col-4">
              <div className="box">
                <label>Email :</label>
                <button class="secondary-btn">tamiltanish@gmail.com</button>
              </div>
            </div>
            <div className="col-4">
              <FollowMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
