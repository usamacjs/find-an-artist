import React from "react";
import "./ArtistInfo.scss";
const ArtistInfo = ({ artistData, setShowEvents, showEventsButton }) => {
  const { name, thumb_url, facebook_page_url } = artistData;
  return (
    <div className="artist-info">
      <div className="artist-info__thumbnail">
        <img src={thumb_url} alt="" />
      </div>
      <div className="artist-info__details">
        <h1>{name}</h1>

        <a href={facebook_page_url} target="_blank" rel="noopener noreferrer">
          Facebook Page
        </a>
      </div>
      {showEventsButton ? (
        <button
          className="artist-info__button"
          onClick={() => {
            setShowEvents(true);
          }}
        >
          View Events
        </button>
      ) : null}
    </div>
  );
};

export default ArtistInfo;
