"use client";

import { useState, useCallback, memo } from "react";
import Video from "next-video";

import FirstVideo from "@/videos/20745794-hd_1280_720_25fps.mp4";
import SecondVideo from "@/videos/3127017-hd_1280_720_24fps.mp4";
import ThirdVideo from "@/videos/5642384-hd_1280_720_60fps.mp4";
import ForthVideo from "@/videos/5738706-hd_1280_720_24fps.mp4";

interface VideoItem {
  video: any;
  thumbnail: string;
  name: string;
  title: string;
  rating: number;
}

const videos: VideoItem[] = [
  {
    video: FirstVideo,
    thumbnail: "/images/video-1.png",
    name: "Krish Bruynson",
    title: "Director, Storihort",
    rating: 5,
  },
  {
    video: SecondVideo,
    thumbnail: "/images/video-2.png",
    name: "Krish Bruynson",
    title: "Director, Storihort",
    rating: 5,
  },
  {
    video: ThirdVideo,
    thumbnail: "/images/video-3.png",
    name: "Krish Bruynson",
    title: "Director, Storihort",
    rating: 5,
  },
  {
    video: ForthVideo,
    thumbnail: "/images/video-4.png",
    name: "Krish Bruynson",
    title: "Director, Storihort",
    rating: 5,
  },
];

/* ---------- Memoized Star Rating ---------- */
const StarRating = memo(({ count }: { count: number }) => (
  <div className="flex mt-1">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-[#2FC980]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
));
StarRating.displayName = "StarRating";

/* ---------- Memoized Video Card ---------- */
const VideoCard = memo(
  ({
    item,
    idx,
    isPlaying,
    onToggle,
  }: {
    item: VideoItem;
    idx: number;
    isPlaying: boolean;
    onToggle: (idx: number) => void;
  }) => (
    <div
      className="relative h-96 group cursor-pointer"
      onClick={() => onToggle(idx)}
    >
      {/* Video – loading prop removed (not supported by next-video) */}
      <Video
        src={item.video}
        poster={item.thumbnail}
        className="w-full h-79 overflow-hidden object-cover transition-transform duration-300 group-hover:scale-105"
        controls={isPlaying}
        autoPlay={isPlaying}
        playsInline
        preload={isPlaying ? "auto" : "metadata"}
        // lazy-loading is handled by the browser when the video is not in view
      />

      {/* Play button (shown only when NOT playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary/80 group-hover:bg-primary w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
      )}

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm opacity-90 text-[#6F6F6F]">{item.title}</p>
        <StarRating count={item.rating} />
      </div>
    </div>
  )
);
VideoCard.displayName = "VideoCard";

/* ---------- Main Component ---------- */
export default function Clients() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = useCallback((idx: number) => {
    setPlayingIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section className="bg-[url('/images/client-bg.png')] bg-no-repeat bg-cover bg-right w-full">
      <div className="container mx-auto pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-center leading-tight">
          What Our Clients Have to Say About Us
        </h2>
        <p className="text-secondary text-sm sm:text-[0.938rem] max-w-xl text-center mx-auto mt-4 sm:mt-5 leading-8 px-4">
          Take a look at our simple and straightforward process to hire software
        </p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {videos.map((item, idx) => {
            const isPlaying = playingIndex === idx;
            return (
              <VideoCard
                key={idx}
                item={item}
                idx={idx}
                isPlaying={isPlaying}
                onToggle={togglePlay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
