import React from 'react'
import Copay from "@/components/pages/product-features/Copay";
import { seoMeta } from '@/lib/seo-meta';
export const metadata = seoMeta.copay;
const page = () => {
    return (
        <Copay />
    )
}

export default page