
import React from 'react';
import { FileText, Receipt, Clock, CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const PrePostClaim = () => {
  const breadcrumbItems = [{ label: "Pre-post-claim" }];
  const eligibleExpenses = [
    "Doctor consultations before or after hospitalization",
    "Diagnostic tests and investigations",
    "Medication and pharmacy bills",
    "Physiotherapy and rehabilitation expenses",
    "Follow-up consultations with specialists",
    "Home nursing charges (if covered in policy)"
  ];

  const claimSteps = [
    {
      title: "Collect Documents",
      description: "Gather all pre and post-hospitalization bills, prescriptions, and reports.",
      icon: FileText
    },
    {
      title: "Fill Claim Form",
      description: "Complete the reimbursement claim form with details of pre/post hospitalization expenses.",
      icon: Receipt
    },
    {
      title: "Submit Claim",
      description: "Submit documents along with the main hospitalization claim or separately as applicable.",
      icon: Clock
    },
    {
      title: "Reimbursement",
      description: "Receive reimbursement for approved pre and post hospitalization expenses.",
      icon: CheckCircle
    }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Pre & Post Hospitalization Claims</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive coverage for medical expenses before and after your hospital stay.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-10 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">What Are Pre & Post Hospitalization Claims?</h2>
              <p className="text-gray-600 mb-4">
                Group health insurance policies typically cover medical expenses incurred before and after hospitalization. 
                These are known as pre and post-hospitalization expenses.
              </p>
              <div className="bg-securenow-gray p-6 rounded-lg">
                <h3 className="font-bold text-securenow-blue mb-2">Coverage Period:</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-center border-b pb-2 mb-2">Pre-Hospitalization</h4>
                    <p className="text-center text-gray-600">Usually 30-60 days before admission</p>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-center border-b pb-2 mb-2">Post-Hospitalization</h4>
                    <p className="text-center text-gray-600">Usually 60-90 days after discharge</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-securenow-blue">
                <h3 className="text-xl font-bold mb-4 text-securenow-blue">Expenses Covered</h3>
                <ul className="space-y-3">
                  {eligibleExpenses.map((expense, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 text-securenow-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">{expense}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Claim Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these steps to file your pre and post hospitalization claims for maximum benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {claimSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-purple-100 text-purple-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
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

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Tips for Smooth Claims</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure quick processing of your pre and post hospitalization claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Keep All Records</h3>
              <p className="text-gray-600">
                Maintain proper documentation of all medical consultations, prescriptions, and bills 
                from the pre-hospitalization period through post-discharge recovery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Check Policy Terms</h3>
              <p className="text-gray-600">
                Verify the exact coverage period for pre and post-hospitalization expenses in your policy
                document before incurring costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Submit Together</h3>
              <p className="text-gray-600">
                Try to submit pre and post-hospitalization claims together after the treatment is complete
                for simpler processing and approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Pre & Post Hospitalization Claims?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Our dedicated team is ready to assist you with any claim-related queries.
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

export default PrePostClaim;
