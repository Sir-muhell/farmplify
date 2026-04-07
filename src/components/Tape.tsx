interface TapeProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Applied to the inner label (e.g. fontSize, letterSpacing) */
  textStyle?: React.CSSProperties;
}

const Tape = ({ text, textColor, bgColor, className = "", style = {}, textStyle }: TapeProps) => {
  return (
    <div
      className={`md:py-2 py-[6.5px] md:px-4 px-[11px] text-[14px] flex inline-flex md:gap-2.5 gap-[7px] items-center rounded-full tracking-[0.4em] leading-[120%] ${className}`}
      style={{ backgroundColor: bgColor, ...style }}
    >
      <p className="uppercase font-semibold" style={{ color: textColor, ...textStyle }}>
        {text}
      </p>
    </div>
  );
};

export default Tape;
