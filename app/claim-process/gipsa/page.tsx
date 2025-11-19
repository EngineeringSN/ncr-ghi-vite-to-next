import GIPSA from '@/components/pages/claim-process/GIPSA'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.gipsa;
const page = () => {
  return <GIPSA/>
}

export default page