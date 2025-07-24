import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Phone, Mail, MapPin, FileText, Users, Building } from 'lucide-react';
const TataAIG = () => {
  const branches = [{
    name: "Tata AIG - Delhi Branch",
    address: "Peninsula Corporate Park, A-401, 4th Floor, Lower Parel, Mumbai - 400013",
    phone: "1800-266-7780",
    type: "Regional Office"
  }];
  const keyFeatures = ["99.2% Claim Settlement Ratio", "4,000+ Network Hospitals", "Global Coverage", "Critical Illness Cover", "Maternity Benefits", "Pre-Policy Health Check-up"];
  return <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Tata AIG General Insurance</h1>
              <p className="text-xl mb-6">
                Trusted insurance provider with customizable health plans and excellent customer support.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/public/lovable-uploads/TataAIG.png" alt="Tata AIG Logo" className="h-24 w-auto bg-white p-4 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">About Tata AIG</h2>
              <p className="text-gray-600 mb-4">
                Tata AIG General Insurance Company is a joint venture between Tata Group and American International Group. 
                The company combines Tata's trusted brand legacy with AIG's global insurance expertise.
              </p>
              <p className="text-gray-600 mb-6">
                Known for providing customizable insurance solutions, Tata AIG offers comprehensive health coverage 
                that adapts to changing healthcare needs and lifestyle requirements.
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

      {/* Policy Wordings & Contact */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Policy Wordings */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-securenow-blue mb-6">Policy Documents</h3>
              <div className="space-y-4">
                <a href="/public/lovable-uploads/insurerPdfs/Tata_AIG_Medi_Care_82932b277a.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="h-8 w-8 text-securenow-blue mr-4" />
                  <div>
                    <h4 className="font-bold text-securenow-blue">Group Health Insurance Policy</h4>
                    <p className="text-gray-600 text-sm">Complete policy terms and conditions</p>
                  </div>
                </a>
                
                <a href="https://securenow.in/nearest-hospital-locator" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
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
                    <span className="text-gray-700">1800-266-7780 (Toll Free)</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">Email Support</h4>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-securenow-blue mr-3" />
                    <span className="text-gray-700">customer.services@tataaig.com</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-securenow-darkgray mb-2">Grievance Officer</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Name:</strong> Mr. Amit Singh<br />
                      <strong>Email:</strong> grievance.officer@tataaig.com<br />
                      <strong>Phone:</strong> +91-22-6693-8800
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
          <h2 className="text-3xl font-bold mb-4">Get Tata AIG Insurance</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose trusted insurance solutions with global expertise and local understanding.
          </p>
          <a href="https://securenow.in/ghi-calculator" className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out">
            Get Quote
          </a>
        </div>
      </section>
    </MainLayout>;
};
export default TataAIG;