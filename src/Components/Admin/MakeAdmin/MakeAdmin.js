import React from "react";
import AdminForm from "../AdminForm/AdminForm";
import SideBar from "../SideBar/SideBar";

const MakeAdmin = () => {
  return (
    <section className="md:min-h-screen md:flex">
      <SideBar />
      <AdminForm />
    </section>
  );
};

export default MakeAdmin;
