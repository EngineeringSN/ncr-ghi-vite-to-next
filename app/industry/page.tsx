import Industry from '@/components/pages/Industry'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.industry;
const page = () => {
  return <Industry/>
  
}

export default page