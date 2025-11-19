import Food from '@/components/pages/industry/Food'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.food;

const page = () => {
  return <Food/>
}

export default page