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
    <section className="bg-[url(/images/company-bg.png)] bg-no-repeat bg-cover bg-right w-full">
      <div className="container pt-20 pb-10 mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <Image
            src="/images/code-typing.png"
            width={500}
            height={400}
            alt="Code typing"
          />

          <div>
            <h2 className="text-primary text-4xl font-semibold max-w-xl">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>

            <p className="text-[0.938rem] font-light text-secondary leading-7 max-w-lg mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>

            <div className="space-y-4 grid grid-cols-2 grid-rows-2 mt-5">
              {features.map((text, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <Image
                    src="/icons/tick-icon.svg"
                    width={20}
                    height={20}
                    alt="Tick icon"
                    className="flex-shrink-0"
                  />
                  <span className="text-secondary font-medium text-[0.938rem]">
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
