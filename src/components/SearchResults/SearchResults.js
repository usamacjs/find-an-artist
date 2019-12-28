import React from "react";
import ArtistInfo from "../Cards/ArtistInfo/ArtistInfo";
import Container from "../Container/Container";
import "./SearchResults.scss";

const SearchResults = ({ artistData, artistName, setShowEvents }) => {
  if (artistData) {
    const { name } = artistData;
    return (
      <Container>
        <p className="search-title">
          <strong>1</strong> Result found for "<strong>{name}</strong>"
        </p>
        <div className="search-results">
          <ArtistInfo
            artistData={artistData}
            setShowEvents={setShowEvents}
            showEventsButton
          />
        </div>
      </Container>
    );
  }
  if (artistData === "") {
    return (
      <Container>
        <p className="search-title">
          <strong>0</strong> Result found for "
          <strong>{localStorage.getItem("lastArtistSearched")}</strong>"
        </p>
      </Container>
    );
  } else {
    return null;
  }
};

export default SearchResults;
