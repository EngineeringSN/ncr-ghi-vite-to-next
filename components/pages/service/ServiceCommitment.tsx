
import React from 'react';

const ServiceCommitment = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Professional Service Team" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Our Service Commitment</h2>
            <p className="text-gray-600 mb-6">
              We believe that providing exceptional service is as important as offering the right insurance products. Our service philosophy is built on transparency, responsiveness, and a deep understanding of our clients' needs.
            </p>
            <p className="text-gray-600 mb-6">
              With dedicated service teams for each client, we ensure personalized attention and quick resolution of all insurance-related matters. From policy implementation to claims settlement, our team is with you at every step.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-securenow-gray rounded-md p-4">
                <h3 className="font-bold text-securenow-blue mb-2">98%</h3>
                <p className="text-sm text-gray-600">Client Retention Rate</p>
              </div>
              <div className="bg-securenow-gray rounded-md p-4">
                <h3 className="font-bold text-securenow-blue mb-2">15 min</h3>
                <p className="text-sm text-gray-600">Average Query Response Time</p>
              </div>
              <div className="bg-securenow-gray rounded-md p-4">
                <h3 className="font-bold text-securenow-blue mb-2">24/7</h3>
                <p className="text-sm text-gray-600">Claims Support</p>
              </div>
              <div className="bg-securenow-gray rounded-md p-4">
                <h3 className="font-bold text-securenow-blue mb-2">3000+</h3>
                <p className="text-sm text-gray-600">Satisfied Corporate Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCommitment;
