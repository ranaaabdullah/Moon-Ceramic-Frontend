import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./pages";
import About from "./pages/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <About /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
