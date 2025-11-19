import React from 'react'
import ClaimProcess from "@/components/pages/ClaimProcess";
import { seoMeta } from '@/lib/seo-meta';
export const metadata = seoMeta.claimprocess;
const page = () => {
  return <ClaimProcess/>
}

export default page