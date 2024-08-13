import Counter from "./Counter";
import CartButton from "./CartButton";
import { useState } from "react";
const ProductPurchase = () => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <div className="shopbuttons-container">
      <Counter
        currentValue={currentValue}
        onClick={(char) => {
          if (char === "+") {
            setCurrentValue(currentValue + 1);
          } else {
            if (currentValue > 0) {
              setCurrentValue(currentValue - 1);
            }
          }
        }}
      ></Counter>
      <CartButton currentValue={currentValue}></CartButton>
    </div>
  );
};

export default ProductPurchase;
