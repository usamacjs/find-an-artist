import React, { useEffect } from "react";
import ArtistInfo from "../Cards/ArtistInfo/ArtistInfo";
import Container from "../Container/Container";
import "./SearchResults.scss";

const SearchResults = ({ artistData, artistName, setShowEvents }) => {
  useEffect(() => {}, [artistData]);
  const lastArtistSearched = localStorage.getItem("lastArtistSearched");
  if (artistData && !artistData.error) {
    const { name } = artistData;
    return (
      <Container>
        <p className="search-title">
          <strong>1</strong> Result found for your last search "
          <strong>{lastArtistSearched}</strong>"
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
  if (
    lastArtistSearched ||
    (artistData && (artistData == "" || artistData.error))
  ) {
    return (
      <Container>
        <p className="search-title">
          <strong>0</strong> Result found for your last search "
          <strong>{lastArtistSearched && lastArtistSearched}</strong>"
        </p>
      </Container>
    );
  } else {
    return null;
  }
};

export default SearchResults;
