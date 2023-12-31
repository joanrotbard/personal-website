import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import useMousePosition from "../Components/Cursor/UseMousePosition";

export default function Contact() {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <Head>
        <title>JOAN ROTBARD | Contact</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="contact">
        <div className="page__lines"></div>
        <div className="contact-title" style={{ overflow: "hidden" }}>
          <motion.h2
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "50%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Contact
          </motion.h2>
        </div>
        <div className="contact-infos">
          <motion.div
            className="contact-infos__left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <motion.h3
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Email
              </motion.h3>
            </div>
            <ul>
              <motion.li variants={item}>
                <a
                  href="mailto:joanrotbard@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  joanrotbard@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="contact-infos__left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <motion.h3
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Whatsapp
              </motion.h3>
            </div>
            <ul>
            <motion.li variants={item}>
                <a
                  href="https://wa.me/+5491135660161?text=Hello Joan I would like to connect"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  +54 911 3566 0161
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="contact-infos__right"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
              >
                Social Medias{" "}
              </motion.h3>
            </div>
            <ul>
              <motion.li variants={item}>
                <Link
                  href="https://www.linkedin.com/in/joanrotbard/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>{" "}
                  LinkedIn
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link
                  href="https://www.instagram.com/joan.rotbard"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>{" "}
                  Instagram
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </main>
    </>
  );
}
