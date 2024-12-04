import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CTA: React.FC = () => (
  <section
    id="cta"
    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-16"
  >
    <div className="container mx-auto">
      <h3 className="text-4xl font-extrabold mb-4">
        Ready to Turn Your Vision into Reality?
      </h3>
      <p className="text-lg mb-6">
        Discover high-quality, professional printing solutions tailored just for you.
      </p>
      <a
        href="https://wa.me/087765061856"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:scale-105 duration-300"
      >
        <FaWhatsapp className="text-2xl mr-2" />
        Chat with Us on WhatsApp
      </a>
    </div>
  </section>
);

export default CTA;
