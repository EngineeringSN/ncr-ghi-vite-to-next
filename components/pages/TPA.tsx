import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Building, Users, Clock, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TPA = () => {
  const tpaProviders = [
    {
      name: "Medi Assist India TPA Services",
      slug: "medi-assist",
      description: "Leading TPA with 15,000+ network hospitals and 24x7 pre-authorization services",
      hospitals: "15,000+",
      specialty: "Multi-Specialty Coverage",
      response: "2-4 hours"
    },
    {
      name: "Family Health Plan Limited (FHPL)",
      slug: "fhpl",
      description: "Premier TPA services with extensive hospital network and efficient claim processing",
      hospitals: "10,000+",
      specialty: "Premium Hospital Network",
      response: "4-6 hours"
    },
    {
      name: "Vidal Health TPA Services",
      slug: "vidal",
      description: "Comprehensive healthcare administration with focus on quality service delivery",
      hospitals: "8,000+",
      specialty: "Corporate Health Insurance",
      response: "4-6 hours"
    },
    {
      name: "Government Health Insurance Company (GHICO)",
      slug: "ghico",
      description: "Specialized TPA for government health schemes and public sector employees",
      hospitals: "Government Network",
      specialty: "CGHS & Government Schemes",
      response: "Business Hours"
    },
    {
      name: "Good Health TPA Services",
      slug: "good-health",
      description: "Reliable TPA services with focus on customer satisfaction and quick claim processing",
      hospitals: "7,500+",
      specialty: "Individual & Group Plans",
      response: "4-8 hours"
    },
    {
      name: "Heritage Health TPA Private Limited",
      slug: "heritage-health",
      description: "Experienced TPA with strong network in South India and expanding pan-India presence",
      hospitals: "6,000+",
      specialty: "Regional Network Specialist",
      response: "6-8 hours"
    },
    {
      name: "Paramount Health Services",
      slug: "paramount",
      description: "Technology-driven TPA services with digital-first approach to healthcare administration",
      hospitals: "5,500+",
      specialty: "Digital Health Solutions",
      response: "4-6 hours"
    },
    {
      name: "Raksha TPA Private Limited",
      slug: "raksha",
      description: "Focused on providing efficient TPA services with emphasis on fraud prevention",
      hospitals: "4,000+",
      specialty: "Fraud Prevention & Control",
      response: "6-12 hours"
    },
    {
      name: "Genins India TPA Services",
      slug: "genins",
      description: "Part of Generali Group, offering international standard TPA services in India",
      hospitals: "3,500+",
      specialty: "International Standards",
      response: "8-12 hours"
    },
    {
      name: "MD India TPA Services",
      slug: "md-india",
      description: "Comprehensive TPA services with strong focus on rural and semi-urban healthcare",
      hospitals: "3,000+",
      specialty: "Rural Healthcare Focus",
      response: "12-24 hours"
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Third Party Administrators (TPA)</h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Explore leading TPA providers offering cashless healthcare services across Delhi NCR region
            </p>
          </div>
        </div>
      </section>

      {/* What is TPA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">What is a Third Party Administrator?</h2>
              <p className="text-gray-600 mb-4">
                A Third Party Administrator (TPA) is a company that processes health insurance claims on behalf 
                of insurance companies. TPAs act as intermediaries between policyholders, hospitals, and insurance 
                companies to facilitate cashless treatment and claim settlements.
              </p>
              <p className="text-gray-600 mb-6">
                TPAs maintain networks of hospitals, process pre-authorization requests, manage cashless treatments, 
                and handle claim reimbursements, making healthcare more accessible and convenient for policyholders.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key TPA Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Hospital Network Management</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Pre-Authorization Processing</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Claim Settlement Services</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Customer Support Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TPA Providers */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Leading TPA Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tpaProviders.map((tpa, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-securenow-blue mr-3" />
                  <h3 className="text-xl font-bold text-securenow-blue">{tpa.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tpa.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <Building className="h-5 w-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">{tpa.hospitals}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Hospitals</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">{tpa.specialty}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Specialty</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 text-orange-700 p-2 rounded-lg">
                      <Clock className="h-5 w-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">{tpa.response}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Response Time</p>
                  </div>
                </div>

                {['medi-assist', 'fhpl', 'vidal', 'ghico'].includes(tpa.slug) ? (
                  <Link
                    to={`/tpa/${tpa.slug}`}
                    className="inline-flex items-center text-securenow-blue hover:text-securenow-darkgray font-medium"
                  >
                    View Network Hospitals
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center text-gray-500 font-medium">
                    <FileText className="h-4 w-4 mr-2" />
                    Contact for Hospital Network Details
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Benefits of TPA Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-securenow-blue text-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Quick Processing</h3>
              <p className="text-gray-600">
                Fast pre-authorization and claim processing to ensure timely healthcare access
              </p>
            </div>
            <div className="text-center">
              <div className="bg-securenow-blue text-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Extensive Network</h3>
              <p className="text-gray-600">
                Access to thousands of quality hospitals and healthcare providers nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="bg-securenow-blue text-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Dedicated customer service teams to assist with all healthcare-related queries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Health Insurance with TPA Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get comprehensive health coverage with seamless TPA services and extensive hospital networks.
          </p>
          <a
            href="https://securenow.in/ghi-calculator"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get Quote
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default TPA;
