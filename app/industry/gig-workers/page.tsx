import GigWorkers from '@/components/pages/industry/GigWorkers'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.gigWorkers;

const page = () => {
  return <GigWorkers/>
}

export default page