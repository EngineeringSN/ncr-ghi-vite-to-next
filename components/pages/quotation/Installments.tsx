
import React from 'react';
import { Calendar, CreditCard, Banknote, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BreadcrumbNav from '@/components/BreadcrumbNav';

const Installments = () => {
  const breadcrumbItems = [{ label: "Installments" }];
  const paymentPlans = [
    {
      title: "Annual Payment",
      description: "Pay the entire premium in one go",
      benefits: [
        "Maximum discount on premium",
        "Simplified administration",
        "No recurring payment management"
      ],
      ideal: "Companies with stable cash flow",
      icon: <Banknote className="h-6 w-6 text-securenow-blue" />
    },
    {
      title: "Semi-Annual",
      description: "Split premium into two installments",
      benefits: [
        "Better cash flow management",
        "Small additional cost (2-3%)",
        "Reduced upfront payment"
      ],
      ideal: "Medium-sized businesses",
      icon: <Calendar className="h-6 w-6 text-securenow-blue" />
    },
    {
      title: "Quarterly",
      description: "Pay premium in four installments",
      benefits: [
        "Improved cash flow planning",
        "Lower individual payments",
        "Moderate additional cost (4-5%)"
      ],
      ideal: "Growing companies with variable revenue",
      icon: <CreditCard className="h-6 w-6 text-securenow-blue" />
    },
    {
      title: "Monthly",
      description: "Pay premium every month",
      benefits: [
        "Maximum payment flexibility",
        "Easiest on cash flow",
        "Higher overall cost (6-8% extra)"
      ],
      ideal: "Startups and small businesses",
      icon: <CheckCircle className="h-6 w-6 text-securenow-blue" />
    }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Premium Payment Installments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Flexible payment options to make premium management easier for your business.
          </p>
        </div>
      </section>

      {/* Payment Plans Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Available Payment Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer various installment options to suit different business needs and cash flow requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-securenow-blue/10 p-3 rounded-full">
                      {plan.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-securenow-blue">{plan.title}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Ideal for:</h4>
                      <p className="text-gray-600">{plan.ideal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-securenow-blue mb-6">Important Information About Installment Payments</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-securenow-blue">Payment Methods</h4>
                <p className="text-gray-600 mb-4">
                  We accept various payment methods including direct bank transfer, check, and online payment gateways. 
                </p>
                <p className="text-gray-600">
                  For recurring installments, we recommend setting up auto-debit mandates for seamless processing.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-securenow-blue">Mid-Term Changes</h4>
                <p className="text-gray-600 mb-4">
                  If there are mid-policy changes like adding or removing employees, the remaining installments will be adjusted accordingly.
                </p>
                <p className="text-gray-600">
                  Pro-rata calculations ensure you only pay for the actual coverage period.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-securenow-blue">Late Payment Policy</h4>
                <p className="text-gray-600">
                  It's important to make installment payments by the due date to ensure continuous coverage. Most insurers offer a grace period of 15-30 days, after which the policy may lapse.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-securenow-blue">Documentation</h4>
                <p className="text-gray-600">
                  Clear payment schedules will be provided at policy inception, detailing all installment dates and amounts. We send reminders before each due date to help you manage payments effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-securenow-blue mb-4">Need a Customized Payment Plan?</h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            We can work with you to create a tailored installment plan that matches your company's financial cycle and cash flow needs.
          </p>
          <a 
            href="/quotation" 
            className="inline-block bg-securenow-orange hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Discuss Payment Options
          </a>
        </div>
      </section>
    </>
  );
};

export default Installments;
