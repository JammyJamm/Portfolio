import { useState } from "react";
import cvFile from "../assert/SenthamilResume.pdf";
import "./style.scss";
import { ReactComponent as File } from "../assert/file.svg";
import { ReactComponent as Hand } from "../assert/hand.svg";
import { ReactComponent as Mail } from "../assert/mail.svg";
import { ReactComponent as Call } from "../assert/call.svg";
import Contact from "../contact/Index";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: (
        <>
          Hi! <Hand className="hand" /> How can I help you?
        </>
      ),
    },
  ]);

  const addMessage = (userMessage, botMessage) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botMessage },
    ]);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Senthamil_Munusamy_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOption = (option) => {
    switch (option) {
      case "cv":
        addMessage(
          "I'm interested in your CV",
          "Sure! You can download my latest CV below.",
        );
        break;

      case "resume":
        addMessage("Download resume", "Your resume download will start now.");
        downloadCV();
        break;

      case "call":
        addMessage("Call me", "Sure! You can call me directly.");
        window.location.href = "tel:+917010314568";
        break;

      case "email":
        addMessage("Send a mail", "Opening your email application...");
        window.location.href =
          "mailto:tamiltanishh@gmail.com?subject=Contact%20from%20Portfolio";
        break;

      default:
        break;
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <div>
          <strong style={{ display: "flex" }}>
            Let's Connect <Hand className="hand" />
          </strong>
          <span>I'm here to help</span>
        </div>

        <button className="chatbot-close" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="chatbot-options">
        <button onClick={() => handleOption("cv")}>
          <Hand className="hand" /> I'm interested in your CV
        </button>

        <button onClick={() => handleOption("resume")}>
          <File className="file" /> Download Resume
        </button>

        <button onClick={() => handleOption("call")}>
          <Call className="call" /> Call me
        </button>

        <button onClick={() => handleOption("email")}>
          <Mail className="mail" /> Send me a mail
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
