import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assert/logo.svg";
import "./style.scss";

const LogoImg = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="logo" onClick={handleLogoClick} role="button" tabIndex={0}>
      <Logo />
    </div>
  );
};

export default LogoImg;
