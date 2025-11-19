import Dashboard from '@/components/pages/technology/Dashboard'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.dashboard;

const page = () => {
  return <Dashboard/>
}

export default page