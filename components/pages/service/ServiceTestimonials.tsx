
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const ServiceTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "SecureNow's service has been exceptional. Their dedicated team helped us implement a comprehensive group health insurance policy that perfectly suits our employees' needs.",
      author: "Rajiv Sharma",
      position: "HR Director, TechSolutions India"
    },
    {
      quote: "What sets SecureNow apart is their responsive service. Our dedicated relationship manager is always available to address our concerns and process claims quickly.",
      author: "Priya Malhotra",
      position: "COO, MindWorks Technologies"
    },
    {
      quote: "We've been working with SecureNow for three years, and their service has been consistently outstanding. Their team goes above and beyond to ensure our employees receive the best healthcare benefits.",
      author: "Amit Khanna",
      position: "CEO, InnovateTech"
    },
  ];

  return (
    <section className="bg-securenow-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from businesses in Gurgaon about their experience with SecureNow's service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4 text-securenow-orange">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-bold text-securenow-blue">{testimonial.author}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
