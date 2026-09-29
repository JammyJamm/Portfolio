import React from "react";
import { ReactComponent as Icon } from "../assert/linkedin.svg";

const FollowMe = () => {
  return (
    <div className="btn-group follow-me-group">
      <label>Follow Me: </label>
      <a
        href="https://www.linkedin.com/in/senthamil-m-360b3013a/"
        target="_blank"
        rel="noreferrer"
        aria-label="Connect on LinkedIn"
      >
        <Icon width="24px" height="24px" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FollowMe;
