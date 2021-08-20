import React from "react";
import ActionsList from "./ActionsList";

const OrdersTable = ({ allOrders }) => {
  return (
    <>
      <tr key={allOrders.title}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-10 h-10 rounded-full"
                src={allOrders.photo}
                alt="img"
              />
            </div>

            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {allOrders.name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 ">
          <div className="text-sm text-gray-500 line-clamp-5">
            {allOrders.email}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 text-sm font-semibold ">
            {allOrders.title}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 text-sm font-semibold ">
            ${allOrders.price}
          </span>
        </td>

        <td className="text-left whitespace-nowrap">
          <ActionsList />
        </td>
      </tr>
    </>
  );
};

export default OrdersTable;
