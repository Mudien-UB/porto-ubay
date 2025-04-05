import React from "react";
import FormSendMe from "../components/FormSendMe";
import { BiLogoGmail } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { slideInLeft, slideInRight } from "../animations/variants";

export default function ContactPage({ id }) {
  const socialLinks = [
    {
      label: "Gmail",
      href: "mailto:mudienub@gmail.com",
      icon: <BiLogoGmail size={32} />,
      hoverClass: "hover:text-red-500",
    },
    {
      label: "GitHub",
      href: "https://github.com/mudien-ub",
      icon: <VscGithubInverted size={32} />,
      hoverClass: "hover:text-gray-800 dark:hover:text-gray-400",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ubay-lahmudien",
      icon: <FaLinkedin size={32} />,
      hoverClass: "hover:text-blue-600",
    },
  ];

  const [formRef, formInView] = useInViewAnimation(0.2, true);
  const [socialRef, socialInView] = useInViewAnimation(0.2, true);

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 md:px-8"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Form Contact */}
        <motion.div
          ref={formRef}
          variants={slideInLeft(0.2)}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          className="order-1 md:order-none bg-brunswick-green-300 rounded-2xl p-8 shadow-xl flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center font-montserrat text-gray-900 dark:text-gray-100 mb-6">
            Are You Interested in Working with Me?
          </h2>
          <FormSendMe />
        </motion.div>

        {/* Social Links */}
        <motion.div
          ref={socialRef}
          variants={slideInRight(0.4)}
          initial="hidden"
          animate={socialInView ? "visible" : "hidden"}
          className="order-2 md:order-none bg-brunswick-green-300/20 rounded-2xl p-8 shadow-xl border border-brunswick-green-300 flex flex-col justify-center items-center space-y-6"
        >
          <div className="flex items-center space-x-3">
            <MdConnectWithoutContact
              size={24}
              className="text-brunswick-green-900 dark:text-gray-100"
            />
            <h3 className="text-lg font-semibold text-brunswick-green-900 dark:text-gray-100">
              Let's Connect
            </h3>
          </div>

          <p className="text-center text-sm text-brunswick-green-900 dark:text-gray-300 max-w-xs">
            Feel free to reach out via any of the platforms below.
          </p>

          <div className="flex justify-center space-x-10">
            {socialLinks.map((social, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-satin-sheen-gold-900 transition-transform transform hover:scale-110 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
                <span className="text-sm mt-2 text-satin-sheen-gold-900 dark:text-gray-200">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
