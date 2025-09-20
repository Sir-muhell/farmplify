interface ServiceCardProps {
  number: string;
  title: string;
  items: string[];
}

const ServiceCard = ({ number, title, items }: ServiceCardProps) => {
  return (
    <div className="relative mt-[97px]spa">
      <p className="text-[#FFFFFF33] font-semibold text-[200px] leading-[100%]">
        {number}
      </p>
      <div className="absolute top-[61px] left-[36px] text-white">
        <p className="text-[28px] font-semibold leading-[130%]">{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
