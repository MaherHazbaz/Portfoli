import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Portfolio from "./Portfolio";
import Explore from "./Explore";
import Add1 from "./Add1";
import "../styles/transition.css"; // Import the transition CSS

import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const Index = () => {
  const location = useLocation();

  return (
    <>
      
        
          <div>
            <Routes location={location}>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </div>
      
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/know" element={<Add1 />} />
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
};

export default Index;
