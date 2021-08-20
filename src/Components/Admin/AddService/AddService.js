import React from "react";
import ServiceForm from "../ServiceForm/ServiceForm";
import SideBar from "../SideBar/SideBar";

const AddService = () => {
  return (
    <section className="md:min-h-screen md:flex">
      <SideBar />
      <ServiceForm />
    </section>
  );
};

export default AddService;
