import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Portfolio from "./Portfolio";
import Explore from "./Explore";
import Add1 from "./Add1";
import "../styles/transition.css"; // Import the transition CSS

const Index = () => {
  const location = useLocation();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.key}
          classNames="scale"
          timeout={300}
          unmountOnExit
        >
          <div>
            <Routes location={location}>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/know" element={<Add1 />} />
      </Routes>
    </>
  );
};

export default Index;
