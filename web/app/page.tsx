'use client'
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";
import ProductsSlider from "./components/ProductsSlider";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
   <>
   <Navbar />
   <HeroCarousel />
   <ProductsSlider />
   <Statistics />
   <Services />
   {/*<Clients />
   <Footer />*/}
   </>
  );
}
