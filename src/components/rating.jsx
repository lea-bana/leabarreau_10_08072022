import fullStar from "../assets/orangeStar.svg";
import emptyStar from "../assets/greyStar.svg";
import "../style/rating.css";

function Rating(props) {
  const range = [1, 2, 3, 4, 5];
  const ratingValue = props.ratingValue;
  return (
    <div className="rating">
      {range.map((rangeElem) =>
        ratingValue >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <img src={fullStar} alt="star" className="star" />
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <img src={emptyStar} alt="star-empty" className="star-empty" />
          </span>
        )
      )}
    </div>
  );
}

export default Rating;
