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

  const initialData = {
    age: 0,
    yop: 0
  }

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(1995, 2, 21);
    const yopStartDate = new Date(2013, 5, 21);

    const currentYear = today.getFullYear();
    let ageInYears = currentYear - birthDate.getFullYear();
    const yopYears = currentYear - yopStartDate.getFullYear();


    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      ageInYears= ageInYears--;
    }
    
    setData({
      age: ageInYears,
      yop: yopYears
    })
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
              Why choose me?
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__important-text"
          >
            Hello there! my name is JOAN ROTBARD and I am {data.age} years old.
          </motion.p>
          
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            My extensive {data.yop} years of experience in diverse programming languages provide me with a strong foundation and a deep 
            understanding of various technological ecosystems. This versatility allows me to adapt quickly to new projects and languages, ensuring that I can contribute effectively from day one.
          </motion.p>

          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Furthermore, my ability to learn programming languages swiftly sets me apart. In the dynamic world of software development, where new technologies emerge frequently, my aptitude for rapid learning enables me to stay ahead of the curve. This quality ensures that I can continuously expand my skill set and tackle complex challenges with ease.
          </motion.p>

          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__important-text"
          >
            In summary, my extensive experience in diverse programming languages, coupled with my ability to learn new technologies swiftly and my sense of responsibility, make me an excellent choice. I am confident that my expertise and dedication will contribute significantly to the success of any project I undertake.
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
              target="_blank"
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
