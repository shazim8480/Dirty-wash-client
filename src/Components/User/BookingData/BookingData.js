import React, { useState, useEffect, useContext } from "react";
import BookingDataCard from "../BookingDataCard/BookingDataCard";
import { UserContext } from "../../../App";

const BookingData = () => {
  const [loggedInUser] = useContext(UserContext);
  //declare booking data state
  const [bookingCard, setBookingCard] = useState([]);
  //set booking data into state
  useEffect(() => {
    fetch(
      "https://fierce-woodland-10829.herokuapp.com/userOrders?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          contentType: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setBookingCard(data));
  }, [loggedInUser.email]);

  return (
    <section className="flex-1 p-8">
      <div className="relative">
        <h3 className="user-header">Ordered Services</h3>
      </div>

      {/* div for ordered service cards */}
      {loggedInUser.email ? (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
          {/* map here */}
          {bookingCard.map((dataCard) => (
            <BookingDataCard dataCard={dataCard} key={dataCard.title} />
          ))}
        </div>
      ) : (
        <div>
          <p
            style={{ top: "60%", left: "44%" }}
            className="absolute text-xl font-light text-green-600 sm:top-2/3 sm:left-42"
          >
            No Active Orders :'('
          </p>
        </div>
      )}

      {/* div for ordered service cards */}
    </section>
  );
};

export default BookingData;
