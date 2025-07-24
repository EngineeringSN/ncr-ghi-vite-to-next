
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Phone, Calendar, Clock, FileText, Shield } from 'lucide-react';

const ServiceCalls = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-securenow-blue mb-4">Service Calls</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to expert support for all your group health insurance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">When to Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Our dedicated service team is available to assist you with various insurance-related needs:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-securenow-orange mt-1" />
                <span className="text-gray-600">Claims processing assistance and status updates</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-2 text-securenow-orange mt-1" />
                <span className="text-gray-600">Policy interpretation and coverage questions</span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-securenow-orange mt-1" />
                <span className="text-gray-600">Employee additions, deletions, or modifications</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-securenow-orange mt-1" />
                <span className="text-gray-600">Renewal planning and coverage adjustments</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-securenow-orange mt-1" />
                <span className="text-gray-600">Urgent medical assistance coordination</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">Contact Methods</h2>
            <p className="text-gray-600 mb-6">
              We offer multiple channels to ensure you can reach us in the way that's most convenient for you:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-securenow-orange pl-4">
                <h3 className="font-semibold text-securenow-blue">Dedicated Service Line</h3>
                <p className="text-xl font-medium">1800-XXX-XXXX</p>
                <p className="text-gray-500 text-sm">Available 24/7 for urgent matters</p>
              </div>
              
              <div className="border-l-4 border-securenow-orange pl-4">
                <h3 className="font-semibold text-securenow-blue">Email Support</h3>
                <p className="text-lg">service@securenow.in</p>
                <p className="text-gray-500 text-sm">Response within 4 business hours</p>
              </div>
              
              <div className="border-l-4 border-securenow-orange pl-4">
                <h3 className="font-semibold text-securenow-blue">Client Portal</h3>
                <p className="text-lg">Log in to your account</p>
                <p className="text-gray-500 text-sm">Submit tickets and track responses</p>
              </div>
              
              <div className="border-l-4 border-securenow-orange pl-4">
                <h3 className="font-semibold text-securenow-blue">Mobile App</h3>
                <p className="text-lg">Chat with service representatives</p>
                <p className="text-gray-500 text-sm">Available on iOS and Android</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6">The Service Call Process</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-securenow-blue transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-securenow-blue">1. Initial Contact</h3>
                  <p className="text-gray-600 mt-2">Reach out through your preferred channel. Provide your policy number and brief description of your request.</p>
                </div>
                <div className="md:hidden h-6 w-6 absolute left-0 top-1.5 bg-securenow-blue rounded-full"></div>
                <div className="hidden md:block h-6 w-6 absolute left-1/2 top-1.5 bg-securenow-blue rounded-full transform -translate-x-1/2"></div>
                <div className="md:pl-8">
                  <p className="text-gray-500 italic">Average response time: Within 2 hours</p>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-8">
                  <p className="text-gray-500 italic">All calls are recorded for quality assurance</p>
                </div>
                <div className="md:hidden h-6 w-6 absolute left-0 top-1.5 bg-securenow-blue rounded-full"></div>
                <div className="hidden md:block h-6 w-6 absolute left-1/2 top-1.5 bg-securenow-blue rounded-full transform -translate-x-1/2"></div>
                <div className="md:pl-8">
                  <h3 className="text-xl font-semibold text-securenow-blue">2. Case Assignment</h3>
                  <p className="text-gray-600 mt-2">Your request is assigned to the appropriate specialist based on the nature of your inquiry.</p>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-securenow-blue">3. Service Delivery</h3>
                  <p className="text-gray-600 mt-2">Our expert addresses your request, providing solutions or coordinating with insurers as needed.</p>
                </div>
                <div className="md:hidden h-6 w-6 absolute left-0 top-1.5 bg-securenow-blue rounded-full"></div>
                <div className="hidden md:block h-6 w-6 absolute left-1/2 top-1.5 bg-securenow-blue rounded-full transform -translate-x-1/2"></div>
                <div className="md:pl-8">
                  <p className="text-gray-500 italic">Complex issues typically resolved within 48 hours</p>
                </div>
              </div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-8">
                  <p className="text-gray-500 italic">All actions are documented in our system</p>
                </div>
                <div className="md:hidden h-6 w-6 absolute left-0 top-1.5 bg-securenow-blue rounded-full"></div>
                <div className="hidden md:block h-6 w-6 absolute left-1/2 top-1.5 bg-securenow-blue rounded-full transform -translate-x-1/2"></div>
                <div className="md:pl-8">
                  <h3 className="text-xl font-semibold text-securenow-blue">4. Follow-up</h3>
                  <p className="text-gray-600 mt-2">We check in to ensure your issue has been resolved to your satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6">Ready to Get Support?</h2>
          <button className="bg-securenow-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Service Team
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServiceCalls;
