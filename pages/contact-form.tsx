"use client";

import { useState } from "react";
import Header from "../src/components/Header";

export default function FullWidthForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    semester: "",
    degree: "",
    mentorName: "",
    shirt: "",
    leetcode: "",
    linkedIn: "",
    github: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "phone",
      "email",
      "university",
      "semester",
      "degree",
      "shirt",
      "mentorName",
      "linkedIn",
      "github",
      "leetcode",
    ];

    const hasEmptyField = requiredFields.some((field) => !formData[field]);

    if (hasEmptyField) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      university: "",
      semester: "",
      degree: "",
      mentorName: "",
      shirt: "",
      leetcode: "",
      linkedIn: "",
      github: "",
      message: "",
    });
  };

  const fields = [
    { id: "name", label: "Name", type: "text", required: true },
    { id: "phone", label: "Phone", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "university", label: "University", type: "text", required: true },
    { id: "semester", label: "Semester", type: "text", required: true },
    { id: "degree", label: "Degree", type: "text", required: true },
    { id: "mentorName", label: "Mentor Name", type: "text", required: true },
    { id: "shirt", label: "Shirt", type: "text", required: true },
    { id: "leetcode", label: "LeetCode", type: "text", required: true },
    { id: "linkedIn", label: "LinkedIn", type: "text", required: true },
    { id: "github", label: "GitHub", type: "text", required: true },
  ];

  return (
    <div className="bg-primary">
      <Header />
      <div className="pt-10 pb-5 px-5">
        <div className="mb-5 pl-6">
          <span className="text-3xl md:text-4xl text-white uppercase font-bold">
            Information form
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <form onSubmit={handleSubmit} className="w-full lg:w-3/5 p-6 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                {fields.slice(0, 3).map(({ id, label, type, required }) => (
                  <div key={id} className="flex flex-col w-full md:w-1/3">
                    <label className="font-medium text-white" htmlFor={id}>
                      {label}
                      {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="p-2 border border-[#313131] text-white bg-transparent outline-none rounded-md"
                      required={required}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {fields.slice(3, 6).map(({ id, label, type, required }) => (
                  <div key={id} className="flex flex-col w-full md:w-1/3">
                    <label className="font-medium text-white" htmlFor={id}>
                      {label}
                      {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="p-2 border border-[#313131] text-white bg-transparent outline-none rounded-md"
                      required={required}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {fields.slice(6, 8).map(({ id, label, type, required }) => (
                  <div key={id} className="flex flex-col w-full md:w-1/2">
                    <label className="font-medium text-white" htmlFor={id}>
                      {label}
                      {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="p-2 border border-[#313131] text-white bg-transparent outline-none rounded-md"
                      required={required}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {fields.slice(8, 11).map(({ id, label, type, required }) => (
                  <div key={id} className="flex flex-col w-full md:w-1/3">
                    <label className="font-medium text-white" htmlFor={id}>
                      {label}
                      {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className="p-2 border border-[#313131] text-white bg-transparent outline-none rounded-md"
                      required={required}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="p-2 border border-[#313131] text-white bg-transparent outline-none rounded-md h-32"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white border bg-transparent px-4 py-2 rounded border-[#313131]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              src="images/info-1-removebg.png"
              className="h-[70%] w-full object-cover rounded-lg"
              alt="info"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
