import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";

const PrivacyPolicy = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

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
            <Tape
              text="Privacy Policy"
              bgColor="#30C67C1A"
              textColor="#1F3C15"
            />
          </motion.div>
          <motion.p
            className="lg:text-[64px] text-[36px] pt-10 lg:leading-[80%] leading-[44px] font-semibold text-[#101828]"
            variants={item}
          >
            Farmplify Agriculture Development Limited
          </motion.p>
          <motion.p
            className="lg:mt-6 mt-4 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            Effective Date: 20th November, 2025.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="bg-white">
        <div className="container mx-auto  px-5 lg:p-20 lg:pt-[53px] py-8">
          <div className="lg:p-10 p-5 transition-colors duration-300 bg-[#EBFAF2] rounded-[16px] lg:rounded-[21px] lg:space-y-12 space-y-10">
            {/* Privacy Policy 1 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">1. Introduction</p>
              <div className="space-y-3 mt-5">
                <p>
                  Farmplify Agriculture Development Limited (“Farmplify”, “we”,
                  “our”, or “us”) is committed to protecting your privacy and
                  ensuring that your Personal Data is handled in a lawful,
                  secure, and transparent manner.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, disclose,
                  store, and safeguard your Personal Data when you visit our
                  website (the “Website”), communicate with us, or use any of
                  our online forms.
                </p>
                <p>This Policy is written in accordance with:</p>
                <ul className="list-disc ml-10">
                  <li>
                    The{" "}
                    <span className="font-semibold">
                      Nigeria Data Protection Act (NDPA) 2023
                    </span>
                  </li>
                  <li>
                    The{" "}
                    <span className="font-semibold">
                      EU General Data Protection Regulation (GDPR)
                    </span>
                  </li>
                  <li>Relevant global data protection standards</li>
                </ul>
                <p>
                  By accessing or using our Website, you acknowledge that you
                  have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
            {/* Privacy Policy Two */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">2. Scope of This Policy</p>
              <div className="space-y-3 mt-5">
                <p>This Privacy Policy applies to:</p>

                <ul className="list-disc ml-10">
                  <li>visitors to our Website </li>
                  <li>users who submit enquiries via contact forms</li>
                  <li>
                    individuals who communicate with Farmplify via email or
                    other channels
                  </li>
                  <li>
                    job applicants (if website is used for talent sourcing)
                  </li>
                  <li>prospective clients requesting information</li>
                </ul>
                <p>This Policy does not apply to:</p>
                <ul className="list-disc ml-10">
                  <li>
                    offline consulting engagements (those will be governed by
                    contractual terms)
                  </li>
                  <li>third-party websites linked from our Website</li>
                </ul>
              </div>
            </div>
            {/* Privacy Policy Three */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">3. Definitions</p>
              <div className="space-y-3 mt-5">
                <p>
                  For clarity, the following terms have the meanings given under
                  the NDPA and GDPR:
                </p>

                <ul className="list-disc ml-10">
                  <li>
                    <span className="font-semibold">“Personal Data”</span>: Any
                    information relating to an identified or identifiable
                    natural person, including name, email, phone number, IP
                    address, device identifiers, and other unique identifiers.
                  </li>
                  <li>
                    <span className="font-semibold">“Processing”</span>: Any
                    operation performed on Personal Data, including collection,
                    storage, recording, organisation, alteration, transmission,
                    erasure, or deletion.
                  </li>
                  <li>
                    <span className="font-semibold">“Data Subject”</span>: Any
                    individual whose Personal Data is being processed.
                  </li>
                  <li>
                    <span className="font-semibold">“Data Controller”</span>:
                    The entity that determines the purpose and means of
                    processing Personal Data. (Farmplify is the Data
                    Controller.)
                  </li>
                  <li>
                    <span className="font-semibold">“Third Parties”</span>:
                    External service providers, partners, or organisations
                    involved in processing data on our behalf.
                  </li>
                  <li>
                    <span className="font-semibold">“Cookies”</span>: Small text
                    files stored on your device to support website performance,
                    analytics, and user experience.
                  </li>
                </ul>
              </div>
            </div>
            {/* Privacy Policy 4 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">4. What Personal Data We Collect</p>
              <p className="font-bold mt-3">4.1 Data You Provide Directly</p>
              <div className="space-y-3 mt-5">
                <p>
                  We may collect Personal Data that you voluntarily provide,
                  including:
                </p>

                <ul className="list-disc ml-10">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>The content of your enquiry or message</li>
                  <li>Any documents or information voluntarily submitted</li>
                </ul>
                <p>
                  If the website includes a job application or talent form, we
                  may also collect:
                </p>
                <ul className="list-disc ml-10">
                  <li>CV/Resume documents</li>
                  <li>Employment history</li>
                  <li> Educational background</li>
                </ul>
              </div>
              {/* 4.2 */}
              <p className="font-bold mt-5">4.2 Data Collected Automatically</p>
              <div className="space-y-3 mt-5">
                <p>
                  When you access our Website, certain data may be collected
                  automatically via cookies, server logs, and analytics tools,
                  including:
                </p>

                <ul className="list-disc ml-10">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Date, time, and duration of Website visits</li>
                  <li>Pages viewed and navigation patterns</li>
                  <li>Referral links</li>
                </ul>
                <p>
                  This information is used for analytics, security, and to
                  improve user experience.
                </p>
                <ul className="list-disc ml-10">
                  <li>CV/Resume documents</li>
                  <li>Employment history</li>
                  <li> Educational background</li>
                </ul>
              </div>
              {/* 4.3 */}
              <p className="font-bold mt-5">
                4.3 Information Received from Third Parties
              </p>
              <div className="space-y-3 mt-5">
                <p>
                  We may receive anonymised or aggregated analytics data from
                  third-party service providers such as:
                </p>

                <ul className="list-disc ml-10">
                  <li>Web hosting providers</li>
                  <li>Analytics partners</li>
                  <li>Email service providers</li>
                </ul>
                <p>
                  We do <span className="font-semibold">not</span> purchase
                  personal data from third parties.
                </p>
              </div>
            </div>
            {/* Privacy Policy 5 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">
                5. Purpose of Processing Your Personal Data
              </p>
              <p className="mt-3">
                We process Personal Data for the following lawful purposes:
              </p>
              <p className="font-bold mt-3">
                5.1 Service Delivery & Business Operations
              </p>
              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>
                    Responding to enquiries submitted via our contact form
                  </li>
                  <li>Providing information about our consulting services</li>
                  <li>Communicating with prospective clients</li>
                  <li>Scheduling meetings or consultations</li>
                </ul>
              </div>
              {/* 5.2 */}
              <p className="font-bold mt-5">
                5.2 Website Administration & Performance
              </p>
              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>Conducting analytics to understand Website usage</li>
                  <li>Securing and improving Website functionality</li>
                  <li>
                    Monitoring and preventing unauthorised access or misuse
                  </li>
                </ul>
              </div>
              {/* 5.3 */}
              <p className="font-bold mt-5">
                5.3 Legal & Regulatory Compliance
              </p>
              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>Complying with NDPA, GDPR, and other applicable laws</li>
                  <li>Responding to lawful requests from public authorities</li>
                </ul>
                <p>
                  We do <span className="font-semibold">not</span> purchase
                  personal data from third parties.
                </p>
              </div>
              {/* 5.3 */}
              <p className="font-bold mt-5">
                5.4 Marketing (If Applicable & With Consent)
              </p>
              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>
                    Sending service updates, newsletters, or marketing
                    communications
                  </li>
                  <li>Only performed if you explicitly opt-in</li>
                </ul>
                <p>You may withdraw consent at any time.</p>
              </div>
            </div>
            {/* Privacy Policy 6 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">
                6. Our Legal Basis for Processing (NDPA + GDPR)
              </p>
              <p className="mt-3">
                Depending on the context, we rely on the following legal bases:
              </p>
              {/* 6.1 */}
              <p className="font-bold mt-3">6.1 Consent</p>
              <div className="space-y-3 mt-5">
                <p>
                  When you voluntarily submit your Personal Data via forms or
                  email, you consent to its processing for communication and
                  support purposes.
                </p>
              </div>
              {/* 6.2 */}
              <p className="font-bold mt-5">6.2 Legitimate Interest</p>
              <div className="space-y-3 mt-5">
                <p>
                  We may process Personal Data for legitimate business interests
                  such as:
                </p>
                <ul className="list-disc ml-10">
                  <li>improving Website performance</li>
                  <li>ensuring network security</li>
                  <li>protecting against fraud and misuse</li>
                </ul>
              </div>
              {/* 6.3 */}
              <p className="font-bold mt-5">6.3 Contractual Necessity</p>
              <div className="space-y-3 mt-5">
                <p>
                  If you engage Farmplify for consulting services, some data may
                  be processed to fulfil contractual obligations.
                </p>
              </div>
              {/* 6.4 */}
              <p className="font-bold mt-5">6.4 Legal Obligation</p>
              <div className="space-y-3 mt-5">
                <p>
                  We may process data to comply with Nigerian regulatory or
                  legal requirements.
                </p>
              </div>
            </div>
            {/* Privacy Policy 7 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">7. How We Share Your Personal Data</p>
              <p className="mt-3">
                We do <span className="font-semibold">not</span> sell, rent, or
                trade your Personal Data.
              </p>
              <p className="mt-3">Your information may be shared with:</p>
              {/* 7.1 */}
              <p className="font-bold mt-3">
                7.1 Third-Party Service Providers
              </p>
              <div className="space-y-3 mt-5">
                <p>These include:</p>
                <ul className="list-disc ml-10">
                  <li>Web hosting providers</li>
                  <li>Email delivery services</li>
                  <li>Website developers</li>
                  <li>Analytics tools (e.g., Google Analytics, if used)</li>
                </ul>
                <p>
                  Each provider is bound by contractual obligations ensuring
                  NDPA/GDPR compliance.
                </p>
              </div>
              {/* 7.2 */}
              <p className="font-bold mt-5">
                7.2 Legal and Regulatory Authorities
              </p>
              <div className="space-y-3 mt-5">
                <p>We may disclose Personal Data if required by:</p>
                <ul className="list-disc ml-10">
                  <li>Court orders</li>
                  <li>Law enforcement</li>
                  <li>Statutory authorities</li>
                </ul>
              </div>
              {/* 7.3 */}
              <p className="font-bold mt-5">7.3 Business Transfers</p>
              <div className="space-y-3 mt-5">
                <p>
                  If Farmplify undergoes restructuring, merger, acquisition, or
                  asset transfer, Personal Data may be part of the transaction.
                </p>
              </div>
            </div>
            {/* Privacy Policy 8 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">8. Cookies and Tracking Technologies</p>

              <p className="mt-3">Your information may be shared with:</p>
              {/* 8.1 */}
              <p className="font-bold mt-3">8.1 What Cookies We Use</p>
              <div className="space-y-3 mt-5">
                <p>We may use:</p>
                <ul className="list-disc ml-10">
                  <li>
                    <span className="font-semibold">Essential cookies</span> –
                    required for basic website functionality
                  </li>
                  <li>
                    <span className="font-semibold">Analytics cookies</span> –
                    help us understand Website traffic and user behaviour
                  </li>
                  <li>
                    <span className="font-semibold"> Preference cookies</span> –
                    remember settings like language or region
                  </li>
                </ul>
              </div>
              {/* 8.2 */}
              <p className="font-bold mt-5">8.2 How to Manage Cookies</p>
              <div className="space-y-3 mt-5">
                <p>You may configure your browser to:</p>
                <ul className="list-disc ml-10">
                  <li>block cookies</li>
                  <li>delete stored cookies</li>
                  <li>disable tracking</li>
                </ul>
                <p>Disabling cookies may affect Website functionality.</p>
              </div>
            </div>
            {/* Privacy Policy 9 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">9. Data Security</p>
              <p className="mt-3">
                We implement appropriate technical and organisational measures
                to safeguard your Personal Data, including:
              </p>

              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>Encrypted transmission (HTTPS/SSL)</li>
                  <li>Restricted access to internal systems</li>
                  <li>Firewalls and intrusion detection</li>
                  <li>Regular security audits</li>
                  <li>Data minimisation practices</li>
                  <li>Secure backup and storage protocols</li>
                </ul>
                <p>
                  While we take strong precautions, no system is 100% secure.
                  You acknowledge that data transmission over the Internet
                  carries inherent risks.
                </p>
              </div>
            </div>
            {/* Privacy Policy 10 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">10. Data Retention</p>
              <p className="mt-3">
                We retain Personal Data only for as long as necessary for:
              </p>

              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>the purposes defined in this Policy</li>
                  <li>legal and regulatory requirements</li>
                  <li>resolving disputes</li>
                  <li>maintaining business records</li>
                </ul>
                <p>General retention guidelines:</p>
                <ul className="list-disc ml-10">
                  <li>
                    Contact form submissions:{" "}
                    <span className="font-semibold">12–24 months</span>
                  </li>
                  <li>
                    Analytics logs:{" "}
                    <span className="font-semibold">6–18 months</span>
                  </li>
                  <li>
                    Legal or contractual records:{" "}
                    <span className="font-semibold">up to 7 years</span>,
                    depending on statutory obligations
                  </li>
                </ul>
              </div>
            </div>
            {/* Privacy Policy 11 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">11. International Data Transfers</p>
              <p className="mt-3">
                If Personal Data is transferred outside Nigeria (e.g., to cloud
                servers or analytics providers):
              </p>

              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>transfers are made under NDPA-approved safeguards</li>
                  <li>
                    GDPR Standard Contractual Clauses (SCCs) or equivalent
                    measures may apply
                  </li>
                  <li>
                    third-party processors are required to maintain adequate
                    data protection standards
                  </li>
                </ul>
                <p>
                  We ensure that such transfers comply with both the NDPA and
                  GDPR.
                </p>
              </div>
            </div>
            {/* Privacy Policy 12 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">12. Your Rights Under the NDPA & GDPR</p>
              <p className="mt-3">You have the following rights:</p>
              {/* 12.1 */}
              <p className="font-bold mt-5">12.1 Right to Access</p>
              <div className=" mt-3">
                <p>
                  You may request confirmation of whether we process your
                  Personal Data and obtain a copy.
                </p>
              </div>
              {/* 12.2 */}
              <p className="font-bold mt-5">12.2 Right to Rectification</p>
              <div className=" mt-3">
                <p>
                  You may request correction of inaccurate or incomplete data.
                </p>
              </div>{" "}
              {/* 12.3 */}
              <p className="font-bold mt-5">12.3 Right to Erasure</p>
              <div className=" mt-3">
                <p>
                  You may request deletion of your Personal Data in certain
                  circumstances.
                </p>
              </div>{" "}
              {/* 12.4 */}
              <p className="font-bold mt-5">
                12.4 Right to Restrict Processing
              </p>
              <div className=" mt-3">
                <p>You may request that we limit how we use your data.</p>
              </div>{" "}
              {/* 12.5 */}
              <p className="font-bold mt-5">12.5 Right to Object</p>
              <div className=" mt-3">
                <p>
                  You may object to processing based on legitimate interest or
                  for marketing communications.
                </p>
              </div>{" "}
              {/* 12.6 */}
              <p className="font-bold mt-5">12.6 Right to Data Portability</p>
              <div className=" mt-3">
                <p>
                  You may request your Personal Data in a machine-readable
                  format.
                </p>
              </div>{" "}
              {/* 12.7 */}
              <p className="font-bold mt-5">12.7 Right to Withdraw Consent</p>
              <div className=" mt-3">
                <p>
                  You may withdraw your consent at any time, with no effect on
                  prior lawful processing.
                </p>
              </div>
              {/* 12.1 */}
              <p className="font-bold mt-5">12.8 Right to Lodge a Complaint</p>
              <div className=" mt-3">
                <p>You may file a complaint with:</p>
                <p className="font-bold">
                  Nigeria Data Protection Commission (NDPC)
                </p>
                <p>
                  Website:{" "}
                  <a href="https://ndpc.gov.ng/" className="underline">
                    https://ndpc.gov.ng/
                  </a>
                </p>
              </div>
            </div>
            {/* Privacy Policy 13 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">13. Children’s Privacy</p>
              <p className="mt-3">
                The Website is not intended for individuals under 18.
              </p>
              <p>We do not knowingly collect Personal Data from minors.</p>
              <p>
                If you believe a child has submitted data to us, please contact
                us, and we will delete it promptly.
              </p>
            </div>
            {/* Privacy Policy 14 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">14. Links to Third-Party Websites</p>
              <p className="mt-3">
                Our Website may contain links to external websites.
              </p>
              <p>We are not responsible for:</p>

              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>their privacy practices</li>
                  <li>their content</li>
                  <li>their data handling policies</li>
                </ul>
                <p>
                  We encourage you to review the privacy policies of third-party
                  sites before interacting with them.
                </p>
              </div>
            </div>
            {/* Privacy Policy 15 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">15. Data Breach Notification</p>
              <p className="mt-3">In the unlikely event of a data breach:</p>
              <div className="space-y-3 mt-5">
                <ul className="list-disc ml-10">
                  <li>
                    we will take immediate steps to contain and mitigate the
                    breach
                  </li>
                  <li>
                    we will notify affected individuals as required by NDPA
                  </li>
                  <li>we will inform the NDPC within statutory timeframes</li>
                  <li>we will document all breach-related actions</li>
                </ul>
              </div>
              {/* 15.2 */}
              <p className="font-bold mt-5">
                15.2 Relationship to Terms of Service
              </p>
              <div className="space-y-3 mt-5">
                <p>
                  All remedies, liabilities, enforcement rights, and dispute
                  resolution procedures described in the Terms of Service apply
                  fully to breaches arising under this Privacy Policy.
                </p>
              </div>
            </div>
            {/* Privacy Policy 16 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">16. Changes to This Privacy Policy</p>
              <p className="mt-3">
                We may update this Privacy Policy from time to time.
              </p>
              <p>
                Updates will be published on this page with a revised “Effective
                Date”.
              </p>
              <p>
                Where required, we will notify you directly of significant
                changes.
              </p>
            </div>
            {/* Privacy Policy 17 */}
            <div className="lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
              <p className="font-bold">17. Contact Us</p>
              <p className="mt-3">
                If you have questions or requests relating to this Privacy
                Policy or your Personal Data, please contact us at:
              </p>
              <p className="font-semibold mt-5">
                Farmplify Agriculture Development Limited
              </p>
              <p>Address:</p>
              <p>Email:</p>
              <p>Email:</p>
              <p>Phone:</p>
              <p>Data Protection Officer:</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
