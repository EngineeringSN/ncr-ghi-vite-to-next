
import React from 'react';
import { UserCheck, FileText, Clock, BadgeCheck, HelpCircle, BarChart, Settings, User } from 'lucide-react';

interface ServiceFeature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceFeatures = () => {
  const serviceFeatures: ServiceFeature[] = [
    {
      icon: UserCheck,
      title: 'Dedicated Relationship Manager',
      description: 'A single point of contact for all your insurance needs, ensuring personalized service throughout your policy term.'
    },
    {
      icon: FileText,
      title: 'Policy Documentation Support',
      description: 'Assistance with all documentation requirements, from proposal forms to endorsements and renewals.'
    },
    {
      icon: Clock,
      title: '24/7 Claims Assistance',
      description: 'Round-the-clock support for claim filing, tracking, and resolution, ensuring quick settlements.'
    },
    {
      icon: BadgeCheck,
      title: 'Employee Onboarding',
      description: 'Comprehensive onboarding sessions to educate employees about policy benefits and claim procedures.'
    },
    {
      icon: HelpCircle,
      title: 'Query Resolution',
      description: 'Quick resolution of queries related to policy coverage, network hospitals, and benefits.'
    },
    {
      icon: BarChart,
      title: 'Utilization Analysis',
      description: 'Regular analysis of policy utilization to help optimize coverage and control costs.'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Tailored insurance solutions based on your company\'s demographics and requirements.'
    },
    {
      icon: User,
      title: 'Employee Assistance',
      description: 'Direct support for employees\' insurance-related queries and claim submissions.'
    },
  ];

  return (
    <section className="py-16 bg-securenow-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-securenow-blue mb-2">Our Service Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive service support to ensure a seamless insurance experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-securenow-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
