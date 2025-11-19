import React from "react";
import Insurers from "@/components/pages/Insurers";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.insurance;
const page = () => {
  return <Insurers />;
};

export default page;
