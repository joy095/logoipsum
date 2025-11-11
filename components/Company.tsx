import Image from "next/image";

const Company = () => {
  const features = [
    "Client-centric approach",
    "Best-in-class project management",
    "Global quality standards",
    "Time-zone compatibility",
    "Cutting-edge infrastructure",
    "Agile adaptability",
  ];

  return (
    <section className="bg-[url('/images/company-bg.png')] bg-no-repeat bg-cover bg-right w-full">
      <div className="container mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Hidden on small screens, shown on lg+ */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/images/code-typing.png"
                width={600}
                height={480}
                alt="Code typing"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight max-w-xl mx-auto lg:mx-0">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>

            <p className="text-secondary text-sm sm:text-base font-light leading-7 mt-4 sm:mt-5 max-w-lg mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>

            {/* Features Grid - Responsive columns */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 max-w-lg mx-auto lg:mx-0">
              {features.map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src="/icons/tick-icon.svg"
                    width={20}
                    height={20}
                    alt="Check"
                    className="flex-shrink-0 text-green"
                  />
                  <span className="text-secondary font-medium text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
