import React from "react";
import ProductFeatures from "@/components/pages/ProductFeatures";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.productfeature;
const page = () => {
  return <ProductFeatures />;
};

export default page;
