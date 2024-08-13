import { useState } from "react";

const ProductImageMobile = () => {
  const image1 = "/assets/image-product-1.jpg";
  const image2 = "/assets/image-product-2.jpg";
  const image3 = "/assets/image-product-3.jpg";
  const image4 = "/assets/image-product-4.jpg";

  const images = [image1, image2, image3, image4];

  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);
  return (
    <div className="product-image-container">
      <button
        className="previous-button"
        onClick={() => {
          if (currentImage === 0) setCurrentImage(3);
          else setCurrentImage(currentImage - 1);
        }}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <img src={images[currentImage]}></img>
      <button
        className="next-button"
        onClick={() => {
          setCurrentImage((currentImage + 1) % 4);
        }}
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductImageMobile;
