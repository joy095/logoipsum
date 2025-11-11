"use client";

import Video from "next-video";
import { useState } from "react";

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

const renderStars = (count: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < count ? "text-[#2FC980]" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
};

export default function Clients() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (idx: number) => {
    setPlayingIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-[url(/images/client-bg.png)] bg-no-repeat bg-cover bg-right w-full">
      <div className="container mx-auto pt-20 pb-16 px-4">
        <h2 className="text-5xl font-bold text-primary text-center">
          What Our Clients Have to Say About Us
        </h2>
        <p className="text-secondary text-[0.938rem] max-w-xl text-center mx-auto mt-5 leading-8">
          Take a look at our simple and straightforward process to hire software
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((item, idx) => {
            const isPlaying = playingIndex === idx;

            return (
              <div
                key={idx}
                className="relative h-96 group cursor-pointer"
                onClick={() => togglePlay(idx)}
              >
                {/* Video */}
                <Video
                  src={item.video}
                  poster={item.thumbnail}
                  className="w-full h-79 overflow-hidden object-cover transition-transform duration-300 group-hover:scale-105"
                  controls={isPlaying} // <-- show native controls only when playing
                  autoPlay={isPlaying} // <-- start playback immediately
                  playsInline
                />

                {/* Big centered play button – hidden when playing */}
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
                <div className="absolute bottom-0 left-0 right-0">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm opacity-90 text-[#6F6F6F]">
                    {item.title}
                  </p>
                  <div className="flex mt-1">{renderStars(item.rating)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
