import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Working from "./components/Working";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Working />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
