import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Skills() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }
  const allSkills: SkillSection[] = [
    {
      title: "FrontEnd",
      skills: [
        {
          url: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        {
          url: "https://www.svgrepo.com/show/452156/angular.svg",
          name: "Angular",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/452242/jquery.svg",
          name: "jQuery",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          url: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452075/node-js.svg",
          name: "Node.js",
          color: "#4FC08D",
          colorRGB: "79, 192, 141",
        },
        {
          url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
          name: "TypeScript",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          url: "https://www.svgrepo.com/show/452184/csharp.svg",
          name: "C#",
          color: "#9b4f97",
          colorRGB: "155, 79, 151",
        },
        {
          url: "https://www.svgrepo.com/show/473592/dotnet.svg",
          name: ".NET FWK /.Net Core",
          color: "#000000",
          colorRGB: "155, 79, 151",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          url: "https://www.svgrepo.com/show/374093/sql.svg",
          name: "SQL",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
        {
          url: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
          name: "MySQL",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          url: "https://www.svgrepo.com/show/373845/mongo.svg",
          name: "MongoDB",
          color: "#4FC08D",
          colorRGB: "79, 192, 141",
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          url: "https://www.svgrepo.com/show/79056/obj.svg",
          name: "OOP",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/439311/scrum.svg",
          name: "Scrum",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/353805/google-cloud.svg",
          name: "GCP",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
          name: "Vercel",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
  ];
  
  return (
    <>
      <Head>
        <title>JOAN ROTBARD | Skills</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skill, index) => (
          <motion.div
            className="skills-section"
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skill.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skill.skills.map((skill, index) => (
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={index}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </>
  );
}
