"use client";

import { useState } from "react";
import Image from "next/image";

interface TabContent {
  title: string;
  description: string;
  benefits: { title: string }[];
  imageAlt: string;
  imageSrc: string; // Use placeholder or real path
}

const tabContents: Record<string, TabContent> = {
  "Defining Your Project Requirements": {
    title: "Defining Your Project Requirements",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    benefits: [
      { title: "Client-centric approach" },
      { title: "Best-in-class project management" },
      { title: "Global quality standards" },
      { title: "Time-zone compatibility" },
      { title: "Cutting-edge infrastructure" },
      { title: "Agile adaptability" },
    ],
    imageAlt: "Project planning on whiteboard",
    imageSrc: "project-plan.png",
  },
  "Choosing The Right Development Model": {
    title: "Choosing The Right Development Model",
    description:
      "Decide between fixed-price, time & material, or dedicated team models based on flexibility, control, and project complexity.",
    benefits: [
      { title: "Fixed Price for Defined Scope" },
      { title: "T&M for Flexibility" },
      { title: "Dedicated Team for Long-Term" },
    ],
    imageAlt: "Team discussing development models",
    imageSrc: "planning-2.jfif",
  },
  "Typical Challenges For Hiring Developers": {
    title: "Typical Challenges For Hiring Developers",
    description:
      "Common hurdles include skill mismatch, communication gaps, time-zone issues, and integration with existing teams.",
    benefits: [
      { title: "Skill Verification" },
      { title: "Cultural Fit" },
      { title: "Onboarding Efficiency" },
    ],
    imageAlt: "Developer interview process",
    imageSrc: "project-plan.png",
  },
  "Hiring Freelancers Vs. Dedicated Developers": {
    title: "Hiring Freelancers Vs. Dedicated Developers",
    description:
      "Freelancers offer flexibility and cost savings for short tasks. Dedicated developers provide consistency, ownership, and scalability for ongoing projects.",
    benefits: [
      { title: "Freelancers: Quick Tasks" },
      { title: "Dedicated: Full Ownership" },
      { title: "Scalable Team Access" },
    ],
    imageAlt: "Freelancer vs dedicated team comparison",
    imageSrc: "planning-2.jfif",
  },
  "Communication With Remote Developers": {
    title: "Communication With Remote Developers",
    description:
      "Use tools like Slack, Jira, and daily standups. Establish clear protocols, overlapping hours, and video syncs for seamless collaboration.",
    benefits: [
      { title: "Daily Standups" },
      { title: "Real-Time Tools" },
      { title: "Overlap Hours" },
    ],
    imageAlt: "Remote team video call",
    imageSrc: "project-plan.png",
  },
};

const navItems = Object.keys(tabContents);

export default function HiringGuideSection() {
  const [activeTab, setActiveTab] = useState(navItems[0]);
  const content = tabContents[activeTab];

  return (
    <section className="bg-[#F8F8F8] py-12">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-12">
          User Guide to Hire Dedicated Software Developers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <aside className="lg:col-span-1">
            <nav className="space-y-1 bg-white">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left px-4 py-3 transition-all text-base font-light cursor-pointer ${
                    activeTab === item
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          {/* Dynamic Tab Content */}
          <main className="lg:col-span-3 space-y-6 bg-white px-8 py-5">
            {/* Title */}
            <h1 className="text-xl font-medium text-gray-900">
              {content.title}
            </h1>

            {/* Description */}
            <p className="text-secondary leading-7 text-[0.938rem]">
              {content.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.benefits.map((benefit, index) => {
                return (
                  <div key={index} className="flex gap-3 items-center">
                    <Image
                      src="/icons/tick-icon.svg"
                      width={20}
                      height={20}
                      alt="Tick icon"
                      className="flex-shrink-0"
                    />
                    <span className="text-secondary font-medium text-[0.938rem]">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Image */}
            <div className="mt-8">
              <div className="relative w-full h-60 md:h-80">
                <Image
                  src={`/images/${content.imageSrc}`}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {content.imageAlt}
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
