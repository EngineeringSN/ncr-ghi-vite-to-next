import React from "react";
import NivaBupa from "@/components/pages/insurers/NivaBupa";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.nivaBupa;
const page = () => {
  return <NivaBupa />;
};

export default page;
