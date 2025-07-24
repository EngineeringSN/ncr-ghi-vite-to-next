
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Building } from 'lucide-react';

interface Insurer {
  name: string;
  path: string;
  logo: string;
  claimRatio: string;
  networkHospitals: string;
  keyFeature: string;
}

interface InsurerComparisonProps {
  currentInsurer: string;
}

const InsurerComparison: React.FC<InsurerComparisonProps> = ({ currentInsurer }) => {
  const allInsurers: Insurer[] = [
    {
      name: "Star Health Insurance",
      path: "/insurers/star-health",
      logo: "/public/lovable-uploads/starlogo.png",
      claimRatio: "98.5%",
      networkHospitals: "12,000+",
      keyFeature: "Health-focused specialist"
    },
    {
      name: "HDFC ERGO",
      path: "/insurers/hdfc-ergo",
      logo: "/public/lovable-uploads/hdfergo.png",
      claimRatio: "99.8%",
      networkHospitals: "12,000+",
      keyFeature: "Digital-first approach"
    },
    {
      name: "ICICI Lombard",
      path: "/insurers/icici-lombard",
      logo: "/public/lovable-uploads/icicilogo.png",
      claimRatio: "97.8%",
      networkHospitals: "7,000+",
      keyFeature: "Superior customer service"
    },
    {
      name: "Bajaj Allianz",
      path: "/insurers/bajaj-allianz",
      logo: "/public/lovable-uploads/bajajlogo.png",
      claimRatio: "98.1%",
      networkHospitals: "6,500+",
      keyFeature: "Quick claim settlement"
    },
    {
      name: "Tata AIG",
      path: "/insurers/tata-aig",
      logo: "/public/lovable-uploads/TataAIG.png",
      claimRatio: "97.5%",
      networkHospitals: "4,500+",
      keyFeature: "Customizable plans"
    },
    {
      name: "Niva Bupa",
      path: "/insurers/niva-bupa",
      logo: "/public/lovable-uploads/Niva-Bupa-Logo.png",
      claimRatio: "98.3%",
      networkHospitals: "6,400+",
      keyFeature: "Wellness programs"
    }
  ];

  // Filter out current insurer and show top 3 alternatives
  const alternatives = allInsurers
    .filter(insurer => insurer.name !== currentInsurer)
    .slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Compare with Other Insurers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore other leading insurance providers to find the best fit for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alternatives.map((insurer, index) => (
            <Link 
              key={index} 
              to={insurer.path}
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-4">
                <img 
                  src={insurer.logo} 
                  alt={`${insurer.name} Logo`} 
                  className="h-16 w-auto mx-auto mb-3 bg-white p-2 rounded"
                />
                <h3 className="text-xl font-bold text-securenow-blue group-hover:text-securenow-orange transition-colors">
                  {insurer.name}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Claim Settlement:</span>
                  <span className="font-semibold text-green-600">{insurer.claimRatio}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Network Hospitals:</span>
                  <span className="font-semibold text-securenow-blue">{insurer.networkHospitals}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-600">Key Feature:</span>
                  <span className="font-semibold text-gray-800 text-right text-sm">{insurer.keyFeature}</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-securenow-blue group-hover:text-securenow-orange transition-colors">
                <span className="font-medium mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/insurers" 
            className="inline-flex items-center bg-securenow-blue text-white px-6 py-3 rounded-lg hover:bg-securenow-orange transition-colors"
          >
            <Building className="h-5 w-5 mr-2" />
            View All Insurance Partners
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsurerComparison;
