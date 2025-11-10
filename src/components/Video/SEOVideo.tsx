"use client";
import React, { useRef, useEffect, useState } from "react";

interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
}

const SEOVideo: React.FC<VideoProps> = ({
  src,
  poster,
  width,
  height,
  controls = true,
  autoPlay = true,
  loop = true,
  muted = false,
  preload = "auto",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Pause other videos on play
  const handlePlay = () => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video !== videoRef.current) {
        video.pause();
      }
    });
  };

  // Handle scroll-based visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Play when 60% visible
      }
    );

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Play or pause on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        loop={loop}
        muted={muted}
        preload={preload}
        autoPlay={autoPlay}
        controlsList="nodownload"
        className="w-full h-full object-cover overflow-hidden"
        onPlay={handlePlay}
        playsInline
      >
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </div>
  );
};

export default SEOVideo;
