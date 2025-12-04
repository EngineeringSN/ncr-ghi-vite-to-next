import React from "react";
import OrientalInsurance from "@/components/pages/insurers/OrientalInsurance";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.orientalInsurance;
const page = () => {
  return <OrientalInsurance />;
};

export default page;
