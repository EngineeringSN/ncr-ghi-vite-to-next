
import React from 'react';

const ServiceHeader = () => {
  return (
    <section className="bg-securenow-blue text-white py-16 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Service Background - Indian Business Team" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl max-w-3xl mx-auto">Comprehensive service support to ensure a seamless insurance experience for businesses in Delhi NCR.</p>
      </div>
    </section>
  );
};

export default ServiceHeader;
