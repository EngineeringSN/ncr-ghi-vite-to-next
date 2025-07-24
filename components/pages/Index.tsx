import React from "react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import InsuranceCard from "@/components/InsuranceCard";
import starLogo from "@/public/home/starlogo.png";
import hdfclogo from "@/public/home/hdfergo.png";
import icicilogo from "@/public/home/icicilogo.png";
import bajajlogo from "@/public/home/bajajlogo.png";
import Link from "next/link";
import {
  Shield,
  Heart,
  Users,
  FileText,
  BadgeCheck,
  Settings,
  Phone,
  Import,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description:
        "Extensive health insurance coverage with flexible options for your employees in Delhi NCR.",
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description:
        "Integrated wellness programs to promote employee well-being and preventive care.",
    },
    {
      icon: Users,
      title: "Family Coverage",
      description:
        "Options to include family members in the insurance policy for complete peace of mind.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Round-the-clock support for all your insurance-related queries and claims.",
    },
  ];

  const insurers = [
    {
      name: "Star Health Insurance",
      logo: starLogo,
      description:
        "Leading health insurance provider with excellent claim settlement ratio.",
    },
    {
      name: "HDFC Ergo",
      logo: hdfclogo,
      description:
        "Innovative health insurance solutions for businesses of all sizes.",
    },
    {
      name: "ICICI Lombard",
      logo: icicilogo,
      description: "Trusted insurance partner with extensive hospital network.",
    },
    {
      name: "Bajaj Allianz",
      logo: bajajlogo,
      description: "Comprehensive health coverage with quick claim settlement.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">
              Our Product Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the comprehensive benefits of our group health insurance
              solutions for businesses in Delhi NCR. Learn more about specific
              features like{" "}
              <Link
                href="/product-features/room-rent-capping"
                className="text-securenow-blue hover:underline"
              >
                room rent capping
              </Link>
              ,
              <Link
                href="/product-features/copay"
                className="text-securenow-blue hover:underline"
              >
                {" "}
                co-payment options
              </Link>
              , and
              <Link
                href="/product-features/cashless-opd"
                className="text-securenow-blue hover:underline"
              >
                {" "}
                cashless OPD coverage
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/product-features"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-150 ease-in-out"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Insurers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">
              Our Insurance Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with India's leading insurance providers to offer
              you the best coverage options. Compare{" "}
              <Link
                href="/insurers/claim-settlement-rate"
                className="text-securenow-blue hover:underline"
              >
                claim settlement ratios
              </Link>{" "}
              and review{" "}
              <Link
                href="/insurers/policy-wordings"
                className="text-securenow-blue hover:underline"
              >
                detailed policy documents
              </Link>{" "}
              to make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {insurers.map((insurer, index) => (
              <InsuranceCard
                key={index}
                name={insurer.name}
                logo={insurer.logo}
                description={insurer.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/insurers"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-6 rounded-md transition duration-150 ease-in-out"
            >
              View All Insurers
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose SecureNow</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We're the trusted insurance broker for over 3000 companies across
              India. Learn about our{" "}
              <Link
                href="/service"
                className="text-securenow-orange hover:underline"
              >
                premium services
              </Link>{" "}
              and
              <Link
                href="/technology"
                className="text-securenow-orange hover:underline"
              >
                {" "}
                advanced technology platform
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                <FileText className="h-8 w-8 text-securenow-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
              <p className="text-white/80">
                We ensure complete transparency throughout the insurance
                process, from
                <Link
                  href="/quotation/process"
                  className="text-securenow-orange hover:underline"
                >
                  {" "}
                  quotation
                </Link>{" "}
                to
                <Link
                  href="/claim-process"
                  className="text-securenow-orange hover:underline"
                >
                  {" "}
                  claim settlement
                </Link>
                .
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                <BadgeCheck className="h-8 w-8 text-securenow-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Advisory</h3>
              <p className="text-white/80">
                Our team of experienced professionals provides expert guidance
                tailored to your business needs across
                <Link
                  href="/industry"
                  className="text-securenow-orange hover:underline"
                >
                  {" "}
                  various industries
                </Link>
                .
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                <Settings className="h-8 w-8 text-securenow-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Technology-Driven</h3>
              <p className="text-white/80">
                Our{" "}
                <Link
                  href="/technology/dashboard"
                  className="text-securenow-orange hover:underline"
                >
                  advanced dashboard
                </Link>{" "}
                and
                <Link
                  href="/technology/e-claims"
                  className="text-securenow-orange hover:underline"
                >
                  {" "}
                  e-claims system
                </Link>{" "}
                simplify policy management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-securenow-orange rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Secure Your Employees?
                </h2>
                <p className="text-white/90 mb-6">
                  Get a customized group health insurance quote for your
                  business in Delhi NCR today. Explore our{" "}
                  <Link
                    href="/quotation/installments"
                    className="text-white underline hover:no-underline"
                  >
                    flexible payment options
                  </Link>{" "}
                  and
                  <Link
                    href="/quotation/voluntary-perks"
                    className="text-white underline hover:no-underline"
                  >
                    {" "}
                    voluntary benefits
                  </Link>
                  .
                </p>
                <a
                  href="https://securenow.in/ghi-calculator"
                  className="inline-block bg-white text-securenow-blue font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Request a Quote
                </a>
              </div>
              <div className="md:w-1/3 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center">
                {/* Background image div */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
