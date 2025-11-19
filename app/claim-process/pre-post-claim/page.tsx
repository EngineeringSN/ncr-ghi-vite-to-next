import PrePostClaim from '@/components/pages/claim-process/PrePostClaim'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.prepostclaim;
const page = () => {
  return <PrePostClaim/>
}

export default page
