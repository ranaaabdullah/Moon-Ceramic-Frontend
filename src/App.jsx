import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./pages";
import About from "./pages/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/productDetails/ProductDetails";
import "./styles.css";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      {/* <Home />   */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
      {/* <Shop /> */}
      {/* <ProductDetail /> */}
      <Cart />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
