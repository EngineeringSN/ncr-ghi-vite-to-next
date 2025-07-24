
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const SLA = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securenow-blue mb-4">Service Level Agreements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality service and timely responses, backed by clearly defined SLAs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6">Our Service Commitments</h2>
          <p className="text-gray-600 mb-4">
            At SecureNow, we believe in transparency and accountability. Our Service Level Agreements 
            clearly outline what you can expect from us and when. We hold ourselves to these standards 
            and continuously monitor our performance to ensure we're delivering on our promises.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-securenow-blue text-white">
                  <th className="py-3 px-4 text-left">Service</th>
                  <th className="py-3 px-4 text-left">Response Time</th>
                  <th className="py-3 px-4 text-left">Resolution Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">General Inquiries</td>
                  <td className="py-3 px-4">Within 4 hours</td>
                  <td className="py-3 px-4">Same business day</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Policy Endorsements</td>
                  <td className="py-3 px-4">Within 8 hours</td>
                  <td className="py-3 px-4">Within 48 hours</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Claims Assistance</td>
                  <td className="py-3 px-4">Within 2 hours</td>
                  <td className="py-3 px-4">Within 24 hours</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Technical Support</td>
                  <td className="py-3 px-4">Within 4 hours</td>
                  <td className="py-3 px-4">Within 24 hours</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Emergency Assistance</td>
                  <td className="py-3 px-4">Within 30 minutes</td>
                  <td className="py-3 px-4">Within 4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">Performance Metrics</h2>
            <p className="text-gray-600 mb-4">
              We track and report on our performance against these SLAs monthly, with a commitment to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>98% on-time response rate</li>
              <li>95% resolution within promised timeframes</li>
              <li>Customer satisfaction rating above 4.8/5</li>
              <li>Transparent reporting of metrics</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">Service Guarantee</h2>
            <p className="text-gray-600 mb-4">
              If we fail to meet our SLA commitments, we provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Priority escalation to senior management</li>
              <li>Detailed explanation of the issue</li>
              <li>Concrete plan for resolution</li>
              <li>Preventive measures to avoid recurrence</li>
              <li>Compensation as per our service agreement terms</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-securenow-blue mb-4">SLA Review Process</h2>
          <p className="text-gray-600 mb-6">
            We continuously review and improve our service levels based on customer feedback and changing business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">Quarterly Reviews</h3>
              <p className="text-gray-600">Regular assessment of SLA performance with detailed reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">Customer Feedback</h3>
              <p className="text-gray-600">Incorporating your input to refine our service standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">Ongoing optimization of processes to enhance service delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">Annual Revision</h3>
              <p className="text-gray-600">Yearly updates to SLAs reflecting evolving business needs.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6">Want to Learn More About Our Service Commitments?</h2>
          <button className="bg-securenow-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Request Detailed SLA
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SLA;
