import React from "react";

const Mouse = ({ epic = [], activeIndex = 0, onSelect }) => {
  const isLast = activeIndex === epic.length - 1;
  const isFirst = activeIndex === 0;

  let hintText = "Scroll down";
  if (isLast) {
    hintText = "Scroll up / End";
  } else if (!isFirst) {
    hintText = "Scroll up / down";
  }

  return (
    <div className="ui-mouse col hori_center verti_center">
      <div className="year">
        <div className="line"></div>
        <div className="col hori_center verti_center">
          {epic &&
            epic.map((list, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`list ${isActive ? "active" : ""}`}
                  style={{
                    width: `${100 / (epic.length || 1)}%`,
                    cursor: onSelect ? "pointer" : "default",
                  }}
                  onClick={() => onSelect && onSelect(index)}
                  title={`Select ${list.organization}`}
                  role={onSelect ? "button" : undefined}
                  tabIndex={onSelect ? 0 : -1}
                >
                  <label>{list.organization}</label>
                  <p>
                    {list.startYear} - {list.endYear}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="block">
        <div className="wheel"></div>
        <p>{hintText}</p>
      </div>
    </div>
  );
};

export default Mouse;
