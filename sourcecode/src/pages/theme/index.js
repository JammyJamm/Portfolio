import { ReactComponent as Setting } from "../../pages/assert/setting.svg";
import "./style.scss";
const Theme = () => {
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
  return (
    <div className="colorCode">
      <div className="colorCode__item">
        <a onClick={handleTheme}>
          <Setting width="22px" height="22px" />
        </a>
      </div>
      <div className="colorSelect">
        <a
          className="colorSelect__item"
          onClick={() => handleTheme("blackWhite")}
        >
          <div className="primary black">black</div>
          <div className="secondary white">white</div>
        </a>
        <a
          className="colorSelect__item"
          onClick={() => handleTheme("greenFace")}
        >
          <div className="primary">Green</div>
          <div className="secondary">Face</div>
        </a>
      </div>
    </div>
  );
};
export default Theme;
