
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { FileText, Clock, Users, Shield, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
  const quotationFeatures = [
    {
      title: "Instant Quote Generation",
      description: "Get preliminary quotes within minutes of submitting your requirements",
      icon: <Clock className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Multi-Insurer Comparison",
      description: "Compare policies from 15+ leading insurance companies simultaneously",
      icon: <TrendingUp className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Customized Coverage",
      description: "Tailored policies based on your industry, employee demographics, and budget",
      icon: <Shield className="h-8 w-8 text-securenow-blue" />
    },
    {
      title: "Employee Data Analysis",
      description: "Detailed analysis of your workforce to optimize premium calculations",
      icon: <Users className="h-8 w-8 text-securenow-blue" />
    }
  ];

  const quotationSteps = [
    "Submit your company and employee details",
    "Our experts analyze your requirements",
    "Receive multiple policy options within 24 hours",
    "Compare benefits, premiums, and terms",
    "Finalize your preferred policy with our assistance"
  ];

  const documents = [
    "Employee census data",
    "Previous policy copy (if applicable)",
    "Claims history for last 3 years",
    "Company incorporation certificate",
    "Employee age and salary band details"
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Group Health Insurance Quotation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get comprehensive, competitive quotes from multiple insurers tailored to your organization's specific needs and requirements.
          </p>
        </div>
      </section>

      {/* Why Choose Our Quotation Service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Why Choose Our Quotation Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive quotation process ensures you get the best coverage at the most competitive rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotationFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-securenow-blue/10 p-3 rounded-full">{feature.icon}</div>
                  <div>
                    <CardTitle className="text-xl text-securenow-blue">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Process */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Our Quotation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process that delivers results quickly and efficiently.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              {quotationSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-securenow-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">Documents Required</h2>
              <p className="text-gray-600 mb-8">
                To provide you with the most accurate quotation, we'll need some basic information about your company and employees.
              </p>
              
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-securenow-blue/5 p-8 rounded-lg">
              <FileText className="h-16 w-16 text-securenow-blue mb-6" />
              <h3 className="text-xl font-bold text-securenow-blue mb-4">Quick Tip</h3>
              <p className="text-gray-600 mb-4">
                Having your employee census data ready can speed up the quotation process significantly. This includes basic details like age, gender, and sum insured requirements.
              </p>
              <p className="text-sm text-gray-500">
                Don't worry if you don't have all documents ready - our team can guide you through the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Quote?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey towards comprehensive group health insurance coverage today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quotation" 
              className="inline-block bg-securenow-orange hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Request Quote Now
            </a>
            <a 
              href="/quotation/process" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-securenow-blue font-medium py-3 px-8 rounded-md transition-colors"
            >
              Learn About Process
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Overview;
