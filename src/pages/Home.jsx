import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Spec from "../components/home/Spec";
import CoreFeatures from "../components/home/CoreFeatures";
import Gallery from "../components/home/Gallery";
import Footer from "../components/Footer";
import DisclaimerModal from "../components/DisclaimerModal";

const Home = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Fungsi untuk memicu muat ulang animasi tanpa reload browser
  const triggerAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="overflow-clip">
      <DisclaimerModal onAccept={triggerAnimation}/>
      <main key={animationKey}>
        <Navbar />
        <Hero />
        <About />
        <Spec />
        <CoreFeatures />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
