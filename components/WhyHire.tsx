"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useState, memo } from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------
   Types
------------------------------------------------- */
interface AccordionItemData {
  value: string;
  title: string;
  iconColor?: string;
  content: string[];
}

interface ReusableAccordionProps {
  items: AccordionItemData[];
  defaultOpen?: string;
  className?: string;
}

/* -------------------------------------------------
   Reusable Accordion (memoized)
------------------------------------------------- */
const ReusableAccordion = memo(
  ({ items, defaultOpen, className }: ReusableAccordionProps) => {
    const [openValue, setOpenValue] = useState<string | undefined>(defaultOpen);

    return (
      <Accordion
        type="single"
        collapsible
        value={openValue}
        onValueChange={setOpenValue}
        className={cn("w-full", className)}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-b border-[#29295A] last:border-b-0"
          >
            {/* Trigger */}
            <AccordionTrigger className="flex w-full items-center justify-between py-4 font-medium text-xl text-white transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&>svg]:hidden cursor-pointer">
              <span className="text-left">{item.title}</span>

              <Image
                src="/icons/arrow-up-right.png"
                width={18}
                height={18}
                alt="arrow icon"
                className="transition-transform duration-200"
                loading="lazy"
              />
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="pb-4 space-y-3">
              {item.content.map((para, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 text-sm md:text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
);

ReusableAccordion.displayName = "ReusableAccordion";

/* -------------------------------------------------
   Main WhyHire Section
------------------------------------------------- */
const WhyHire = () => {
  const accordionData: AccordionItemData[] = [
    {
      value: "english-speaking",
      title: "English Speaking Programmers",
      content: [
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
        "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
      ],
    },
    {
      value: "flexible-work-hours",
      title: "Flexible Work Hours",
      content: [
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
        "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
      ],
    },
    {
      value: "rapid-onboarding",
      title: "Rapid Onboarding Process",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
        "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours.",
      ],
    },
    {
      value: "expertise-tech",
      title: "Expertise in Top Technologies",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy.",
        "Free return shipping and full refunds processed within 48 hours.",
      ],
    },
    {
      value: "reliable-partner",
      title: "Reliable Partner Credentials",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy.",
        "Free return shipping and full refunds processed within 48 hours.",
      ],
    },
  ];

  return (
    <section className="bg-[#00003C] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className="font-semibold text-white text-3xl md:text-5xl mb-10 
        text-center md:text-left max-w-2xl mx-auto md:mx-0"
        >
          Why Hire Software Developers in India?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-7xl mx-auto">
          {/* Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <Image
              src="/images/why-hire-img.png"
              width={550}
              height={420}
              alt="Why hire developers in India"
              className="rounded-lg shadow-xl w-full max-w-lg object-cover"
              priority
            />
          </div>

          {/* Accordion */}
          <div className="order-1 md:order-2">
            <ReusableAccordion
              items={accordionData}
              defaultOpen={accordionData[0].value}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
