import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  link: string;
}
const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link to={link}>
      <button className="bg-[#E5CFC2] text-[#5C7D34] font-semibold uppercase text-xl py-6 px-16 rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer">
        {text}
      </button>
    </Link>
  );
};

export default Button;
