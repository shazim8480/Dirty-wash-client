import React from "react";
import footerImg from "../../../images/footer-bg.jpg";
import deliveryBoy from "../../../images/delivery-boy.png";

const Delivery = () => {
  const footerBg = {
    backgroundImage: `url(${footerImg})`,
  };
  return (
    <section>
      <div
        style={footerBg}
        className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80">
          <div className="z-10 md:flex md:items-center md:justify-center">
            {/* left div half */}
            <div className="pt-20 text-center md:pt-0 md:text-left">
              <h3 className="text-4xl font-extrabold text-white md:leading-normal md:ml-10 md:text-5xl">
                Home Delivery The <br /> Best Laundry Service
              </h3>
              <p className="px-3 py-12 text-lg font-light text-gray-200 md:ml-10 md:px-0 md:w-3/5 md:text-xl">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some.
              </p>
              {/* buttons */}
              <div className="flex items-center justify-center mt-4 text-base md:ml-10 md:mt-8 sm:flex md:justify-start">
                <div className="rounded-md shadow">
                  <button className="py-3 text-base font-semibold text-green-600 bg-green-200 border border-green-200 rounded-md px-7 hover:bg-transparent hover:text-gray-100 md:py-3 md:text-lg md:px-8">
                    Book Now
                  </button>
                </div>
                <div className="ml-3">
                  <button className="py-3 text-base font-semibold text-gray-100 bg-green-600 border border-green-600 rounded-md px-7 hover:bg-transparent hover:border-gray-200 hover:text-gray-100 md:py-3 md:text-lg md:px-8">
                    More Info
                  </button>
                </div>
              </div>
              {/* buttons */}
            </div>
            {/* right div img */}
            <div className="hidden md:block md:w-3/6">
              <img
                className="md:object-cover md:w-full md:h-screen"
                src={deliveryBoy}
                alt="delImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
