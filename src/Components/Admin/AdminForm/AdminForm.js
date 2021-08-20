import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminForm = () => {
  // STATE which contains admin info //
  const [admin, setAdmin] = useState({});

  //redirect route/////
  const history = useHistory();

  //handle blur function //
  const handleBlur = (e) => {
    const adminInfo = { ...admin };
    adminInfo[e.target.name] = e.target.value;
    setAdmin(adminInfo);
  };

  // handle admin submission//
  const handleAdmin = (redirect) => {
    // e.preventDefault();

    const adminData = { email: admin.email };
    console.log(adminData);

    fetch("https://fierce-woodland-10829.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => {
        console.log("server side response", res);
      })
      .catch((error) => {
        console.error(error);
      });

    //redirect to home after appointing admin//
    if (redirect) {
      history.push("/");
    }
  };

  return (
    <div className="flex-1 p-16">
      <h3 className="uppercase admin-subSection-header md:pt-0 md:text-left">
        Make Admin
      </h3>
      <form className="px-8 pt-8 space-y-6 rounded-lg shadow-sm pb-60 bg-green-50">
        <div className="grid justify-start grid-cols-2 gap-5 ">
          <div>
            <label
              for="Service Name"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="admin-email"
                name="email"
                type="email"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 bg-white border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter Admin E-mail"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="mt-11">
            <button onClick={() => handleAdmin()} className="btn-brand">
              Make Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
