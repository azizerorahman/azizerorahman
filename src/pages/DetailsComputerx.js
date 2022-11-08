import { motion } from "framer-motion";
import React from "react";
import { ImLink, ImGithub } from "react-icons/im";
import computerx1 from "../images/computerx_1.png";
import computerx2 from "../images/computerx_2.png";
import computerx3 from "../images/computerx_3.png";
import computerx4 from "../images/computerx_4.png";

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

const DetailsComputerx = () => {
  return (
    <div className="min-h-screen hero">
      <div className="p-10 lg:px-64 mx-7">
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.li className="item" variants={item}>
              <h3 className="lg:text-5xl text-3xl lg:mb-3 text-center text-natural tracking-widest uppercase font-semibold font-bebas">
                Computerex
              </h3>
            </motion.li>
            <motion.li className="item" variants={item}>
              <h4 className="font-poppins text-center font-medium text-accent lg:text-xl text-[10px]">
                A Computer Parts Manufacturer's Website{" "}
                <span className="font-bold">[MERN Stack]</span>
              </h4>
            </motion.li>
          </div>
          <div>
            <motion.li className="item" variants={item}>
              <h4 className="lg:text-2xl text-xl mt-4 font-bold text-neutral mb-2">
                About
              </h4>
              <ul className="lg:ml-5">
                <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                  ➔ Separate Dashboard for Admin and Buyers, admin can make
                  other users admin
                </li>
                <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                  ➔ Handled JSON Web Token and API access-controlled with 401,
                  403
                </li>
                <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                  ➔ Boosted with International Payment System and review adding
                  features for users
                </li>
                <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                  ➔ Single-page application with Firebase Authentication system
                </li>
                <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                  ➔ Added Protected Page, only accessed by authenticated users
                </li>
              </ul>
            </motion.li>

            <motion.li className="item" variants={item}>
              <div>
                <h4 className="lg:text-2xl text-xl mt-4 font-bold text-neutral mb-2">
                  Used Technology
                </h4>
                <div className="lg:mt-3.5">
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                    React
                  </div>
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                    React Router
                  </div>
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                    Node.js
                  </div>
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                    React Hook Form
                  </div>
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                    Firebase
                  </div>
                  <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3">
                    Stripe
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div className="lg:my-14 my-7 flex items-center justify-between">
                <h4 className="lg:text-2xl text-xl font-bold text-neutral">
                  Links
                </h4>
                <a href="https://computerx-zero.web.app/">
                  <ImLink className="lg:text-6xl text-4xl hover:text-gray-700" />
                </a>
                <a href="https://github.com/azizurrahman-zero/computerx_client-side">
                  <div className="indicator">
                    <span className="indicator-item pt-1 lg:pt-0 badge badge-secondary font-semibold font-roboto">
                      Client
                    </span>
                    <ImGithub className="lg:text-6xl text-4xl hover:text-gray-700" />
                  </div>
                </a>
                <a href="https://github.com/azizurrahman-zero/computerx_server-side">
                  <div className="indicator">
                    <span className="indicator-item pt-1 lg:pt-0 badge badge-secondary font-semibold font-roboto">
                      Server
                    </span>
                    <ImGithub className="lg:text-6xl text-4xl hover:text-gray-700" />
                  </div>
                </a>
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <h4 className="lg:text-2xl text-xl font-bold text-neutral mb-3">
                  Screenshots
                </h4>
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                  <img
                    className="rounded-xl shadow-xl"
                    src={computerx1}
                    alt="computerx"
                  />
                  <img
                    className="rounded-xl shadow-xl"
                    src={computerx2}
                    alt="computerx"
                  />
                  <img
                    className="rounded-xl shadow-xl"
                    src={computerx3}
                    alt="computerx"
                  />
                  <img
                    className="rounded-xl shadow-xl"
                    src={computerx4}
                    alt="computerx"
                  />
                </div>
              </div>
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default DetailsComputerx;
