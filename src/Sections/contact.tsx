import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Contact Information */}
      <div className="md:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-4 text-green-500" />
            <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4 text-green-500" />
            <p>+1 800 1236879</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-4 text-green-500" />
            <p>contact@example.com</p>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Eg. example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Eg. +1 800 000000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Write us a message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
