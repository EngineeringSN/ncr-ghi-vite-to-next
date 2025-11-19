import React from 'react';
import { Shield, ArrowRight, Check, CheckCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Link from 'next/link';

const FlexiPlans = () => {
  const breadcrumbItems = [
    { label: "Technology", href: "/technology" },
    { label: "Flexi-Plans" },
  ];
  const flexiFeatures = [
    {
      title: 'Customizable Coverage',
      description: 'Allow employees to select coverage levels that suit their individual needs and preferences.'
    },
    {
      title: 'Budget Optimization',
      description: 'Make the most of your insurance budget by allocating resources more efficiently.'
    },
    {
      title: 'Enhanced Employee Satisfaction',
      description: 'Increase employee satisfaction by offering personalized benefit options.'
    },
    {
      title: 'Simplified Administration',
      description: 'Our platform automates the selection and management process, reducing administrative burden.'
    }
  ];

  const planOptions = [
    {
      title: 'Core Coverage',
      description: 'Essential health insurance coverage that forms the foundation of every plan.',
      included: ['Hospitalization', 'Emergency Care', 'Basic Diagnostics', 'Pharmacy Benefits']
    },
    {
      title: 'Enhanced Options',
      description: 'Additional coverage options that employees can select based on their needs.',
      included: ['Outpatient Care', 'Dental Coverage', 'Vision Coverage', 'Alternative Therapies']
    },
    {
      title: 'Premium Add-ons',
      description: 'Premium benefits that provide comprehensive protection for various scenarios.',
      included: ['Maternity Benefits', 'International Coverage', 'Critical Illness', 'Preventive Wellness']
    }
  ];

  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Flexi Plans</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Customizable insurance solutions that give your employees the freedom to choose
            coverage that best suits their unique needs.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Personalized Health Benefits</h2>
              <p className="text-gray-600 mb-6">
                Our Flexi Plans allow your employees to customize their health insurance coverage
                according to their individual needs, while keeping costs predictable for your organization.
              </p>
              <p className="text-gray-600 mb-6">
                With our advanced technology platform, employees can easily select their preferred coverage
                options through a user-friendly interface, making the enrollment process simple and efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/quotation">
                  <Button className="bg-securenow-blue hover:bg-blue-800 text-white">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button variant="outline" className="border-securenow-blue text-securenow-blue hover:bg-securenow-blue/10">
                    Explore Technology
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Flexible Insurance Plans Dashboard" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Flexi Plans come with a range of features designed to enhance your employee benefits program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flexiFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                    <Shield className="h-6 w-6 text-securenow-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-securenow-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
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
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">How Flexi Plans Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple process to implement flexible health insurance options for your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-securenow-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-securenow-blue">1</span>
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Core Selection</h3>
              <p className="text-gray-600">
                Your company selects a core health insurance plan that forms the foundation of all employee coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-securenow-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-securenow-blue">2</span>
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Flex Credits Allocation</h3>
              <p className="text-gray-600">
                Employees receive flex credits that they can allocate toward additional coverage options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-securenow-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-securenow-blue">3</span>
              </div>
              <h3 className="text-xl font-bold text-securenow-blue mb-2">Personalized Selection</h3>
              <p className="text-gray-600">
                Using our platform, employees select the additional benefits that best meet their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Options Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Plan Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flexible platform offers various coverage options to suit different employee needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planOptions.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-securenow-blue">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.included.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCheck className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Indian women using laptop for insurance benefits" 
                className="rounded-lg shadow-md w-full h-auto object-cover mb-8 md:mb-0"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Benefits For Everyone</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-securenow-darkgray mb-2">For Employers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Predictable insurance costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Improved employee satisfaction and retention</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Reduced administrative burden with our technology</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-securenow-darkgray mb-2">For Employees</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Personalized coverage based on individual needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Enhanced benefits package with options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-securenow-blue mt-0.5 mr-2" />
                    <span className="text-gray-700">Easy-to-use selection interface</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-securenow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement Flexi Plans?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to learn more about how our Flexi Plans can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quotation">
              <Button size="lg" className="bg-white text-securenow-blue hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/technology/dashboard">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Our Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlexiPlans;
