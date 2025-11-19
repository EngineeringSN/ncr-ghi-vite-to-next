
import React from 'react';
import { Shield, Users, HardHat, Activity, Check, BookOpen, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const Construction = () => {
  const breadcrumbItems = [{ label: "Construction" }];
  const keyBenefits = ["Emergency & accident hospitalization", "In-patient & daycare treatments", "OPD and teleconsultation (optional)", "Maternity & dependent cover", "Coverage for chronic illnesses and pre-existing conditions", "Mental health & stress management support", "Tax deductions for the employer"];
  const coverageFor = ["On-site workers and laborers", "Engineers and project managers", "Supervisors and safety officers", "Administrative and office staff", "Contract and third-party personnel (optional)"];
  const faqs = [{
    question: "Is group health insurance mandatory in construction?",
    answer: "While not mandatory by law, many large contracts require employers to provide basic health benefits to workers. It also improves compliance and workforce trust."
  }, {
    question: "Can daily wage or contract workers be covered?",
    answer: "Yes. Many group policies can be extended to include contract labor and temporary staff, depending on the insurer and plan design."
  }, {
    question: "What types of treatments are covered?",
    answer: "Group plans usually cover hospitalization, accidents, surgery, and may also include OPD, diagnostics, maternity, and chronic disease management."
  }, {
    question: "Are employees working at multiple sites covered nationwide?",
    answer: "Yes. Most insurers offer cashless hospitalization across India, which is ideal for teams working on different projects or in remote areas."
  }, {
    question: "How many employees are needed to start a group plan?",
    answer: "Most insurers offer plans for as few as 5–7 employees, making it suitable for even small construction firms or contractors."
  }];
  
  return (
    <>
      {/* Header Section */}
      <BreadcrumbNav items={breadcrumbItems} />
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-securenow-blue mb-4">Group Health Insurance for the Construction Industry</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          The construction industry is the backbone of infrastructure and development, but it's also one of the most high-risk sectors for workers.
        </p>
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          Employees are regularly exposed to physical hazards, environmental stress, and intense workloads. 
          Ensuring their safety and well-being isn't just responsible—it's essential.
          Group Health Insurance for the construction industry offers tailored medical coverage that protects your 
          workforce and strengthens your company's reputation as a caring, safety-conscious employer.
        </p>
      </section>

      {/* Why it's Vital Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why Group Health Insurance Is Vital for Construction Businesses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <HardHat className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">1. Protects High-Risk On-Site Workers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  From minor injuries to serious accidents, the risk is constant in construction. Group health insurance ensures immediate access to emergency and hospitalization services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Users className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">2. Improves Worker Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  The construction industry often sees high turnover, especially in contract labor. Offering health coverage builds loyalty and helps retain experienced workers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Shield className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">3. Complies with Safety & HR Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Providing employee benefits, including health insurance, can help you comply with labor laws, client contracts, and tender requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <Activity className="h-6 w-6 text-securenow-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-securenow-blue">4. Boosts Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Healthy employees are more efficient, focused, and dependable. Group insurance plans also offer preventive care and wellness services to reduce absenteeism.
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
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Key Benefits of Group Health Insurance in Construction</h2>
              <p className="text-gray-600 mb-6">
                Our construction industry insurance packages are designed to address the specific needs and risks of your business,
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
              <img src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Construction Site" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Be Covered Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-6">Who Can Be Covered?</h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            Group health insurance plans can be customized to fit mixed teams with different risk levels and roles.
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
            Your team builds structures—you can build trust by protecting their health. With tailored group health insurance, construction companies can safeguard their most valuable asset: their people. Whether you manage small repair teams or large infrastructure projects, the right insurance plan keeps your workforce secure, loyal, and ready for the job.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="https://securenow.in/ghi-calculator">
              <Button size="lg" className="bg-securenow-blue hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </a>
            <p className="text-gray-600 mt-2">
              Need expert help setting up a group health policy for your construction team? Let us help you choose a flexible, cost-effective plan tailored to your workforce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
