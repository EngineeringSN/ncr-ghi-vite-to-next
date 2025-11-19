import React from 'react'
import TPA from "@/components/pages/TPA";
import { seoMeta } from '@/lib/seo-meta';
export const metadata = seoMeta.tpa;
const page = () => {
  return <TPA/>
}

export default page