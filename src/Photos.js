import React from "react";
import "./Photos.css";
import background from "./background.jpg";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section
        className="Photos"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>{" "}
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
