import ECommerce from '@/components/pages/industry/ECommerce'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.eCommerce;

const page = () => {
  return <ECommerce/>
}

export default page