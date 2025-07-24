import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
const GigWorkers = () => {
  return <MainLayout>
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Group Health Insurance for Gig Economy Workers</h1>
          <p className="text-xl">
            Providing health protection for the modern workforce with flexible solutions designed for the unique needs of gig workers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">The Gig Economy & Insurance Challenges</h2>
          <p className="text-lg text-gray-700">
            The gig economy in India is experiencing explosive growth, with over 15 million gig workers across various sectors. Unlike traditional employees, these workers often lack access to employer-provided benefits, creating a significant protection gap.
          </p>
        </div>
        
        <div className="md:flex md:gap-8 items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Gig Workers in India" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-securenow-blue mb-2">Why Gig Workers Need Health Insurance</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-securenow-blue font-bold mr-2">•</span>
                <span>Income instability and unpredictable earning patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-securenow-blue font-bold mr-2">•</span>
                <span>Lack of traditional employee benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-securenow-blue font-bold mr-2">•</span>
                <span>Physical risks associated with delivery and transportation work</span>
              </li>
              <li className="flex items-start">
                <span className="text-securenow-blue font-bold mr-2">•</span>
                <span>Limited financial safety nets for health emergencies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions Section */}
      <section className="bg-securenow-gray py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-securenow-blue mb-4">Unique Insurance Challenges for Gig Workers</h2>
            <p className="text-lg text-gray-700">
              Traditional group health insurance models weren't built for the gig economy. Here's how SecureNow is addressing these challenges:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl text-securenow-blue mb-3">Intermittent Work Patterns</h3>
              <p className="text-gray-700 mb-4">Gig workers may not have consistent work schedules, making traditional monthly premium payments challenging.</p>
              <div className="bg-securenow-blue/10 p-4 rounded-md">
                <p className="font-medium text-securenow-blue">Our Solution:</p>
                <p className="text-gray-700">Flexible payment structures with pay-per-use options and installment-based premiums.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl text-securenow-blue mb-3">Multiple Platform Work</h3>
              <p className="text-gray-700 mb-4">Many gig workers provide services across multiple platforms, creating confusion about which company provides coverage.</p>
              <div className="bg-securenow-blue/10 p-4 rounded-md">
                <p className="font-medium text-securenow-blue">Our Solution:</p>
                <p className="text-gray-700">Portable insurance plans that stay with the worker regardless of which platform they're working with.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl text-securenow-blue mb-3">Affordability Concerns</h3>
              <p className="text-gray-700 mb-4">Individual health insurance is often too expensive for gig workers with fluctuating incomes.</p>
              <div className="bg-securenow-blue/10 p-4 rounded-md">
                <p className="font-medium text-securenow-blue">Our Solution:</p>
                <p className="text-gray-700">Group-negotiated rates with platform companies subsidizing a portion of the premium cost.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl text-securenow-blue mb-3">Unique Risk Profile</h3>
              <p className="text-gray-700 mb-4">Delivery and transport gig workers face specific occupational hazards different from office workers.</p>
              <div className="bg-securenow-blue/10 p-4 rounded-md">
                <p className="font-medium text-securenow-blue">Our Solution:</p>
                <p className="text-gray-700">Tailored coverage with accident protection, road risk coverage, and income protection during recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Insurance Solutions Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">SecureNow's Gig Worker Insurance Solutions</h2>
        
        <div className="space-y-8">
          <div className="md:flex md:gap-6 items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="bg-securenow-blue/10 p-6 rounded-lg h-full flex items-center justify-center">
                <h3 className="text-xl font-bold text-securenow-blue text-center">Platform-Partnered Coverage</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                We work directly with gig platforms to provide group health insurance that can be extended to their service providers. This model creates economies of scale, making premiums more affordable while giving platforms a competitive edge in worker recruitment.
              </p>
            </div>
          </div>
          
          <div className="md:flex md:gap-6 items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="bg-securenow-blue/10 p-6 rounded-lg h-full flex items-center justify-center">
                <h3 className="text-xl font-bold text-securenow-blue text-center">Pay-Per-Job Coverage</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                Our innovative micro-insurance model lets platforms add a small insurance component to each job completed. This creates a coverage fund for the worker without requiring large upfront premium payments.
              </p>
            </div>
          </div>
          
          <div className="md:flex md:gap-6 items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="bg-securenow-blue/10 p-6 rounded-lg h-full flex items-center justify-center">
                <h3 className="text-xl font-bold text-securenow-blue text-center">Gig Worker Associations</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                We help create and organize gig worker associations that can negotiate group rates, similar to how traditional employers obtain group health insurance for their employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-securenow-gray py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Success Story</h2>
          
          <div className="bg-white p-8 rounded-lg shadow relative">
            <div className="absolute -top-5 left-8 bg-securenow-blue text-white px-6 py-2 rounded-full">
              Case Study
            </div>
            <h3 className="text-xl font-bold mb-4 pt-3">Leading Food Delivery Platform</h3>
            <div className="md:flex md:gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  When one of India's largest food delivery platforms approached us, they were struggling with high delivery partner turnover and wanted to offer health benefits without classifying workers as employees.
                </p>
                <p className="text-gray-700 mb-4">
                  Our solution was a hybrid model where:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>The platform contributed ₹2 per delivery to a health coverage fund</li>
                  <li>Delivery partners could opt in with a small monthly contribution</li>
                  <li>Coverage activated after a minimum number of deliveries per month</li>
                  <li>Basic coverage was free, with premium upgrades available</li>
                </ul>
                <div className="mt-6">
                  <p className="font-bold text-securenow-blue">Results:</p>
                  <p className="text-gray-700">45% decrease in delivery partner turnover and 60% opt-in rate among eligible workers.</p>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-securenow-blue/5 p-4 rounded-lg h-full flex flex-col justify-center">
                  <div className="text-center mb-3">
                    <span className="text-3xl font-bold text-securenow-blue">25,000+</span>
                  </div>
                  <p className="text-center text-gray-700">Gig workers protected through our platform</p>
                  
                  <div className="border-t border-gray-200 my-4"></div>
                  
                  <div className="text-center mb-3">
                    <span className="text-3xl font-bold text-securenow-blue">₹1.2 Cr</span>
                  </div>
                  <p className="text-center text-gray-700">Claims paid for gig workers in the last year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Are gig workers eligible for traditional group health insurance?</h3>
            <p className="text-gray-700">While traditional group health insurance is designed for full-time employees, SecureNow has developed specialized group plans that accommodate the unique nature of gig work relationships.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">How can platforms offer insurance without classifying workers as employees?</h3>
            <p className="text-gray-700">Our insurance structures are designed to maintain the independent contractor relationship while still providing meaningful health protection. We use contribution models and voluntary opt-in systems that comply with labor regulations.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">What's the business benefit for platforms to offer health coverage?</h3>
            <p className="text-gray-700">Platforms that offer health benefits see significant improvements in worker retention, satisfaction, and productivity. It also creates a competitive advantage in attracting quality service providers.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Can coverage continue if a gig worker switches platforms?</h3>
            <p className="text-gray-700">We offer portable coverage options that can be designed to stay with the worker even if they move between platforms, ensuring continuous protection regardless of which company they're currently providing services for.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-blue py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Gig Workforce</h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a platform company looking to offer benefits or an association of gig workers seeking group coverage, we have solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://securenow.in/ghi-calculator" className="bg-white text-securenow-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Get a Quote
            </a>
            
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default GigWorkers;
