import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(1995, 10, 21);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>JOAN ROTBARD | About</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About me
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Hey, my name is JOAN ROTBARD. I am
            a {age} year old Full Stack Software Engineer who enjoys good practices and to learn continuously in order
             to understand the complexity of every problem or process and design the fittest solution in order to achieve the best results.
          </motion.p>
          <div className="about-left__langs">
            <motion.h3 variants={item}>LANGUAGES</motion.h3>
            <motion.li variants={item}>
              <span>Spanish</span>
              <span>Native</span>
            </motion.li>
            <motion.li variants={item}>
              <span>English</span>
              <span>Advanced</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Hebrew</span>
              <span>Basic</span>
            </motion.li>
          </div>
          <div className="about-left__links">
            <motion.a
              variants={item}
              target="_blank"
              href="https://drive.google.com/file/d/1RwG1YHRDStWu_NSZTJMlEc31cH7hLMuC/view?usp=drive_link"
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
              Resume
            </motion.a>
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/joanrotbard/#ember102"
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
              Testimonials
            </motion.a>
          </div>
        </motion.div>
        <div className="about-right">
          <div className="about-right__image">
            <Image
              src="/images/joan.jpeg"
              alt="JOAN ROTBARD"
              width={3024}
              height={4032}
            />
          </div>
        </div>
      </main>
    </>
  );
}
