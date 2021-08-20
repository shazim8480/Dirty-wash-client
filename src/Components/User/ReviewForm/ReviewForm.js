import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";

const ReviewForm = () => {
  const [loggedInUser] = useContext(UserContext);

  //set all the review data here //
  const [review, setReview] = useState({});

  // on blur update new info and set it to review//
  const handleBlur = (e) => {
    const newReviewInfo = { ...review };
    newReviewInfo[e.target.name] = e.target.value;
    setReview(newReviewInfo);
  };

  // on submit data ////////////
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      name: loggedInUser.name,
      designation: review.designation,
      message: review.message,
    };
    console.log(reviewData);

    fetch(`https://fierce-woodland-10829.herokuapp.com/addReview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData), // attention //
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    //redirect here //
  };

  return (
    <div className="flex-1 p-8">
      <h3 className="user-header">Add a Review</h3>

      {/* review form */}
      <div className="flex items-center justify-center">
        <form className="w-3/4 px-8 py-10 space-y-6 bg-green-100 rounded-lg shadow-sm md:px-16 md:w-3/5">
          <div className="text-center ">
            <div className="py-3 ">
              {/* logged in userName  */}
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full text-gray-900 placeholder-gray-400 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  defaultValue={loggedInUser.name}
                />
              </div>

              {/* user designation*/}
              <div className="mt-8">
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  required
                  className="relative block w-full text-gray-900 placeholder-gray-400 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Company's Name,Designation"
                  onBlur={handleBlur}
                />
              </div>

              {/*review message*/}
              <div className="mt-8">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                  className="relative block w-full h-40 text-gray-900 placeholder-gray-400 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Your Message"
                  onBlur={handleBlur}
                />
              </div>

              <div className="mt-8">
                <button
                  onClick={(e) => handleReviewSubmit(e)}
                  className="btn-brand"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
