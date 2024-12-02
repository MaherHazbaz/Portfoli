import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "../Components/LoadingPage";

const Portfolio = lazy(() => import("../Pages/Portfolio"));
const Explore = lazy(() => import("./Explore"));
const Add1 = lazy(() => import("./Add1"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Resume = lazy(() => import("./Resume"));

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
