import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Spec from "../components/home/Spec";
import CoreFeatures from "../components/home/CoreFeatures";
import Gallery from "../components/home/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-clip">
      <Navbar />
      <Hero />
      <About />
      <Spec />
      <CoreFeatures />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
