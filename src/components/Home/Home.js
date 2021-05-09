import Navbar from "../Navbar/Navbar";
import Labels from "../Labels/Labels";
import Upcoming from "../UpcomingShows/UpcomingShows";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container-fluid">
        <Navbar />

        <div className="hero-banner-content">
          <h2 className="content-heading">Cari Cari</h2>
          <p className="content-text">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
        <Labels />
        <Upcoming />
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
