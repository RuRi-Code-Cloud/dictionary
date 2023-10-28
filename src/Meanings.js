import React from "react";

export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="Meanings">
        <h5>{props.meanings.synonyms}</h5>
        <h5>{props.meanings.antonyms}</h5>
        <h3>{props.meanings.partOfSpeech}</h3>
        <p>{props.meanings.definition}</p>
        <em>{props.meanings.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
