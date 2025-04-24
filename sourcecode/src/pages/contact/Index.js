import "./style.scss";
// import behance from "../assert/behance.svg";
import { ReactComponent as Behance } from "../assert/behance.svg";
import FollowMe from "../home/FollowMe";
import { ReactComponent as ContactUS } from "../assert/contact-us.svg";
import { ReactComponent as Virtual } from "../assert/virtual-assistants.svg";
import { ReactComponent as Phone } from "../assert/smartphone.svg";
const Contact = () => {
  const name = "Senthamil Munusamy";
  console.log(name);
  const rotateName = name.split("").map((char, i) => {
    const rotationValue = i * 19 - 3;
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
      <ContactUS style={{ width: "40px", height: "auto" }} />
      <Phone style={{ width: "40px", height: "auto" }} />
      <Virtual style={{ width: "40px", height: "auto" }} />
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
            <div className="col-6 box-contact">
              <h1>Let's work together</h1>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="col-3 col verti_center hori_center">
              <div className="box">
                <button className="btn-secondary">Say Hello </button>
              </div>
            </div>
          </div>
          <div className="col hori_center bottomText">
            <div className="col-4">
              <div className="box">
                <label>Call :</label>
                <button className="secondary-btn">+91 7010314568</button>
              </div>
            </div>
            <div className="col-4">
              <div className="box">
                <label>Email :</label>
                <button className="secondary-btn">tamiltanish@gmail.com</button>
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
