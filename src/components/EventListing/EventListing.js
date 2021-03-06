import React, { useEffect, useState } from "react";
import axios from "axios";
import EventInfo from "../Cards/EventInfo/EventInfo";
import ArtistInfo from "../Cards/ArtistInfo/ArtistInfo";
import Container from "../Container/Container";
import BackIcon from "../../assets/icons/back-icon.svg";
import Spinner from "../Spinner/Spinner";
import "./EventListing.scss";

const EventListing = ({ artistName, artistData, setShowEvents }) => {
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://rest.bandsintown.com/artists/${artistName}/events?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`
      )
      .then(function(response) {
        setLoading(false);
        setEvents(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  if (loading === true) {
    return <Spinner />;
  } else {
    if (events) {
      return (
        <Container>
          <div
            className="back-to-results"
            onClick={() => {
              setShowEvents(false);
            }}
          >
            <p>
              <span>
                <img src={BackIcon} alt="Back Icon" />
              </span>
              Back To Results
            </p>
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
      return <p>Something Went Wrong</p>;
    }
  }
};

export default EventListing;
