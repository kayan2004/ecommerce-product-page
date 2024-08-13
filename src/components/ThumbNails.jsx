import PropTypes from "prop-types";
const ThumbNails = ({ onClick }) => {
  const thumbnails = [
    "/assets/image-product-1-thumbnail.jpg",
    "/assets/image-product-2-thumbnail.jpg",
    "/assets/image-product-3-thumbnail.jpg",
    "/assets/image-product-4-thumbnail.jpg",
  ];
  return (
    <div className="thumbnails-container">
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          className="thumbnail-image"
          src={thumbnail}
          tabIndex={0}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
ThumbNails.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ThumbNails;
