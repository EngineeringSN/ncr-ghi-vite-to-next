
import React from 'react';
import { Stethoscope, Pill, Clipboard, HeartPulse, AlertCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const OPD = () => {
  const breadcrumbItems = [{ label: "OPD" }];
  const opdFeatures = [
    {
      title: "Doctor Consultations",
      description: "Coverage for outpatient consultations with general physicians and specialists",
      icon: <Stethoscope className="h-10 w-10 text-securenow-blue" />
    },
    {
      title: "Diagnostics & Tests",
      description: "Coverage for laboratory tests, X-rays, and other diagnostic procedures",
      icon: <Clipboard className="h-10 w-10 text-securenow-blue" />
    },
    {
      title: "Medications",
      description: "Coverage for prescription drugs and medicines",
      icon: <Pill className="h-10 w-10 text-securenow-blue" />
    },
    {
      title: "Preventive Health",
      description: "Coverage for vaccinations, health check-ups, and other preventive care",
      icon: <HeartPulse className="h-10 w-10 text-securenow-blue" />
    }
  ];

  const benefitsForEmployees = [
    "Reduced out-of-pocket expenses for routine healthcare",
    "Encourages early medical intervention",
    "Coverage for chronic condition management",
    "Access to telehealth services"
  ];

  const benefitsForEmployers = [
    "Reduced absenteeism due to minor illnesses",
    "Improved employee productivity",
    "Enhanced benefit package for talent attraction",
    "Preventive care reducing serious health issues"
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">OPD Coverage Benefits</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive outpatient department coverage to complement your group health insurance plan.
          </p>
        </div>
      </section>

      {/* What is OPD Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">What is OPD Coverage?</h2>
              <p className="text-gray-600 mb-4">
                OPD (Outpatient Department) coverage is an extension of health insurance that covers medical expenses 
                incurred without hospitalization. This includes doctor consultations, diagnostic tests, medications, 
                and preventive healthcare services.
              </p>
              <p className="text-gray-600 mb-4">
                While traditional health insurance typically covers inpatient treatment (hospitalization), 
                OPD coverage fills the gap by taking care of day-to-day medical expenses that don't require hospital stays.
              </p>
              <div className="flex items-start mt-6 bg-securenow-gray p-4 rounded-md">
                <AlertCircle className="h-5 w-5 text-securenow-blue mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  OPD expenses often constitute a significant portion of an individual's healthcare spending, 
                  making this coverage extremely valuable for employees.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              {opdFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <div className="bg-securenow-blue/10 p-3 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2 text-securenow-blue">{feature.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Benefits of OPD Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OPD coverage provides significant advantages for both employees and employers.
            </p>
          </div>

          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4 text-securenow-blue">For Employees</h3>
                <ul className="space-y-3">
                  {benefitsForEmployees.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-securenow-blue/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 bg-securenow-blue rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold mb-4 text-securenow-blue">For Employers</h3>
                <ul className="space-y-3">
                  {benefitsForEmployers.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-securenow-blue/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 bg-securenow-blue rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Options Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">OPD Coverage Implementation Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from different OPD coverage structures to suit your company's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Built-in OPD</h3>
              <p className="text-gray-600 mb-4">
                OPD coverage integrated directly into the base health insurance policy, usually with a specific sub-limit.
              </p>
              <p className="text-sm text-gray-500">
                Ideal for companies wanting simplified administration with a single policy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">OPD Add-on</h3>
              <p className="text-gray-600 mb-4">
                Optional OPD rider that can be added to the base health policy with customizable coverage limits.
              </p>
              <p className="text-sm text-gray-500">
                Perfect for organizations seeking flexibility in coverage design and premium allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Wallet-based OPD</h3>
              <p className="text-gray-600 mb-4">
                Digital wallet with pre-loaded amount for employees to use exclusively for OPD expenses.
              </p>
              <p className="text-sm text-gray-500">
                Best for companies wanting transparent usage tracking and controlled spending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Add OPD Coverage to Your Plan?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact our team to discuss OPD coverage options that can be tailored to your organization's needs and budget.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-white hover:bg-gray-100 text-securenow-blue font-medium py-2 px-6 rounded-md transition-colors"
          >
            Get OPD Coverage Details
          </a>
        </div>
      </section>
    </>
  );
};

export default OPD;
