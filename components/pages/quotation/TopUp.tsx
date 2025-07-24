
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { ArrowUp, Shield, ListChecks, BadgeInfo } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TopUp = () => {
  const benefitsData = [
    {
      title: "Enhanced Protection",
      description: "Additional coverage for major illnesses or accidents that exceed base policy limits",
      icon: <Shield className="h-6 w-6 text-securenow-blue" />
    },
    {
      title: "Cost Efficiency",
      description: "Significantly lower premiums compared to increasing the sum insured of the base policy",
      icon: <ArrowUp className="h-6 w-6 text-securenow-blue" />
    },
    {
      title: "Customizable Thresholds",
      description: "Flexible deductible options to align with your base policy coverage",
      icon: <ListChecks className="h-6 w-6 text-securenow-blue" />
    }
  ];

  const topUpTypes = [
    {
      type: "Individual Top-Up",
      description: "Coverage applies to each insured member individually",
      works: "Each member has their own deductible threshold. Once an individual crosses their threshold, additional expenses are covered by the top-up policy.",
      suited: "Organizations with varied employee health risks or senior employees"
    },
    {
      type: "Family Floater Top-Up",
      description: "Coverage applies to the entire family as a unit",
      works: "The deductible applies to the combined claims of all family members. When total expenses exceed the threshold, the top-up kicks in.",
      suited: "Companies with family coverage looking for comprehensive protection"
    },
    {
      type: "Corporate Buffer Top-Up",
      description: "Additional pool of funds available to all employees",
      works: "Creates a supplementary fund that can be utilized by any employee who exhausts their base coverage limit.",
      suited: "Large organizations wanting flexible additional coverage"
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Top-Up Health Insurance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Extend your group health insurance coverage with cost-effective top-up plans for high-value treatments.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">What Are Top-Up Plans?</h2>
              <p className="text-gray-600 mb-4">
                Top-up health insurance plans provide additional coverage that activates once the base policy's 
                sum insured is exhausted. They act as a safety net for expensive treatments while being more 
                cost-effective than simply increasing your base policy limit.
              </p>
              <p className="text-gray-600 mb-4">
                With healthcare costs rising annually, top-up plans ensure your employees have adequate protection 
                against serious illnesses or accidents that might require extensive treatment.
              </p>
              <div className="bg-securenow-gray p-4 rounded-md flex items-start space-x-3">
                <BadgeInfo className="h-5 w-5 text-securenow-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Top-up plans typically come with a deductible (threshold amount), above which the coverage begins. 
                  This threshold can be matched to your base policy's sum insured for seamless coverage.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-securenow-blue">Key Benefits</h3>
                <div className="space-y-6">
                  {benefitsData.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-securenow-blue/10 p-2 rounded-full mr-4 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Top-Up Plans */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Types of Top-Up Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different top-up structures for varying organizational needs and employee demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topUpTypes.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-securenow-blue">{plan.type}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">How it works:</h4>
                      <p className="text-gray-600 text-sm">{plan.works}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Best suited for:</h4>
                      <p className="text-gray-600 text-sm">{plan.suited}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">How Top-Up Plans Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the mechanics of top-up insurance with a practical example.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-securenow-blue">Example Scenario</h3>
            <div className="space-y-8">
              <div className="md:flex items-center">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="text-center p-4 bg-securenow-blue/10 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Base Policy</p>
                    <p className="text-2xl font-bold text-securenow-blue">₹5,00,000</p>
                  </div>
                </div>
                <div className="md:w-1/3 md:px-8 mb-4 md:mb-0 text-center">
                  <div className="text-center p-4 bg-securenow-orange/10 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Top-Up Deductible</p>
                    <p className="text-2xl font-bold text-securenow-orange">₹5,00,000</p>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Top-Up Coverage</p>
                    <p className="text-2xl font-bold text-green-600">₹10,00,000</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-securenow-blue mb-4">If an employee has a claim of ₹12,00,000:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-gray-700">First ₹5,00,000</span>
                    <span className="font-medium">Covered by base policy</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-gray-700">Next ₹7,00,000</span>
                    <span className="font-medium">Covered by top-up policy</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-gray-700">Total out-of-pocket cost</span>
                    <span className="font-medium text-green-600">₹0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Protect Against High-Cost Treatments</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us to discuss how top-up plans can enhance your group health insurance coverage while keeping premiums manageable.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-white hover:bg-gray-100 text-securenow-blue font-medium py-2 px-6 rounded-md transition-colors"
          >
            Explore Top-Up Options
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default TopUp;
