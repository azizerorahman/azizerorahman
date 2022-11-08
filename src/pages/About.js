import React from "react";
import profile from "../images/pp.png";
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

const About = () => {
  return (
    <div className="min-h-screen hero lg:px-44 px-16 py-10 lg:py-0">
      <div>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="item" variants={item}>
            <h3 className="lg:text-5xl pb-6 lg:pb-0 text-3xl text-center text-natural tracking-widest uppercase font-semibold font-bebas">
              About Me
            </h3>
          </motion.li>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.li variants={item} className="item lg:w-5/12">
              <img src={profile} alt="Azizur Rahman" />
            </motion.li>
            <motion.li variants={item} className="item lg:w-7/12 lg:px-0 px-2">
              <p className="lg:text-xl text-natural font-medium font-roboto lg:indent-10">
                Hi, I'm{" "}
                <span className="font-semibold">Md Azizur Rahman Jamim</span>,
                from Bangladesh. I'm an enthusiastic Web Developer who enjoys
                working with React. As a practitioner, I love learning about new
                technology and keeping up with the latest trends. Every line of
                code I write tries to keep it more readable, accessible, and
                modular.
              </p>
              <p className="lg:text-xl pt-4 text-natural font-medium font-roboto">
                I'm a developer who specializes in the{" "}
                <span className="font-semibold">MERN stack</span>, but I'm
                constantly curious about new technologies and frameworks! If
                you're looking for a developer to add to your team, I'd love to
                hear from you!
              </p>
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default About;
