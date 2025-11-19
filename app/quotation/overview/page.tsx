import React from "react";
import Quotation from "@/components/pages/Quotation";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.quotation;
const page = () => {
  return <Quotation />;
};

export default page;