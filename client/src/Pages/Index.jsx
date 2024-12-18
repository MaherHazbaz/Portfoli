import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "../Components/LoadingPage";
import Vs from "./Vs";
import Vg from "./Vg";
import Ap from "./Ap";
import Ec from "./Ec";

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
        <Route path="/vs" element={<Vs/>} />
        <Route path="/vg" element={<Vg />} />
        <Route path="/ap" element={<Ap />} />
        <Route path="/ec" element={<Ec />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
