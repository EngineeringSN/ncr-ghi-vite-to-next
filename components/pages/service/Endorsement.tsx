
import BreadcrumbNav from '@/components/BreadcrumbNav';
import React from 'react';

const Endorsement = () => {
  const breadcrumbItems = [
    { label: "Service", href: "/service" },
    { label: "Endorsement" },
  ];
  return (
    <>
       <BreadcrumbNav items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securenow-blue mb-4">Endorsement Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage policy changes and updates efficiently with our dedicated endorsement services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">What are Endorsements?</h2>
            <p className="text-gray-600 mb-4">
              Endorsements are amendments or changes made to your existing insurance policy. 
              These can include adding or removing employees, updating coverage details, or 
              modifying policy terms to better suit your organization's evolving needs.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Employee additions and deletions</li>
              <li>Coverage modifications</li>
              <li>Address or contact information updates</li>
              <li>Policy term adjustments</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">Our Endorsement Process</h2>
            <p className="text-gray-600 mb-4">
              We've simplified the endorsement process to save you time and ensure accuracy.
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Submit your endorsement request through our portal or service team</li>
              <li>Our experts review and verify the information</li>
              <li>We process the request with the insurance provider</li>
              <li>You receive confirmation and updated documentation</li>
              <li>Changes are reflected in your policy immediately</li>
            </ol>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-securenow-blue mb-4">Benefits of Our Endorsement Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-securenow-blue mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Most endorsements are processed within 24-48 hours, ensuring minimal wait times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-securenow-blue mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team helps you understand the implications of changes to your policy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-securenow-blue mb-2">Digital Processing</h3>
              <p className="text-gray-600">Paperless endorsements with digital tracking and documentation.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6">Need to Make Changes to Your Policy?</h2>
          <button className="bg-securenow-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Request an Endorsement
          </button>
        </div>
      </div>
    </>
  );
};

export default Endorsement;
