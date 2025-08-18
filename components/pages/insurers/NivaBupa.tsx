import React from "react";
import { Phone, Mail, FileText, Building, MapPin } from "lucide-react";
import Image from "next/image";
const NivaBupa = () => {
  return (
    <>
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">
                Niva Bupa Health Insurance
              </h1>
              <p className="text-xl mb-6">
                Dedicated health insurance provider with comprehensive coverage
                options and wellness programs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/lovable-uploads/Niva-Bupa-Logo.png"
                width={150}
                height={100}
                alt="Niva Bupa Logo"
                className="h-24 w-auto bg-white p-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">
                Policy Documents
              </h3>
              <div className="space-y-4">
                <a
                  href="/lovable-uploads/insurerPdfs/niva_bupa_wordings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-8 w-8 text-securenow-blue mr-4" />
                  <div>
                    <h4 className="font-bold text-securenow-blue">
                      Group Health Insurance Policy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Complete policy terms and conditions
                    </p>
                  </div>
                </a>

                <a
                  href="https://securenow.in/nearest-hospital-locator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MapPin className="h-8 w-8 text-securenow-blue mr-4" />
                  <div>
                    <h4 className="font-bold text-securenow-blue">
                      Nearest Hospital Locator
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Find nearby network hospitals for cashless treatment
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">
                Customer Service
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">
                    1800-103-6061 (Toll Free)
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                  <span className="text-gray-700">contactus@nivabupa.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Niva Bupa Insurance</h2>
          <a
            href="https://securenow.in/ghi-calculator"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get Quote
          </a>
        </div>
      </section>
    </>
  );
};
export default NivaBupa;
