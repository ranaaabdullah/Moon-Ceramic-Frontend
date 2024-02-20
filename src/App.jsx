// import "./App.css";

// import { Suspense } from "react";
// import {
//   About,
//   Blog,
//   Cart,
//   Checkout,
//   Contact,
//   Home,
//   Login,
//   ProductDetails,
//   Shop,
//   SignUp,
// } from "./pages";
// import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { useSelector } from "react-redux";

// function App() {
//   const user = useSelector((state) => state.auth.user.user);
//   console.log({ user });
//   const cart = useSelector((state) => state.cart);
//   console.log({ cart });
//   const Products = useSelector((state) => state.product);
//   console.log({ Products });
//   return (
//     <div>
//       <Header />
//       <Suspense
//         fallback={
//           <div className="container flex items-center justify-center">
//             Loading...
//           </div>
//         }
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route
//             path="/productDetail/:productId"
//             element={<ProductDetails />}
//           />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signUp" element={<SignUp />} />
//         </Routes>
//       </Suspense>
//       <Footer />
//     </div>
//   );
// }

// export default App;

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
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./utils";
import { Loader } from "./components";

function App() {
  const loader = useSelector((state) => state.loader.loader);
  console.log({ loader });
  return (
    <div>
      <Loader visible={loader} />
      <Header />
      <Suspense
        fallback={
          <div className="container flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/cart" element={<PrivateRoutes Component={Cart} />} />
          <Route
            path="/checkout"
            element={<PrivateRoutes Component={Checkout} />}
          />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/productDetail/:productId"
            element={<ProductDetails />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
