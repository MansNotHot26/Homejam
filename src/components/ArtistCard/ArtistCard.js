import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ArtistCard.css";
import Arrow from "../../assets/Arrow.png";
import Ticket from "../../assets/Ticket.png";
import TicketOpen from "../../assets/Ticket-open.png";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

function ArtistCard({ image, title, genre }) {
  const [ticket, setTicket] = useState(false);
  const handleTicket = () => {
    setTicket(!ticket);
  };
  return (
    <div className="artist-card-container">
      <Card>
        <CardActionArea>
          <CardMedia
            className="artist-card-image"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography
              className="artist-card-label"
              gutterBottom
              variant="h5"
              component="h2">
              {genre}
            </Typography>
            <div className="artist-card-title">{title}</div>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-actions">
          <Link className="more-info-link">
            More Info <img src={Arrow} alt="arrow" />
          </Link>
          <Divider
            className="card-actions-divider"
            orientation="vertical"
            flexItem
            light
          />
          <Button size="small" onClick={handleTicket} color="primary">
            {ticket ? (
              <img src={Ticket} alt="ticket" />
            ) : (
              <img src={TicketOpen} alt="ticket" />
            )}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ArtistCard;
