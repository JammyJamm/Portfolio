import { Link, Outlet } from "react-router-dom";
import home from "../assert/home.svg";
import contact from "../assert/message.svg";
import Available from "../available/index";
const Layout = () => {
  return (
    <div className="ui-page">
      <div className="ui-nav">
        <ul>
          <li>
            <Link to="/">
              <button class="primary-btn-icon">
                {/* Home */}
                <img src={home} />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button class="primary-btn-icon">
                {/* About */}
                <img src={home} />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <button class="primary-btn-icon">
                {/* Experience */}
                <img src={home} />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button class="primary-btn-icon">
                {/* Contact */}
                <img src={contact} />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/fmr">
              <button class="primary-btn-icon">
                {/* FMR */}
                <img src={home} />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <Available />
    </div>
  );
};
export default Layout;
