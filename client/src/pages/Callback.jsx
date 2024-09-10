import React, { useState } from 'react'

const Callback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
      };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Send Us a Message</h2>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1 mb-4 md:mb-0">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            placeholder="Your name"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            placeholder="Your email"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="number"
            id="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            placeholder="Your Number"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          placeholder="Your message"
          rows="10"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-red-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-950 focus:outline-none focus:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  </div>
);
};

export default Callback