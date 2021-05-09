import React from "react";

function Lable({ image }) {
  return (
    <div className="circular-label">
      <img src={image} alt="" />
      <p>0</p>
      <p>Label</p>
    </div>
  );
}

export default Lable;
