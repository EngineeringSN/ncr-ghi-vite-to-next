import ServiceCalls from '@/components/pages/service/ServiceCalls'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.serviceCalls;
const page = () => {
  return <ServiceCalls/>
}

export default page