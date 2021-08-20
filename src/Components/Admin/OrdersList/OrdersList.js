import React, { useState, useEffect } from "react";
import OrdersTable from "../OrdersTable/OrdersTable";

const OrdersList = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(`https://fierce-woodland-10829.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllOrders(data);
      });
  }, []);

  return (
    <div className="md:flex-1 md:p-16">
      <h2 className="uppercase admin-subSection-header md:pt-0 md:text-left">
        Orders List
      </h2>

      {/* table to manage all services  */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Service Requested
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allOrders.map((allOrders) => (
                    <OrdersTable allOrders={allOrders} key={allOrders.title} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
