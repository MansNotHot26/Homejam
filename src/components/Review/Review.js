import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Review.css";

function Review({ name, image, flag }) {
  return (
    <div className="review-card-container">
      <Card className="review=card">
        <CardActionArea>
          <div className="review-card-details">
            <CardMedia className="review-card-image" image={image} />
            <CardContent>
              <div className="review-card-detail">
                <div className="review-card-name">{name}</div>
                <div className="review-card-country-detail">
                  <img className="review-card-country-flag" src={flag} alt="" />
                  <div className="review-card-country">Palo Alto, CA</div>
                </div>
              </div>
            </CardContent>
          </div>

          <Typography
            className="review-card-content"
            gutterBottom
            variant="h5"
            component="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Review;
