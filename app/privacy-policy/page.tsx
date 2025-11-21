import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.PrivacyPolicy;

const page = () => {
  return <PrivacyPolicy/>
}

export default page