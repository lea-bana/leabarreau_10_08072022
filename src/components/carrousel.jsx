import { useState } from "react";
import arrowright from "../assets/arrowright.svg";
import arrowleft from "../assets/arrowleft.svg";
import "../style/carrousel.css";

function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  function nextPicture() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevPicture() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (pictures.length > 1) {
    return (
      <section className="carrousel-container">
        <img
          src={arrowleft}
          alt="previous"
          className="arrow-left"
          onClick={prevPicture}
        />
        <img
          src={arrowright}
          alt="next"
          className="arrow-right"
          onClick={nextPicture}
        />
        {pictures.map((picture, index) => {
          return (
            <div
              key={picture}
              className={index === current ? "picture show" : "picture"}
            >
              {index === current && (
                <img src={picture} alt="carrousel" className="carrousel-img" />
              )}
              <div className="index">
                {current + 1}/{pictures.length}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
  if (pictures.length <= 1) {
    return (
      <section className="carrousel-container">
        {pictures.map((picture, index) => {
          return (
            <div
              key={picture}
              className={index === current ? "picture show" : "picture"}
            >
              {index === current && (
                <img src={picture} alt="carrousel" className="carrousel-img" />
              )}
              <div className="index">
                {current + 1}/{pictures.length}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
export default Carrousel;
