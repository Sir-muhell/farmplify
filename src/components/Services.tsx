import Tape from "./Tape";
import Bg from "../assets/bg.png";

interface ServicesProps {
  title: string;
  tapeText?: string;
  why?: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  offerings: Array<{
    title: string;
    description?: string;
    image: string;
    imagePosition: "left" | "right";
    bulletPoints?: string[];
  }>;

  className?: string;
}

const Services = ({
  title,
  tapeText,
  why,
  features,
  offerings,

  className = "",
}: ServicesProps) => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto lg:px-20 p-2 lg:pb-[66px] pb-[56px]">
        <div className="bg-[#EBFAF2] rounded-[32px] pt-12 lg:px-[170px] lg:pb-[134px] pb-[70px] px-6">
          <div className="flex flex-col items-center justify-center">
            {tapeText && <Tape text={tapeText} />}
            <p className="mt-6 font-semibold lg:text-[56px] text-[35px] leading-[92%] text-[#1F3C15] text-center">
              {title}
            </p>
          </div>

          <div className="lg:mt-[64px]">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[70px] lg:last:mt-10 gap-6"
              >
                {/* Mobile: Always show image first */}
                {offering.image && (
                  <div className="lg:hidden mt-14">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* Desktop: Conditional image position */}
                {offering.image && offering.imagePosition === "left" && (
                  <div className="hidden lg:block">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className={`flex flex-col lg:pt-[51px] lg:text-left text-center ${
                    offering.imagePosition === "right" ? "lg:pt-[51px]" : ""
                  }`}
                >
                  <p className="text-[28px] font-semibold text-[#1F3C15] leading-[100%] tracking-[-0.01em]">
                    {offering.title}
                  </p>

                  {/* Description if exists */}
                  {offering.description && (
                    <p className="text-[#616161] text-base font-medium mt-4">
                      {offering.description}
                    </p>
                  )}

                  {/* Bullet points if exists */}
                  {offering.bulletPoints && (
                    <ul className="mt-4">
                      {offering.bulletPoints.map((point, i) => {
                        const parts = point.split(": ");
                        return (
                          <li
                            key={i}
                            className={`flex items-start text-[#616161] text-base font-medium ${
                              offering.description && "ml-4"
                            }`}
                          >
                            <span className="mx-3">•</span>
                            {parts.length > 1 ? (
                              <p className="">
                                <span className="font-semibold">
                                  {parts[0]}:
                                </span>{" "}
                                {parts.slice(1).join(": ")}
                              </p>
                            ) : (
                              point
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                {/* Desktop: Conditional right image */}
                {offering.image && offering.imagePosition === "right" && (
                  <div className="hidden lg:block lg:pt-[51px]">
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
        className={`max-w-[1600px] mx-auto lg:px-20 p-8 lg:py-[76px] relative overflow-hidden ${className}`}
      >
        <p className="font-semibold lg:text-[56px] text-[40px] text-[#1F3C15] lg:w-[627px] leading-[93%] lg:ml-5">
          {why}
        </p>

        <div className="lg:mt-[108px] mt-14 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-5 lg:gap-16 gap-6 z-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col hover:scale-125 transition duration-500"
            >
              <div className="w-[56px] h-[56px] bg-[#EBFAF2] rounded-full items-center justify-center flex">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[32px] h-[32px]"
                />
              </div>
              <p className="text-[#1F3C15] text-[28px] font-semibold mt-8 leading-[100%] tracking-[0.02em]">
                {feature.title}
              </p>
              <p className="text-[#616161] text-[16px] font-medium mt-4 leading-[130%] tracking-[-0.01em]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute -top-[500px] -right-[400px] w-full h-full z-10 pointer-events-none">
          <img
            src={Bg}
            alt="Background"
            className="mix-blend-hard-light rotate-[53.23deg] object-cover opacity-[20%]"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
