import React from "react";
// import MainLayout from '@/layouts/MainLayout';
import {
  Percent,
  BadgeDollarSign,
  CircleDollarSign,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const Copay = () => {
  const breadcrumbItems = [{ label: "product-features" },{ label: "copay" }];
  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Co-Pay Clause</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding co-payment provisions in group health insurance
            policies and their implications for your employees.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">
                What is Co-Payment?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A co-payment (or co-pay) is a cost-sharing arrangement in health
                insurance policies where the policyholder agrees to pay a
                specific percentage of the claim amount while the insurance
                company pays the rest. This clause is designed to ensure
                policyholders share a portion of their healthcare costs.
              </p>

              <div className="bg-securenow-blue/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                  How Co-Pay Works
                </h3>
                <p className="text-gray-700 mb-4">
                  For example, if a policy has a 10% co-pay clause and the
                  approved claim amount is ₹100,000:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-center font-medium text-gray-600">
                      Insurance pays: ₹90,000
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      (90% of claim amount)
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-center font-medium text-gray-600">
                      Policyholder pays: ₹10,000
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      (10% of claim amount)
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-securenow-blue mb-4">
                Types of Co-Pay Provisions
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-securenow-orange/10 p-2 rounded">
                    <Percent className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg text-securenow-blue">
                      Standard Co-payment
                    </h4>
                    <p className="text-gray-700">
                      A fixed percentage that applies to all healthcare services
                      and treatments covered under the policy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-securenow-orange/10 p-2 rounded">
                    <BadgeDollarSign className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg text-securenow-blue">
                      Specific Treatment Co-payment
                    </h4>
                    <p className="text-gray-700">
                      Different co-pay percentages for different treatments or
                      procedures (e.g., higher co-pay for certain elective
                      surgeries).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-securenow-orange/10 p-2 rounded">
                    <CircleDollarSign className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg text-securenow-blue">
                      Age-Based Co-payment
                    </h4>
                    <p className="text-gray-700">
                      Co-pay percentage that increases with the policyholder's
                      age, often applicable for senior citizens or specific age
                      groups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-securenow-orange/10 p-2 rounded">
                    <AlertCircle className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg text-securenow-blue">
                      Network Hospital Co-payment
                    </h4>
                    <p className="text-gray-700">
                      Different co-pay percentages for treatments at network
                      hospitals versus non-network hospitals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-securenow-orange sticky top-24">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                  Implications for Employees
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-md">
                    <h4 className="font-medium text-red-600 mb-1">
                      Disadvantages of Co-pay
                    </h4>
                    <ul className="text-sm text-red-800 space-y-2">
                      <li>• Additional out-of-pocket expenses</li>
                      <li>• Financial burden during large claims</li>
                      <li>• May discourage seeking necessary care</li>
                      <li>• Complexity in understanding benefits</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-600 mb-1">
                      Benefits of No Co-pay
                    </h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li>• Complete coverage as per policy limits</li>
                      <li>• No additional payment at claim time</li>
                      <li>• Simplified claim experience</li>
                      <li>• Better employee satisfaction</li>
                      <li>• Higher perceived value of the benefit</li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm mb-4">
                      SecureNow recommends group health insurance policies
                      without co-pay clauses for better employee benefits and
                      satisfaction.
                    </p>
                    <Button className="w-full bg-securenow-orange hover:bg-orange-600">
                      <a
                        href="/quotation"
                        className="flex items-center justify-center w-full"
                      >
                        Get Expert Advice
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-securenow-blue mb-6">
              Why Employers Choose Group Policies Without Co-pay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                  Employee Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>Higher employee satisfaction and retention rates</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>
                      Employees seek timely medical care without financial
                      concerns
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>Reduced financial stress during health emergencies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>Enhanced perception of the employee benefits package</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                  Employer Benefits
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>Competitive advantage in talent recruitment</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>Simplified administration of health benefits</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>
                      Reduced employee grievances related to insurance claims
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p>
                      Improved workforce productivity due to better healthcare
                      access
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6 text-center">
            Related Product Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/product-features/room-rent-capping"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Room Rent Capping
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about room rent limits and their impact on insurance
                claims.
              </p>
              <div className="flex items-center text-securenow-orange font-medium">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/product-features/cashless-opd"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Cashless OPD
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the benefits of cashless outpatient department
                services.
              </p>
              <div className="flex items-center text-securenow-orange font-medium">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/product-features"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                All Product Features
              </h3>
              <p className="text-gray-600 mb-4">
                View all group health insurance product features and benefits.
              </p>
              <div className="flex items-center text-securenow-orange font-medium">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose a No Co-Pay Policy
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Get a comprehensive group health insurance quote without co-payment
            clauses for your organization.
          </p>
          <Button className="bg-securenow-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out">
            <a href="/quotation" className="inline-block">
              Get a Quote
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Copay;
