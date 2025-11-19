import React from "react";
import PolicyWordings from "@/components/pages/insurers/PolicyWordings";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.policywordings;
const page = () => {
  return <PolicyWordings />;
};

export default page;
