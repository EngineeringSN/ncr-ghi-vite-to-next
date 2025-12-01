
import React from 'react';
import { Receipt, FileText, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
const Reimbursement = () => {
  const breadcrumbItems = [{ label: "Claim Process" },{ label: "Reimbursement" }];
  const steps = [
    {
      title: "Pay for Treatment",
      description: "Pay for your medical treatment at any hospital of your choice.",
      icon: Receipt
    },
    {
      title: "Submit Documents",
      description: "Complete the claim form and submit all required documents to your employer or directly to us.",
      icon: FileText
    },
    {
      title: "Processing",
      description: "Our team verifies the documentation and processes your claim with the insurer.",
      icon: Clock
    },
    {
      title: "Reimbursement",
      description: "Once approved, the claim amount is transferred to your bank account.",
      icon: CheckCircle
    }
  ];

  const documents = [
    "Duly filled and signed claim form",
    "Original hospital bills and receipts",
    "Discharge summary from the hospital",
    "Prescriptions and pharmacy bills",
    "Investigation reports and doctor consultations",
    "Indoor case papers (if requested)",
    "Any other documents requested by the insurer"
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Reimbursement Claims</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get reimbursed for your medical expenses at any hospital of your choice. 
            Compare with <Link href="/claim-process/cashless" className="text-securenow-orange hover:underline">cashless claims</Link> to 
            find the best option for your needs.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How Reimbursement Claims Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined reimbursement process ensures you get back your money with minimal hassle. 
              Learn about our <Link href="/technology/e-claims" className="text-securenow-blue hover:underline">digital claims processing</Link> system 
              for faster settlements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-securenow-orange">
                <div className="bg-orange-100 text-securenow-orange p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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

      {/* Required Documents */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Required Documents</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Make sure to submit the following documents to ensure smooth processing of your reimbursement claim. 
              Our <Link href="/service/service-calls" className="text-securenow-blue hover:underline">dedicated support team</Link> can 
              help you with documentation requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-securenow-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">When to Use Reimbursement Claims</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Reimbursement claims are ideal in the following scenarios. Also explore our 
              <Link href="/claim-process/pre-post-claim" className="text-securenow-blue hover:underline"> pre and post hospitalization</Link> coverage options:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Non-Network Hospitals</h3>
              <p className="text-gray-600">
                When seeking treatment at hospitals that are not part of your insurer's network, reimbursement
                is the way to claim your expenses. Check our 
                <Link href="/claim-process/gipsa" className="text-securenow-blue hover:underline"> GIPSA network hospitals</Link>.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Emergency Situations</h3>
              <p className="text-gray-600">
                In urgent situations where you can't wait for pre-authorization or need to visit the nearest hospital.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Post-Hospitalization Expenses</h3>
              <p className="text-gray-600">
                For follow-up treatments, medicines, and consultations after discharge from the hospital.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">OPD Treatments</h3>
              <p className="text-gray-600">
                For outpatient department treatments that are covered under your policy. 
                Learn about our <Link href="/product-features/cashless-opd" className="text-securenow-blue hover:underline">cashless OPD options</Link>.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need more information about claims? Visit our 
              <Link href="/claim-process" className="text-securenow-blue hover:underline"> complete claims guide</Link> or 
              learn about our <Link href="/service/sla" className="text-securenow-blue hover:underline"> service level agreements</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Reimbursement Claims?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Our dedicated team is ready to assist you with any reimbursement claim-related queries. 
            Explore our <Link href="/service" className="text-white underline hover:no-underline">comprehensive service offerings</Link>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+91 9696683999"
              className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Call Us
            </a>
            <a
              href="mailto:support@securenow.in"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reimbursement;
