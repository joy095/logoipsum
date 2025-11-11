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
    <section className="bg-[url(/images/hiring-bg.png)] bg-no-repeat bg-cover bg-top w-full py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl text-primary text-center">
          Our Hiring Process
        </h2>
        <p className="text-secondary text-[0.938rem] max-w-xl text-center mx-auto mt-5 leading-8">
          Take a look at our simple and straightforward process to hire software
          developers from ValueCoders.
        </p>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden md:flex items-center justify-center gap-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className="flex flex-col items-center group cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Circle Container */}
                <div
                  className={`relative w-44 h-44 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
                      ${
                        hoveredStep === step.id
                          ? "scale-110 shadow-2xl"
                          : "scale-100"
                      }
                      bg-white border-8 border-green`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute -top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md transition-all duration-300 border-2 border-white bg-[#FF8C91]
                        ${hoveredStep === step.id ? "scale-105" : "scale-100"}`}
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="text-gray-700 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`/images/${step.icon}`}
                      width={70}
                      height={70}
                      alt="Icon"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-6 text-center max-w-xs">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex items-center mb-24">
                  <Image
                    src="/icons/arrow-h.svg"
                    width={30}
                    height={30}
                    alt="icons"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View - Vertical Flow */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
              onTouchStart={() => setHoveredStep(step.id)}
              onTouchEnd={() => setHoveredStep(null)}
            >
              <div
                className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      hoveredStep === step.id
                        ? "scale-105 shadow-xl"
                        : "scale-100"
                    }
                    border-4 border-white shadow-md`}
              >
                <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
                  {step.id}
                </div>
              </div>

              <div className="mt-4 max-w-xs">
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="my-6">
                  <ChevronRight className="w-6 h-6 text-green-400 rotate-90" />
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
