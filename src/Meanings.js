import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="Meanings">
        <section>
          <h4>{props.meanings.partOfSpeech}</h4>
          <p>
            {" "}
            <strong>Definition:</strong> {props.meanings.definition}
          </p>
          <em>{props.meanings.example}</em>
          <p className="antonyms">{props.meanings.antonyms}</p>
          <Synonyms synonyms={props.meanings.synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
