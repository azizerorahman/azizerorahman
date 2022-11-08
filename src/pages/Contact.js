import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzbnjpj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="min-h-screen hero">
      <div className="lg:py-0">
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:w-[500px]">
            <motion.li className="item" variants={item}>
              <h3 className="lg:text-5xl text-3xl mb-8 text-center text-natural tracking-widest uppercase font-semibold font-bebas">
                Contact Me
              </h3>
            </motion.li>
            <form onSubmit={handleSubmit}>
              <motion.li className="item" variants={item}>
                <div className="form-control">
                  <label className="label pb-0">
                    <span className="label-text text-accent">
                      Email Address
                    </span>
                  </label>
                  <input
                    className="input focus:outline-offset-0 text-base pb-0.5 font-medium mb-1 bg-white input-bordered"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="@"
                    required
                  />
                  <label className="label py-0">
                    <ValidationError
                      className="label-text-alt text-error"
                      prefix="It"
                      field="email"
                      errors={state.errors}
                    />
                  </label>
                </div>
              </motion.li>
              <motion.li className="item" variants={item}>
                <div className="from-control mb-8">
                  <label className="label py-0">
                    <span className="label-text text-accent">Message</span>
                  </label>
                  <textarea
                    required
                    className="textarea focus:outline-offset-0 textarea-bordered w-full text-base pb-0.5 font-medium bg-white"
                    placeholder="Your Message"
                  ></textarea>
                  <label className="label py-0">
                    <ValidationError
                      className="label-text-alt text-error"
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </label>
                </div>
              </motion.li>
              <motion.li className="item" variants={item}>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary text-white w-full"
                >
                  Submit
                </button>
              </motion.li>
            </form>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Contact;
