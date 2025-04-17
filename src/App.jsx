import React from "react";
import Navbar from "./sections/navbar/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import ProductCard from "./sections/ExploreSect/ProductCard.jsx";
import ExploreSect2 from "./sections/ExploreSect/ExploreSect2.jsx";
import StaticExplore from "./sections/ExploreSect/StaticExplore.jsx";
import ProductCard2 from "./sections/ExploreSect/ProductCard2.jsx";
import FooterUpper from "./sections/Footer/FooterUpper.jsx";
import FooterLower from "./sections/Footer/FooterLower.jsx";
import MobileFooter from "./sections/Footer/MobileFooter.jsx";
import Copyright from '../src/components/Copyright.jsx'
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return <div>
    <Navbar />
    <Hero />
    <ProductCard />
    <ExploreSect2 />
    <StaticExplore />
    <ProductCard2 />
    <FooterUpper />
    {isMobile ? <MobileFooter /> : <FooterLower />}
    <Copyright />
  </div>;
}

export default App;
