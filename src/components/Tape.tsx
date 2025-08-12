import Icon from "../assets/icon.svg";
interface TapeProps {
  text: string;
}

const Tape = ({ text }: TapeProps) => {
  return (
    <div className="bg-[#30C67C1A] md:py-2 py-[6.5px] md:px-4 px-[11px] flex inline-flex md:gap-2.5 gap-[7px] items-center rounded-full">
      <img src={Icon} alt="Icon" />
      <div className="section-text uppercase">{text}</div>
    </div>
  );
};

export default Tape;
