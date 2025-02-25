//import availableIMG from "./assert/add.svg";
import "./style.scss";
import profile from "../assert/profile.jpg";
const Available = () => {
  return (
    <div className="available">
      <div className="imgContainer">
        <img src={profile} alt="availableIMG" />
      </div>

      <div className="availableLight"></div>
      <div className="text">
        <a>Hey there !</a>
      </div>
    </div>
  );
};
export default Available;
