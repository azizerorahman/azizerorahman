import React from "react";
import { ImLink, ImGithub } from "react-icons/im";

import computerx1 from "../images/computerx_1.png";
import computerx2 from "../images/computerx_2.png";
import computerx3 from "../images/computerx_3.png";
import computerx4 from "../images/computerx_4.png";

const DB = () => {
  return (
    <div>
      <div className="min-h-screen hero">
        <div className="p-10 lg:px-64 mx-7">
          <div>
            <h3 className="lg:text-5xl text-3xl lg:mb-3 text-center text-natural tracking-widest uppercase font-semibold font-bebas">
              BBook
            </h3>
            <h4 className="font-poppins text-center font-medium text-accent lg:text-xl text-[10px]">
              A Book Warehouses Website{" "}
              <span className="font-bold">[MERN Stack]</span>
            </h4>
          </div>
          <div>
            <h4 className="lg:text-2xl text-xl mt-4 font-bold text-neutral mb-2">
              About
            </h4>
            <ul className="lg:ml-5">
              <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                ➔ Organized Inventory Management System with easy add and
                deleting option
              </li>
              <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                ➔ Used customized modal before deleting an item from inventory
              </li>
              <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                ➔ User Authenticated by Google Firebase System and React
                Firebase Hooks
              </li>
              <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                ➔ simple to update book sales and stock items system
              </li>
              <li className="indent-5 lg:indent-0 lg:text-xl text-accent font-roboto mb-1">
                ➔ JSON Web Token used to secured the database connection
              </li>
            </ul>
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
                  Express.js
                </div>
                <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                  MongoDB
                </div>
                <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3 lg:mr-3 mr-2">
                  Firebase
                </div>
                <div className="badge badge-primary lg:badge-lg badge-outline text-white lg:font-bold font-medium lg:px-5 px-3.5 py-2.5 lg:py-3">
                  JWT
                </div>
              </div>
            </div>
            <div className="lg:my-14 my-7 flex items-center justify-between">
              <h4 className="lg:text-2xl text-xl font-bold text-neutral">
                Links
              </h4>
              <a href="https://bbook-zero.web.app/">
                <ImLink className="lg:text-6xl text-4xl hover:text-gray-700" />
              </a>
              <a href="https://github.com/azizurrahman-zero/bbook_client-side">
                <div className="indicator">
                  <span className="indicator-item pt-1 lg:pt-0 badge badge-secondary font-semibold font-roboto">
                    Client
                  </span>
                  <ImGithub className="lg:text-6xl text-4xl hover:text-gray-700" />
                </div>
              </a>
              <a href="https://github.com/azizurrahman-zero/bbook_server-side">
                <div className="indicator">
                  <span className="indicator-item pt-1 lg:pt-0 badge badge-secondary font-semibold font-roboto">
                    Server
                  </span>
                  <ImGithub className="lg:text-6xl text-4xl  hover:text-gray-700" />
                </div>
              </a>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DB;
