import React from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Support,
  AllinOne,
  Pricing,
  Footer,
  Setting,
} from "./components";

const App = () => {

  return (
    <>
      <Setting />
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
