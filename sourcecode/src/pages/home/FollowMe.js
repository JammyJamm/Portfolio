import { ReactComponent as Icon } from "../assert/linkedin.svg";
const FollowMe = () => {
  return (
    <div className="btn-group">
      <label>Follow Me: </label>
      <a
        href="https://www.linkedin.com/in/senthamil-m-360b3013a/"
        target="_blank"
      >
        <Icon width="26px" height="26px" />
      </a>
    </div>
  );
};
export default FollowMe;
