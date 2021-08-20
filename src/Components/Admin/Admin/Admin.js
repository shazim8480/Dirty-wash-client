import React from "react";
import OrdersList from "../OrdersList/OrdersList";
import SideBar from "../SideBar/SideBar";

const Admin = () => {
  return (
    <section className="md:min-h-screen md:flex">
      <SideBar />
      <OrdersList />
    </section>
  );
};

export default Admin;
