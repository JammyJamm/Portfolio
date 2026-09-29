import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assert/logo.svg";
import "./style.scss";

const LogoImg = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <div
      className="logo"
      onClick={handleLogoClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Go to home page"
      title="Senthamil Munusamy Portfolio"
    >
      <Logo aria-hidden="true" />
    </div>
  );
};

export default LogoImg;
