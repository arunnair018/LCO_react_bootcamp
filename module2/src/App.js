import React from "react";

import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
