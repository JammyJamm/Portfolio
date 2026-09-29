import React, { useState } from "react";
import "./style.scss";
import FollowMe from "../home/FollowMe";
import { ReactComponent as Icon } from "../assert/contact.svg";
import ChatBot from "../chatbot/Chatbot";

const Contact = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const name = "Senthamil Munusamy";

  const rotateName = name.split("").map((char, i) => {
    const rotationValue = i * 19 - 3;
    return (
      <span
        key={i}
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
      <div className="container-fluid contact-fluid-wrap">
        <div className="mainLayout">
          {/* Top Section */}
          <div className="col hori_center contact-top-row">
            <div className="col-3 contact-circle-col">
              <div className="box circle-box">
                <div className="circleText" aria-label="Senthamil Munusamy badge">
                  <p>{rotateName}</p>
                </div>
              </div>
            </div>

            <div className="col-6 box-contact">
              <h1>Let's work together</h1>
              <p>
                Available for intelligent AI application development, enterprise
                frontend architecture, and modern UX design opportunities. Let's
                collaborate to build something exceptional.
              </p>
            </div>

            <div className="col-3 contact-action-col">
              <div className="box">
                <button
                  type="button"
                  className="contact-say-hello-btn"
                  onClick={() => setShowChatBot(true)}
                  aria-label="Open chat assistant"
                >
                  <span>Say Hello</span>
                  <Icon width="22px" height="22px" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="col hori_center bottomText contact-bottom-row">
            <div className="col-4 contact-card-col">
              <div className="box contact-meta-card">
                <label>Call :</label>
                <button
                  type="button"
                  className="contact-link-btn"
                  onClick={() => (window.location.href = "tel:+917010314568")}
                  aria-label="Call phone number +91 7010314568"
                >
                  (+91) 7010314568
                </button>
              </div>
            </div>

            <div className="col-4 contact-card-col">
              <div className="box contact-meta-card">
                <label>Email :</label>
                <button
                  type="button"
                  className="contact-link-btn email-btn"
                  onClick={() =>
                    (window.location.href = "mailto:tamiltanish@gmail.com")
                  }
                  aria-label="Send email to tamiltanish@gmail.com"
                >
                  tamiltanish@gmail.com
                </button>
              </div>
            </div>

            <div className="col-4 contact-card-col contact-social-col">
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
