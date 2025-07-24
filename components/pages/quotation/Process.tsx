
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Workflow, ClipboardList, CheckCircle, AlertCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: "Information Collection",
      description: "Gather company details, employee data, and coverage requirements",
      icon: <ClipboardList className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Market Analysis",
      description: "Compare policies across multiple insurers to find the best match",
      icon: <Workflow className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Proposal Presentation",
      description: "Present customized options with detailed cost and benefit breakdown",
      icon: <CheckCircle className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Policy Implementation",
      description: "Handle documentation and coordination with the selected insurer",
      icon: <AlertCircle className="h-8 w-8 text-securenow-blue" />
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Quotation Process</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our streamlined quotation process ensures you get the best group health insurance options for your organization.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our transparent, efficient process helps you find the right insurance solution with minimal effort.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-securenow-blue/20 hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        {step.icon}
                        <h3 className="text-xl font-bold ml-4 text-securenow-blue">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center relative">
                    <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Request a quote today and discover how our streamlined process can get you the best coverage at the best rates.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-securenow-orange hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Process;
