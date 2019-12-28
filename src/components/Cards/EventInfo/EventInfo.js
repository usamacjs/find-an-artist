import React from "react";
import "./EventInfo.scss";

const EventInfo = ({ eventInfo }) => {
  const { venue, datetime } = eventInfo;
  const { city, country, name } = venue;
  return (
    <div className="event-info">
      <h1>EVENT DETAILS</h1>
      <hr />
      <div className="eventinfo-wrapper">
        <div className="eventinfo-details">
          <h2>Country</h2>
          <p>{country}</p>
        </div>
        <div className="eventinfo-details">
          <h2>City</h2>
          <p>{city}</p>
        </div>
        <div className="eventinfo-details">
          <h2>Venue</h2>
          <p>{name}</p>
        </div>
        <div className="eventinfo-details">
          <h2>Date</h2>
          <p>{datetime.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
