import React from "react";
import { motion } from "framer-motion";
import gitHub from "../icons/github.png";
import twitter from "../icons/twitter.png";
import linkedIn from "../icons/linkedin.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import pdfIcon from "../icons/pdf.png";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Banner = () => {
  return (
    <div className="hero py-40 lg:py-0 absolute w-9/12 top-[50%] translate-y-[-50%]">
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-stretch lg:items-center gap-16 lg:gap-0">
          <div>
            <motion.li className="item" variants={item}>
              <h2 className="lg:text-8xl text-5xl text-neutral font-medium text-center font-bebas pb-1 lg:pb-0">
                Azizur Rahman
              </h2>
            </motion.li>
            <motion.li className="item" variants={item}>
              <h4 className="font-poppins text-center font-medium text-accent lg:text-xl text-[10px]">
                Junior Web Developer || MERN Stack Developer
              </h4>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div className="flex lg:gap-8 gap-3 lg:mt-8 mt-3 justify-center p-0 lg:pb-16">
                <a href="https://github.com/azizurrahman-zero/">
                  <img className="w-7 lg:w-auto" src={gitHub} alt="GitHub" />
                </a>
                <a href="https://twitter.com/azizurrahman_0">
                  <img className="w-7 lg:w-auto" src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/azizurrahman-zero/">
                  <img
                    className="w-7 lg:w-auto"
                    src={linkedIn}
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://www.facebook.com/azizurrahman.zero">
                  <img
                    className="w-7 lg:w-auto"
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.instagram.com/azizurrahman_0">
                  <img
                    className="w-7 lg:w-auto"
                    src={instagram}
                    alt="Facebook"
                  />
                </a>
              </div>
            </motion.li>
          </div>
          <div>
            <motion.li className="item" variants={item}>
              <div className="flex flex-col lg:flex-row lg:gap-9 gap-3">
                <a
                  download="resume.pdf"
                  href="/file/resume.pdf"
                  className="btn btn-primary text-white text-natural btn-md lg:btn-lg lg:w-72 w-10/12 m-auto font-poppins lg:shadow-2xl shadow-lg"
                >
                  <img
                    className="pr-2 pb-1 w-6 lg:w-auto"
                    src={pdfIcon}
                    alt="icon"
                  />
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  className="btn btn-ghost bg-white text-natural btn-md lg:btn-lg lg:w-72 w-10/12 m-auto font-poppins lg:shadow-2xl shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </motion.li>
          </div>
        </div>
      </motion.ul>
    </div>
  );
};

export default Banner;
