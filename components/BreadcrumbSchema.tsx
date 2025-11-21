// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BreadcrumbSchema = () => {
//   const location = useLocation();
  
//   const getBreadcrumbs = () => {
//     const pathSegments = location.pathname.split('/').filter(Boolean);
//     const breadcrumbs = [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://grouphealthinsurance.co/"
//       }
//     ];
    
//     let currentPath = '';
//     pathSegments.forEach((segment, index) => {
//       currentPath += `/${segment}`;
//       const name = segment.split('-').map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1)
//       ).join(' ');
      
//       breadcrumbs.push({
//         "@type": "ListItem",
//         "position": index + 2,
//         "name": name,
//         "item": `https://grouphealthinsurance.co${currentPath}`
//       });
//     });
    
//     return breadcrumbs;
//   };

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": getBreadcrumbs()
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//     />
//   );
// };

// export default BreadcrumbSchema;

"use client";
import React from "react";
import { usePathname } from "next/navigation";

const BreadcrumbSchema = () => {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbs = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://grouphealthinsurance.co/",
      },
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: `https://grouphealthinsurance.co${currentPath}`,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: getBreadcrumbs(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export default BreadcrumbSchema;
