import React from "react";
import ClaimSettlementRate from "@/components/pages/insurers/ClaimSettlementRate";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.claimsettlementrate;
const page = () => {
  return <ClaimSettlementRate />;
};

export default page;
