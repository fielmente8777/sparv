"use client";
import { Container } from "@/components";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoCompo = ({
  url,
  youtubeUrl,
  title,
  poster,
}: {
  url: string;
  youtubeUrl: string;
  title: string;
  poster: string;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isPlaying) {
        videoElement.play().catch((error) => {
          console.error("Error trying to play video:", error);
        });
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const preventPiP = (event: Event) => {
      event.preventDefault(); // Prevent entering PiP mode
    };

    if (videoElement) {
      videoElement.addEventListener(
        "enterpictureinpicture",
        preventPiP as EventListener
      );
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "enterpictureinpicture",
          preventPiP as EventListener
        );
      }
    };
  }, []);

  return (
    <section className="pb-16 pt-0">
      <Container>
        <div className="w-full max-w-6xl group mx-auto aspect-[16/7] max-md:aspect-[4/3] relative rounded-md overflow-hidden">
          {/* Video element with a ref */}
          <video
            ref={videoRef}
            src={url}
            title={title}
            loop
            muted={!isPlaying}
            controls={isPlaying}
            picture-in-picture={false}
            controlsList="nodownload noplaybackrate"
            poster={poster}
            // Disable PiP
            className="w-full h-full object-cover"
          />
          <Link
            href={youtubeUrl}
            target="_blank"
            className="absolute top-5 opacity-0 pointer-events-auto cursor-pointer group-hover:opacity-100 right-5 px-4 py-3 bg-orange-secondary rounded-sm border hover:bg-blue-primary duration-500 ease-in text-white text-lg max-md:text-sm uppercase font-bold"
            aria-label="Watch on YouTube"
          >
            Watch on Youtube
          </Link>
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 aspect-square flex items-center justify-center opacity-0 cursor-pointer group-hover:opacity-100 bg-orange-secondary border group-hover:bg-blue-primary duration-500 ease-in text-white text-lg max-md:text-sm uppercase font-bold rounded-full"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default VideoCompo;
