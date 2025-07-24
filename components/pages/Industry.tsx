
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Industry = () => (
  <MainLayout>
    <section className="bg-securenow-blue text-white py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Why Group Health Insurance is Needed for Different Industries?</h1>
        <p className="text-xl">
          In every industry, the well-being of employees is critical to long-term success. As businesses grow more people-centric, offering Group Health Insurance has become a vital part of employee benefits.
        </p>
      </div>
    </section>

    {/* What is Group Health Insurance */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-securenow-blue mb-4">What is Group Health Insurance?</h2>
        <p className="text-lg text-gray-700">
          Group Health Insurance is a single health insurance policy that covers a group of individuals—usually employees of a company. It offers a shared cost structure between employer and employee, often with broader coverage at a lower cost than individual plans.
        </p>
      </div>
    </section>

    {/* Industry Specific Sections */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Importance of Group Health Insurance in Various Industries</h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">1. Technology & IT</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> Long working hours, mental health stress, remote work fatigue.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Teleconsultations, mental wellness coverage, preventive checkups.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Helps attract top tech talent and improves employee retention.</p>
            <div className="mt-4">
              <Link to="/industry/tech" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">2. Consulting</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> High-stress work environment, frequent travel, client-facing roles.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Mental health counseling, cashless hospitalization, preventive health checkups.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Critical for talent attraction & retention in a competitive industry.</p>
            <div className="mt-4">
              <Link to="/industry/consulting" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">3. E-Commerce</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> Warehousing risks, delivery hazards, tech team stress.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Accident coverage, hospitalization, wellness programs.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Supports diverse team needs across operations, tech, and logistics.</p>
            <div className="mt-4">
              <Link to="/industry/e-commerce" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">4. Food Industry</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> Physical risks, high-stress environments, customer-facing roles.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Accidental care, hospitalization, mental wellness support.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Improves retention in high-turnover roles and boosts team morale.</p>
            <div className="mt-4">
              <Link to="/industry/food" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">5. Construction</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> High physical risks, on-site hazards, safety concerns.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Accident coverage, emergency treatment, hospitalization.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Protects high-risk workers and ensures compliance with safety standards.</p>
            <div className="mt-4">
              <Link to="/industry/construction" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-securenow-blue mb-3">6. Small Business</h3>
            <p className="mb-2"><span className="font-medium">Employee Needs:</span> Limited benefits, cost-consciousness, growth-focused.</p>
            <p className="mb-2"><span className="font-medium">Insurance Benefits:</span> Customizable plans, affordable premiums, scalable coverage.</p>
            <p className="mb-2"><span className="font-medium">Why It Matters:</span> Enhances company image and helps in talent acquisition despite size.</p>
            <div className="mt-4">
              <Link to="/industry/small-business" className="text-securenow-blue hover:underline font-medium">Learn more →</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="bg-securenow-gray py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">Benefits of Group Health Insurance (For All Sectors)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5 mb-3">
              <span className="text-securenow-blue">✓</span>
            </div>
            <p className="text-gray-700">Affordable Premiums: Cost shared by employer and employee.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5 mb-3">
              <span className="text-securenow-blue">✓</span>
            </div>
            <p className="text-gray-700">Tax Benefits: For both businesses and individuals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5 mb-3">
              <span className="text-securenow-blue">✓</span>
            </div>
            <p className="text-gray-700">Wide Coverage: Includes pre-existing conditions, maternity, and more.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5 mb-3">
              <span className="text-securenow-blue">✓</span>
            </div>
            <p className="text-gray-700">Faster Claims: Simplified process with TPA or insurer support.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5 mb-3">
              <span className="text-securenow-blue">✓</span>
            </div>
            <p className="text-gray-700">Boosts Employee Satisfaction: Shows you care for your team's well-being.</p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-securenow-blue mb-8 text-center">FAQs</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Q1. Why should companies invest in group health insurance?</h3>
          <p className="text-gray-700">A: It helps retain employees, reduces absenteeism, and shows commitment to employee welfare—all while offering tax advantages.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Q2. Is group health insurance expensive for small businesses?</h3>
          <p className="text-gray-700">A: No, many insurers offer affordable plans tailored to small teams and startups, with scalable coverage options.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Q3. What's typically covered under group health insurance?</h3>
          <p className="text-gray-700">A: Coverage usually includes hospitalization, surgeries, maternity, diagnostics, and sometimes wellness programs or mental health support.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Q4. Can employees add their family members to the group plan?</h3>
          <p className="text-gray-700">A: Yes, most plans allow employees to include spouses, children, and sometimes parents at an additional premium.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Q5. Is it mandatory to offer group health insurance?</h3>
          <p className="text-gray-700">A: While not legally mandatory in all sectors, group health insurance is often expected by employees and adds a competitive edge to your hiring strategy.</p>
        </div>
      </div>
    </section>

    {/* Conclusion */}
    <section className="bg-securenow-gray py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-securenow-blue mb-4">Final Thoughts</h2>
        <p className="text-lg text-gray-700 mb-8">
          Group Health Insurance is not a one-size-fits-all solution—it can (and should) be customized based on your industry and employee needs. 
          Whether you're in tech, manufacturing, education, or hospitality, offering group health insurance builds trust, improves retention, and reflects a strong company culture.
        </p>
        <div className="mt-6">
          <Link to="/quotation" className="bg-securenow-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition">
            Get a Quote
          </Link>
          <p className="text-gray-600 mt-4">Looking to set up group health insurance for your team? Let's make it easy.</p>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default Industry;
