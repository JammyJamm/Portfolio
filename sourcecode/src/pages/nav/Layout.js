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
      <Link
        to="/interview"
        className={`interview-shortcut${currentPath === "/interview" ? " active" : ""}`}
        aria-label="Interview questions and answers"
        aria-current={currentPath === "/interview" ? "page" : undefined}
        title="Interview Q&A"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 11v5m0-8h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>
      <Outlet />
      <LogoImg />
      <Available />
    </div>
  );
};
export default Layout;
