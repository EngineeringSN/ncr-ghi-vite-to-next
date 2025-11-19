import Reimbursement from '@/components/pages/claim-process/Reimbursement'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.reimbursement;
const page = () => {
  return <Reimbursement/>
}

export default page
