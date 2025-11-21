
import React from 'react';
import { Calculator, TrendingUp, Building2, BadgePercent } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Raters = () => {
  const breadcrumbItems = [{ label: "Quotation" },{ label: "Raters" }];
  const ratingFactors = [
    {
      title: "Industry Type",
      description: "Different industries have different risk profiles that affect premium calculations",
      icon: <Building2 className="h-8 w-8 text-securenow-blue" />,
      details: "Technology companies typically have lower premiums than manufacturing or construction companies due to lower risk of workplace injuries."
    },
    {
      title: "Demographics",
      description: "Age distribution, gender ratio, and family size of employees impact premium rates",
      icon: <TrendingUp className="h-8 w-8 text-securenow-blue" />,
      details: "A younger workforce generally leads to lower premiums, while policies covering dependents will have higher rates."
    },
    {
      title: "Claims History",
      description: "Past claims experience significantly influences future premium calculations",
      icon: <BadgePercent className="h-8 w-8 text-securenow-blue" />,
      details: "Companies with low claim ratios over the past 3 years often qualify for discounted premium rates."
    },
    {
      title: "Coverage Details",
      description: "The extent of coverage, add-ons, and optional benefits affect the final premium",
      icon: <Calculator className="h-8 w-8 text-securenow-blue" />,
      details: "Enhanced coverage like maternity benefits, pre-existing disease coverage, or higher room rent limits will increase premiums."
    }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Premium Raters & Calculation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding how group health insurance premiums are calculated to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Rating Factors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Key Premium Rating Factors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Several factors influence how insurers calculate group health insurance premiums. Understanding these can help you optimize your coverage costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ratingFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-securenow-blue/10 p-3 rounded-full">{factor.icon}</div>
                  <div>
                    <CardTitle className="text-xl text-securenow-blue">{factor.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-4">
                    {factor.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500 italic">
                    {factor.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Calculator Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-securenow-blue mb-2">Need a Precise Premium Estimate?</h2>
              <p className="text-gray-600">
                Our team can provide you with a detailed premium calculation based on your specific requirements.
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="/quotation" 
                className="inline-block bg-securenow-orange hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Raters;
