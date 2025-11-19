import React from "react";
import RoomRentCapping from "@/components/pages/product-features/RoomRentCapping";
import { seoMeta } from "@/lib/seo-meta";
export const metadata = seoMeta.roomrentcapping;
const page = () => {
  return <RoomRentCapping />;
};

export default page;
