import { boardMembers } from "./TeamList";
import Tape from "../Tape";
const TeamBody = () => {
  return (
    <div className="lg:px-20 px-5 lg:pb-[132px] pb-[59px] mx-auto relative">
      <div className="lg:mt-20 mt-10 text-center">
        <Tape text="Who We Are" textColor="#1F3C15" />
        <div className="mt-10 max-w-[1011px] m-auto">
          <p className="text-black leading-[93%] font-medium lg:text-[40px] text-[32px]">
            Meet the Team
          </p>
          <p className="mt-8 text-[#5A5A5A] font-medium text-xl leading-[130%] text-center ">
            At Farmplify, we empower individuals, institutions, and diaspora
            investors to build lasting wealth through professionally managed
            agricultural assets all without having to farm themselves. Our
            end-to-end platform offers direct access to high-growth
            opportunities across farmland, tree crops, grains, and livestock.
          </p>
        </div>
        <div className="mt-20">
          <div className="w-[355px] md:w-[750px] lg:w-[1145px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.pix}
                    alt={member.name}
                    className="m-auto w-[355px] h-[355px] object-cover rounded-[8px] object-top"
                  />
                  <p className="mt-5 font-semibold lg:text-[40px] text-[28px] text-[#1F3C15] leading-[93%]">
                    {member.name}
                  </p>
                  <p className="text-[#616161] font-medium text-[24px] leading-[130%] lg:mt-4 mt-2">
                    {member.position}
                  </p>
                  <div className="h-10 w-10 mx-auto">
                    <a href={`mailto:${member.mail}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="hover:scale-120 transition cursor-pointer"
                      >
                        <path
                          fill="#1f3c15"
                          d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:mt-32 mt-20 text-center">
        <Tape text="Management Team" />
        <div className="mt-10 max-w-[1011px] m-auto">
          <p className="text-[#1A1613 leading-[93%] font-semibold lg:text-[68px] text-[32px]">
            Meet Our Leadership Team
          </p>
          <p className="mt-8 text-[#616161] font-medium text-xl leading-[130%] lg:text-left text-center ">
            Our leadership team combines deep expertise in agriculture,
            investment management, and technology to drive Farmplify’s mission
            of transforming agriculture into a structured, secure, and
            profitable investment class for Africa and the world.
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
          {managementTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="m-auto   w-full h-[355px] object-cover  "
              />
              <p className="mt-5 font-semibold lg:text-[40px] text-[28px] text-[#1F3C15] leading-[93%]">
                {member.name}
              </p>
              <p className="text-[#616161] font-medium text-[24px] leading-[130%] lg:mt-4 mt-2">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TeamBody;
