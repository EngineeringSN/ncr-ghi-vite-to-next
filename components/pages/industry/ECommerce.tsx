
import React from 'react';
import { Shield, Users, ShoppingCart, Activity, Check, FileText, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const ECommerce = () => {
  const breadcrumbItems = [{ label: "Industry" },{ label: "e-commerce" }];
  const keyBenefits = [
    "Coverage for hospitalization & surgeries", 
    "Emergency care for warehouse & delivery staff", 
    "Maternity & family coverage for office teams", 
    "Mental wellness support for high-stress roles", 
    "Telemedicine & OPD for remote or hybrid staff", 
    "Tax benefits for employers"
  ];
  
  const coverageFor = [
    "Online retail platforms", 
    "Delivery & logistics services", 
    "Marketplace sellers & aggregators", 
    "Tech-enabled commerce startups", 
    "E-commerce fulfillment centers"
  ];
  
  const faqs = [
    {
      question: "Why should e-commerce companies invest in group health insurance?",
      answer: "It protects your workforce, especially those in physically demanding or high-pressure roles, and improves overall job satisfaction and retention."
    }, 
    {
      question: "Can warehouse and delivery staff be covered?",
      answer: "Yes. Most insurers allow customized plans that cover both office and field employees, including accident and hospitalization benefits."
    }, 
    {
      question: "What does a typical plan include?",
      answer: "It includes inpatient hospitalization, daycare procedures, maternity benefits, pre-existing condition coverage, and sometimes wellness programs."
    }, 
    {
      question: "Can contract or gig workers be included?",
      answer: "Some insurers provide coverage for gig workers or part-timers under specially designed group plans. Speak with your insurer to explore options."
    }, 
    {
      question: "Is the plan valid across different cities or regions?",
      answer: "Absolutely. Most insurers offer pan-India cashless network hospitals and teleconsultations, ideal for a geographically dispersed workforce."
    }
  ];
  
  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-securenow-blue mb-4">Group Health Insurance for the E-Commerce Industry</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          The e-commerce industry is fast-growing, dynamic, and people-driven. From warehouse staff and logistics teams to customer service reps and tech professionals, each role is vital to operations.
        </p>
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          To keep this workforce productive and motivated, Group Health Insurance is not just a nice-to-have—it's a must-have.
          Offering comprehensive health insurance builds trust, boosts retention, and enhances your company's image as a responsible employer.
        </p>
      </section>

      {/* Why it's Vital Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why Group Health Insurance Is Crucial for E-Commerce Businesses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Users className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">1. Diverse Workforce, Diverse Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  E-commerce companies typically employ a mix of full-time staff, delivery personnel, warehouse teams, and tech professionals. A well-structured group health plan ensures every team member receives care suited to their role and risk profile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <ShoppingCart className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">2. Covers On-Ground Operational Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Employees in logistics, packaging, and last-mile delivery often face physical strain or accident risks. Group insurance offers peace of mind with emergency care and hospital coverage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Shield className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">3. Attracts & Retains Quality Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  In a competitive hiring space, offering health coverage gives you an edge. It's one of the most valued benefits by both white-collar and blue-collar professionals in e-commerce.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Activity className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">4. Boosts Employee Satisfaction & Loyalty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  When employees feel protected, they're more likely to stay longer, perform better, and represent your brand positively—both internally and externally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Key Benefits of Group Health Insurance in E-Commerce</h2>
              <p className="text-gray-600 mb-6">
                Our e-commerce industry insurance packages are designed to address the specific needs and risks of your business,
                with comprehensive coverage for your team's health and safety.
              </p>
              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-securenow-blue">✓</span>
                    </div>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="E-Commerce Warehouse" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Be Covered Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-6">Who Can Benefit?</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Whether you're a growing D2C brand or an enterprise-level marketplace, offering group health insurance makes your company stronger from the inside out.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {coverageFor.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-securenow-blue text-sm sm:text-base">{role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">FAQs – Group Health Insurance for E-Commerce Businesses</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-securenow-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Conclusion</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            In the fast-paced world of e-commerce, your people are your biggest strength. Group health insurance helps you show that you care—not just about business performance, but about the well-being of every employee who contributes to your success.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://securenow.in/ghi-calculator">
              <Button size="lg" className="bg-securenow-blue hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </a>
            <p className="text-gray-600 mt-2">
              Looking to set up a cost-effective and inclusive group health insurance plan? Our advisors can help you find the right fit for your e-commerce workforce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ECommerce;
