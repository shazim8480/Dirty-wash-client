import React, { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  // saving form information
  const [serviceInfo, setServiceInfo] = useState({});

  //SET image URL //
  const [imageURL, setImageURL] = useState(null);

  // on blur update new info and set it to serviceInfo//
  const handleBlur = (e) => {
    const newServiceInfo = { ...serviceInfo };
    newServiceInfo[e.target.name] = e.target.value;
    setServiceInfo(newServiceInfo);
  };

  // for image handling //////////////////////////////////
  const handleImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3bf9f984fce2aa49a2b88d789bf4a6ec");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //form submit data//
  const handleSubmit = () => {
    const serviceData = {
      title: serviceInfo.title,
      price: serviceInfo.price,
      description: serviceInfo.description,
      imageURL: imageURL,
    };
    console.log(serviceData);

    fetch("https://fierce-woodland-10829.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => {
        console.log("server side response", res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex-1 p-16">
      <h2 className="uppercase admin-subSection-header md:pt-0 md:text-left">
        Add Service
      </h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="p-8 space-y-6 rounded-lg shadow-sm bg-green-50"
      >
        <div className="grid justify-start grid-cols-2 gap-10">
          <div>
            <label
              htmlFor="Service Title"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Service Name
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter Title"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Price"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Price (USD)
            </label>
            <div className="mt-1">
              <input
                id="price"
                name="price"
                type="number"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter Price"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Description"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Service Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter Description"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="file"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Upload Image
            </label>
            <div className="mt-1">
              <input
                type="file"
                onChange={handleImageUpload}
                required
                className="relative block w-full"
                placeholder="Upload Image"
              />
            </div>
          </div>

          <div>
            <button className="btn-brand">Save Data</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
