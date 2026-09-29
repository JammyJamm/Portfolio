import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as Home } from "../assert/home.svg";
import { ReactComponent as Experience } from "../assert/experience.svg";
import { ReactComponent as Contact } from "../assert/contact.svg";
import { ReactComponent as About } from "../assert/about.svg";
import { ReactComponent as Review } from "../assert/review.svg";

import Available from "../available/index";
import LogoImg from "../logo";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="ui-page">
      <nav className="ui-nav" aria-label="Main Navigation">
        <ul>
          <li>
            <Link
              to="/"
              className={currentPath === "/" || currentPath === "/Portfolio" ? "active" : ""}
              aria-label="Home page"
              title="Home"
            >
              <Home width={50} height={50} className="icon" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={currentPath === "/about" ? "active" : ""}
              aria-label="About page"
              title="About"
            >
              <About width={50} height={50} className="icon" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={currentPath === "/experience" ? "active" : ""}
              aria-label="Experience & Projects"
              title="Experience"
            >
              <Experience width={50} height={50} className="icon" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={currentPath === "/contact" ? "active" : ""}
              aria-label="Contact page"
              title="Contact"
            >
              <Contact width={50} height={50} className="icon" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              className={currentPath === "/review" ? "active" : ""}
              aria-label="Reviews and feedback"
              title="Reviews"
            >
              <Review width={50} height={50} className="icon" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <LogoImg />
      <Available />
    </div>
  );
};
export default Layout;
