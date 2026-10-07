import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Tape from "../components/Tape";
import { getRecaptchaToken, useRecaptcha } from "../utils/recaptcha";

interface FormData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  country: string;
  industry: string;
  isExistingClient: "" | "Yes" | "No";
  service: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const INITIAL_FORM: FormData = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  country: "",
  industry: "",
  isExistingClient: "",
  service: "",
  budgetRange: "",
  timeline: "",
  message: "",
};

const titles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."];

const countries = [
  "Nigeria",
  "Albania",
  "Algeria",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belgium",
  "Benin",
  "Bermuda",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "DR Congo",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Hong Kong SAR",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Korea",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malawi",
  "Malaysia",
  "Malta",
  "Mauritius",
  "Mexico",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
  "Other",
];

const industries = [
  "Agriculture & Farming",
  "Agribusiness & Processing",
  "Financial Services & Banking",
  "Impact Investment / ESG",
  "Government & Public Sector",
  "Real Estate & Infrastructure",
  "Import/Export & Trade",
  "NGO / Development Finance",
  "Technology",
  "Other",
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

const budgetRanges = [
  "Under $50,000",
  "$50,000 – $250,000",
  "$250,000 – $1,000,000",
  "$1,000,000 – $5,000,000",
  "Above $5,000,000",
  "Prefer not to say",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Not sure yet",
];

const RequestForProposal = () => {
  useRecaptcha();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateStep1 = (): string => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.company ||
      !form.country ||
      !form.industry ||
      !form.isExistingClient
    ) {
      return "Please fill in all required fields";
    }
    return "";
  };

  const handleContinue = () => {
    const validationError = validateStep1();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setError("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.service || !form.message) {
      setError("Please fill in all required fields");
      return;
    }

    if (!agreedToTerms) {
      setError("Please accept the Terms of Use and Privacy Policy to continue.");
      return;
    }

    setLoading(true);

    let recaptchaToken: string;
    try {
      recaptchaToken = await getRecaptchaToken("rfp_submit");
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
      formData.append("title", form.title);
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phone);
      formData.append("company", form.company);
      formData.append("role", form.role);
      formData.append("country", form.country);
      formData.append("industry", form.industry);
      formData.append("isExistingClient", form.isExistingClient);
      formData.append("service", form.service);
      formData.append("budgetRange", form.budgetRange);
      formData.append("timeline", form.timeline);
      formData.append("message", form.message);
      if (attachment) {
        formData.append("attachment", attachment);
      }

      const response = await fetch(`${API_BASE_URL}/rfp`, {
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
      setForm(INITIAL_FORM);
      setAttachment(null);
      setAgreedToTerms(false);
      setStep(1);
      setLoading(false);
    } catch (err) {
      console.error("RFP submission error:", err);
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

  if (success) {
    return (
      <main className="relative mx-auto overflow-hidden">
        <Navbar />
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="items-center flex flex-col lg:px-20 px-5 pb-[160px] mx-auto relative min-h-[80vh] justify-center"
        >
          <motion.div
            className="text-center max-w-[640px] lg:mt-[160px] mt-[105px]"
            variants={item}
          >
            <Tape text="Request received" />
            <p className="lg:text-6xl text-[40px] pt-8 leading-[100%] font-semibold text-[#1F3C15]">
              Thank you for your proposal request
            </p>
            <p className="mt-6 text-[#616161] font-medium lg:text-xl text-base">
              Our team will review your submission and get back to you
              shortly at the email address you provided.
            </p>
            <Link
              to="/"
              className="inline-block mt-10 bg-[#1F3C15] text-white font-semibold uppercase text-base py-[16px] px-10 rounded-full tracking-[0.23em] hover:scale-105 transition"
            >
              Back to home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="items-center flex flex-col lg:px-20 px-5 mx-auto relative"
      >
        <motion.div
          className="lg:mt-[200px] mt-[105px] text-center max-w-[900px]"
          variants={container}
        >
          <motion.div variants={item}>
            <Tape text="Request for proposal" />
          </motion.div>

          <motion.p
            className="lg:text-7xl text-[42px] pt-10 leading-[93%] font-semibold text-[#1F3C15]"
            variants={item}
          >
            How can we help your business?
          </motion.p>

          <motion.p
            className="mt-6 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            Tell us about your project and we'll put together a tailored
            proposal for Farmplify's agriculture investment services.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="max-w-[720px] mx-auto lg:px-0 px-4 pb-[100px] lg:mt-16 mt-12">
        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {[1, 2].map((s) => (
            <React.Fragment key={s}>
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                    step === s
                      ? "bg-[#1F3C15] text-white"
                      : step > s
                        ? "bg-[#30C67C] text-white"
                        : "bg-[#EBFAF2] text-[#1F3C15B2]"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`text-sm font-medium ${
                    step === s ? "text-[#1F3C15]" : "text-[#757575]"
                  }`}
                >
                  {s === 1 ? "Contact information" : "Proposal details"}
                </span>
              </div>
              {s === 1 && (
                <div className="flex-1 h-px bg-[#D0D5DD] mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-sm text-[#757575] mb-8">
          Required fields are marked with an asterisk (*).
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-8">
                <div className="space-y-1">
                  <label htmlFor="title" className="block text-sm text-[#757575]">
                    Title
                  </label>
                  <select
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Select</option>
                    {titles.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="block text-sm text-[#757575]">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="block text-sm text-[#757575]">
                    First name <span className="text-red-500">*</span>
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
                  <label htmlFor="lastName" className="block text-sm text-[#757575]">
                    Last name <span className="text-red-500">*</span>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm text-[#757575]">
                    Email address <span className="text-red-500">*</span>
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
                    Phone number <span className="text-red-500">*</span>
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
              </div>

              <div className="space-y-1">
                <label htmlFor="role" className="block text-sm text-[#757575]">
                  Position / Job title
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="e.g. Head of Investments"
                  value={form.role}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label htmlFor="country" className="block text-sm text-[#757575]">
                    Country / Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className={inputBase}
                  >
                    <option value="">Select country/location</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="industry" className="block text-sm text-[#757575]">
                    Industry / Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    required
                    className={inputBase}
                  >
                    <option value="">Select industry/sector</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-[#757575]">
                  Are you an existing Farmplify client?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 flex-wrap">
                  {(["Yes", "No"] as const).map((val) => (
                    <label
                      key={val}
                      className={`flex items-center gap-3 cursor-pointer rounded-full border-2 px-4 py-2.5 transition-all duration-200 ${
                        form.isExistingClient === val
                          ? "border-[#1F3C15] bg-[#1F3C15]/[0.06]"
                          : "border-[#D0D5DD] bg-white hover:border-[#1F3C15]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="isExistingClient"
                        value={val}
                        checked={form.isExistingClient === val}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#1F3C15] border-gray-300"
                      />
                      <span className="text-[15px] font-medium text-[#1F3C15]">
                        {val}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={handleContinue}
                className="bg-[#1F3C15] text-white font-semibold uppercase text-xl py-[18px] w-full rounded-full tracking-[0.23em] hover:scale-105 transition mt-6 cursor-pointer"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-1">
                <label htmlFor="service" className="block text-sm text-[#757575]">
                  Which service are you requesting a proposal for?{" "}
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
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label htmlFor="budgetRange" className="block text-sm text-[#757575]">
                    Estimated budget (optional)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Select a range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="timeline" className="block text-sm text-[#757575]">
                    Expected timeline (optional)
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm text-[#757575]">
                  Tell us about your project or requirements{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project, goals, and what you'd like included in the proposal..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputBase} h-32 resize-none no-scrollbar`}
                />
              </div>

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
                        {attachment.name} —{" "}
                        {(attachment.size / 1024).toFixed(2)} KB
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

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#1F3C15]"
                />
                <span className="text-sm text-[#616161]">
                  I have read and accept the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[#30C67C] font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and agree to be contacted about this request.
                </span>
              </label>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="border-2 border-[#1F3C15] text-[#1F3C15] font-semibold uppercase text-base py-[16px] px-10 rounded-full tracking-[0.23em] hover:scale-105 transition cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#1F3C15] text-white font-semibold uppercase text-xl py-[18px] rounded-full tracking-[0.23em] hover:scale-105 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </main>
  );
};

export default RequestForProposal;
