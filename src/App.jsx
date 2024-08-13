import {} from "react";
import "./App.css";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductDetails from "./components/ProductDetails";
import { MyProvider } from "./contexts/MyContext";
function App() {
  return (
    <MyProvider>
      <Header></Header>
      <hr className="header-break"></hr>
      <div className="product">
        <ProductImage></ProductImage>
        <ProductDetails></ProductDetails>
      </div>
    </MyProvider>
  );
}

export default App;
