import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dicrionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function showResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let word = keyword;
    let key = "2b03bfeb040ctdb92faf2af53622202o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(showResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
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
      <div>
        <span className="antonyms-color">antonyms</span>-
        <span className="synonyms-color">synonyms</span>
      </div>
    </div>
  );
}
