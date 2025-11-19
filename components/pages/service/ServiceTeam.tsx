import React from 'react';
const ServiceTeam = () => {
  return <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-securenow-blue mb-2">Meet Our Service Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to providing exceptional service for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-securenow-blue">Rajan</h3>
              <p className="text-gray-500 mb-4">Head of Client Services</p>
              
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-securenow-blue">Poonam</h3>
              <p className="text-gray-500 mb-4">Senior Manager</p>
              
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-securenow-blue">Isha</h3>
              <p className="text-gray-500 mb-4">Manager</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceTeam;