import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import Image from "../assets/object.svg";
import Image2 from "../assets/contact.jpg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const Submit = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate form
    if (!form.firstName || !form.lastName || !form.email || !form.phoneNumber) {
      setError("Please fill in all required fields");
      return;
    }

    if (uploadedFiles.length === 0) {
      setError("Please upload your resume/CV");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("resume", uploadedFiles[0]);

      const response = await fetch(`${API_BASE_URL}/career`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors
            .map((err: { msg?: string; message?: string }) => err.msg || err.message)
            .join(", ");
          setError(errorMessages || data.message || "Submission failed. Please try again.");
        } else {
          setError(data.message || "Submission failed. Please try again.");
        }
        setLoading(false);
        return;
      }

      // Success
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
      setUploadedFiles([]);
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-[8px] border border-[#D0D5DD] px-[14px] text-[16px] py-2.5 outline-none focus:ring-1 focus:ring-green-500";

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
    setError("");
  }, []);

  const onDropRejected = useCallback(() => {
    setError("Please upload only PDF, DOC, or DOCX files (max 5MB)");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  });
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Value Is Everything"
        tape="careers"
        color="#1A1613"
        image={Image}
      />
      <div className="lg:grid grid-cols-2 gap-10  mx-auto lg:mb-0 mb-[82px] lg:px-20 px-4">
        <img
          src={Image2}
          alt="contact us"
          className="w-full h-full hidden lg:block  max-w-[557px]"
        />
        <div className=" flex flex-col justify-center lg:mt-20">
          <p className="lg:mt-0 mt-8 lg:text-[20px] text-[16px] text-[#616161] font-medium leading-[130%] tracking-[0.6px] text-center lg:text-left">
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
                  required
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
                  required
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
                required
                className={inputBase}
              />
            </div>

            {/* Phone number */}
            <div className="space-y-1">
              <label htmlFor="phoneNumber" className="block text-sm text-[#757575]">
                Phone number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+234-000-0000-000"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            <div className="w-full space-y-1">
              <label htmlFor="resume" className="block text-sm text-[#757575]">
                Upload CV/Resume <span className="text-red-500">*</span>
              </label>
              <div
                {...getRootProps()}
                className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-1 border-gray-300 py-4 px-6 text-center transition-colors duration-200 ease-in-out ${
                  isDragActive
                    ? "border-green-500 bg-green-50"
                    : error && uploadedFiles.length === 0
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input {...getInputProps()} />

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 ease-in-out ${
                    isDragActive
                      ? "bg-green-100 text-green-500"
                      : "bg-gray-100 text-gray-400"
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
                      strokeWidth="6"
                    />
                    <path
                      d="M23.6693 19.666V22.9993M23.6693 26.3327H23.6776M32.0026 22.9993C32.0026 27.6017 28.2716 31.3327 23.6693 31.3327C19.0669 31.3327 15.3359 27.6017 15.3359 22.9993C15.3359 18.397 19.0669 14.666 23.6693 14.666C28.2716 14.666 32.0026 18.397 32.0026 22.9993Z"
                      stroke="#475467"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {uploadedFiles.length > 0 ? (
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Selected File:
                    </p>
                    <p className="text-sm text-gray-600">
                      {uploadedFiles[0].name} -{" "}
                      {(uploadedFiles[0].size / 1024).toFixed(2)} KB
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFiles([]);
                      }}
                      className="mt-2 text-xs text-red-600 hover:text-red-700 underline"
                    >
                      Remove file
                    </button>
                  </div>
                ) : isDragActive ? (
                  <p className="font-semibold text-[#30C67C]">
                    Drop the file here...
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
                      PDF, DOC, or DOCX (max. 5MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                Application submitted successfully! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1F3C15] text-white font-semibold uppercase lg:mb-10 text-xl py-[18px] w-full rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>

    </main>
  );
};

export default Submit;
