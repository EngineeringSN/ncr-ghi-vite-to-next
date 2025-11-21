
import React from 'react';
import { PieChart, BarChart, Info, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const ClaimRatio = () => {
  const breadcrumbItems = [{ label: "Quotation" },{ label: "Claim Ratio" }];
  const insurers = [
    { name: "Star Health", ratio: "82%", impact: "Moderate" },
    { name: "HDFC Ergo", ratio: "78%", impact: "Low" },
    { name: "ICICI Lombard", ratio: "85%", impact: "High" },
    { name: "Bajaj Allianz", ratio: "76%", impact: "Low" }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Claim Ratio Analysis</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding claim ratios and their impact on your group health insurance premiums.
          </p>
        </div>
      </section>

      {/* What is Claim Ratio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">What is Claim Ratio?</h2>
              <p className="text-gray-600 mb-4">
                Claim ratio is the proportion of claims paid out by an insurer relative to the premiums collected. It's a key metric that affects your premium rates during policy renewals.
              </p>
              <p className="text-gray-600 mb-4">
                For example, if your organization paid ₹10 lakhs in premium and filed claims worth ₹8 lakhs, your claim ratio would be 80%.
              </p>
              <div className="bg-securenow-gray p-4 rounded-md flex items-start space-x-3">
                <Info className="h-5 w-5 text-securenow-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  A high claim ratio often leads to premium increases, while maintaining a low claim ratio can help negotiate better rates at renewal.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <PieChart className="h-12 w-12 text-securenow-blue" />
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-securenow-blue">Ideal Claim Ratio</h3>
                    <p className="text-gray-500">For premium stability</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Excellent</span>
                    <span className="font-medium text-green-600">Below 50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Good</span>
                    <span className="font-medium text-emerald-600">50% - 70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moderate</span>
                    <span className="font-medium text-amber-600">70% - 85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">High</span>
                    <span className="font-medium text-red-600">Above 85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-securenow-blue mb-2">Insurer Claim Ratio Benchmarks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare average claim ratios across our partner insurers to understand market trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurers.map((insurer, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{insurer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-securenow-blue mb-2">{insurer.ratio}</div>
                  <CardDescription>
                    Premium Impact: <span className={
                      insurer.impact === "Low" ? "text-green-600" : 
                      insurer.impact === "Moderate" ? "text-amber-600" : "text-red-600"
                    }>{insurer.impact}</span>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Ratio Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Managing Your Claim Ratio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategies to maintain a healthy claim ratio and optimize your premium costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-securenow-blue/10 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-securenow-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-securenow-blue">Preventive Healthcare</h3>
              <p className="text-gray-600 text-center">
                Implement wellness programs to reduce illness frequency among employees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-securenow-blue/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-securenow-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-securenow-blue">Claims Analysis</h3>
              <p className="text-gray-600 text-center">
                Regularly review claims data to identify patterns and implement targeted interventions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-securenow-blue/10 p-3 rounded-full">
                  <Info className="h-6 w-6 text-securenow-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-securenow-blue">Employee Education</h3>
              <p className="text-gray-600 text-center">
                Educate employees about appropriate healthcare utilization and cost-conscious behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Analyzing Your Claim Ratio?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team can provide a detailed analysis of your current claim ratio and recommend strategies to optimize it.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-white hover:bg-gray-100 text-securenow-blue font-medium py-2 px-6 rounded-md transition-colors"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default ClaimRatio;
