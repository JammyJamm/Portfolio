import { Link, Outlet } from "react-router-dom";
import home from "../assert/home.svg";
const Layout = () => {
  return (
    <div className="ui-page">
      <div className="ui-nav">
        <ul>
          <li>
            <Link to="/">
              <button class="primary-btn-icon">
                Home
                <img src="/static/media/home.50f8698bd0f2a46b0bb3ad09a89f37e8.svg" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button class="primary-btn-icon">
                Contact
                <img src="/static/media/home.50f8698bd0f2a46b0bb3ad09a89f37e8.svg" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button class="primary-btn-icon">
                Contact
                <img src="/static/media/home.50f8698bd0f2a46b0bb3ad09a89f37e8.svg" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
