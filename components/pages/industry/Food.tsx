
import React from 'react';
import { ChefHat, Utensils, Heart, Calendar, HeartHandshake, CalendarDays, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Food = () => {
  const breadcrumbItems = [{ label: "Industry" },{ label: "Food" }];
  const keyBenefits = [
    "Cashless hospitalization at a wide network of hospitals",
    "Accidental and emergency care for on-ground workers",
    "Maternity and child benefits for staff and their families",
    "Mental wellness support for high-stress environments",
    "Teleconsultation for easy access to doctors",
    "Annual preventive health checkups",
    "Tax benefits for employers"
  ];
  
  const coverageFor = [
    "Restaurants and café chains",
    "Cloud kitchens and food delivery services",
    "Food manufacturing and processing units",
    "Catering companies",
    "Food logistics and packaging firms"
  ];
  
  const faqs = [
    {
      question: "Why is group health insurance important for food industry workers?",
      answer: "Food industry workers often face physical and health risks. Group insurance ensures they have access to quality care when needed and boosts workplace morale."
    }, 
    {
      question: "Can small restaurants afford group health insurance?",
      answer: "Yes. Many insurance providers offer affordable group plans starting with just 5 employees, ideal for small to medium-sized businesses."
    }, 
    {
      question: "Does the insurance cover delivery staff and part-time workers?",
      answer: "Delivery and part-time staff can often be included, depending on the insurer and plan type. Custom plans can cover full-time, contract, and gig workers."
    }, 
    {
      question: "What are typical inclusions in a group plan?",
      answer: "Hospitalization, pre-existing disease coverage, accident cover, OPD (optional), maternity benefits, and mental health support."
    }, 
    {
      question: "Is the policy valid across multiple branches or locations?",
      answer: "Yes. Most plans offer nationwide coverage, which is great for businesses operating in multiple cities or having mobile staff."
    }
  ];
  
  return (
    <>
      {/* Header Section */}
      <BreadcrumbSchema/>
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-securenow-blue mb-4">Group Health Insurance for the Food Industry</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          The food industry thrives on its people—from chefs and servers to factory workers, delivery staff, and corporate teams. Each role is essential in keeping the food chain running smoothly.
        </p>
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          In such a dynamic and demanding environment, offering Group Health Insurance is one of the most effective ways to support employee well-being and build a loyal workforce.
          Whether you're a restaurant chain, food tech startup, or a food processing company, group health insurance helps ensure your team stays healthy, productive, and protected.
        </p>
      </section>

      {/* Why it's Vital Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why Group Health Insurance Is Essential in the Food Industry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <ChefHat className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">1. Frontline Workers Face Daily Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Kitchen staff, delivery riders, and food production workers often work in physically demanding and sometimes hazardous conditions. Group insurance provides protection against accidents, illnesses, and emergency care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <HeartHandshake className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">2. Improves Retention in High-Turnover Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  The food industry often sees high attrition. Offering group health insurance helps you attract better talent and retain employees by showing you care about their health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Heart className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">3. Boosts Team Morale and Loyalty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  When employees feel safe and supported, they're more likely to stay committed, be productive, and contribute positively to your brand reputation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Utensils className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">4. Healthier Teams Mean Better Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Whether it's food preparation, customer service, or quality control, a healthy team ensures smooth operations and happy customers.
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
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Benefits of Group Health Insurance for Food Businesses</h2>
              <p className="text-gray-600 mb-6">
                Our food industry insurance packages are designed to address the specific needs and risks of your business,
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
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Restaurant Team" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Be Covered Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-6">Who Should Consider It?</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            No matter the size of your team, group insurance can be customized to fit your workforce and budget.
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
          <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">FAQs</h2>
          
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
            In an industry where people are at the heart of service, investing in their health makes business sense. Group Health Insurance for the food industry not only protects your team but also positions your business as a responsible and people-first brand.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://securenow.in/ghi-calculator">
              <Button size="lg" className="bg-securenow-blue hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </a>
            <p className="text-gray-600 mt-2">
              Looking to provide health coverage for your restaurant or food business? Let our experts help you find the right group plan tailored to your team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
