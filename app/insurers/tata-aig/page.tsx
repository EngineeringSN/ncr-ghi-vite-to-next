import React from "react";
import TataAIG from "@/components/pages/insurers/TataAIG";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.tataAig;
const page = () => {
  return <TataAIG />;
};

export default page;
