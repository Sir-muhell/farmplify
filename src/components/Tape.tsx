import Icon from "../assets/icon.svg";
interface TapeProps {
  text: string;
}

const Tape = ({ text }: TapeProps) => {
  return (
    <div className="bg-[#30C67C1A] py-2 px-4 flex inline-flex gap-2.5 items-center rounded-full">
      <img src={Icon} alt="Icon" />
      <div className="section-text uppercase">{text}</div>
    </div>
  );
};

export default Tape;
