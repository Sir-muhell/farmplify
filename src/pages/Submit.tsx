import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import Image from "../assets/object.svg";
import { useState } from "react";
import Image2 from "../assets/contact.jpg";
import Grow from "../components/Grow";
import SubmitButton from "../assets/submit.svg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

const Submit = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "US",
    phone: "",
    message: "",
  });

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

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log("Accepted files:", acceptedFiles);
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Resume Submission"
        tape="careers"
        color="#1A1613"
        image={Image}
      />
      <div className="lg:grid grid-cols-2  mx-auto lg:mb-0 mb-[82px]">
        <img
          src={Image2}
          alt="contact us"
          className="w-full h-auto hidden lg:block "
        />
        <div className="lg:px-[104px] px-4 flex flex-col justify-center">
          <p className="lg:mt-6 mt-8 lg:text-[27px] text-[16px] text-[#616161] font-[500px]">
            We know that agriculture isn’t just about the farms and investments,
            it’s also about people. That’s why Farmplify organizes regular field
            tours, investor forums, and community engagements where our team,
            partners, and investors connect, share insights, and build lasting
            relationships beyond the business.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 pt-12 lg:pt-[64px]"
          >
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

            <div className="w-full space-y-1">
              <label htmlFor="phone" className="block text-sm text-[#757575]">
                Upload CV/Resume
              </label>
              <div
                {...getRootProps()}
                className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-1 border-gray-300 py-4 px-6 text-center transition-colors duration-200 ease-in-out hover:border-gray-400 ${
                  isDragActive ? "border-green-500 bg-green-50" : ""
                }`}
              >
                <input {...getInputProps()} />

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors duration-200 ease-in-out ${
                    isDragActive ? "bg-green-100 text-green-500" : ""
                  }`}
                >
                  <svg
                    width="47"
                    height="46"
                    viewBox="0 0 47 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.66797"
                      y="3"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#F2F4F7"
                    />
                    <rect
                      x="3.66797"
                      y="3"
                      width="40"
                      height="40"
                      rx="20"
                      stroke="#F9FAFB"
                      stroke-width="6"
                    />
                    <path
                      d="M23.6693 19.666V22.9993M23.6693 26.3327H23.6776M32.0026 22.9993C32.0026 27.6017 28.2716 31.3327 23.6693 31.3327C19.0669 31.3327 15.3359 27.6017 15.3359 22.9993C15.3359 18.397 19.0669 14.666 23.6693 14.666C28.2716 14.666 32.0026 18.397 32.0026 22.9993Z"
                      stroke="#475467"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {uploadedFiles.length > 0 ? (
                  <div className="">
                    <h4 className="font-">Submitted File:</h4>
                    <div className="mt-2 list-inside list-disc text-sm">
                      {uploadedFiles.map((file: any) => (
                        <span key={file.path}>
                          {file.name} - {(file.size / 1024).toFixed(2)} KB
                        </span>
                      ))}
                    </div>
                  </div>
                ) : isDragActive ? (
                  <p className="font-semibold text-[#30C67C]">
                    Drop the files here...
                  </p>
                ) : (
                  <>
                    <p className="text-[12px] text-[#475467]">
                      <span className="font-semibold text-[#30C67C]">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="mt-1 text-[12px] text-[#475467]">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </>
                )}
              </div>

              {}
            </div>

            {/* Submit */}
            <button className="bg-[#E5CFC2] text-[#5C7D34] font-semibold uppercase lg:text-[20px] text-[16px]  w-full py-6 rounded-full tracking-[0.23em] hover:scale-105 transition mt-6 lg:mt-4 cursor-pointer ">
              Send
            </button>
          </form>
        </div>
      </div>
      <Grow />
    </main>
  );
};

export default Submit;
