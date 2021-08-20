import React from "react";
import About from "../About/About";
import Delivery from "../Delivery/Delivery";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Delivery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
