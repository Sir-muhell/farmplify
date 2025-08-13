import Tape from "./Tape";
interface HeadProps {
  tape: string;
  headOne: string;
  headTwo: string;
  text: string;
}
const Headings = ({ tape, headOne, headTwo, text }: HeadProps) => {
  return (
    <div className="mt-8 text-center">
      <Tape text={tape} />
      <p className="lg:text-7xl text-[44px] leading-[93%] font-semibold text-center text-[#1F3C15] mt-8">
        {headOne} <br /> {headTwo}
      </p>
      <p className="mt-4 text-[#616161] font-medium text-xl max-w-[740px] text-center m-auto">
        {text}
      </p>
    </div>
  );
};

export default Headings;
