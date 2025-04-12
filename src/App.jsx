import React from "react";
import Navbar from "./sections/navbar/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import ProductCard from "./sections/ExploreSect/ProductCard.jsx";
import ExploreSect2 from "./sections/ExploreSect/ExploreSect2.jsx";
import StaticExplore from "./sections/ExploreSect/StaticExplore.jsx";

function App() {
  return <div>
    <Navbar />
    <Hero />
    <ProductCard/>
    <ExploreSect2/>
    <StaticExplore/>
  </div>;
}

export default App;
