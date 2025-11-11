"use client";

import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Backend Development",
    icon: "backend.png",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    borderColor: "#B0BDFF",
    backgroundColor: "#F3F5FF",
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: "frontend.png",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    borderColor: "#FFC093",
    backgroundColor: "#FFF3E6",
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: "mobile.png",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    borderColor: "#F6BCFF",
    backgroundColor: "#FBEEFD",
  },
  {
    id: 4,
    title: "Blockchain, Ai/ML",
    icon: "blockchain.png",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    borderColor: "#9FF3FF",
    backgroundColor: "#EFFDFF",
  },
  {
    id: 5,
    title: "DevOps & Low-Code",
    icon: "devops.png",
    tags: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    borderColor: "#FFDAA2",
    backgroundColor: "#FBFFF1",
  },
  {
    id: 6,
    title: "E-commerce & CMS",
    icon: "e-com.png",
    tags: [
      ".NET",
      "C/C++",
      "Django",
      "Firebase",
      "Golang",
      "Symfony",
      "Laravel",
      "Node",
      "PHP",
      "Python",
      "Ruby on Rails",
      "Java",
    ],
    borderColor: "#FFBCBC",
    backgroundColor: "#FFBCBC40",
  },
];

const Hire = () => {
  return (
    <div className="bg-[url(/images/work-banner.png)] bg-no-repeat bg-cover bg-top w-full pb-12 md:pb-20">
      {/* Why Hire Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-primary text-center font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why Hire Developers From Our Name
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-secondary text-sm md:text-[0.938rem] max-w-xl text-center mx-auto mt-4 md:mt-5 leading-7 md:leading-8 px-4"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </motion.p>

          {/* High Quality Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-12 items-center">
            <motion.div
              className="order-2 lg:order-1 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/hire-banner.png"
                alt="Why Hire Developers From Our Name"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-primary">
                High quality/cost ratio
              </h3>

              <div className="mt-5 md:mt-6 space-y-4 md:space-y-5">
                <FeatureItem
                  icon="/icons/orange-tick.svg"
                  title="Hire Silicon Valley caliber at half the cost"
                  description="Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing."
                />
                <FeatureItem
                  icon="/icons/green-tick.svg"
                  title="100+ skills available"
                  description="Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing."
                />
              </div>
            </motion.div>
          </div>

          {/* Rigorous Vetting Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20 items-center">
            <div>
              <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-primary">
                Rigorous Vetting
              </h3>

              <div className="mt-5 md:mt-6 space-y-4 md:space-y-5">
                <FeatureItem
                  icon="/icons/orange-tick.svg"
                  title="5+ hours of tests and interviews"
                  description="Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing."
                />
                <FeatureItem
                  icon="/icons/green-tick.svg"
                  title="Seniority tests"
                  description="Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing."
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/work-image.png"
                alt="Rigorous Vetting Process"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Competency Section */}
      <section className="bg-[url(/images/bg-icon.png)] bg-no-repeat bg-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary text-center font-semibold">
            Our Diverse Technology Competency
          </h2>
          <p className="text-secondary text-sm md:text-[0.938rem] max-w-xl text-center mx-auto mt-4 md:mt-5 leading-7 md:leading-8 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </p>

          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                tags={service.tags}
                borderColor={service.borderColor}
                backgroundColor={service.backgroundColor}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hire;

// Feature Item Component
interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex gap-3 md:gap-4 items-start">
      <Image
        src={icon}
        alt=""
        className="mt-1 md:mt-2 flex-shrink-0"
        width={20}
        height={20}
        loading="lazy"
      />
      <div>
        <h4 className="text-primary text-lg sm:text-xl md:text-[1.375rem] font-medium">
          {title}
        </h4>
        <p className="text-secondary text-sm md:text-[0.938rem] leading-6 md:leading-7 font-light max-w-lg mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  icon: string;
  tags: string[];
  borderColor: string;
  backgroundColor: string;
  className?: string;
}

export const ServiceCard = ({
  title,
  icon,
  tags,
  borderColor,
  backgroundColor,
  className,
}: ServiceCardProps) => {
  return (
    <article
      className={twMerge(
        "relative p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg",
        className
      )}
      style={
        {
          backgroundColor: backgroundColor,
          borderBottom: `6px solid ${borderColor}`,
        } as React.CSSProperties
      }
    >
      {/* Icon */}
      <Image
        src={`/images/${icon}`}
        width={50}
        height={50}
        alt={`${title} icon`}
        className="object-contain mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12"
        loading="lazy"
      />

      {/* Title */}
      <h3 className="mb-4 md:mb-5 text-lg md:text-xl font-semibold text-gray-800">
        {title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-2">
        {tags.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-xs font-medium text-gray-700">{tag}</span>
            {i < tags.length - 1 && (
              <span className="text-gray-400 select-none" aria-hidden="true">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};
