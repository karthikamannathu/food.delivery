import React, { useState } from 'react'


export default function Contact() {
 
   
     

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-4">We'd love to hear from you! Reach out to us using the form below:</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                        <input type="text" id="name" name="name" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input type="email" id="email" name="email" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                        <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="py-2 px-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Submit</button>
                    </div>
                </form>
            </div>

            <div className="border-t border-b border-gray-300 py-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p className="mb-2">Phone: +1 (123) 456-7890</p>
        <p>Email: info@ifood.com</p>
      </div>

      <div className="border-t border-b border-gray-300 py-4">
        <h2 className="text-xl font-bold mb-2">Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
       
);
};

   
  

