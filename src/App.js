import React, { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import EventListing from "./components/EventListing/EventListing";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [artistName, setArtistName] = useState();
  const [artistData, setArtistData] = useState();
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div>
      {/* <button
        onClick={() => {
          setShowEvents(!showEvents);
        }}
      >
        click
      </button> */}
      {showEvents ? (
        <EventListing
          artistName={artistName}
          artistData={artistData}
          setShowEvents={setShowEvents}
        />
      ) : (
        <React.Fragment>
          <SearchBox
            artistName={artistName}
            setArtistName={setArtistName}
            setArtistData={setArtistData}
          />

          <SearchResults
            artistData={artistData}
            artistName={artistName}
            setShowEvents={setShowEvents}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
