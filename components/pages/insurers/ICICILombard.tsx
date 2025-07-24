import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InsurerComparison from '@/components/InsurerComparison';
import { Phone, Mail, MapPin, FileText, Users, Building } from 'lucide-react';

const ICICILombard = () => {
  const breadcrumbItems = [
    { label: "Insurance Partners", href: "/insurers" },
    { label: "ICICI Lombard General Insurance" }
  ];

  const branches = [{
    name: "ICICI Lombard - Delhi Regional Office",
    address: "ICICI Lombard House, 414, Veer Savarkar Block, Shakarpur, Delhi - 110092",
    phone: "1800-2666",
    type: "Regional Office"
  }, {
    name: "ICICI Lombard - Gurugram Branch",
    address: "Tower A, 9th Floor, DLF IT Park, Sector 25A, Gurugram, Haryana - 122002",
    phone: "1800-2666",
    type: "Branch Office"
  }];
  const keyFeatures = ["97.8% Claim Settlement Ratio", "7,000+ Network Hospitals", "Instant Policy Issuance", "Mobile App for Claims", "Health Check-up Benefits", "Quick Claim Settlement"];
  
  return (
    <MainLayout>
      <BreadcrumbNav items={breadcrumbItems} />
      
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">ICICI Lombard General Insurance</h1>
              <p className="text-xl mb-6">
                Leading private sector general insurance company providing comprehensive health coverage with superior customer service.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/public/lovable-uploads/icicilogo.png" alt="ICICI Lombard Logo" className="h-24 w-auto bg-white p-4 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About ICICI Lombard</h2>
              <p className="text-gray-600 mb-4">
                ICICI Lombard General Insurance Company is one of the premier non-life insurance companies in India. 
                A joint venture between ICICI Bank and Fairfax Financial Holdings, the company has been serving 
                customers since 2001 with innovative insurance solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Known for its customer-centric approach and technological innovations, ICICI Lombard offers 
                comprehensive health insurance products designed to meet the evolving healthcare needs of modern India.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => <div key={index} className="flex items-center">
                    <div className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi NCR Branches */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Delhi NCR Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-securenow-blue mr-3" />
                  <h3 className="text-xl font-bold text-securenow-blue">{branch.name}</h3>
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
              </div>)}
          </div>
        </div>
      </section>

      {/* Network Hospitals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Network Hospitals in Delhi NCR</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-securenow-blue text-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Building className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-securenow-blue mb-2">1,800+ Network Hospitals</h3>
              <p className="text-gray-600">in Delhi NCR Region</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">Corporate Hospitals</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Apollo Hospitals Delhi</li>
                  <li>Fortis Healthcare</li>
                  <li>Max Healthcare</li>
                  <li>Medanta Medicity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">Specialty Hospitals</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>All India Institute of Medical Sciences</li>
                  <li>Jaypee Hospital</li>
                  <li>Asian Heart Institute</li>
                  <li>Narayana Health</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-securenow-blue mb-2">Diagnostic Centers</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>SRL Diagnostics</li>
                  <li>Dr. Lal PathLabs</li>
                  <li>Metropolis Healthcare</li>
                  <li>Thyrocare Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Cross-Reference Section */}
      <InsurerComparison currentInsurer="ICICI Lombard" />

      {/* Policy Wordings & Contact */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Policy Wordings */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Policy Documents</h3>
              <div className="space-y-4">
                <a 
                  href="/lovable-uploads/insurerPdfs/icicipolicy-wordings.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-8 w-8 text-securenow-blue mr-4" />
                  <div>
                    <h4 className="font-bold text-securenow-blue">Group Health Insurance Policy</h4>
                    <p className="text-gray-600 text-sm">Complete policy terms and conditions</p>
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
                    <h4 className="font-bold text-securenow-blue">Nearest Hospital Locator</h4>
                    <p className="text-gray-600 text-sm">Find nearby network hospitals for cashless treatment</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Customer Service</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">Customer Care Helpline</h4>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-securenow-blue mr-3" />
                    <span className="text-gray-700">1800-2666 (Toll Free)</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">Email Support</h4>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                    <span className="text-gray-700">care@icicilombard.com</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">Grievance Officer</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Name:</strong> Ms. Priya Sharma<br />
                      <strong>Email:</strong> grievance@icicilombard.com<br />
                      <strong>Phone:</strong> +91-22-6165-3000
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
          <h2 className="text-3xl font-bold mb-4">Get ICICI Lombard Insurance</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose India's leading private sector insurance company for comprehensive health coverage.
          </p>
          <a href="https://securenow.in/ghi-calculator" className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out">
            Get Quote
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default ICICILombard;
