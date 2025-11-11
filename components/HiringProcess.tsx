"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "INQUIRY",
    description:
      "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: "inquery.png",
  },
  {
    id: 2,
    title: "SELECT DEVELOPERS",
    description:
      "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: "develop-icon.png",
  },
  {
    id: 3,
    title: "TEAM INTEGRATION",
    description:
      "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: "user-group.png",
  },
  {
    id: 4,
    title: "TEAM SCALING",
    description:
      "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: "adobe illustrator tool_icon.png",
  },
];

const HiringProcess = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="bg-[url('/images/hiring-bg.png')] bg-no-repeat bg-cover bg-top w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary text-center font-bold">
          Our Hiring Process
        </h2>
        <p className="text-secondary text-sm sm:text-base max-w-xl text-center mx-auto mt-4 sm:mt-5 leading-relaxed px-4">
          Take a look at our simple and straightforward process to hire software
          developers from ValueCoders.
        </p>

        {/* Desktop & Tablet View - Horizontal Flow (md+) */}
        <div className="hidden md:flex items-start justify-center gap-6 lg:gap-8 relative mt-12 lg:mt-16">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className="flex flex-col items-center group cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Circle Container */}
                <div
                  className={`relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
                    ${
                      hoveredStep === step.id
                        ? "scale-110 shadow-2xl"
                        : "scale-100"
                    }
                    bg-white border-8 border-green`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute -top-2 right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md transition-all duration-300 border-2 border-white bg-[#FF8C91]
                      ${hoveredStep === step.id ? "scale-105" : "scale-100"}`}
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="p-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`/images/${step.icon}`}
                      width={70}
                      height={70}
                      alt={step.title}
                      className="w-16 h-16 sm:w-18 sm:h-18 lg:w-[70px] lg:h-[70px] object-contain"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-5 sm:mt-6 text-center max-w-xs px-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex items-center mx-2 mt-20 lg:mt-24">
                  <Image
                    src="/icons/arrow-h.svg"
                    width={30}
                    height={30}
                    alt="Arrow"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[30px] lg:h-[30px]"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View - Vertical Flow */}
        <div className="md:hidden space-y-10 sm:space-y-12 mt-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center px-4"
              onTouchStart={() => setHoveredStep(step.id)}
              onTouchEnd={() => setHoveredStep(null)}
            >
              {/* Circle */}
              <div
                className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-md
                  ${
                    hoveredStep === step.id
                      ? "scale-105 shadow-xl"
                      : "scale-100"
                  }
                  bg-white border-4 border-green`}
              >
                {/* Step Number */}
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white bg-[#FF8C91]
                    ${hoveredStep === step.id ? "scale-105" : "scale-100"}`}
                >
                  {step.id}
                </div>

                {/* Icon */}
                <div className="p-3">
                  <Image
                    src={`/images/${step.icon}`}
                    width={50}
                    height={50}
                    alt={step.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 max-w-xs">
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Down Arrow */}
              {index < steps.length - 1 && (
                <div className="my-6">
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
