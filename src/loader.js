import React from "react";


const Preloader = () => {
  return (
    <div className="preloader-overlay">
      <div className="cube-spinner">
        <div className="cube cube1"></div>
        <div className="cube cube2"></div>
        <div className="cube cube3"></div>
        <div className="cube cube4"></div>
      </div>
     
    </div>
  );
};

export default Preloader;
