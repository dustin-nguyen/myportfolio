// src/App.js

import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills";
import Landing from "./components/Landing";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-front flex-col">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
