import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Details */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <div className="mb-4 flex items-start">
            <FaMapMarkerAlt className="text-blue-600 mr-4 text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Our Location</h4>
              <p>123 Cricket Lane, Sports City, CA</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <FaPhoneAlt className="text-blue-600 mr-4 text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Phone Number</h4>
              <p>+1 123-456-7890</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <FaEnvelope className="text-blue-600 mr-4 text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Email Address</h4>
              <p>contact@cricketleague.com</p>
            </div>
          </div>
        </div>

       
        <div className="bg-gray-50 p-6 rounded-md">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          {isSubmitted ? (
            <div className="text-green-600 font-bold text-lg">Thank you for your message! We will get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-600">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                />
                {errors.message && <p className="text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

