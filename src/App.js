import React from "react";
import About from "./components/About";
import Developers from "./components/Developers";
import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscrible from "./components/Subscrible";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscrible />
      <Fotter />
    </div>
  );
};

export default App;
