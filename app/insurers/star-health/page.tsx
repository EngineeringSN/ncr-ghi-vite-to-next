import React from "react";
import StarHealth from "@/components/pages/insurers/StarHealth";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.starHealth;
const page = () => {
  return <StarHealth />;
};

export default page;
