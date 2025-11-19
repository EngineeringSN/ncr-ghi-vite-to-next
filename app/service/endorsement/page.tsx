import Endorsement from '@/components/pages/service/Endorsement'
import { seoMeta } from '@/lib/seo-meta';
import React from 'react'
export const metadata = seoMeta.endorsement;
const page = () => {
  return <Endorsement/>
}

export default page