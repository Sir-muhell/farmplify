interface TapeProps {
  text: string;
  textColor?: string;
  bgColor?: string;
}

const Tape = ({ text, textColor, bgColor }: TapeProps) => {
  return (
    <div
      className={`md:py-2 py-[6.5px] md:px-4 px-[11px] flex inline-flex md:gap-2.5 gap-[7px] items-center rounded-full tracking-[0.4em] leading-[120%]`}
      style={{ backgroundColor: bgColor }}
    >
      <p className={`uppercase font-semibold`} style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );
};

export default Tape;
