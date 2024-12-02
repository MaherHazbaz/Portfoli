import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loading from "../Animations/loading.json";

const LoadingPage = ({ isModelLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Hide loader when the page is fully loaded
    };

    if (isModelLoaded) {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [isModelLoaded]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent backdrop-blur-sm z-50">
          <div className="anime-loader-container">
            <Lottie
              animationData={loading}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
