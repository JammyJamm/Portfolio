import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../contact/Index";
import HomePage from "../home/Index";
import NoPage from "../noPage/Index";
import Layout from "./Layout";
import "./style.scss";
const Nav = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default Nav;
