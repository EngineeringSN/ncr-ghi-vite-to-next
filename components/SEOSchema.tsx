
import React from 'react';
import { usePathname } from "next/navigation";

const SEOSchema = () => {
  const pathname = usePathname();
  
  // Get business info based on the current route
  const getBusinessInfo = () => {
    let name = "SecureNow - Group Health Insurance Solutions";
    let description = "Comprehensive group health insurance solutions for businesses in India";
    
    // Route-specific information with improved descriptions
    switch (pathname) {
      case "/insurers":
        name = "SecureNow - Top Insurance Partners";
        description = "Our trusted insurance partners providing comprehensive coverage with excellent claim settlement records";
        break;
      case "/insurers/policy-wordings":
        name = "SecureNow - Insurance Policy Documents";
        description = "Download detailed policy wordings from our trusted partner insurers";
        break;
      case "/product-features":
        name = "SecureNow - Group Health Insurance Features";
        description = "Explore enhanced features and benefits of our group health insurance solutions including cashless OPD and wellness programs";
        break;
      case "/claim-process":
        name = "SecureNow - Simplified Insurance Claim Process";
        description = "Experience seamless claim processing with 24/7 support for all group health insurance policies";
        break;
      case "/service":
        name = "SecureNow - Premium Insurance Services";
        description = "Exceptional service with dedicated teams handling policy administration, claims, and employee queries";
        break;
      case "/service/endorsement":
        name = "SecureNow - Endorsement Services";
        description = "Manage policy changes and updates efficiently with our dedicated endorsement services";
        break;
      case "/service/sla":
        name = "SecureNow - Service Level Agreements";
        description = "Our commitment to quality service and timely responses, backed by clearly defined SLAs";
        break;
      case "/service/service-calls":
        name = "SecureNow - Service Calls";
        description = "Quick access to expert support for all your group health insurance needs with 24/7 assistance";
        break;
      case "/industry":
        name = "SecureNow - Industry-Specific Insurance Solutions";
        description = "Tailored group health insurance solutions addressing unique challenges of different industry sectors";
        break;
      case "/technology":
        name = "SecureNow - Advanced InsurTech Solutions";
        description = "Cutting-edge insurance technology for seamless policy management and real-time analytics";
        break;
      case "/technology/flexi-plans":
        name = "SecureNow - Customizable Flexi Plans for Employees";
        description = "Flexible health insurance plans giving employees freedom to choose coverage options that best suit their individual needs";
        break;
      case "/technology/dashboard":
        name = "SecureNow - Comprehensive Insurance Management Dashboard";
        description = "Access our intuitive dashboard for real-time policy monitoring, employee enrollment tracking, claim status updates, and detailed analytics";
        break;
      case "/technology/e-claims":
        name = "SecureNow - Digital Claims Processing System";
        description = "Streamline health insurance claims with our electronic processing system. Experience faster settlements, paperless submissions, and real-time tracking";
        break;
      case "/quotation":
        name = "SecureNow - Custom Group Health Insurance Quotes";
        description = "Get free, customized quotes from multiple top insurers within 24 hours";
        break;
      default:
        // Use defaults
        break;
    }
    
    return { name, description };
  };
  
  // Get FAQ data based on the current route
  const getFaqData = () => {
    // Default: No FAQs
    let hasFaqs = false;
    let faqItems: { question: string; answer: string }[] = [];
    
    // Industry pages FAQs
    if (location.pathname === "/industry") {
      hasFaqs = true;
      faqItems = [
        {
          question: "Why should companies invest in group health insurance?",
          answer: "It helps retain employees, reduces absenteeism, and shows commitment to employee welfare—all while offering tax advantages."
        },
        {
          question: "Is group health insurance expensive for small businesses?",
          answer: "No, many insurers offer affordable plans tailored to small teams and startups, with scalable coverage options."
        },
        {
          question: "What's typically covered under group health insurance?",
          answer: "Coverage usually includes hospitalization, surgeries, maternity, diagnostics, and sometimes wellness programs or mental health support."
        },
        {
          question: "Can employees add their family members to the group plan?",
          answer: "Yes, most plans allow employees to include spouses, children, and sometimes parents at an additional premium."
        },
        {
          question: "Is it mandatory to offer group health insurance?",
          answer: "While not legally mandatory in all sectors, group health insurance is often expected by employees and adds a competitive edge to your hiring strategy."
        }
      ];
    }
    
    // Construction industry page FAQs
    else if (location.pathname === "/industry/construction") {
      hasFaqs = true;
      faqItems = [
        {
          question: "Is group health insurance mandatory in construction?",
          answer: "While not mandatory by law, many large contracts require employers to provide basic health benefits to workers. It also improves compliance and workforce trust."
        },
        {
          question: "Can daily wage or contract workers be covered?",
          answer: "Yes. Many group policies can be extended to include contract labor and temporary staff, depending on the insurer and plan design."
        },
        {
          question: "What types of treatments are covered?",
          answer: "Group plans usually cover hospitalization, accidents, surgery, and may also include OPD, diagnostics, maternity, and chronic disease management."
        },
        {
          question: "Are employees working at multiple sites covered nationwide?",
          answer: "Yes. Most insurers offer cashless hospitalization across India, which is ideal for teams working on different projects or in remote areas."
        },
        {
          question: "How many employees are needed to start a group plan?",
          answer: "Most insurers offer plans for as few as 5–7 employees, making it suitable for even small construction firms or contractors."
        }
      ];
    }
    
    // Tech industry page FAQs
    else if (location.pathname === "/industry/tech") {
      hasFaqs = true;
      faqItems = [
        {
          question: "What health insurance benefits are most valued by tech employees?",
          answer: "Tech employees typically value comprehensive coverage with OPD benefits, mental health support, wellness programs, and digital-first claim processes."
        },
        {
          question: "Do group health plans cover work-from-home ergonomic injuries?",
          answer: "Many enhanced group plans now include coverage for ergonomic-related health issues common in remote tech workers, such as back pain and repetitive strain injuries."
        },
        {
          question: "How can startups afford comprehensive health coverage?",
          answer: "Startups can opt for scalable plans with basic coverage and add benefits as they grow, or choose co-payment options to maintain comprehensive coverage at lower premiums."
        }
      ];
    }
    
    // Consulting industry page FAQs
    else if (location.pathname === "/industry/consulting") {
      hasFaqs = true;
      faqItems = [
        {
          question: "Do group health plans cover international travel for consultants?",
          answer: "Many tailored consulting firm plans include international travel health coverage as an add-on benefit for employees who travel frequently for client engagements."
        },
        {
          question: "What wellness benefits are recommended for consulting professionals?",
          answer: "Stress management programs, mental health support, preventive health checkups, and fitness benefits are particularly valuable for consulting professionals working in high-pressure environments."
        },
        {
          question: "Can group health insurance cover independent contractors?",
          answer: "Some insurers offer flexible plans that can include long-term independent contractors who work exclusively with your consulting firm, though terms may vary by provider."
        }
      ];
    }
    
    // E-Commerce industry page FAQs
    else if (location.pathname === "/industry/e-commerce") {
      hasFaqs = true;
      faqItems = [
        {
          question: "What coverage is important for warehouse staff in e-commerce?",
          answer: "Plans should include accident coverage, physiotherapy benefits, and OPD consultation for musculoskeletal issues common among warehouse workers."
        },
        {
          question: "Can delivery personnel be covered under the same plan as office staff?",
          answer: "Yes, comprehensive group plans can be structured to provide appropriate coverage for both office employees and delivery personnel, often with specific benefits tailored to each group's needs."
        }
      ];
    }
    
    // Food industry page FAQs
    else if (location.pathname === "/industry/food") {
      hasFaqs = true;
      faqItems = [
        {
          question: "What health insurance coverage is essential for food service workers?",
          answer: "Coverage for burns, cuts, slips and falls, as well as regular health checkups and hospitalization benefits are essential for food service workers."
        },
        {
          question: "Are seasonal workers eligible for group health insurance?",
          answer: "Some group plans offer provisions for seasonal workers in the food industry, though coverage periods and waiting periods may differ from full-time employees."
        }
      ];
    }
    
    // Small Business page FAQs
    else if (location.pathname === "/industry/small-business") {
      hasFaqs = true;
      faqItems = [
        {
          question: "What is the minimum number of employees needed for a small business group plan?",
          answer: "Many insurers now offer plans starting with just 5-10 employees, making group health insurance accessible even for very small businesses."
        },
        {
          question: "Are group health insurance premiums tax-deductible for small businesses?",
          answer: "Yes, premiums paid towards employee group health insurance are typically tax-deductible business expenses, offering financial benefits alongside employee welfare."
        },
        {
          question: "Can small businesses customize their health insurance plans?",
          answer: "Yes, many insurers offer flexible options allowing small businesses to choose coverage elements that best suit their budget and employee needs."
        }
      ];
    }
    
    return { hasFaqs, faqItems };
  };
  
  const businessInfo = getBusinessInfo();
  const { hasFaqs, faqItems } = getFaqData();
  
  // Enhanced business schema with more comprehensive information
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": "https://grouphealthinsurance.co" + location.pathname,
    "logo": "https://grouphealthinsurance.co/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png",
    "image": "https://grouphealthinsurance.co/lovable-uploads/58de68a1-b69f-4c6c-a156-1e37e1dfd850.png",
    "areaServed": [
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City", 
        "name": "Gurgaon"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "City",
        "name": "Faridabad"
      },
      {
        "@type": "City",
        "name": "Ghaziabad"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "3000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@grouphealthinsurance.co",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Group Health Insurance Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Group Health Insurance",
            "description": "Comprehensive health insurance coverage for employees"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Claims Processing",
            "description": "24/7 claims support and processing services"
          }
        }
      ]
    },
    "knowsAbout": [
      "Group Health Insurance",
      "Employee Benefits",
      "Health Insurance Claims",
      "Corporate Insurance",
      "Medical Insurance"
    ]
  };
  
  // Add FAQ schema for relevant pages
  const schema = hasFaqs ? {
    ...baseSchema,
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : baseSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SEOSchema;
