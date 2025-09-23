import { boardMembers, managementTeam } from "./TeamList";
import Tape from "../Tape";
const TeamBody = () => {
  return (
    <div className="lg:px-20 px-5 pb-[100px] mx-auto relative">
      <div className="lg:mt-20 mt-10 text-center">
        <Tape text="Who We Are" />
        <div className="mt-10 max-w-[1011px] m-auto">
          <p className="text-[#1A1613 leading-[93%] font-semibold lg:text-[68px] text-[32px]">
            Board Members
          </p>
          <p className="mt-8 text-[#616161] font-medium text-xl leading-[130%] text-center ">
            At Farmplify, we empower individuals, institutions, and diaspora
            investors to build lasting wealth through professionally managed
            agricultural assets all without having to farm themselves. Our
            end-to-end platform offers direct access to high-growth
            opportunities across farmland, tree crops, grains, and livestock.
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 gap-12">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="m-auto   w-full h-auto  object-cover "
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
      </div>

      <div className="lg:mt-32 mt-20 text-center">
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
        <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 gap-12">
          {managementTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="m-auto   w-full h-auto  "
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
      </div>
    </div>
  );
};

export default TeamBody;
