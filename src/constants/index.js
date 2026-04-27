import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  expenceManager,
  assetManagement,
  disasterReady,
  aws,
  indran,
  echo,
  task_management,
  bricksync,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download Resume",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "React & React Native Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Cloud & DevOps",
    icon: docker,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Echo Digital Works, Tiruchengode",
    icon: echo,
    iconBg: "#fff",
    date: "Oct 2024 - Feb 2025",
    points: [
      "A digital services company focused on software development.",
      "Built full-stack web applications using React.js, Node.js, Express.js, and TypeScript for multi-user workflows.",
      "Designed database schemas and optimized queries using Prisma ORM and Sequelize.",
      "Developed an ORM-focused project solving complex client requirements for diverse companies.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Indran Tech IT Solutions",
    icon: indran,
    iconBg: "#E6DEDD",
    date: "June 2024 - January 2025",
    points: [
      "Developing and maintaining mobile applications using Flutter and related technologies.",
      "Collaborating with cross-functional teams, including UI/UX designers, product managers, and other developers, to deliver high-quality mobile applications.",
      "Implementing responsive designs and ensuring compatibility across both iOS and Android platforms.",
      "Participating in code reviews and providing constructive feedback to improve code quality and maintain best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TaskSync – Management & Governance",
    description:
      "A high-compliance task management system featuring role-based workflows, scheduling, and approval mechanisms. Built with a focus on accountability, it implements task lifecycle tracking, automated escalation handling, and detailed audit logging to ensure operational transparency and compliance.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: task_management,
    source_code_link: "https://github.com/AnnishLitisha09/",
  },
  {
    name: "BrickSync – Order & Operations Management",
    description:
      "BrickSync is an all-in-one industrial ERP solution designed to digitize and automate complex daily operations. It enables real-time monitoring of vehicle logistics and fuel efficiency while centralizing workforce attendance. By integrating material procurement, sales pipelines, and customer management into a unified dashboard, it replaces fragmented manual processes with data-driven operational control.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: bricksync,
    source_code_link: "https://github.com/AnnishLitisha09/",
  },
  {
    name: "Income Expense Tracker",
    description:
      "A cross-platform expense management application developed using Flutter and Firebase that allows users to track income and expenses in real time. Designed with an intuitive UI and seamless backend integration, enabling efficient financial monitoring and data synchronization across devices.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: expenceManager,
    source_code_link: "https://github.com/AnnishLitisha09/Refil-Wealth.git"
  },
  {
    name: "Audit asset managing application",
    description:
      "A student–faculty mobile platform developed using React Native, Node.js, Express.js, and SQL featuring 20+ screens and 20+ REST APIs. Integrated an AI chatbot to automate academic query handling, reducing manual workload by approximately 35% during simulated user testing.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: assetManagement,
    source_code_link: "https://github.com/AnnishLitisha09/AuditingApp.git",
  },
  {
    name: "Disaster Readiness Application",
    description:
      "A mobile application built with React Native that enables users to engage in political discussions, participate in group chats, and explore political events or meetups on interactive maps based on their current location.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
    ],
    image: disasterReady,
    source_code_link: "https://github.com/AnnishLitisha09/DisasterReady360.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

