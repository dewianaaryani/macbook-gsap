import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/three/Performance";
import Features from "./components/three/Features";
import Highlight from "./components/three/Highlight";
import Footer from "./components/three/Footer";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <div className="h-screen" />
      <Performance />
      <Features />
      <Highlight />
      <Footer />
    </main>
  );
};

export default App;
