import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill, BsFillAwardFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";

import header from "../public/headerImage.svg";
import avatar from "../public/avatar.jpeg";

import projectScreenshot from "../public/project.png";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Adrian Muntean | Portfolio</title>
        <meta name="description" content="Adrian Muntean's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={darkMode ? "dark" : ""}>
        <main className="bg-gray-50 px-10 pb-20 dark:bg-gray-900/95 transition duration-300 ease-in-out">
          {/* welcome section */}
          <section>
            {/* navbar */}
            <div>
              <nav className="flex mx-auto py-10 justify-between items-center max-w-5xl">
                <h1 className="text-l font-martian md:text-xl dark:text-white transition duration-300 ease-in-out hover:scale-110">
                  &lt;adrian&gt;
                </h1>
                <ul className="flex justify-center">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl dark:text-white duration-300 ease-in-out hover:scale-110"
                    />
                  </li>
                  <li className="transition duration-300 ease-in-out hover:scale-110">
                    <a
                      href="https://drive.google.com/file/d/11WF19lyJGy5dLmzz274BA2xnY2jVxtFI/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r bg-black text-white px-4 py-2 rounded-md ml-8 font-medium dark:text-black dark:bg-white transition duration-300 ease-in-out"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="py-14 md:py-10 flex flex-col items-center justify-center md:flex-row md:flex-wrap max-w-6xl mx-auto">
              {/* title */}
              <div
                easing="easeOut"
                className="text-center md:pl-20 md:text-left"
              >
                <h2 className="text-5xl md:text-6xl py-2 text-black font-medium dark:text-white transition duration-300 ease-in-out">
                  Adrian Muntean
                </h2>
                <h3 className="text-2xl py-2 md:text-2xl xl:text-3xl dark:text-white transition duration-300 ease-in-out">
                  Software Engineer
                </h3>

                <p className="text-gray-800 leading-8 mx-auto md:mx-0 text-md sm:max-w-sm md:text-xl dark:text-white transition duration-300 ease-in-out">
                  Software engineer with a passion for building elegant,
                  scalable solutions.
                </p>
              </div>

              {/* image */}
              <div className="max-w-xl md:mr-10 mx-auto lg:mr-auto">
                <Image src={header} className="h-60 md:h-96" />
              </div>

              {/* icons */}
              <div className="py-12 mx-auto text-5xl flex gap-16 text-black dark:text-white transition duration-100 ease-in-out">
                <a
                  href="https://www.linkedin.com/in/muntean-adrian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:scale-110"
                >
                  <AiFillLinkedin />
                </a>

                <a
                  href="https://www.github.com/munteanadrian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:scale-110"
                >
                  <AiFillGithub />
                </a>

                <a
                  href="mailto:amuntean2000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:scale-110"
                >
                  <AiFillMail />
                </a>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="">
            <div className="max-w-5xl mx-auto">
              <div className="flex text-center flex-wrap sm:flex-col md:flex-row md:justify-center gap-5 pb-10">
                <div className="px-6 py-4 shadow-lg shadow-gray-200 bg-gray-50 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-xl max-w-xs">
                  <Image
                    src={projectScreenshot}
                    className="w-60 py-4 mx-auto"
                  />
                  <h4 className="text-xl font-semibold my-2">Project title</h4>
                  <p className="leading-8 text-md">
                    Project description goes right here tum tum tum tum tum.
                  </p>
                  <p className="leading-8 text-md">Technologies used:</p>
                </div>
                <div className="px-6 py-4 shadow-lg shadow-gray-200 bg-gray-50 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-xl max-w-xs">
                  <Image
                    src={projectScreenshot}
                    className="w-60 py-4 mx-auto"
                  />
                  <h4 className="text-xl font-semibold my-2">Project title</h4>
                  <p className="leading-8 text-md">
                    Project description goes right here tum tum tum tum tum.
                  </p>
                  <p className="leading-8 text-md">Technologies used:</p>
                </div>
                <div className="px-6 py-4 shadow-lg shadow-gray-200 bg-gray-50 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-xl max-w-xs">
                  <Image
                    src={projectScreenshot}
                    className="w-60 py-4 mx-auto"
                  />
                  <h4 className="text-xl font-semibold my-2">Project title</h4>
                  <p className="leading-8 text-md">
                    Project description goes right here tum tum tum tum tum.
                  </p>
                  <p className="leading-8 text-md">Technologies used:</p>
                </div>
              </div>
            </div>
          </section>

          {/* about me */}
          <div className="my-20 mx-auto max-w-5xl shadow-md bg-white text-black border border-gray-200 shadow-gray-200 rounded-2xl">
            <div className="flex flex-col text-center md:text-left md:flex-row px-4 py-8">
              <div className="m-auto h-60 w-60 rounded-full overflow-hidden shadow-md">
                <Image src={avatar} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl pt-6 md:py-1 font-medium">Who am I?</h3>
                <p className="text-md mx-auto py-6 pr-10 md:py-2 leading-8 max-w-xl">
                  Hi there! I'm Adrian, a 22-year-old Java engineer and I'm
                  passionate about coding and solving problems. I'm just
                  finishing college and I'm eager to apply my skills and
                  knowledge in the real world. I enjoy learning new technologies
                  and challenging myself with different projects. I'm always
                  looking for opportunities to grow as a developer and as a
                  person. Welcome to my portfolio website where you can see some
                  of my work and get in touch with me!
                </p>
              </div>
            </div>
          </div>

          {/* achievements */}
          <section>
            <div className="flex flex-col max-w-5xl mx-auto py-10">
              <h3 className="text-center mx-auto text-3xl md:py-1 font-medium">
                Achievements
              </h3>

              <ol className="relative border-l border-black mx-auto my-12">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <IoSchoolSharp className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      State University of New York College at Cortland
                      <span className="bg-black/75 text-gray-50 ml-3 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        Latest
                      </span>
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Cortland, NY
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      August - December 2022
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      I was awarded the Babes-Bolyai University's scholarship
                      for an exchange, study abroad semester in order to further
                      my personal and professional development.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <IoSchoolSharp className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:h hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      Faculty of Economics and Business Administration,
                      Babes-Bolyai University
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Cluj-Napoca, Romania
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      October 2020 - Present
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      Bachelor's Degree in Computer Science and Economics
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <BsFillAwardFill className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      Bronze medal @ International stage of the MOS World
                      Championship
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      New York, NY
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      July 2019
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      Represented Romania's national team at the international
                      stage in New York, won the bronze medal. I had the third
                      best performance out of hundreds of thousands of people
                      from all over the world, each representing their own
                      countries.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <BsFillAwardFill className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      First place @ National stage of the MOS World Championship
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Bucharest, Romania
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      May 2019
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      I prepared for and won the first place in the national
                      championship hosted at the headquarters of Microsoft in
                      Bucharest, Romania. I was selected to be part of the team
                      representing Romania at the world championship in New York
                      City, USA.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <BsFillAwardFill className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      Participant @ National stage of the MOS World Championship
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Bucharest, Romania
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      Apr 2018
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      I qualified for the national stage of the competition at
                      the Microsoft Romania headquarters in Bucharest.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <BsFillAwardFill className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      Third Place @ National stage of the MOS World Championship
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Bucharest, Romania
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      Apr 2017
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      I represented my high school and won the third place at
                      the national stage of the competition in Bucharest.
                    </p>
                  </div>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 -left-3 ring-gray-50">
                    <BsFillAwardFill className="w-3 h-3 text-gray-50" />
                  </span>
                  <div className="transition duration-300 ease-in-out hover:translate-x-5 hover:scale-105">
                    <h4 className="flex items-center mb-1 text-lg font-semibold text-black">
                      Second place @ Regional stage of the Olympiad in
                      Information Technology
                    </h4>
                    <location className="block mb-2 text-md italic font-normal leading-none text-black">
                      Cluj-Napoca, Romania
                    </location>
                    <time className="block mb-2 text-sm font-normal leading-none text-black">
                      April 2017
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-800 max-w-lg">
                      I represented my high school and won the second place at
                      the regional stage of the Olympiad in Cluj-Napoca.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="max-w-xl mx-auto bg-white shadow-lg shadow-gray-200 text-black border border-gray-200 rounded-2xl">
            <div className="p-10">
              <h3 className="font-medium text-center py-1 text-3xl">
                Reach Out
              </h3>

              <div className="flex justify-center py-10">
                <div className="flex flex-col items-start">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/muntean-adrian"
                      className="flex items-center mb-4 transition duration-300 ease-in-out hover:scale-105"
                    >
                      <AiFillLinkedin className="text-2xl" />
                      <p className="pl-4 text-lg font-normal">
                        linkedin.com/in/muntean-adrian
                      </p>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.github.com/munteanadrian"
                      className="flex items-center mb-4 transition duration-300 ease-in-out hover:scale-105"
                    >
                      <AiFillGithub className="text-2xl" />
                      <p className="pl-4 text-lg font-normal">
                        github.com/munteanadrian
                      </p>
                    </a>
                  </div>

                  <div>
                    <a
                      href="mailto:amuntean2000@gmail.com"
                      className="flex items-center transition duration-300 ease-in-out hover:scale-105"
                    >
                      <AiFillMail className="text-2xl" />
                      <p className="pl-4 text-lg font-normal">
                        amuntean2000@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
