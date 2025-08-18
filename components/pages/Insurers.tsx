import React from "react";
import InsuranceCard from "@/components/InsuranceCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Link from "next/link";
import starLogo from "@/public/lovable-uploads/starlogo.png";
import hdfcErgo from "@/public/lovable-uploads/hdfergo.png";
import iciciLombard from "@/public/lovable-uploads/icicilogo.png";
import bajajAllianz from "@/public/lovable-uploads/bajajlogo.png";
import tataLogo from "@/public/lovable-uploads/TataAIG.png";
import relianceLogo from "@/public/lovable-uploads/reliance_GI.png";
import nivaLogo from "@/public/lovable-uploads/Niva-Bupa-Logo.png";
import newIndiaLogo from "@/public/lovable-uploads/niaBlue2.png";
import orientalLogo from "@/public/lovable-uploads/oriental.png";
import aditiyaLogo from "@/public/lovable-uploads/abhi-logo.png";
import manipalLogo from "@/public/lovable-uploads/cigna.png";
import sbiLogo from "@/public/lovable-uploads/sbig-logo.png";

const Insurers = () => {
  const breadcrumbItems = [{ label: "Insurance Partners" }];

  const insuranceProviders = [
    {
      name: "Star Health Insurance",
      logo: starLogo,
      description:
        "Specialized health insurance provider with excellent claim settlement ratio and extensive hospital network.",
      path: "/insurers/star-health",
    },
    {
      name: "HDFC ERGO",
      logo: hdfcErgo,
      description:
        "Innovative health insurance solutions with digital-first approach for businesses of all sizes.",
      path: "/insurers/hdfc-ergo",
    },
    {
      name: "ICICI Lombard",
      logo: iciciLombard,
      description:
        "One of India's leading private sector general insurance companies with superior customer service.",
      path: "/insurers/icici-lombard",
    },
    {
      name: "Bajaj Allianz",
      logo: bajajAllianz,
      description:
        "Comprehensive health coverage with quick claim settlement and wide hospital network.",
      path: "/insurers/bajaj-allianz",
    },
    {
      name: "Tata AIG",
      logo: tataLogo,
      description:
        "Trusted insurance provider with customizable health plans and excellent customer support.",
      path: "/insurers/tata-aig",
    },
    {
      name: "Reliance General Insurance",
      logo: relianceLogo,
      description:
        "Strong network coverage with innovative health insurance solutions for corporate clients.",
      path: "/insurers/reliance-general",
    },
    {
      name: "Niva Bupa",
      logo: nivaLogo,
      description:
        "Dedicated health insurance provider with comprehensive coverage options and wellness programs.",
      path: "/insurers/niva-bupa",
    },
    {
      name: "New India Assurance",
      logo: newIndiaLogo,
      description:
        "India's premier public sector insurance company with widespread presence and reliable service.",
      path: "/insurers/new-india-assurance",
    },
    {
      name: "Oriental Insurance",
      logo: orientalLogo,
      description:
        "Public sector insurer offering comprehensive health insurance with extensive coverage.",
      path: "/insurers/oriental-insurance",
    },
    {
      name: "Aditya Birla Health Insurance",
      logo: aditiyaLogo,
      description:
        "Health-first insurance approach with proactive care and incentivized wellness programs.",
      path: "/insurers/aditya-birla",
    },
    {
      name: "Manipal Cigna",
      logo: manipalLogo,
      description:
        "Global expertise with local understanding, offering comprehensive health insurance solutions.",
      path: "/insurers/manipal-cigna",
    },
    {
      name: "SBI General Insurance",
      logo: sbiLogo,
      description:
        "Reliable health insurance provider with simple and hassle-free claim settlement process.",
      path: "/insurers/sbi-general",
    },
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Insurance Partners</h1>

          <p className="text-xl max-w-3xl mx-auto">
            We collaborate with India's leading insurance providers to offer you
            the best coverage options for your business in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Insurers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">
            Insurance Providers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {insuranceProviders.map((insurer, index) => (
              <Link
                key={index}
                href={insurer.path}
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                <InsuranceCard
                  name={insurer.name}
                  logo={insurer.logo}
                  description={insurer.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Partner Section */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">
              Why We Partner with These Insurers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carefully select our insurance partners based on strict
              criteria to ensure you get the best coverage and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">
                Financial Stability
              </h3>
              <p className="text-gray-600">
                We partner with insurers that demonstrate strong financial
                stability, ensuring they can meet their claim obligations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">
                Claim Settlement Ratio
              </h3>
              <p className="text-gray-600">
                Our partners have proven track records of high claim settlement
                ratios, ensuring swift processing of claims.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">
                Hospital Network
              </h3>
              <p className="text-gray-600">
                An extensive network of cashless hospitals across India,
                particularly in the Delhi NCR region.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">
                Customer Service
              </h3>
              <p className="text-gray-600">
                Insurance providers with excellent customer service
                capabilities, ensuring smooth policy administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find the Right Insurance Partner
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us help you select the best insurance provider for your specific
            business needs in Delhi NCR.
          </p>
          <a
            href="/quotation"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default Insurers;
