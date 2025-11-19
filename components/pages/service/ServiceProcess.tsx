
import React from 'react';

const ServiceProcess = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-securenow-blue mb-2">Our Service Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured approach to ensure consistent and high-quality service delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-securenow-blue hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Consultation</h3>
              <p className="text-gray-600">
                Understanding your specific requirements and objectives to design the right insurance solution.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Implementation</h3>
              <p className="text-gray-600">
                Seamless policy implementation with dedicated support for documentation and employee onboarding.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous assistance with policy management, claims processing, and employee queries.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Review & Optimize</h3>
              <p className="text-gray-600">
                Regular policy reviews and optimization recommendations based on utilization analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
