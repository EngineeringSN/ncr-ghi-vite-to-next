
import React from 'react';
import { Gift, Star, Maximize, Smile } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const VoluntaryPerks = () => {
  const breadcrumbItems = [{ label: "Voluntary Perks" }];
  const perkCategories = [
    {
      title: "Wellness Programs",
      description: "Optional wellness initiatives to enhance employee health and reduce claims",
      icon: <Smile className="h-10 w-10 text-securenow-blue" />,
      perks: [
        "Annual health check-ups",
        "Fitness membership subsidies",
        "Mental wellness counseling",
        "Nutrition consultation"
      ]
    },
    {
      title: "Enhanced Coverage",
      description: "Additional insurance benefits that employees can opt into",
      icon: <Maximize className="h-10 w-10 text-securenow-blue" />,
      perks: [
        "Critical illness riders",
        "Personal accident cover",
        "International treatment coverage",
        "Extended maternity benefits"
      ]
    },
    {
      title: "Lifestyle Benefits",
      description: "Non-medical perks that improve quality of life",
      icon: <Star className="h-10 w-10 text-securenow-blue" />,
      perks: [
        "Dental and vision care",
        "Alternative therapy coverage",
        "Home healthcare services",
        "Elder care support"
      ]
    },
    {
      title: "Family Protection",
      description: "Extended benefits for employees' family members",
      icon: <Gift className="h-10 w-10 text-securenow-blue" />,
      perks: [
        "Parental coverage extension",
        "Child-specific benefits",
        "Dependent wellness programs",
        "Family counseling services"
      ]
    }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Voluntary Perks & Add-ons</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Enhance your group health insurance with optional benefits that employees can choose based on their needs.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-securenow-blue mb-4">What Are Voluntary Perks?</h2>
            <p className="text-gray-600 mb-4">
              Voluntary perks are optional benefits that employees can choose to add to their base health insurance coverage. 
              These perks are typically paid for by the employees themselves through minimal premium additions, offering them 
              customized protection based on their specific needs and preferences.
            </p>
            <div className="bg-securenow-gray p-4 rounded-md mt-4">
              <h3 className="font-medium text-securenow-blue mb-2">Key Advantages</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-securenow-blue rounded-full mr-2"></div>
                  <span className="text-gray-600">Enhanced employee satisfaction</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-securenow-blue rounded-full mr-2"></div>
                  <span className="text-gray-600">Personalized coverage options</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-securenow-blue rounded-full mr-2"></div>
                  <span className="text-gray-600">Cost-effective for employers</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-securenow-blue rounded-full mr-2"></div>
                  <span className="text-gray-600">Improved talent attraction & retention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perk Categories Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Available Voluntary Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of optional benefits that can be added to your group health insurance plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perkCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-securenow-blue/10 p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-securenow-blue">{category.title}</h3>
                      <p className="text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-securenow-blue mb-3">Popular Options:</h4>
                    <ul className="space-y-2">
                      {category.perks.map((perk, i) => (
                        <li key={i} className="flex items-center">
                          <div className="h-2 w-2 bg-securenow-orange rounded-full mr-2"></div>
                          <span className="text-gray-600">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Implementing voluntary perks is a straightforward process designed to give your employees maximum choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Selection</h3>
              <p className="text-gray-600">
                We present a menu of voluntary perks that complement your base health insurance plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Employee Choice</h3>
              <p className="text-gray-600">
                Employees select the perks they want through a simple online portal or form.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Integration</h3>
              <p className="text-gray-600">
                The selected perks are integrated into the employee's policy with transparent contribution details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Employee Benefits Package</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us to discuss how voluntary perks can be incorporated into your group health insurance plan.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-white hover:bg-gray-100 text-securenow-blue font-medium py-2 px-6 rounded-md transition-colors"
          >
            Request Information
          </a>
        </div>
      </section>
    </>
  );
};

export default VoluntaryPerks;
