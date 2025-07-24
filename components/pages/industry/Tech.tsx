
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Shield, Users, Brain, Calendar, Wallet, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const Tech = () => {
  const keyFeatures = ["Cashless hospitalization at network hospitals", "Coverage for pre-existing conditions", "Maternity benefits and child coverage", "Mental wellness & teleconsultations", "Add-on options for family members", "Annual preventive health checkups", "Customizable plans for startups to large enterprises"];
  const healthRisks = ["Eye strain", "Poor posture", "Burnout", "Anxiety and stress"];
  const companies = ["Tech startups (5+ employees)", "Product & software development companies", "SaaS platforms", "IT consulting firms", "Remote-first and hybrid tech teams"];
  const faqs = [{
    question: "Is group health insurance mandatory for tech companies?",
    answer: "While not legally required in all cases, it's often expected by employees, especially in competitive tech sectors like IT, SaaS, and product engineering."
  }, {
    question: "Can startups afford group health insurance?",
    answer: "Absolutely. Many insurers offer affordable plans designed for small teams, with flexibility to scale as you grow."
  }, {
    question: "What does a typical group health insurance plan cover?",
    answer: "It includes hospitalization, doctor visits, maternity, daycare procedures, and increasingly, mental health and telemedicine services."
  }, {
    question: "Can tech employees add their families to the policy?",
    answer: "Yes. Most plans offer optional coverage for spouses, children, and even parents, either partially or fully paid by the employer or employee."
  }, {
    question: "How does it benefit remote or hybrid teams?",
    answer: "Most insurers offer pan-India coverage, telehealth access, and app-based claims so employees can use their benefits wherever they're located."
  }];
  return <MainLayout>
      {/* Header Section */}
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-securenow-blue mb-4">Group Health Insurance for the Tech Industry</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          The tech industry is fast-paced, demanding, and ever-evolving. While innovation drives success, the true engine behind every tech company is its people.
        </p>
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          In a sector where talent retention and employee well-being are critical, offering Group Health Insurance is not just a benefit—it's a competitive advantage.
          Whether you're a startup, a growing SaaS firm, or a large IT enterprise, investing in group health insurance is a smart way to care for your team and enhance your brand as an employer.
        </p>
      </section>

      {/* Why it Matters Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why Group Health Insurance Matters in the Tech Industry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Users className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">1. Attracts and Retains Top Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Tech professionals are in high demand. Offering quality health insurance helps companies stand out in a competitive hiring market and keeps current employees satisfied and loyal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Brain className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">2. Addresses Mental and Physical Health Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Long screen hours, high-pressure deadlines, and remote work can lead to health issues. Group health insurance plans tailored for tech employees often include mental health support, therapy sessions, annual checkups, and wellness programs.
                </CardDescription>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {healthRisks.map((risk, index) => <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-securenow-blue rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">{risk}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Shield className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">3. Promotes Productivity and Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Healthy employees are more focused, creative, and productive. When employees feel secure about their healthcare, they are more likely to stay engaged and motivated.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Wallet className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">4. Tax Benefits for Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Employers also benefit from tax deductions on group insurance premiums, making it a financially smart investment in workforce well-being.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Key Features of Group Health Insurance for Tech Teams</h2>
              <p className="text-gray-600 mb-6">
                Our tech industry insurance packages are customized to address the specific needs and risks of your business,
                with comprehensive coverage for your team's health and wellbeing.
              </p>
              <ul className="space-y-4">
                {keyFeatures.map((feature, index) => <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-securenow-blue">✓</span>
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>)}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Tech Office Environment" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Offer It Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-6">Who Should Offer It?</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            No matter your company size, group health insurance can be tailored to your team's needs and budget.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {companies.map((company, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-securenow-blue text-sm sm:text-base">{company}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">FAQs </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-securenow-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Conclusion</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            In an industry driven by innovation, your people are your most valuable asset. Group Health Insurance helps you protect, empower, and retain them. Whether you're a startup or a global tech firm, offering this benefit reflects a culture of care and long-term thinking.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/quotation">
              <Button size="lg" className="bg-securenow-blue hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </Link>
            <p className="text-gray-600 mt-2">
              Ready to set up a customized group health plan for your tech team? Our experts can help you find the right coverage, at the right price.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default Tech;
