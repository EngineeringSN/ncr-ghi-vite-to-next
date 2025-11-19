import SLA from '@/components/pages/service/SLA'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.sla;
const page = () => {
  return <SLA/>
}

export default page