import React from "react";
import FormSendMe from "../components/FormSendMe";
import { BiLogoGmail } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage({id}) {
  return (
    <div id={id} className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-brunswick-green-300 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">Contact Me</h2>

        <FormSendMe />

        <div className="text-brunswick-green-900 mt-6 flex justify-center space-x-6">
          <a href="mailto:mudienub@gmail.com" className=" text-brunswick-green-900 hover:text-red-500">
            <BiLogoGmail size={30} />
          </a>
          <a href="https://github.com" target="_blank" className=" hover:text-gray-900 dark:hover:text-gray-400">
            <VscGithubInverted size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" className=" hover:text-blue-600">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
