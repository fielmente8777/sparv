"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const LazyLoadedVideo = dynamic(() => import("./SEOVideo"), {
  loading: () => (
    <Image
      src="/bnr.png"
      alt="banner"
      fill
      className="object-cover"
    />
  ),
});

export default LazyLoadedVideo;
