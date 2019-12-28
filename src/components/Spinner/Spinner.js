import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="spinneroverlay">
        <div className="spinneroverlay__container" />
      </div>
    </React.Fragment>
  );
};

export default Spinner;
