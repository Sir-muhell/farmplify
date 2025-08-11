import Tape from "./Tape";

interface ServicesProps {
  title: string;
  tapeText?: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  offerings: Array<{
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
  }>;
  backgroundImage?: string;
  className?: string;
}

const Services = ({
  title,
  tapeText,
  features,
  offerings,
  backgroundImage,
  className = "",
}: ServicesProps) => {
  return (
    <>
      <div
        className={`max-w-[1600px] mx-auto lg:px-20 p-5 md:pb-[66px] ${className}`}
      >
        <div className="bg-[#EBFAF2] rounded-[32px] pt-12 md:px-[170px] pb-[134px]">
          <div className="flex flex-col items-center justify-center">
            {tapeText && <Tape text={tapeText} />}
            <p className="mt-6 font-semibold text-[56px] text-[#1F3C15]">
              {title}
            </p>
          </div>

          <div className="mt-[64px]">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-[70px]  last:mb-0"
              >
                {offering.imagePosition === "left" && (
                  <div className="">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </div>
                )}

                <div
                  className={`flex flex-col ${
                    offering.imagePosition === "right" ? "" : "pt-[51px]"
                  }`}
                >
                  <p className="text-[28px] font-semibold text-[#1F3C15]">
                    {offering.title}
                  </p>
                  <p className="text-[#616161] text-base font-medium mt-4">
                    {offering.description}
                  </p>
                </div>

                {offering.imagePosition === "right" && (
                  <div className="pt-[51px]">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`max-w-[1600px] mx-auto lg:px-20 p-5 md:py-[76px] relative overflow-hidden ${className}`}
      >
        <p className="font-semibold text-[56px] text-[#1F3C15] w-[627px] leading-[93%] ml-5">
          Why Choose Our {title}?
        </p>

        <div className="mt-[108px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-[56px] h-[56px] bg-[#EBFAF2] rounded-full items-center justify-center flex">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[32px] h-[32px]"
                />
              </div>
              <p className="text-[#1F3C15] text-[28px] font-semibold mt-8">
                {feature.title}
              </p>
              <p className="text-[#616161] text-[16px] font-medium mt-4 leading-[130%] tracking-[0.03em]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {backgroundImage && (
          <div className="absolute -top-[500px] -right-[400px] w-full h-full -z-[-1]">
            <img
              src={backgroundImage}
              alt="Background"
              className="mix-blend-hard-light rotate-[53.23deg] object-cover opacity-[20%]"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
