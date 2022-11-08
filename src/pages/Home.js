import React from "react";
import { Link, Outlet } from "react-router-dom";
import { TbHome2 } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { HiCode } from "react-icons/hi";
import { MdOutlineSettingsSuggest, MdAlternateEmail } from "react-icons/md";
import { BsChatRightQuote } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Home = () => {
  return (
    <>
      <div className="fixed top-[50%] translate-y-[-50%] lg:left-10 left-3">
        <ul className="menu lg:py-10 py-6 overflow-y-auto lg:gap-3 gap-1 bg-primary rounded-lg w-10 lg:w-20">
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">Home</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <TbHome2 className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">About Me</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/about-me"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <RiUserLine className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">Skills</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/skills"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <MdOutlineSettingsSuggest className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">Projects</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/projects"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <HiCode className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">Blogs</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/blogs"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <BsChatRightQuote className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={
                <span className="text-base font-semibold px-1.5">Contact</span>
              }
              delay={500}
              placement={"right"}
            >
              <Link
                to="/contact"
                className="hover:bg-transparent px-0 flex justify-center"
              >
                <MdAlternateEmail className="text-white lg:text-5xl text-2xl hover:text-slate-200" />
              </Link>
            </Tippy>
          </li>
        </ul>
      </div>
      <div className="drawer-content flex flex-col items-center">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
