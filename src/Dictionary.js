import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import background from "./background.jpg";

export default function Dicrionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function showDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function showPhotoResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let word = keyword;
    let key = "2b03bfeb040ctdb92faf2af53622202o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(showDictionaryResponse);

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${key}`;
    axios.get(photoApiUrl).then(showPhotoResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form onSubmit={search} className="search-bar">
          <input
            type="search"
            placeholder="Choose a word"
            autoFocus="on"
            onChange={keywordChange}
          />
        </form>
        <div className="suggestion">
          {" "}
          <strong>Try</strong>: sunset, wine, happy, together..
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
      <div>
        <span className="antonyms-color">antonyms</span>-
        <span className="synonyms-color">synonyms</span>
      </div>
    </div>
  );
}
