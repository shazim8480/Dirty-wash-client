import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import UserNav from "../UserNav/UserNav";

const Review = () => {
  return (
    <section className="md:min-h-full">
      <UserNav />
      <ReviewForm />
    </section>
  );
};

export default Review;
