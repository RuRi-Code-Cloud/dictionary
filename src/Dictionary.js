import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dicrionary() {
  let [keyword, setKeyword] = useState("");

  function showResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus="on" onChange={keywordChange} />
      </form>
    </div>
  );
}
