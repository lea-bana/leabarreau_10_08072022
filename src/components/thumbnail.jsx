import "../style/thumbnail.css";

function Thumbnail({ image, title }) {
  return (
    <div className="thumb">
      <div src={image} alt="image" className="thumb-image"></div>
      <h2 className="thumb-title">{title}</h2>
    </div>
  );
}

export default Thumbnail;
