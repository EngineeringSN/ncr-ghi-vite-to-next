import FlexiPlans from '@/components/pages/technology/FlexiPlans'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.flexiPlans;
const page = () => {
  return <FlexiPlans/>
}

export default page