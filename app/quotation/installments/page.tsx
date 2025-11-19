import Installments from '@/components/pages/quotation/Installments'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.installments;
const page = () => {
  return <Installments/>
}

export default page
