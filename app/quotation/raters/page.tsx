import Raters from '@/components/pages/quotation/Raters'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.raters;
const page = () => {
  return <Raters/>
}

export default page