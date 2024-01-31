import { Link, Outlet } from "react-router-dom";
import home from "../assert/home.svg";
const Layout = () => {
  return (
    <div className="ui-page">
      <div className="ui-nav">
        <ul>
          <li>
            <Link to="/">
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src={home} alt="contact" />
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
