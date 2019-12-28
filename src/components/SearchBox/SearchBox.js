import React, { useEffect } from "react";
import axios from "axios";
import Container from "../Container/Container";
import SearchIcon from "../../assets/icons/search-icon.svg";
import "./SearchBox.scss";

const SearchBox = ({ artistName, setArtistName, setArtistData }) => {
  const lastArtistSearched = localStorage.getItem("lastArtistSearched");
  useEffect(() => {
    if (lastArtistSearched) {
      setArtistName(lastArtistSearched);
      axios
        .get(
          `https://rest.bandsintown.com/artists/${lastArtistSearched}?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`
        )
        .then(function(response) {
          setArtistData(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("lastArtistSearched", artistName);
    axios
      .get(
        `https://rest.bandsintown.com/artists/${artistName}?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`
      )
      .then(function(response) {
        setArtistData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handleChange = e => {
    setArtistName(e.target.value);
  };
  return (
    <div className="search-box">
      <Container>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search artist"
            className="search-form__input"
            value={lastArtistSearched && lastArtistSearched}
            onChange={handleChange}
            required
          />
          <button type="submit" className="search-form__button">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </form>
      </Container>
    </div>
  );
};

export default SearchBox;
