
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Shield, Users, BookOpen, Activity, Check, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Consulting = () => {
  const keyBenefits = [
    "Coverage for pre-existing conditions",
    "Mental health counseling & therapy sessions",
    "Cashless hospitalization at network hospitals",
    "Preventive health checkups & diagnostics", 
    "Add-on coverage for family members", 
    "Tax benefits for the employer", 
    "Seamless digital claim process—ideal for remote teams"
  ];
  
  const coverageFor = [
    "Management & Strategy Consulting Firms", 
    "Legal & Compliance Advisors", 
    "Financial & Investment Consultants", 
    "IT & Technology Consulting Companies", 
    "Boutique Firms and Independent Agencies"
  ];
  
  const faqs = [
    {
      question: "Why should consulting firms offer group health insurance?",
      answer: "Consulting is a high-pressure profession. Health insurance supports employee wellness, builds loyalty, and improves employer reputation—especially when competing for top talent."
    }, 
    {
      question: "Can small or boutique consulting firms afford group health plans?",
      answer: "Yes. Insurers offer flexible, affordable plans that start with as few as 5 employees, making it accessible for firms of all sizes."
    }, 
    {
      question: "What are the common inclusions in a group health plan?",
      answer: "Hospitalization (planned and emergency), maternity benefits, mental health support, diagnostics, and sometimes OPD or teleconsultations."
    }, 
    {
      question: "Can employees add dependents to their insurance?",
      answer: "Most plans allow coverage for spouses, children, and sometimes even parents, based on the employer's policy and insurer terms."
    }, 
    {
      question: "Does it cover consultants who travel frequently or work remotely?",
      answer: "Yes, group insurance plans typically offer pan-India coverage and many include 24/7 telehealth services—perfect for mobile teams."
    }
  ];
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-securenow-blue mb-4">Group Health Insurance for the Consulting Industry</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          In the consulting world, people are the most valuable asset. Whether it's management consulting, financial advisory, legal consulting, or IT strategy, consultants work under high pressure, tight deadlines, and often unpredictable schedules.
        </p>
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          Ensuring their health and well-being is critical not just for their performance but also for long-term business success.
          That's where Group Health Insurance for consulting firms becomes an essential investment. It helps companies offer meaningful protection to their employees while strengthening their employer brand.
        </p>
      </section>

      {/* Why it's Vital Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why Group Health Insurance is Crucial in Consulting</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Activity className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">1. High-Stress Work Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Consultants often juggle multiple clients, travel frequently, and work long hours. This leads to high levels of stress, fatigue, and in some cases, burnout. A group health plan that includes mental health support, wellness programs, and preventive care is a key asset.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Building className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">2. Client-Facing Roles & Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Frequent travel and client interaction expose consultants to different health environments, making comprehensive coverage—including hospitalization and emergency care—a must-have.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Users className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">3. Talent Attraction & Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Consulting firms thrive on high-performing talent. Offering group health insurance not only makes your compensation package more attractive but also helps in retaining top consultants and reducing attrition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">4. Tailored Coverage for Different Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Whether it's junior associates, partners, or support staff, customizable group plans allow employers to offer tiered coverage based on roles, seniority, or location.
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
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Key Benefits of Group Health Insurance for Consultants</h2>
              <p className="text-gray-600 mb-6">
                Our consulting industry insurance packages are designed to address the specific needs and risks of your business,
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
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Consulting Team Meeting" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Be Covered Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-6">Best-Suited For</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Group health insurance plans can be customized to fit consulting teams with different specializations and requirements.
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
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">FAQs – Group Health Insurance for Consulting Firms</h2>
          
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
            In the consulting industry, where human capital drives results, prioritizing employee health is both a moral and strategic decision. Group health insurance not only protects your team but also helps your business thrive by building a culture of care and resilience.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://securenow.in/ghi-calculator">
              <Button size="lg" className="bg-securenow-blue hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </a>
            <p className="text-gray-600 mt-2">
              Looking to implement a group health plan for your consulting firm? Let our experts guide you through the best coverage options tailored to your team size and budget.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Consulting;
