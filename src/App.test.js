import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResults from "./components/SearchResults/SearchResults";
import EventListing from "./components/EventListing/EventListing";
import ArtistInfo from "./components/Cards/ArtistInfo/ArtistInfo";

const lastArtistSearched = localStorage.getItem("lastArtistSearched");

const mockArtist = {
  name: "sam",
  thumb_url: "image.com",
  facebook_page_url: "facebook.com"
};

it("App renders without crashing", () => {
  shallow(<App />);
});

it("Displays Search Box", () => {
  shallow(<SearchBox />);
});

if (lastArtistSearched) {
  it("Displays Results", () => {
    expect(shallow(<SearchResults />)).toHaveLength(1);
  });

  it("Displays Events", () => {
    expect(shallow(<EventListing />)).toHaveLength(1);
  });
}

it("Regular Search made in Search Box", () => {
  const wrapper = mount(<SearchBox />);
  wrapper.find("input").instance().value = "Billie";
  expect(wrapper.find("input").instance().value).toEqual("Billie");
  wrapper.find('[type="submit"]').simulate("click");
  expect(shallow(<SearchResults />)).toHaveLength(1);
  expect(shallow(<ArtistInfo artistData={mockArtist} />)).toHaveLength(1);
});

it("Irregular Search made in Search Box", () => {
  const wrapper = mount(<SearchBox />);
  wrapper.find("input").instance().value = "asdfsadf";
  expect(wrapper.find("input").instance().value).toEqual("asdfsadf");
  wrapper.find('[type="submit"]').simulate("click");
  expect(shallow(<SearchResults />)).toHaveLength(1);
});
