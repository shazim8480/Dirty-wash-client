import React, { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://fierce-woodland-10829.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className="pb-28 bg-green-50 main-section">
      <div className="text-center">
        <h3 className="section-header">Our Services</h3>
        <h5 className="my-4 font-mono text-2xl font-semibold text-center text-gray-600 ">
          Popularity Defines our Identity
        </h5>
      </div>
      {/* service info */}
      <div className="mx-12 mt-10 md:mx-auto md:gap-6 md:grid md:grid-cols-4 md:place-content-center">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
