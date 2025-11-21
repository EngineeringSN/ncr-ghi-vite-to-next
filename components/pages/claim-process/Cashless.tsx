
import React from 'react';
import Link from 'next/link';
import { Hospital, BadgeCheck, Clock, CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';


const Cashless = () => {
  const breadcrumbItems = [{ label: "Claim Process" },{ label: "Cashless" }];
  const steps = [
    {
      title: "Pre-authorization",
      description: "Present your health card at the network hospital and fill the pre-authorization form.",
      icon: Hospital
    },
    {
      title: "Approval Process",
      description: "Hospital coordinates with the TPA/insurer to get pre-authorization approved.",
      icon: Clock
    },
    {
      title: "Treatment",
      description: "Once approved, undergo treatment without paying upfront costs.",
      icon: BadgeCheck
    },
    {
      title: "Settlement",
      description: "Insurer settles the bill directly with the hospital. You only pay for non-covered expenses.",
      icon: CheckCircle
    }
  ];

  return (
    <>
    <BreadcrumbSchema/>
    <BreadcrumbNav items={breadcrumbItems} />
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Cashless Claims</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get treatment without paying hospital bills upfront at our 
            <Link href="/claim-process/gipsa" className="text-securenow-orange hover:underline"> extensive network hospitals</Link>.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How Cashless Claims Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined cashless claim process ensures you receive treatment without financial worries. 
              Compare with our <Link href="/claim-process/reimbursement" className="text-securenow-blue hover:underline">reimbursement process</Link> to 
              choose the best option for your situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-securenow-blue">
                <div className="bg-blue-100 text-securenow-blue p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-securenow-blue">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Benefits of Cashless Claims</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cashless claims offer several advantages for employees and organizations. 
              Learn about <Link href="/claim-process/pre-post-claim" className="text-securenow-blue hover:underline">pre and post hospitalization coverage</Link> included 
              in your policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">No Upfront Payment</h3>
              <p className="text-gray-600">
                Employees don't need to arrange for large sums of money during medical emergencies,
                reducing financial stress during difficult times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Simplified Process</h3>
              <p className="text-gray-600">
                Minimal paperwork for employees as the hospital handles most of the 
                documentation and coordination with the insurance provider.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Faster Admission</h3>
              <p className="text-gray-600">
                Pre-approved cashless facility ensures quicker hospital admission without 
                delays related to payment processing.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to explore other claim options? Learn about our 
              <Link href="/claim-process/reimbursement" className="text-securenow-blue hover:underline"> reimbursement claims</Link> or 
              view our complete <Link href="/claim-process" className="text-securenow-blue hover:underline"> claim process overview</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Cashless Claims?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Our dedicated team is ready to assist you with any cashless claim-related queries. 
            Learn more about our <Link href="/service/service-calls" className="text-securenow-orange hover:underline">dedicated service support</Link>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+91 9696683999"
              className="inline-block bg-white text-securenow-blue hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Call Us
            </a>
            <a
              href="mailto:support@securenow.in"
              className="inline-block bg-securenow-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cashless;
