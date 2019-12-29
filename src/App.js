import React, { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import EventListing from "./components/EventListing/EventListing";
import SearchResults from "./components/SearchResults/SearchResults";
import Spinner from "./components/Spinner/Spinner";

import * as serviceWorker from "./serviceWorker";

function App() {
  const [artistName, setArtistName] = useState();
  const [artistData, setArtistData] = useState();
  const [showEvents, setShowEvents] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  return (
    <div>
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
            setDataLoading={setDataLoading}
          />
          {dataLoading ? (
            <Spinner />
          ) : (
            <SearchResults
              artistData={artistData}
              artistName={artistName}
              setShowEvents={setShowEvents}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}

serviceWorker.register();

export default App;
