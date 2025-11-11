import Image from "next/image";

import React from "react";
import { twMerge } from "tailwind-merge";

const Hire = () => {
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

  return (
    <div className="bg-[url(/images/work-banner.png)] bg-no-repeat bg-cover bg-top min-h-svh w-full pb-20">
      <section>
        <div className="container mx-auto pt-20">
          <h2 className="text-5xl text-primary text-center">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-secondary text-[0.938rem] max-w-xl text-center mx-auto mt-5 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since
          </p>

          <div className="grid grid-cols-2">
            <Image
              src="/images/hire-banner.png"
              alt="Why Hire Developers From Our Name banner"
              width={500}
              height={500}
            />

            <div className="pt-20">
              <h3 className="font-semibold text-4xl text-primary">
                High quality/cost ratio
              </h3>

              <div className="mt-5">
                <div className="flex gap-4 items-start">
                  <Image
                    src={"/icons/orange-tick.svg"}
                    alt="icons"
                    className="mt-2"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h2 className="text-primary text-[1.375rem]">
                      Hire Silicon Valley caliber at half the cost
                    </h2>
                    <p className="text-secondary text-[0.938rem] leading-7 font-light max-w-lg">
                      Hire the top 1% of 1.5 million+ developers from 150+
                      countries who have applied to Turing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start mt-4">
                  <Image
                    src={"/icons/green-tick.svg"}
                    alt="icons"
                    className="mt-2"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h2 className="text-primary text-[1.375rem]">
                      100+ skills available
                    </h2>
                    <p className="text-secondary text-[0.938rem] leading-7 font-light max-w-lg">
                      Hire the top 1% of 1.5 million+ developers from 150+
                      countries who have applied to Turing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-20">
          <div className="grid grid-cols-2">
            <div className="pt-20">
              <h3 className="font-semibold text-4xl text-primary">
                Rigorous Vetting
              </h3>

              <div className="mt-5">
                <div className="flex gap-4 items-start">
                  <Image
                    src={"/icons/orange-tick.svg"}
                    alt="icons"
                    className="mt-2"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h2 className="text-primary text-[1.375rem]">
                      5+ hours of tests and interviews
                    </h2>
                    <p className="text-secondary text-[0.938rem] leading-7 font-light max-w-lg">
                      Hire the top 1% of 1.5 million+ developers from 150+
                      countries who have applied to Turing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start mt-4">
                  <Image
                    src={"/icons/green-tick.svg"}
                    alt="icons"
                    className="mt-2"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h2 className="text-primary text-[1.375rem]">
                      Seniority tests
                    </h2>
                    <p className="text-secondary text-[0.938rem] leading-7 font-light max-w-lg">
                      Hire the top 1% of 1.5 million+ developers from 150+
                      countries who have applied to Turing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="/images/work-image.png"
              alt="Why Hire Developers From Our Name banner"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className=" bg-[url(/images/bg-icon.png)] bg-no-repeat">
        <div className="container mx-auto pt-20">
          <h2 className="text-5xl text-primary text-center">
            Our Diverse Technology Competency
          </h2>
          <p className="text-secondary text-[0.938rem] max-w-xl text-center mx-auto mt-5 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
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

interface ServiceCardProps {
  title: string;
  icon: string; // e.g. "backend.svg"
  tags: string[];
  borderColor: string; // Top border color (e.g., "#A78BFA" or "#F687B3")
  backgroundColor: string; // e.g., "#FFF4F8"
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
    <div
      className={twMerge(
        "relative p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
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
        alt={title}
        className="object-contain mb-6"
      />

      {/* Title */}
      <h3 className="mb-5 text-xl font-semibold text-gray-800">{title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {tags.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="rounded-full text-xs font-medium">{tag}</span>
            {i < tags.length - 1 && (
              <span className="text-gray-400 select-none">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
