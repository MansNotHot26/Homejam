import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Review from "../Review/Review";
import Review1 from "../../assets/review1-pp.png";
import flag1 from "../../assets/🇺🇸.png";
import "./Reviews.css";
function Reviews() {
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
    <div className="reviews-container">
      <div className="reviews-headers">
        <div className="reviews-title">Reviews</div>
        <div className="review-count">1/12</div>
      </div>
      <hr
        style={{
          width: "2.5%",
          textAlign: "left",
          marginLeft: 0,
          borderColor: "#0259EB",
          marginBottom: "50px",
        }}
      />
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={true}
        containerClass="artist-card-outer-container">
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
        <Review name={"Isaac Oluwatemilorun"} image={Review1} flag={flag1} />
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
        <Review name={"Hellen Jummy"} image={Review1} flag={flag1} />
      </Carousel>
    </div>
  );
}

export default Reviews;
