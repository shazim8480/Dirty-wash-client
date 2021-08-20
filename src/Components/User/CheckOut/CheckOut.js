import React from "react";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import UserSideBar from "../UserSideBar/UserSideBar";

const CheckOut = () => {
  return (
    <section className="md:flex">
      <UserSideBar />
      <CheckOutForm />
    </section>
  );
};

export default CheckOut;
