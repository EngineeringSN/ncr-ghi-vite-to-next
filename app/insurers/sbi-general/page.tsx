import React from "react";
import SBIGeneral from "@/components/pages/insurers/SBIGeneral";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.sbiGeneral;
const page = () => {
  return <SBIGeneral />;
};

export default page;
