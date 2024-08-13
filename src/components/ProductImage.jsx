import { useMediaQuery } from "react-responsive";
import ProductImageMobile from "./ProductImageMobile";
import ProductImageDesktop from "./ProductImageDesktop";
const ProductImage = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <>
      {isDesktopOrLaptop && <ProductImageDesktop />}
      {isMobile && <ProductImageMobile />}
    </>
  );
};

export default ProductImage;
