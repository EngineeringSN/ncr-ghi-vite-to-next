
import React from 'react';
import { Phone } from 'lucide-react';

const ServiceCTA = () => {
  return (
    <section className="bg-securenow-orange text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Our Service Excellence</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join the 3000+ businesses in India that trust SecureNow for their insurance needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://securenow.in/ghi-calculator"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get a Quote
          </a>
          <a
            href="tel:+91 9696683999"
            className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
