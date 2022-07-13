import "../style/thumbnail.css";

function Thumbnail({ image, title }) {
  return (
    <div className="thumb">
      <img src={image} alt="img" className="thumb-image" />
      <h2 className="thumb-title">{title}</h2>
    </div>
  );
}

export default Thumbnail;
