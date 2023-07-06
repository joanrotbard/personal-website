import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "Alora Home Health",
      url: "https://www.alorahealth.com/",
      position: "Senior Software Engineer / Lead",
      location: "",
      date: "2020 - Present",
      description:
      ` Working in the design and development of the business product which is a website directed to doctors, nurses,
        social workers and patients (among others).

        The development team is formed by 12 developers splitted into 3 teams, 1 functional analyst, and 2 QA, working
        by Scrum methodology. I´m the leader of one development team.

        I Achieved the completion of several projects that made the company more solid, also I worked on improving the performance and the quality of the applications.
        
        I built solutions for some of the projects.`,
      stacks: ["C#", ".NET Core", ".Net Framework", "SQL", "Entity Framework", "REST API", "Redis", "jQuery", "CSS", "Handlebars"],
    },
    {
      name: "Paramo",
      position: "Senior Software Engineer",
      location: "",
      url:"https://www.betonline.ag",
      date: "2018 - 2020",
      description:
        "  Worked in the improvement and maintenence of many solutions in a microservice oriented architecture that communicate in order to make the casino online",
      stacks: ["React", "NextJS","NodeJs", "Jest", "TypeScript", "GCP", "SCSS", "MySQL", "Prisma", "Tailwind"],
    },
    {
      name: "J.P Morgan",
      position: "Associate Software Engineer",
      location: "",
      date: "2015 - 2018",
      description:
      ` Worked in the design and development of one of the most important products of the bank, which persists and generates reports of all the mortgage loans.
      
      The team was conformed by 8 developers and 1 functional analyst, working by Scrum methodology. Giving Support onproductive bugs.

      I stabilize the performance of the application mentioned above by applicating some design patterns, swapping a development framework (ORM) , and analyzing the database queries.

      `,
      stacks: ["React", "NextJS","NodeJs","Redux", "Jest", "TypeScript", "Bootstrap", "MongoDb", "MySQL", "Redis", "TypeORM" ,"SCSS"],
    },
    {
      name: "Superintendence of Insurances of the Nation",
      position: ".NET Developer",
      location: "",
      date: "2013 - 2015",
      description:
      ` Managed to accomplish the creation of a tool which works for all projects where payments are involved, because
      the main duty of this tool is to get information from the Ministry of the Economy web services, where payments
      are reported and bills are generated.

      The Ministry of the Economy congratulated the SSN because, although the project was very complex, the results
      were very good, and then, the SSN was recommended to all the other superintendence’s to work with.

      Also worked on a project of a system which recollects insurance policies from insurance companies and processes
      them to be store. The number of policies and endorsement policies is around 2 billion.`,
      stacks: ["C#", "SQL", "Dapper", "REST API", "jQuery", "CSS", ],
    },
    {
      name: "VirtualMind",
      position: "Web Developer",
      location: "",
      date: "2012 - 2013",
      description:
        "   Worked on the creation and implementation of a website for a client who offers travelling and experiences packages. e.g. https://www.fanbag.com.ar",
      stacks: ["PHP", "SQL" ],
    },
  ];
  const sideProjects: PersonalWork[] = [
    {
      name: "IntegraComex",
      url: "https://www.integracomex.com.ar/",
      image: "/projects/integra.png",
    },
    {
      name: "Patient Tracking",
      url: "http://monitoreodepacientes.com.ar/",
      image: "/projects/cuest.png",
    },
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };
  function replaceWithBr(description: string){
    return description.replace(/\n/g, "<br />")
  }

  return (
    <>
      <Head>
        <title>JOAN ROTBARD | Experience</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-works__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Work experience
            </motion.h2>
          </div>
          <div className="experience-works__cards">
            {works.map((work, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{work.name}</h3>
                    <p>{work.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{work.date}</h3>
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p dangerouslySetInnerHTML={{__html: replaceWithBr(work.description)}} />
                </div>
                {work.stacks && (
                  <div className="card-stacks">
                    {work.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {work.url && (
                    <Link
                      href={work.url}
                      target="_blank"
                      passHref
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
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-personal"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-personal__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-personal__cards">
            <div className="personal-view">
              {imageUrl && (
                <div className="personal-view__image">
                  <Image
                    src={imageUrl}
                    alt={imageName}
                    width={2880}
                    height={1576}
                  />
                </div>
              )}
            </div>
            <ul className="personal-lists">
              {sideProjects.map((project, index) => (
                <motion.li key={index} variants={skillsItem}>
                  <Link
                    href={project.url}
                    target="_blank"
                    passHref
                    onMouseEnter={() => {
                      cursorChangeHandler("hovered");
                      handleMouseEnter(project.image, project.name);
                    }}
                    onMouseLeave={() => {
                      cursorChangeHandler("");
                      handleMouseLeave();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span>{project.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  );
}
