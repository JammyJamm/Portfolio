import { Link, Outlet } from "react-router-dom";
//import home from "../assert/home.svg";
import { ReactComponent as Home } from "../assert/home.svg";
import { ReactComponent as Experience } from "../assert/experience.svg";
import { ReactComponent as Contact } from "../assert/contact.svg";
import { ReactComponent as About } from "../assert/about.svg";
import { ReactComponent as Review } from "../assert/review.svg";

import Available from "../available/index";
import { useEffect, useState } from "react";
const Layout = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    setIsActive(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <div className="ui-page">
      <div className="ui-nav">
        <ul>
          <li>
            <Link to="/" className={isActive === "/" ? "active" : ""}>
              <Home width={50} height={50} className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive === "/about" ? "active" : ""}>
              {/* About */}
              <About width={50} height={50} className="icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={isActive === "/experience" ? "active" : ""}
            >
              {/* Experience */}
              <Experience width={50} height={50} className="icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive === "/contact" ? "active" : ""}
            >
              {/* Contact */}
              <Contact width={50} height={50} className="icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              className={isActive === "/review" ? "active" : ""}
            >
              <Review width={50} height={50} className="icon" />
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
