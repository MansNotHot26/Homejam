import React from "react";
import "./Labels.css";
import Calender from "../../assets/Calendar.png";
import Like from "../../assets/Like.png";
import Label from "../Lable/Lable";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Labels() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
        "desktop",
        "superLargeDesktop",
      ]}
      containerClass="circular-labels-container">
      <div className="circular-label first">
        <img src={Like} alt="" />
        <p>0</p>
        <p>Label</p>
      </div>
      <Label image={Calender} />
      <Label image={Calender} />
      <Label image={Calender} />
    </Carousel>
  );
}

export default Labels;
