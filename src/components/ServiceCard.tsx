interface ServiceCardProps {
  number: string;
  title: string;
  items: string[];
}

const ServiceCard = ({ number, title, items }: ServiceCardProps) => {
  return (
    <div className="relative overflow-hidden pt-[60px] lg:pl-[35px] pl-[25px]">
      <p className="absolute top-0 left-0 z-0 text-[#FFFFFF33] font-semibold lg:text-[200px] text-[120px] leading-none pointer-events-none">
        {number}
      </p>

      <div className="relative z-10 text-white">
        <p className="text-[28px] font-semibold leading-[130%]">{title}</p>
        <ul className="space-y-0 lg:text-[24px] text-[16px] font-medium leading-[130%] lg:mt-6 mt-4 text-[#DFDFDF]">
          {items.map((item, index) => (
            <li className="flex items-start" key={index}>
              <span className="mr-3 font-semibold">•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
