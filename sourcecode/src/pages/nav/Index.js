import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../contact/Index";
import Home from "../home/Index";
import About from "../about/Index";
import Experience from "../experience/Index";
import NoPage from "../noPage/Index";
import FMR from "../FMR/Index";
import Layout from "./Layout";
import "./style.scss";
const Nav = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="fmr" element={<FMR />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default Nav;
