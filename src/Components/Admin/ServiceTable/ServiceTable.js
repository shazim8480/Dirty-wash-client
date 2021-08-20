import React from "react";

const ServiceTable = ({ service }) => {
  // delete service on click delete button //////////////////////////////////
  const deleteService = (id) => {
    const url = `https://fierce-woodland-10829.herokuapp.com/deleteService/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <>
      <tr key={service.title}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-10 h-10 rounded-full"
                src={service.imageURL}
                alt="img"
              />
            </div>

            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {service.title}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 ">
          <div className="text-sm text-gray-500 line-clamp-5">
            {service.description}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 text-xs font-semibold ">
            ${service.price}
          </span>
        </td>

        <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
          <button
            onClick={() => deleteService(service._id)}
            className="px-2.5 py-1 font-semibold text-sm bg-red-500 rounded-md text-red-50 active:bg-red-700"
          >
            DELETE
          </button>
        </td>
      </tr>
    </>
  );
};

export default ServiceTable;
