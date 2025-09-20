interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-[#E5CFC2] text-[#5C7D34] font-semibold uppercase text-xl py-6 px-16 rounded-full tracking-[0.23em] hover:scale-105 transition mt-12">
      {text}
    </button>
  );
};

export default Button;
