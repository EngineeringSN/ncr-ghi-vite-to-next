import React from "react";
import {
  Stethoscope,
  Pill,
  FileSearch,
  ShieldCheck,
  ArrowRight,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";
const CashlessOPD = () => {
  const breadcrumbItems = [{ label: "product-features" },{ label: "cashless-opd" }];
  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Cashless OPD Benefits</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Streamline outpatient care with cashless OPD coverage in your group
            health insurance policy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">
                What is Cashless OPD?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cashless OPD (Outpatient Department) is a feature in group
                health insurance policies that allows employees to avail
                outpatient medical services without paying at the point of
                service. This includes doctor consultations, diagnostic tests,
                pharmacy expenses, and other non-hospitalization treatments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional health insurance that focuses primarily on
                hospitalization, cashless OPD extends coverage to day-to-day
                healthcare needs, making it a significant value addition to your
                employee benefits package.
              </p>
            </div>

            <div className="bg-securenow-blue/5 p-8 rounded-lg border border-securenow-blue/20">
              <h3 className="text-2xl font-semibold text-securenow-blue mb-4">
                Services Covered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <Stethoscope className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-securenow-blue">
                      Doctor Consultations
                    </h4>
                    <p className="text-sm text-gray-600">
                      General physicians and specialists
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <FileSearch className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-securenow-blue">
                      Diagnostic Tests
                    </h4>
                    <p className="text-sm text-gray-600">
                      Blood tests, X-rays, scans, etc.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <Pill className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-securenow-blue">
                      Pharmacy Expenses
                    </h4>
                    <p className="text-sm text-gray-600">
                      Prescription medications
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <ShieldCheck className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-securenow-blue">
                      Preventive Care
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vaccinations, health check-ups
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">
              How Cashless OPD Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-securenow-orange text-center">
                <div className="bg-securenow-orange/10 p-3 inline-flex rounded-full mb-4">
                  <Coins className="h-6 w-6 text-securenow-orange" />
                </div>
                <h3 className="text-xl font-semibold text-securenow-blue mb-3">
                  Digital Wallet
                </h3>
                <p className="text-gray-700">
                  Employees receive a pre-funded digital wallet or card with
                  their allocated OPD limit for the policy year.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-securenow-orange text-center">
                <div className="bg-securenow-orange/10 p-3 inline-flex rounded-full mb-4">
                  <Stethoscope className="h-6 w-6 text-securenow-orange" />
                </div>
                <h3 className="text-xl font-semibold text-securenow-blue mb-3">
                  Network Access
                </h3>
                <p className="text-gray-700">
                  They can visit network hospitals, clinics, diagnostic centers,
                  and pharmacies within the insurer's network.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-securenow-orange text-center">
                <div className="bg-securenow-orange/10 p-3 inline-flex rounded-full mb-4">
                  <ShieldCheck className="h-6 w-6 text-securenow-orange" />
                </div>
                <h3 className="text-xl font-semibold text-securenow-blue mb-3">
                  Seamless Payment
                </h3>
                <p className="text-gray-700">
                  The payment is processed directly between the healthcare
                  provider and the insurance company, requiring no cash payment.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">
              Benefits of Cashless OPD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4 border-b pb-2">
                  For Employees
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      No out-of-pocket expenses for regular healthcare needs
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Encourages preventive care and early diagnosis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Convenient access to quality healthcare providers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      No claim reimbursement paperwork or waiting period
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Covers day-to-day medical expenses that traditional
                      insurance doesn't
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4 border-b pb-2">
                  For Employers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Enhanced employee benefits package that stands out
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Reduced absenteeism due to better healthcare access
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Better employee satisfaction and retention
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Potential reduction in major medical claims through
                      preventive care
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-securenow-orange font-bold mr-2">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      Digital tracking and analytics of healthcare utilization
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Options */}
      <section className="py-12 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-securenow-blue mb-8 text-center">
            OPD Implementation Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Basic OPD Cover
              </h3>
              <p className="text-gray-600 mb-4">
                Coverage for doctor consultations and basic diagnostic tests,
                suitable for organizations starting with OPD benefits.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Doctor consultations</li>
                <li>• Basic pathology tests</li>
                <li>• Limited pharmacy benefits</li>
              </ul>
              <p className="text-sm text-gray-500">
                Starting from ₹3,000 per employee annually
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-securenow-orange relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-securenow-orange text-white text-xs font-bold py-1 px-3 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Comprehensive OPD
              </h3>
              <p className="text-gray-600 mb-4">
                Complete outpatient coverage including specialist consultations
                and advanced diagnostics.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• All doctor consultations</li>
                <li>• Comprehensive diagnostics</li>
                <li>• Full pharmacy coverage</li>
                <li>• Preventive health check-ups</li>
              </ul>
              <p className="text-sm text-gray-500">
                Starting from ₹5,000 per employee annually
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Premium OPD
              </h3>
              <p className="text-gray-600 mb-4">
                Enhanced OPD coverage including wellness benefits, mental health
                support, and dental care.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• All comprehensive features</li>
                <li>• Dental and vision care</li>
                <li>• Mental health consultations</li>
                <li>• Alternative treatments (AYUSH)</li>
              </ul>
              <p className="text-sm text-gray-500">
                Starting from ₹8,000 per employee annually
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-securenow-blue mb-6 text-center">
            Related Product Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/product-features/room-rent-capping"
              className="bg-securenow-gray p-6 rounded-lg hover:shadow-lg transition-shadow"
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
              href="/product-features/copay"
              className="bg-securenow-gray p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Co-Pay Clause
              </h3>
              <p className="text-gray-600 mb-4">
                Understand co-payment requirements in health insurance policies.
              </p>
              <div className="flex items-center text-securenow-orange font-medium">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/product-features"
              className="bg-securenow-gray p-6 rounded-lg hover:shadow-lg transition-shadow"
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
            Add Cashless OPD to Your Group Health Plan
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Enhance your employee benefits with comprehensive cashless OPD
            coverage. Get a customized quote today.
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

export default CashlessOPD;
