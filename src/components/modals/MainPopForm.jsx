import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

export default function ApplyNowModal({ isOpen, setIsOpen }) {
  
  const [formData, setFormData] = useState({
    ownerName: "",
    mobileNumber: "",
    email: "",
    pinCode: "",
    postOffice: "",
    district: "",
    state: "",
    country: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Automatically fetch address data when pincode changes
    if (name === "pinCode" && value.length === 6) {
      fetchAddress(value);
    }
  };

  const fetchAddress = async (pinCode) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = response.data[0];
      if (data.Status === "Success") {
        const postOffice = data.PostOffice[0];
        setFormData((prevData) => ({
          ...prevData,
          district: postOffice.District,
          state: postOffice.State,
          country: postOffice.Country,
        }));
      } else {
        alert("Invalid Pincode. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Failed to fetch address. Please try again.");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/apply",
        formData
      );
      alert("Application submitted successfully!");
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an issue submitting the application.");
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-200 p-8 shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-indigo-900 text-center mb-4"
                  >
                    Apply Now | आवेदन करें
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      {
                        name: "ownerName",
                        label: "Property Owner Name",
                        placeholder: "Enter your full name",
                      },
                      {
                        name: "mobileNumber",
                        label: "Mobile Number",
                        placeholder: "Enter your 10-digit number",
                      },
                      {
                        name: "email",
                        label: "Email ID",
                        placeholder: "Enter a valid email address",
                      },
                      {
                        name: "pinCode",
                        label: "Site Location Pin Code",
                        placeholder: "Enter the pin code",
                      },
                    //   {
                    //     name: "postOffice",
                    //     label: "Post Office Name",
                    //     placeholder: "Enter the post office name",
                    //   },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-indigo-800">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="mt-1 block py-4 px-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    ))}
                    {["district", "state", "country"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-indigo-800">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type="text"
                          name={field}
                          value={formData[field]}
                          readOnly
                          className="mt-1 py-4 px-2 block w-full rounded-lg border-gray-300 shadow-sm bg-gray-100 sm:text-sm"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-indigo-800">
                        Complete Site Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter the full address, including landmarks"
                        className="mt-1 my-4 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 px-2 bg-gradient-to-r from-green-400 to-teal-600 text-white  rounded-lg shadow-lg hover:opacity-90 transition"
                      disabled={loading}
                    >
                      {loading ? "Fetching Address..." : "Submit Application"}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
