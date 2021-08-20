import React from "react";
import ServiceManagement from "../ServiceManagement/ServiceManagement";
import SideBar from "../SideBar/SideBar";

const ManageServices = () => {
  return (
    <section className="md:min-h-screen md:flex">
      <SideBar />
      <ServiceManagement />
    </section>
  );
};

export default ManageServices;
