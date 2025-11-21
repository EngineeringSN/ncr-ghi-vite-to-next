
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import React from 'react';

const SmallBusiness = () => {
  const breadcrumbItems = [{ label: "Industry" },{ label: "Small Business" }];
  return(
  <>
  <BreadcrumbSchema/>
   <BreadcrumbNav items={breadcrumbItems} />
    <section className="max-w-4xl mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold text-securenow-blue mb-4">Small Business Insurance</h1>
      <p className="text-lg text-gray-700">
        Affordable and comprehensive insurance solutions tailored for small businesses and startups.
      </p>
    </section>
  </>
  )
}

export default SmallBusiness;
