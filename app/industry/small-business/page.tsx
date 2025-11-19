import SmallBusiness from '@/components/pages/industry/SmallBusiness'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.smallBusiness;

const page = () => {
  return <SmallBusiness/>
}

export default page