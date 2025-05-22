import Epic from "./Epic";
import Mouse from "./Mouse";
import "./style.scss";
import React, { useState } from "react";

function Experience() {
  const epic = [
    {
      startYear: "2017",
      endYear: "2019",
      organization: "Randstad",
    },
    {
      startYear: "2019",
      endYear: "2021",
      organization: "Lennox International",
    },
    {
      startYear: "2021",
      endYear: "2023",
      organization: "TCS",
    },
    {
      startYear: "2023",
      endYear: "2025",
      organization: "Creative",
    },
  ];
  return (
    <div className="ui-experience hori_center">
      <Epic epic={epic} />
      <Mouse epic={epic} />
    </div>
  );
}

export default Experience;
