"use client";
import React, { useState } from "react";
import Link from "next/link";
import { db, ref, push, set } from "../../config/firebase";
import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const submissionsRef = ref(db, "submissions");
      const newSubmissionRef = push(submissionsRef);
      await set(newSubmissionRef, {
        name,
        email,
        message,
      });
      console.log("Document written with ID: ", newSubmissionRef.key);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="w-full md:h-screen h-full min-h-lvh bg-pint3 text-gray-650 flex md:flex-row pt-5 md:pt-0 gap-2 flex-col-reverse justify-center items-center">
      <div className="w-1/2 h-full flex flex-col justify-center items-center text-pint4">
        <h1 className="md:text-5xl text-2xl italic text-center w-full ">
          keep in touch with me
        </h1>
        <div className="h-1/2 w-full flex flex-row justify-center items-center">
          <div className="h-full flex md:w-1/4 w-full items-center justify-center flex-col text-2xl md:gap-5 gap-8 ">
            <Link
              href="https://github.com/kidusshoa"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaGithub size={50} />
            </Link>

            <Link
              href="https://x.com/simplygenius2"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaXTwitter size={50} />
            </Link>

            <Link
              href="https://www.google.com"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaFacebook size={50} />
            </Link>

            <Link
              href="https://www.instagram.com/kidus_zekarias/"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaInstagram size={50} />
            </Link>

            <Link
              href="https://t.me/kidus_zekarias"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaTelegram size={50} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kidus-zekarias-360787272/"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <FaLinkedin size={50} />
            </Link>
          </div>
          <div className="h-full flex md:w-2/4 w-full text-gray-800 gap-1 md:gap-8 justify-center flex-col text-xl md:text-4xl ">
            <Link
              href="https://github.com/kidusshoa"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <h1 className="flex items-center">My Github Profile</h1>
            </Link>

            <Link
              href="https://x.com/simplygenius2"
              className="flex flex-row lg:gap-40 "
            >
              <h1 className="flex items-center">My Twitter Account</h1>
            </Link>

            <Link
              href="https://www.google.com"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <h1 className="flex items-center">My Facebook Account</h1>
            </Link>

            <Link
              href="https://www.instagram.com/kidus_zekarias/"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <h1 className="flex items-center">My Instagram Page</h1>
            </Link>

            <Link
              href="https://t.me/kidus_zekarias"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <h1 className="flex items-center">My Telegram Address</h1>
            </Link>

            <Link
              href="https://www.linkedin.com/in/kidus-zekarias-360787272/"
              className="flex flex-row lg:gap-40 gap-5 "
            >
              <h1 className="flex items-center">My Linkedin Profile</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full h-full flex items-center justify-center  ">
        <form onSubmit={handleSubmit} className="w-3/4 ">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-pint p-2 w-full bg-pint4 rounded-lg focus:outline-none focus:border-blue-400"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-pint bg-pint4 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-pint bg-pint4 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-pint4 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
