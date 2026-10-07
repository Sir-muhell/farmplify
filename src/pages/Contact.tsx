import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Tape from "../components/Tape";
import Map from "../assets/map.png";
import Image from "../assets/contact.jpg";
import { getRecaptchaToken, useRecaptcha } from "../utils/recaptcha";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submissionType: "individual" | "company";
  companyName: string;
  companyLocation: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const REFERRAL_STORAGE_KEY = "farmplify_referral_code";
const NUMERIC_REFERRAL_REGEX = /^[0-9]{6,12}$/;

const Contact = () => {
  useRecaptcha();
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    submissionType: "individual",
    companyName: "",
    companyLocation: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = (params.get("ref") || "").trim();
    if (ref && NUMERIC_REFERRAL_REGEX.test(ref)) {
      window.localStorage.setItem(REFERRAL_STORAGE_KEY, ref);
    } else if (ref) {
      window.localStorage.removeItem(REFERRAL_STORAGE_KEY);
    }
  }, []);

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
      mail: "contact@farmplify.com",
    },
    {
      head: "Sales",
      text: "Questions or queries? Get in touch!",
      mail: "sales@farmplify.com",
    },
  ];

  const services = [
    "Asset Management",
    "Advisory",
    "Commodity & Value Chain",
    "Real Asset Investment",
    "ESG & Impact Investing",
    "AgriFinance Services",
    "Others",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    ) {
      setError("Please fill in all required fields");
      return;
    }

    if (form.submissionType === "company" && !form.companyName?.trim()) {
      setError("Company name is required when submitting as a company.");
      return;
    }

    setLoading(true);

    let recaptchaToken: string;
    try {
      recaptchaToken = await getRecaptchaToken("contact_submit");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to verify you're human. Please try again.",
      );
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("recaptchaToken", recaptchaToken);
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phone);
      formData.append("service", form.service);
      formData.append("message", form.message);
      formData.append("submissionType", form.submissionType);
      if (form.submissionType === "company") {
        formData.append("companyName", form.companyName);
        if (form.companyLocation?.trim()) {
          formData.append("companyLocation", form.companyLocation);
        }
      }
      if (attachment) {
        formData.append("attachment", attachment);
      }
      const referralCode = window.localStorage.getItem(REFERRAL_STORAGE_KEY) || "";
      if (NUMERIC_REFERRAL_REGEX.test(referralCode)) {
        formData.append("referralCode", referralCode);
      }

      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors
            .map(
              (err: { msg?: string; message?: string }) =>
                err.msg || err.message,
            )
            .join(", ");
          setError(
            errorMessages ||
              data.message ||
              "Submission failed. Please try again.",
          );
        } else {
          setError(data.message || "Submission failed. Please try again.");
        }
        setLoading(false);
        return;
      }

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        submissionType: "individual",
        companyName: "",
        companyLocation: "",
      });
      setAttachment(null);
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAttachment(acceptedFiles[0] ?? null);
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
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  });

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
            We'd love to hear from you
          </motion.p>

          <motion.p
            className="mt-6 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            We have offices and teams all around the world.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="lg:grid grid-cols-2 max-w-[1600px] mx-auto lg:mb-0 mb-10">
        <div className="lg:px-[104px] px-4 flex flex-col justify-center order-1 lg:order-2">
          <p className="font-semibold lg:text-[50px] text-[35px] text-[#1F3C15] leading-[90%]">
            Let's build your Agriculture Investment Portfolio, together.
          </p>
          <p className="mt-6 lg:text-[20px] text-[16px] text-[#616161] font-medium">
            You can reach us anytime via{" "}
            <span className="text-[#30C67C] lg:hidden">
              contact@farmplify.com
            </span>
            <span className="hidden lg:inline-flex">contact@farmplify.com</span>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            {/* Representing: Individual or Company */}
            <div className="space-y-2">
              <label className="block text-sm text-[#757575]">
                Contact Type<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3 flex-wrap">
                <label
                  className={`flex items-center gap-3 cursor-pointer rounded-full border-2 px-4 py-2.5 transition-all duration-200 ${
                    form.submissionType === "individual"
                      ? "border-[#1F3C15] bg-[#1F3C15]/[0.06]"
                      : "border-[#D0D5DD] bg-white hover:border-[#1F3C15]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="submissionType"
                    value="individual"
                    checked={form.submissionType === "individual"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#1F3C15]  border-gray-300"
                  />
                  <span className="text-[15px] font-medium text-[#1F3C15]">
                    Individual
                  </span>
                </label>
                <label
                  className={`flex items-center gap-3 cursor-pointer rounded-full border-2 px-4 py-2.5 transition-all duration-200 ${
                    form.submissionType === "company"
                      ? "border-[#1F3C15] bg-[#1F3C15]/[0.06]"
                      : "border-[#D0D5DD] bg-white hover:border-[#1F3C15]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="submissionType"
                    value="company"
                    checked={form.submissionType === "company"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#1F3C15] border-gray-300"
                  />
                  <span className="text-[15px] font-medium text-[#1F3C15]">
                    Company
                  </span>
                </label>
              </div>
            </div>

            {form.submissionType === "company" && (
              <>
                <div className="space-y-1">
                  <label
                    htmlFor="companyName"
                    className="block text-sm text-[#757575]"
                  >
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Your company name"
                    value={form.companyName}
                    onChange={handleChange}
                    required={form.submissionType === "company"}
                    className={inputBase}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="companyLocation"
                    className="block text-sm text-[#757575]"
                  >
                    Company location (optional)
                  </label>
                  <input
                    id="companyLocation"
                    name="companyLocation"
                    type="text"
                    placeholder="City, country"
                    value={form.companyLocation}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </>
            )}

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

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm text-[#757575]">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234-000-0000-000"
                value={form.phone}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="service" className="block text-sm text-[#757575]">
                Which service are you contacting us about?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={inputBase}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

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
                required
                className={`${inputBase} h-28 resize-none no-scrollbar`}
              />
            </div>

            {/* Attachment — same as Submit: PDF, DOC, DOCX, max 5MB */}
            <div className="space-y-1">
              <label className="block text-sm text-[#757575]">
                Attachment (optional)
              </label>
              <div
                {...getRootProps()}
                className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 py-4 px-6 text-center transition-colors duration-200 ${
                  isDragActive
                    ? "border-green-500 bg-green-50"
                    : error && attachment === null && error.includes("PDF")
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input {...getInputProps()} />
                {attachment ? (
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Selected file:
                    </p>
                    <p className="text-sm text-gray-600">
                      {attachment.name} — {(attachment.size / 1024).toFixed(2)}{" "}
                      KB
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAttachment(null);
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

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1F3C15] text-white font-semibold uppercase text-xl py-[18px] w-full rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <img
          src={Image}
          alt="contact us"
          className="w-full h-auto hidden lg:block lg:order-1"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="lg:px-20 px-5 pb-[100px] mx-auto relative"
      >
        <motion.div
          className="mt-20 w-full max-w-4xl rounded-[24px] overflow-hidden lg:block hidden mx-auto"
          variants={item}
        >
          <img src={Map} alt="map" className="w-full h-auto" />
        </motion.div>
        <motion.div
          className="mt-20 lg:flex justify-between space-y-6 w-full max-w-[900px] mx-auto"
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
                  className="text-[#30C67C] font-medium"
                >
                  {info.mail}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
