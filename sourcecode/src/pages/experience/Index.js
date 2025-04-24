import "./style.scss";
import React, { useState } from "react";

function Experience() {
  return (
    <div>
      <div className="element">
        <label>1</label>
        <input type="checkbox" />
        <input type="text" value={1} />
      </div>
      <div className="element">
        <label>2</label>
        <input type="checkbox" />
        <input type="text" value={2} />
      </div>
      <div className="element">
        <label>3</label>
        <input type="checkbox" />
        <input type="text" value={1} />
      </div>
    </div>
  );
}

export default Experience;
