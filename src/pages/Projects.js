import React from "react";
import "./Utilities.css";
import computerx from "../images/computerx.png";
import bbook from "../images/bbook.png";
import jacksonPhotography from "../images/jackson_photography.png";
import phoneDigger from "../images/phone_digger.png";
import { Link } from "react-router-dom";
import { ImLink, ImGithub } from "react-icons/im";
import { motion } from "framer-motion";

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

const Projects = () => {
  return (
    <div className="min-h-screen hero">
      <div className="py-10 lg:py-0">
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="item" variants={item}>
            <h3 className="lg:text-5xl text-3xl mb-8 text-center text-natural tracking-widest uppercase font-semibold font-bebas">
              Projects
            </h3>
          </motion.li>
          <div className="grid lg:grid-cols-2 lg:px-72 px-16 items-center gap-8">
            <motion.li
              variants={item}
              className="item card bg-base-100 shadow-xl"
            >
              <div className="relative content">
                <div>
                  <div className="bg-[#000000cb] absolute inset-0 opacity-0 transition-all duration-[400ms] ease-in-out content-overlay"></div>
                  <img alt="Computerx" src={computerx} />
                  <div className="absolute gap-2 w-9/12 flex flex-col items-center top-1/2 left-2/4 opacity-0 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out content-details fadeIn-bottom">
                    <h3 className="text-secondary font-roboto font-semibold lg:text-2xl text-lg text-center">
                      Computerex
                    </h3>
                    <span className="text-white font-medium text-center lg:text-sm text-xs mb-3">
                      A Computer Parts Manufacturer's Website [MERN Stack]
                    </span>
                    <Link
                      to="/computerx"
                      className="btn btn-sm font-bold btn-secondary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              variants={item}
              className="item card bg-base-100 shadow-xl"
            >
              <div className="relative content">
                <div>
                  <div className="bg-[#000000cb] absolute inset-0 opacity-0 transition-all duration-[400ms] ease-in-out content-overlay"></div>
                  <img alt="BBook" src={bbook} />
                  <div className="absolute gap-2 w-9/12 flex flex-col items-center top-1/2 left-2/4 opacity-0 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out content-details fadeIn-bottom">
                    <h3 className="text-secondary font-roboto font-semibold lg:text-2xl text-lg text-center">
                      BBook
                    </h3>
                    <span className="text-white font-medium text-center lg:text-sm text-xs mb-3">
                      A Book Warehouse's Website
                      <br />
                      [MERN Stack]
                    </span>
                    <Link
                      to="/bbook"
                      className="btn btn-sm font-bold btn-secondary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              variants={item}
              className="item card bg-base-100 shadow-xl"
            >
              <div className="relative content">
                <div>
                  <div className="bg-[#000000cb] absolute inset-0 opacity-0 transition-all duration-[400ms] ease-in-out content-overlay"></div>
                  <img alt="Jackson Photography" src={jacksonPhotography} />
                  <div className="absolute gap-2 w-9/12 flex flex-col items-center top-1/2 left-2/4 opacity-0 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out content-details fadeIn-bottom">
                    <h3 className="text-secondary font-roboto font-semibold lg:text-2xl text-lg text-center">
                      Jackson Photography
                    </h3>
                    <span className="text-white font-medium text-center lg:text-sm text-xs mb-3">
                      A Photographer's Personal Website
                    </span>
                    <Link
                      to="/jackson-photography"
                      className="btn btn-sm font-bold btn-secondary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              variants={item}
              className="item card bg-base-100 shadow-xl"
            >
              <div className="relative content">
                <div>
                  <div className="bg-[#000000cb] absolute inset-0 opacity-0 transition-all duration-[400ms] ease-in-out content-overlay"></div>
                  <img alt="Phone Digger" src={phoneDigger} />
                  <div className="absolute gap-2 w-9/12 flex flex-col items-center top-1/2 left-2/4 opacity-0 translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out content-details fadeIn-bottom">
                    <h3 className="text-secondary font-roboto font-semibold lg:text-2xl text-lg text-center">
                      Phone Digger
                    </h3>
                    <span className="text-white font-medium text-center lg:text-sm text-xs mb-3">
                      A Mobile Data Searching Website
                    </span>
                    <div className="flex items-center gap-6">
                      <a href="https://phone-digger.netlify.app/">
                        <ImLink className="text-4xl hover:text-[rgba(251,208,68,0.7)] text-secondary" />
                      </a>
                      <a href="https://github.com/azizurrahman-zero/phone-digger">
                        <ImGithub className="text-4xl hover:text-[rgba(251,208,68,0.7)] text-secondary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Projects;
