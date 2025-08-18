import React from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InsurerComparison from "@/components/InsurerComparison";
import { Phone, Mail, MapPin, FileText, Users, Building } from "lucide-react";
import Image from "next/image";
const BajajAllianz = () => {
  const breadcrumbItems = [
    { label: "Insurance Partners", href: "/insurers" },
    { label: "Bajaj Allianz General Insurance" },
  ];

  const branches = [
    {
      name: "Bajaj Allianz - Delhi Branch",
      address:
        "Plot No. 2, Sector 126, Expressway, Noida, Uttar Pradesh - 201303",
      phone: "1800-209-5858",
      type: "Regional Office",
    },
    {
      name: "Bajaj Allianz - Gurugram Branch",
      address:
        "3rd Floor, Building No. 5, DLF Cyber City, Phase III, Gurugram, Haryana - 122002",
      phone: "1800-209-5858",
      type: "Branch Office",
    },
  ];
  const keyFeatures = [
    "98.1% Claim Settlement Ratio",
    "6,500+ Network Hospitals",
    "Health Returns Program",
    "No-Claim Bonus",
    "24/7 Claim Support",
    "Digital Health Card",
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">
                Bajaj Allianz General Insurance
              </h1>
              <p className="text-xl mb-6">
                Comprehensive health coverage with quick claim settlement and
                extensive hospital network across India.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Image
                width={100}
                height={100}
                src="/lovable-uploads/bajajlogo.png"
                alt="Bajaj Allianz Logo"
                className="h-24 w-auto bg-white p-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">
                About Bajaj Allianz
              </h2>
              <p className="text-gray-600 mb-4">
                Bajaj Allianz General Insurance is a joint venture between Bajaj
                Finserv Limited and Allianz SE. Since 2001, the company has been
                providing comprehensive insurance solutions with a strong focus
                on customer satisfaction and innovative products.
              </p>
              <p className="text-gray-600 mb-6">
                With a robust network and strong financial backing, Bajaj
                Allianz offers reliable health insurance solutions that provide
                peace of mind and comprehensive coverage for individuals and
                corporates.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi NCR Branches */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">
            Delhi NCR Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-securenow-blue mr-3" />
                  <h3 className="text-xl font-bold text-securenow-blue">
                    {branch.name}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-3" />
                    <p className="text-gray-600">{branch.phone}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit">
                    {branch.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Hospitals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">
            Network Hospitals in Delhi NCR
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-securenow-blue text-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Building className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-2">
                1,600+ Network Hospitals
              </h3>
              <p className="text-gray-600">in Delhi NCR Region</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">
                  Leading Hospitals
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Fortis Hospital</li>
                  <li>Max Super Speciality Hospital</li>
                  <li>Apollo Hospital</li>
                  <li>Artemis Hospital</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">
                  Government Hospitals
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>AIIMS Delhi</li>
                  <li>Safdarjung Hospital</li>
                  <li>Lady Hardinge Medical College</li>
                  <li>Lok Nayak Hospital</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">
                  Specialty Care
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Eye Care Centers</li>
                  <li>Dental Clinics</li>
                  <li>Maternity Hospitals</li>
                  <li>Emergency Care Units</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Cross-Reference Section */}
      <InsurerComparison currentInsurer="Bajaj Allianz" />

      {/* Policy Wordings & Contact */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Policy Wordings */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">
                Policy Documents
              </h3>
              <div className="space-y-4">
                <a
                  href="/lovable-uploads/insurerPdfs/bajaj_policy_wording.pdf"
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

            {/* Customer Service */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">
                Customer Service
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">
                    Customer Care Helpline
                  </h4>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-securenow-blue mr-3" />
                    <span className="text-gray-700">
                      1800-209-5858 (Toll Free)
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">
                    Email Support
                  </h4>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                    <span className="text-gray-700">
                      bagiccare@bajajallianz.co.in
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">
                    Grievance Officer
                  </h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Name:</strong> Mr. Suresh Agarwal
                      <br />
                      <strong>Email:</strong> complaints.cmr@bajajallianz.co.in
                      <br />
                      <strong>Phone:</strong> +91-20-4075-0000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Bajaj Allianz Insurance
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure comprehensive health coverage with trusted insurance
            solutions from Bajaj Allianz.
          </p>
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

export default BajajAllianz;
