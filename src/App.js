import React from "react";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/skills";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Skills />
    </div>

  );
}

export default App;
