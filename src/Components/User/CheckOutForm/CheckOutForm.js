import React, { useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useParams } from "react-router";

const CheckOutForm = () => {
  // for modal purposes//////////
  // let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  //  //////////////////////////////////
  const [loggedInUser] = useContext(UserContext);
  const { id } = useParams();

  //finding the selected service id to show service details////
  const [orderedService, setOrderedService] = useState({});

  useEffect(() => {
    const url = `https://fierce-woodland-10829.herokuapp.com/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderedService(data));
  }, [id]);

  //handle confirm payment -- order data add to database///

  const handlePayment = (e) => {
    // copying all the ordered service data and logged in user's data in a single object and send it to database//
    const orderDetails = {
      ...orderedService,
      ...loggedInUser,
      orderTime: new Date(),
    };

    fetch(`https://fierce-woodland-10829.herokuapp.com/addOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails), // attention //
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="p-4 md:p-16 md:flex-1">
      <h3 className="admin-subSection-header">Book a Service</h3>

      <form className="px-8 pt-8 pb-8 space-y-6 rounded-lg shadow-sm bg-green-50">
        <div className="md:ml-3">
          <div className="py-3 md:w-3/5 ">
            {/* logged in userName  */}
            <div>
              <input
                id="user-name"
                name="name"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                defaultValue={loggedInUser.name}
              />
            </div>
            {/* logged in userEmail */}
            <div className="mt-5">
              <input
                id="user-email"
                name="email"
                type="email"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                defaultValue={loggedInUser.email}
              />
            </div>

            {/* selected service name */}
            <div className="mt-5">
              <input
                id="service name"
                name="serviceName"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                defaultValue={orderedService.title}
              />
            </div>

            <div className="mt-5 text-left text-gray-500 text-md">
              <h5>Pay With</h5>
            </div>

            {/* card or payPal checkbox */}
            <div className="flex items-center justify-start mt-3 ">
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  class="mt-0.5 mr-2 appearance-none border-gray-300 checked:bg-green-600 checked:border-none"
                />
                <h6 className="text-green-900 ">Credit Card</h6>
              </div>

              <div className="flex items-center justify-start ml-5">
                <input
                  type="checkbox"
                  class="mt-0.5 mr-2 appearance-none border-gray-300 checked:bg-green-600 checked:border-none"
                />
                <h6 className="text-green-900 ">PayPal</h6>
              </div>
            </div>

            {/* card number */}
            <div className="mt-5">
              <input
                id="card-number"
                name="cardNumber"
                type="number"
                // required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Card Number"
              />
            </div>

            {/* card date and CVC */}
            <div className="mt-5">
              <div className="flex items-center justify-evenly">
                <input
                  id="card-date"
                  name="cardDate"
                  type="number"
                  // required
                  className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="MM/YY"
                />
                <input
                  id="card-cvc"
                  name="cardCVC"
                  type="number"
                  // required
                  className="relative block w-full ml-5 text-gray-900 placeholder-gray-500 bg-white border-white rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="font-semibold text-gray-900">
                <h6>
                  Total Payable Amount :{" "}
                  <span className="font-bold text-green-900">
                    ${orderedService.price}
                  </span>
                </h6>
              </div>
              <div>
                <button onClick={() => handlePayment()} className="btn-brand">
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* modal confirmation */}
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

          
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment Confirmation
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Do you want to confirm your order? After confirmation, you
                    can't revert the action.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition> */}
      {/* modal confirmation */}
    </div>
  );
};

export default CheckOutForm;
