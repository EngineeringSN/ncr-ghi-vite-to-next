
import Head from 'next/head';
import React from 'react';
import ServiceHeader from './service/ServiceHeader';
import ServiceCommitment from './service/ServiceCommitment';
import ServiceFeatures from './service/ServiceFeatures';
import ServiceProcess from './service/ServiceProcess';
import ServiceTestimonials from './service/ServiceTestimonials';
import ServiceTeam from './service/ServiceTeam';
import ServiceCTA from './service/ServiceCTA';


const Service = () => {
  return (
    <>
      <Head>
              <title>Premium Health Insurance Services | Dedicated Account Management</title>
              <meta name="description" content="Experience exceptional health insurance services with dedicated account managers, 24/7 support, policy administration, and personalized assistance for your business." />
              <meta name="keywords" content="health insurance services, dedicated account management, insurance customer service, policy administration" />
      
              <link rel="preconnect" href="https://images.unsplash.com" />
              <link rel="preload" href="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75" as="image" fetchPriority="high" />
      
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Premium Health Insurance Services | Dedicated Account Management" />
              <meta property="og:description" content="Experience exceptional health insurance services with dedicated account managers, 24/7 support, policy administration, and personalized assistance for your business." />
              <meta property="og:image" content="/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png" />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta property="og:image:type" content="image/png" />
              
      
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@securenow_in" />
              <meta name="twitter:title" content="Premium Health Insurance Services | Dedicated Account Management" />
              <meta name="twitter:description" content="Experience exceptional health insurance services with dedicated account managers, 24/7 support, policy administration, and personalized assistance for your business." />
              <meta name="twitter:image" content="/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png" />
      
              <link rel="icon" href="/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png" type="image/png" sizes="32x32" />
              <link rel="apple-touch-icon" href="/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png" />
              <link rel="canonical" href="https://grouphealthinsurance.co/service" />
            </Head>
 
      <ServiceHeader />
      <ServiceCommitment />
      <ServiceFeatures />
      <ServiceProcess />
      <ServiceTestimonials />
      <ServiceTeam />
      <ServiceCTA />
    </>
  );
};

export default Service;
