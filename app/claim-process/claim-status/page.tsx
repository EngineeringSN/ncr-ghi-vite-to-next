import ClaimStatus from '@/components/pages/claim-process/ClaimStatus'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.claimstatus;
const page = () => {
  return <ClaimStatus/>
}

export default page