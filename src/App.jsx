import "./App.css";

import { Suspense } from "react";
import {
  About,
  Blog,
  Cart,
  Checkout,
  Contact,
  Home,
  Login,
  ProductDetails,
  Shop,
  SignUp,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Suspense
        fallback={
          <div className="container flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/productDetail" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
