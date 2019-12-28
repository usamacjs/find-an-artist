import React, { useEffect, useState } from "react";
import axios from "axios";
import EventInfo from "../Cards/EventInfo/EventInfo";
import ArtistInfo from "../Cards/ArtistInfo/ArtistInfo";
import Container from "../Container/Container";
import BackIcon from "../../assets/icons/back-icon.svg";
import "./EventListing.scss";

const EventListing = ({ artistName, artistData, setShowEvents }) => {
  const [events, setEvents] = useState();

  useEffect(() => {
    axios
      .get(
        `https://rest.bandsintown.com/artists/${artistName}/events?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`
      )
      .then(function(response) {
        setEvents(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  if (events) {
    return (
      <Container>
        <div
          className="back-to-results"
          onClick={() => {
            setShowEvents(false);
          }}
        >
          <img src={BackIcon} alt="" />
          <p>Back To Results</p>
        </div>
        <div className="artist-data">
          <ArtistInfo artistData={artistData} />
        </div>

        <p>
          <strong>{events.length}</strong> upcoming events
        </p>
        <div className="eventlisting">
          {events.map((eventInfo, index) => {
            return <EventInfo eventInfo={eventInfo} key={index} />;
          })}
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default EventListing;
