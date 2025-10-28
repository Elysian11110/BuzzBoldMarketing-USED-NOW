
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-black rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-black rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full p-3 border border-black rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
