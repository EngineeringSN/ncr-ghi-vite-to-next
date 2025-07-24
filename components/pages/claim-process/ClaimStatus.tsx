
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const ClaimStatus = () => {
  const statusTypes = [
    {
      icon: Clock,
      status: 'Under Review',
      description: 'Your claim is being processed and reviewed by our team.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: AlertCircle,
      status: 'Additional Documents Required',
      description: 'We need more information or documents to process your claim.',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: CheckCircle,
      status: 'Approved',
      description: 'Your claim has been approved and payment is being processed.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: XCircle,
      status: 'Rejected',
      description: 'Unfortunately, your claim has been rejected. Contact us for details.',
      color: 'bg-red-100 text-red-700'
    },
  ];

  const trackingMethods = [
    {
      icon: Search,
      title: 'Online Portal',
      description: 'Log into your SecureNow portal using your policy number and check real-time claim status.',
      steps: [
        'Visit the SecureNow member portal',
        'Enter your policy number and registered mobile number',
        'Navigate to "Claims" section',
        'View detailed status and timeline'
      ]
    },
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak directly with our claims team for immediate status updates.',
      steps: [
        'Call our dedicated claims helpline: +91 9696683999',
        'Provide your policy number and claim reference',
        'Get instant status update from our team',
        'Schedule callback if needed'
      ]
    },
    {
      icon: Mail,
      title: 'Email Inquiry',
      description: 'Send an email inquiry for detailed claim status information.',
      steps: [
        'Email us at claims@securenow.in',
        'Include policy number and claim reference',
        'Mention your registered mobile number',
        'Receive detailed status within 24 hours'
      ]
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Get quick claim status updates through our WhatsApp support.',
      steps: [
        'Message us on WhatsApp: +91 9696683999',
        'Share your claim reference number',
        'Get instant status updates',
        'Receive documents and notifications'
      ]
    },
  ];

  const requiredInfo = [
    'Policy Number',
    'Claim Reference Number',
    'Insured Person Name',
    'Date of Admission/Treatment',
    'Hospital Name',
    'Registered Mobile Number'
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Claim Status Tracking</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed about your claim progress with real-time updates and multiple tracking options.
          </p>
        </div>
      </section>

      {/* Claim Status Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Understanding Claim Status</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the different status types you might see when tracking your claim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statusTypes.map((status, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className={`${status.color} p-4 rounded-full inline-flex items-center justify-center mb-4`}>
                  <status.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-securenow-blue">{status.status}</h3>
                <p className="text-gray-600 text-sm">{status.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Methods */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">How to Track Your Claim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple convenient ways to check your claim status and get updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trackingMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-securenow-blue text-white p-3 rounded-full mr-4">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-securenow-blue">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <h4 className="font-bold text-securenow-darkgray mb-3">Steps:</h4>
                <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-securenow-blue rounded-lg shadow-lg text-white p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Information Required for Tracking</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Keep the following information handy when tracking your claim status for faster assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {requiredInfo.map((info, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <CheckCircle className="h-6 w-6 text-securenow-orange mx-auto mb-2" />
                  <p className="font-medium">{info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Quick Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Helpful tips to ensure smooth claim status tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 text-securenow-blue p-3 rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-securenow-blue">Keep Reference Numbers</h3>
              <p className="text-gray-600">Always save your claim reference number and policy number for quick tracking.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-securenow-blue">Regular Updates</h3>
              <p className="text-gray-600">Check your claim status regularly and respond promptly to any requests for additional information.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-orange-100 text-orange-700 p-3 rounded-full w-fit mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-securenow-blue">Stay Connected</h3>
              <p className="text-gray-600">Keep your contact information updated to receive timely notifications about your claim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Claim?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our dedicated claims team is available 24/7 to assist you with any queries or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+91 9696683999"
              className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Call Claims Helpline
            </a>
            <a
              href="mailto:claims@securenow.in"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Email Claims Team
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ClaimStatus;
