import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Joan Rotbard',
  description: "Example site built with Joan Rotbard's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Joan Rotbard.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg  lg:text-xl">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> who enjoys good
        practices and to learn continuously in order to understand the complexity of every problem or process and design
        the <strong className="text-stone-100">fittest solution</strong> in order to achieve the{' '}
        <strong className="text-stone-100">best results</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Easy-going, Responsible, 100% committed, resilient and warm-hearted.`,
  aboutItems: [
    {label: 'Location', text: 'Buenos Aires, Argentina', Icon: MapIcon},
    {label: 'Date of birth', text: '02/21/1995', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentinian / Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Sports, Food, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'O.R.T University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Vue.js',
        level: 5,
      },
      {
        name: 'HTML / CSS',
        level: 9,
      },
      {
        name: 'jQuery',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'C# .NET Core / .NET Framework',
        level: 9,
      },
      {
        name: 'PHP',
        level: 3,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Hebrew',
        level: 3,
      },
    ],
  },
  {
    name: 'Other skills',
    skills: [
      {
        name: 'DDD',
        level: 7,
      },
      {
        name: 'OOP',
        level: 8,
      },
      {
        name: 'GCP',
        level: 7,
      },
      {
        name: 'SCRUM',
        level: 8,
      },
      {
        name: 'GIT',
        level: 9,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2016 - 2019',
    location: 'ORT University',
    title: 'System Analyst',
    content: <p></p>,
  },
  {
    date: '2008 - 2012',
    location: 'ORT High School',
    title: 'Technical Bachelor with Orientation in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2020 - Present',
    location: 'Alora Home Health',
    title: 'Senior Software Engineer / Lead',
    content: (
      <p>
        Working in the design and development of the business product which is a website directed to doctors, nurses,
        social workers and patients (among others). <br></br>
        <br></br>
        The development team is formed by 12 developers splitted into 3 teams, 1 functional analyst, and 2 QA, working
        by Scrum methodology. I´m the leader of one development team <br></br>
        <br></br>I Achieved the completion of several projects that made the company more solid, also I worked on
        improving the performance and the quality of the applications. I built solutions for some of the projects.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'Paramo',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Worked in the improvement and maintenence of many solutions in a microservice oriented architecture that
        communicate in order to make the casino online{' '}
        <a
          className="duration-300 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          href="https://www.betonline.ag"
          target="_blank">
          website
        </a>{' '}
        work
      </p>
    ),
  },
  {
    date: '2017 - 2019',
    location: 'J.P Morgan',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Worked in the design and development of one of the most important products of the bank, which persists and
        generates reports of all the mortgage loans.<br></br>
        The team was conformed by 8 developers and 1 functional analyst, working by Scrum methodology. Giving Support on
        productive bugs<br></br>
        <br></br>I stabilize the performance of the application mentioned above by applicating some design patterns,
        swapping a development framework (ORM) , and analyzing the database queries.
      </p>
    ),
  },
  {
    date: '2015 - 2017',
    location: 'Superintendence of Insurances of the Nation',
    title: 'Ssr. Software Engineer',
    content: (
      <p>
        Managed to accomplish the creation of a tool which works for all projects where payments are involved, because
        the main duty of this tool is to get information from the Ministry of the Economy web services, where payments
        are reported and bills are generated.<br></br>
        <br></br>
        The Ministry of the Economy congratulated the SSN because, although the project was very complex, the results
        were very good, and then, the SSN was recommended to all the other superintendence’s to work with.<br></br>
        <br></br>
        Also worked on a project of a system which recollects insurance policies from insurance companies and processes
        them to be store. The number of policies and endorsement policies is around 2 billion.<br></br>
        <br></br>
      </p>
    ),
  },
  {
    date: '2012 - 2015',
    location: 'VirtualMind',
    title: 'Jr. Software Engineer',
    content: (
      <p>
        Worked on the creation and implementation of a website for a client who offers travelling and experiences
        packages. e.g.:{' '}
        <a
          className="duration-300 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          href="https://www.fanbag.com.ar"
          target="_blank">
          Fanbag
        </a>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Kevin Belter - Senior Software Engineering Manager at Superhuman',
      text: `Joan is a great person, professional and asset in every aspect.
      It was really a pleasure to work with him, he was dedicated and a fast deliver in all of his tasks.
      He was also careful enough in terms of quality and kindness.
      Hope to work together in a near future.`,
      image:
        'https://media.licdn.com/dms/image/C4E03AQFvuHOiY3A6dA/profile-displayphoto-shrink_800_800/0/1540417731083?e=1693440000&v=beta&t=kTdTqcpE2JI-Shs_XUcx7rQ1GPiKVOIQtpIxxK8xAuQ',
    },
    {
      name: 'Eduardo Haban - Teach Lead at Supervielle Bank',
      text: `Joan is the kind of person you always want to be on your team: he´s responsible, talented,
      proactive and with an incredible ability to focus on what it´s need to be done.
      He cares not just in the code but in the product as a whole, so you can feel safe delegating complex tasks to him: he will be committed to find the bes solution.
      I had the pleasure of having him on my team for two years and the experience working with him was great`,
      image:
        'https://media.licdn.com/dms/image/D4D03AQHtAw9LepW-3g/profile-displayphoto-shrink_800_800/0/1682210048247?e=1693440000&v=beta&t=NwgBxRQ6IXeBnL-_Y9JRmatADsGR5kRD1wxDzLU3wi8',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me.',
  description: 'You can reach out to me in.',
  items: [
    {
      type: ContactType.Email,
      text: 'joanrotbard@gmail.com',
      href: 'mailto:joanrotbard@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Buenos Aires, Argentina',
      href: 'https://www.google.ca/maps/place/Buenos+Aires,+CABA/@-34.6156548,-58.5156988,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@joan.rotbard',
      href: 'https://www.instagram.com/joan.rotbard/',
    },
    {
      type: ContactType.Github,
      text: 'joanrotbard',
      href: 'https://github.com/joanrotbard',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/joanrotbard'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joanrotbard/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/joan.rotbard/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/JRotbard'},
];
