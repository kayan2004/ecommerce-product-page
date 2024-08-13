import ProductPurchase from "./ProductPurchase";
const ProductDetails = () => {
  return (
    <div className="product-details">
      <h2>Sneaker Company</h2>
      <h3>Fall Limited Edition Sneakers</h3>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="prices">
        <strong id="current-price">$125.00</strong>
        <span id="discount">50%</span>
        <span id="original-price">$250.00</span>
      </div>
      <ProductPurchase />
    </div>
  );
};

export default ProductDetails;
