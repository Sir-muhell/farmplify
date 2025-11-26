import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Tape from "../components/Tape";
import Map from "../assets/map.png";
import Image from "../assets/contact.jpg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "US",
    phone: "",
    message: "",
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const contactInfo = [
    {
      head: "Support",
      text: "Our friendly team is here to help.",
      mail: "support@farmplify.com",
    },
    {
      head: "Sales",
      text: "Questions or queries? Get in touch!",
      mail: "sales@farmplify.com",
    },
    // {
    //   head: "Phone",
    //   text: "Mon-Fri from 8am to 5pm.",
    //   mail: "+234 980 373 2222",
    // },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const inputBase =
    "w-full rounded-[8px] border border-[#D0D5DD] px-[14px] text-[16px] py-2.5 outline-none focus:ring-1 focus:ring-green-500";

  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="items-center flex flex-col lg:px-20 px-5 pb-[100px] mx-auto relative"
      >
        <motion.div
          className="lg:mt-[200px] mt-[105px] text-center max-w-[900px]"
          variants={container}
        >
          <motion.div variants={item}>
            <Tape text="Contact us" />
          </motion.div>

          <motion.p
            className="lg:text-7xl text-[50px] pt-10 leading-[93%] font-semibold text-[#1F3C15]"
            variants={item}
          >
            We’d love to hear from you
          </motion.p>

          <motion.p
            className="mt-6 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            We have offices and teams all around the world.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-20 w-full max-w-4xl rounded-[24px] overflow-hidden lg:block hidden"
          variants={item}
        >
          <img src={Map} alt="map" className="w-full h-auto" />
        </motion.div>
        <motion.div
          className="mt-20 lg:flex justify-between space-y-6 w-full max-w-[900px]"
          variants={item}
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <h3 className="text-[28px] font-semibold text-[#1F3C15]">
                {info.head}
              </h3>
              <p className="mt-2 text-[16px] text-[#616161]">{info.text}</p>
              <div className="mt-5">
                <a
                  href={
                    info.head === "Phone"
                      ? `tel:${info.mail}`
                      : `mailto:${info.mail}`
                  }
                  className=" text-[#30C67C] font-medium"
                >
                  {info.mail}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="lg:grid grid-cols-2 max-w-[1600px] mx-auto lg:mb-0 mb-10">
        <img
          src={Image}
          alt="contact us"
          className="w-full h-auto hidden lg:block "
        />
        <div className="lg:px-[104px] px-4 flex flex-col justify-center">
          <p className="font-semibold lg:text-[50px] text-[35px] text-[#1F3C15] leading-[90%]">
            Let’s build your Agriculture Investment Portfolio, together.
          </p>
          <p className="mt-6 lg:text-[20px] text-[16px] text-[#616161] font-medium">
            You can reach us anytime via{" "}
            <span className="text-[#30C67C] lg:hidden">
              support@farmplify.com
            </span>
            <span className="hidden lg:inline-flex">support@farmplify.com</span>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            {/* First + Last name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-[#757575]"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm text-[#757575]"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm text-[#757575]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Phone number (country + phone) */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm text-[#757575]">
                Phone number
              </label>
              <div className="flex gap-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234-000-0000-000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm text-[#757575]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave us a message..."
                value={form.message}
                onChange={handleChange}
                className={`${inputBase} h-28 resize-none no-scrollbar`}
              />
            </div>

            {/* Submit */}
            <button className="bg-[#1F3C15] text-white font-semibold uppercase text-xl py-[18px] w-full rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
