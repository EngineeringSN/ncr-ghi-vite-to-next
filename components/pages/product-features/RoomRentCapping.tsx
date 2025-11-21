import React from "react";
import {
  Bed,
  Building,
  BadgeDollarSign,
  HeartPulse,
  HelpingHand,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const RoomRentCapping = () => {
  const breadcrumbItems = [{ label: "product-features" },{ label: "room-rent-capping" }];
  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Room Rent Capping</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding room rent capping in group health insurance plans and
            its impact on hospitalization benefits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-6">
                What is Room Rent Capping?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Room rent capping is a clause in health insurance policies that
                limits the amount the insurer will pay for the hospital room
                charges. It's typically expressed as a percentage of the sum
                insured or as a fixed amount per day.
              </p>

              <h3 className="text-2xl font-semibold text-securenow-blue mb-4 mt-8">
                How Room Rent Capping Works
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If your policy has a room rent cap of ₹5,000 per day and you
                choose a room that costs ₹7,000 per day, you'll need to pay the
                difference of ₹2,000 per day from your pocket. Additionally,
                many associated hospital charges like nursing, doctor visits,
                and procedures are proportionately reduced based on the room
                rent capping.
              </p>

              <h3 className="text-2xl font-semibold text-securenow-blue mb-4 mt-8">
                Impact on Claims Settlement
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  When a room rent cap applies and you choose a higher category
                  room, the insurer applies a proportionate deduction formula:
                </p>
                <div className="bg-white p-4 rounded mt-4 border border-gray-200">
                  <p className="text-center font-semibold">
                    Claim Amount Payable = (Eligible Room Rent ÷ Actual Room
                    Rent) × Total Hospital Bill
                  </p>
                </div>
                <p className="text-gray-600 mt-4 text-sm italic">
                  This proportionate deduction can significantly reduce your
                  claim amount for all associated charges.
                </p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-securenow-blue/5 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                  Types of Room Categories
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Bed className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">General Ward:</span>
                      <p className="text-sm text-gray-600">
                        Shared room with multiple beds
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Bed className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Twin Sharing:</span>
                      <p className="text-sm text-gray-600">
                        Room shared with one other patient
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Bed className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Private Room:</span>
                      <p className="text-sm text-gray-600">
                        Single occupancy room
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Deluxe Room:</span>
                      <p className="text-sm text-gray-600">
                        Premium single room with better amenities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Suite:</span>
                      <p className="text-sm text-gray-600">
                        Luxury accommodation with separate living area
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-securenow-blue/10">
                  <h4 className="font-medium text-securenow-blue mb-2">
                    Need assistance?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our experts can help you understand the best room rent
                    options for your group policy.
                  </p>
                  <Button className="w-full bg-securenow-orange hover:bg-orange-600">
                    <a
                      href="/quotation"
                      className="flex items-center justify-center w-full"
                    >
                      Get Expert Advice <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-securenow-orange">
              <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                Benefits of No Room Rent Capping
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BadgeDollarSign className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Freedom to choose any room category without financial
                    implications
                  </p>
                </li>
                <li className="flex items-start">
                  <HeartPulse className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    No proportionate deduction in other medical expenses
                  </p>
                </li>
                <li className="flex items-start">
                  <HelpingHand className="h-5 w-5 text-securenow-orange mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Better care and comfort during hospital stay
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-securenow-orange">
              <h3 className="text-xl font-semibold text-securenow-blue mb-4">
                Group Insurance Room Rent Options
              </h3>
              <p className="text-gray-700 mb-4">
                SecureNow offers various room rent options in our group health
                insurance plans:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• No room rent capping (recommended)</li>
                <li>• Single private room</li>
                <li>• Twin sharing room</li>
                <li>• 1% of sum insured per day</li>
                <li>• 2% of sum insured per day</li>
              </ul>
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
              href="/product-features/copay"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-securenow-blue mb-2">
                Co-Pay Clause
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about co-payment requirements in health insurance
                policies.
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
            Choose the Right Room Rent Option
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Get a customized group health insurance quote with the ideal room
            rent policy for your organization.
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

export default RoomRentCapping;
