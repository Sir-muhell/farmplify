import Bg from "../assets/bg2.jpg";

const Grow = () => {
  return (
    <section className="py-24 px-20 max-w-[1600px] m-auto">
      <div
        className="rounded-full grow h-[511px] text-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(48, 198, 124, 0) -36.99%, rgba(48, 198, 124, 0.9) 93.84%), url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="font-semibold text-7xl text-white leading-[93%]">
          Ready to Grow Your <br /> Income with Farmplify?
        </p>
        <p className="text-xl font-medium text-white mt-6 max-w-[626px]">
          Unlock secure, high-yield investment opportunities in African
          agriculture. Your growth starts here.
        </p>
        <button className="mt-8 bg-white text-[#1F3C15] font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default Grow;
