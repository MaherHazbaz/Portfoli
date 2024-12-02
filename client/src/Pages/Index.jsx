import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./Portfolio";
import Explore from "./Explore";
import Add1 from "./Add1";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import LoadingPage from "../Components/LoadingPage";


const Index = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes location={location}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/know" element={<Add1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
