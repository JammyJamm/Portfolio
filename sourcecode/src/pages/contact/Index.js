import "./style.scss";
// import behance from "../assert/behance.svg";
import { ReactComponent as Behance } from "../assert/behance.svg";
import FollowMe from "../home/FollowMe";
import { ReactComponent as ContactUS } from "../assert/contact-us.svg";
import { ReactComponent as Virtual } from "../assert/virtual-assistants.svg";
import { ReactComponent as Phone } from "../assert/smartphone.svg";
import { ReactComponent as Icon } from "../assert/contact.svg";
import { useState } from "react";
import ChatBot from "../chatbot/Chatbot";

const Contact = () => {
  const [showChatBot, setShowChatBot] = useState(false);
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
      {/* <ContactUS style={{ width: "40px", height: "auto" }} />
      <Phone style={{ width: "40px", height: "auto" }} />
      <Virtual style={{ width: "40px", height: "auto" }} /> */}
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
                <button
                  className="btn-secondary"
                  onClick={() => setShowChatBot(true)}
                >
                  Say Hello
                  <Icon width="26px" height="26px" />
                </button>
              </div>
            </div>
          </div>
          <div className="col hori_center bottomText">
            <div className="col-4">
              <div className="box">
                <label>Call :</label>
                <button
                  className="secondary-btn"
                  onClick={() => (window.location.href = "tel:+917010314568")}
                >
                  (+91) 7010314568
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="box">
                <label>Email :</label>
                <button
                  className="secondary-btn"
                  onClick={() =>
                    (window.location.href = "mailto:tamiltanish@gmail.com")
                  }
                >
                  tamiltanish@gmail.com
                </button>
              </div>
            </div>
            <div className="col-4">
              <FollowMe />
            </div>
          </div>
        </div>
      </div>
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
};
export default Contact;
