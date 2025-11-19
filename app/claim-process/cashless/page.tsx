import Cashless from '@/components/pages/claim-process/Cashless'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.cashless;
const cashless = () => {
  return (
    <div><Cashless/></div>
  )
}

export default cashless