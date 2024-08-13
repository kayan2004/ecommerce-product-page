import { useState, useRef } from "react";
import ThumbNails from "./ThumbNails";
const ProductImageDesktop = () => {
  const image1 = "/assets/image-product-1.jpg";
  const image2 = "/assets/image-product-2.jpg";
  const image3 = "/assets/image-product-3.jpg";
  const image4 = "/assets/image-product-4.jpg";

  const images = [image1, image2, image3, image4];

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal(); // Opens the dialog
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Closes the dialog
  };
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="product-image">
      <div className="product-image-container">
        <img src={images[currentImage]} onClick={openDialog}></img>
      </div>
      <ThumbNails
        onClick={(index) => {
          setCurrentImage(index);
        }}
      />
      <dialog className="modal-image" ref={dialogRef}>
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closeDialog}
          tabIndex="0"
          className="close-icon"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
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
        <ThumbNails
          onClick={(index) => {
            setCurrentImage(index);
          }}
        ></ThumbNails>
      </dialog>
    </div>
  );
};

export default ProductImageDesktop;
