import React from "react";
import BookingData from "../BookingData/BookingData";
import UserNav from "../UserNav/UserNav";

const BookingList = () => {
  return (
    <section className="md:min-h-full">
      <UserNav />
      <BookingData />
    </section>
  );
};

export default BookingList;
