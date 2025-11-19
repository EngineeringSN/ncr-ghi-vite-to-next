import Image from "next/image";
import Index from "@/components/pages/Index";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.home;
export default function Home() {
  return <Index />;
}
