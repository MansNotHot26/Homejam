import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UpcomingShows.css";
import artist1 from "../../assets/artist1.png";
import artist2 from "../../assets/artist2.png";
import artist3 from "../../assets/artist3.png";
import artist4 from "../../assets/artist4.png";

import ArtistCard from "../ArtistCard/ArtistCard";

function UpcomingShows() {
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
    <div className="upcoming-container">
      <div className="upcoming-headers">
        <div className="title">Upcoming Shows</div>
        <div className="view-all-link">
          <Link>View All</Link>
        </div>
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
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        containerClass="artist-card-outer-container">
        <ArtistCard image={artist1} title={"BennyDayal"} genre={"folk"} />
        <ArtistCard
          image={artist2}
          title={"Vijay Yesudas"}
          genre={"Bolloywood"}
        />
        <ArtistCard image={artist3} title={"Andrea Jeremiah"} genre={"folk"} />
        <ArtistCard image={artist4} title={"Shilpa Rao"} genre={"folk"} />
      </Carousel>
    </div>
  );
}

export default UpcomingShows;
