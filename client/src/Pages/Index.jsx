import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Portfolio from "./Portfolio";
import Explore from "./Explore";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
};

export default Index;
