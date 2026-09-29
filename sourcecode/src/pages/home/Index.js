import heroimg from "../assert/heroImg.png";
import arrowImg from "../assert/arrow.svg";
import FollowMe from "./FollowMe";
import cvFile from "../assert/SenthamilResume.pdf";
import "./style.scss";
import { ReactComponent as Icon } from "../assert/contact.svg";

import { useState } from "react";
import ChatBot from "../chatbot/Chatbot";

const HomePage = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <div className="container-fluid ui-homepage green">
      <div className="col hori_center home-layout-row">
        <div className="col-6 text home-intro-col">
          <h1>Senthamil Munusamy</h1>
          <label className="job">AI Developer / UI Developer / UX Design</label>
          <p className="jobDescription">
            Seeking an opportunity as an AI Developer, with a strong interest in
            developing intelligent applications, integrating AI technologies,
            and building innovative solutions using modern AI tools and
            frameworks.
          </p>
          <div className="btn-group home-btn-group">
            <button
              type="button"
              className="primary-btn-icon"
              onClick={() => setShowChatBot(true)}
              aria-label="Open chat assistant"
            >
              Say Hello
              <Icon width="24px" height="24px" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = cvFile;
                link.download = "Senthamil_Munusamy_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              aria-label="Download CV as PDF"
            >
              Download CV
              <img src={arrowImg} alt="" aria-hidden="true" />
            </button>
          </div>
          <FollowMe />
        </div>

        <div className="col-6 hreoImgBlock">
          <img
            src={heroimg}
            alt="Senthamil Munusamy - Portfolio Hero"
            className="hero-avatar-img"
          />
        </div>
      </div>

      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
};

export default HomePage;
