import logo from "./logo.svg";
import "./App.scss";
import "./scss/common.scss";
import Spinner from "./pages/spinner/Index";
import Nav from "./pages/nav/Index";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import { useState } from "react";
function App() {
  const [posX, setPosX] = useState("");
  const [posY, setPosY] = useState("");
  const [slowPosX, setSlowPosX] = useState("");
  const [slowPosY, setSlowPosY] = useState("");

  function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    setPosX(x - 2);
    setPosY(y - 2);
    setTimeout(() => {
      setSlowPosX(x - 18);
      setSlowPosY(y - 18);
    }, [80]);
  }

  function handlePointer(e) {
    setPosX(window.e.clientX);
    setPosY(window.e.clientY);
    console.log(window);
  }

  return (
    <div className="ui-layout" onMouseMove={showCoords}>
      <Nav />
      <div
        className="ui-pointer"
        style={{ position: "absolute", top: posY, left: posX }}
      >
        <div
          className="ui-slowPointer"
          style={{
            position: "fixed",
            top: slowPosY,
            left: slowPosX,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
