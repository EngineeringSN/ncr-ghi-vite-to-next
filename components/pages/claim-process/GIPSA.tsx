
import React from 'react';
import { FileText, Hospital, Receipt, CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const GIPSA = () => {
  const breadcrumbItems = [{ label: "Gipsa claims" }];
  const gipsaFeatures = [
    "Standardized treatment costs across network hospitals",
    "Package rates for common procedures and surgeries",
    "Transparent billing norms to prevent overcharging",
    "Common claim forms and documentation requirements",
    "Simplified claim submission and approval process"
  ];

  const benefits = [
    {
      title: "Standardized Rates",
      description: "Predefined costs for common treatments help in reducing disputes and ensuring fair pricing."
    },
    {
      title: "Faster Claim Settlement",
      description: "Standardized procedures result in quicker processing and approval of claims."
    },
    {
      title: "Reduced Documentation",
      description: "Common paperwork across insurers simplifies the claim submission process."
    },
    {
      title: "Better Cost Management",
      description: "Helps employers better predict and manage healthcare costs for employees."
    }
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">GIPSA Claims</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding the General Insurance Public Sector Association framework for streamlined claims.
          </p>
        </div>
      </section>

      {/* What is GIPSA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-10 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">What is GIPSA?</h2>
              <p className="text-gray-600 mb-6">
                The General Insurance Public Sector Association (GIPSA) is a framework created by public 
                sector insurance companies to standardize healthcare costs and claim procedures. It aims to 
                bring uniformity to the health insurance claim settlement process.
              </p>
              <p className="text-gray-600">
                GIPSA has established Preferred Provider Networks (PPNs) of hospitals with standardized 
                rates for various treatments and procedures. This helps in streamlining the claim process 
                and ensuring fair pricing for both insurers and policyholders.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-securenow-blue">
                <h3 className="text-xl font-bold mb-4 text-securenow-blue">Key Features of GIPSA</h3>
                <ul className="space-y-3">
                  {gipsaFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 text-securenow-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GIPSA Works */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How GIPSA Claims Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding the GIPSA claim process for your group health insurance policy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Hospital className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Network Hospital</h3>
              <p className="text-gray-600">
                Choose a GIPSA network hospital for treatment to access standardized rates and simplified procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Package Selection</h3>
              <p className="text-gray-600">
                Your treatment is categorized under a specific package with predetermined rates agreed upon by GIPSA.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Receipt className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Standardized Billing</h3>
              <p className="text-gray-600">
                Hospital bills according to GIPSA-approved rates, preventing overcharging or unexpected costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Simplified Settlement</h3>
              <p className="text-gray-600">
                Streamlined approval and settlement process due to pre-agreed rates between insurers and hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Benefits of GIPSA Framework</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The GIPSA framework offers several advantages for both employers and employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about GIPSA claims and processes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold mb-2 text-securenow-blue">Is every hospital part of the GIPSA network?</h3>
                <p className="text-gray-600">
                  No, not all hospitals are part of the GIPSA network. Only hospitals that have agreed to 
                  the standardized rates and procedures are included. We can provide you with a list of 
                  GIPSA network hospitals in your area.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold mb-2 text-securenow-blue">What if my treatment cost exceeds the GIPSA package rate?</h3>
                <p className="text-gray-600">
                  If your treatment requires additional procedures or services beyond the standard package, 
                  the hospital may charge extra. However, these additional charges are typically reviewed by 
                  the insurer based on medical necessity before approval.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold mb-2 text-securenow-blue">Does GIPSA apply to reimbursement claims?</h3>
                <p className="text-gray-600">
                  GIPSA primarily applies to cashless claims at network hospitals. For reimbursement claims, 
                  the insurer may still use GIPSA rates as a reference point for evaluating reasonableness 
                  of charges, but the process may vary.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-securenow-blue">How do I know which procedures are covered under GIPSA packages?</h3>
                <p className="text-gray-600">
                  You can contact our customer support team or your HR department for information on specific 
                  procedures covered under GIPSA packages. The hospital's insurance desk can also provide this 
                  information during pre-authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with GIPSA Claims?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Our dedicated team is ready to assist you with any GIPSA claim-related queries.
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

export default GIPSA;
