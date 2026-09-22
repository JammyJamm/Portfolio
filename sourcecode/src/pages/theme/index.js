import { useState } from "react";
import { ReactComponent as Setting } from "../../pages/assert/setting.svg";
import hearImg from "../../pages/assert/heroImg.png";
import "./style.scss";
const Theme = () => {
  const [themeOpen, setThemeOpen] = useState(false);
  const handleTheme = (theme) => {
    document.body.classList.remove("blackWhite", "greenFace");
    switch (theme) {
      case "greenFace":
        document.body.classList.add("greenFace");
        break;
      case "blackWhite":
        document.body.classList.add("blackWhite");
        break;

      default:
        break;
    }
  };
  const handleThemeOpen = () => {
    setThemeOpen((pre) => !pre);
  };
  return (
    <div>
      {/* <div className="colorCode">
      <div className="colorCode__item">
        <a onClick={handleThemeOpen}>
          <Setting width="22px" height="22px" />
        </a>
      </div>
      {themeOpen === true ? (
        <div className="colorSelect">
          <a
            href=""
            className="colorSelect__item"
            onClick={() => handleTheme("blackWhite")}
          >
            <div className="primary black">black</div>
            <div className="secondary white">white</div>
          </a>
          <a
            href=""
            className="colorSelect__item"
            onClick={() => handleTheme("greenFace")}
          >
            <div className="primary">Green</div>
            <div className="secondary">Face</div>
          </a>
        </div>
      ) : null}
    </div> */}
      {/* <img src="hearImg" /> */}
    </div>
  );
};
export default Theme;
