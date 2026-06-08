import {
  mobile,
  backend,
  
  web,
  javascript,
  
  html,
  css,
  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  
  
 
  threejs,
  ngo,
  codeconnect,
  nebulaos,
} from "../../assets";

const navlinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];




const projects = [
  {
    name: "Code Connect ",
    description:
      "CodeConnect is a full-stack developer networking platform that helps developers showcase their skills, share projects, build professional connections, and discover collaboration opportunities. It features secure authentication, dynamic user profiles, project showcases, and an intuitive interface designed to foster a thriving developer community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },

    ],
    image: codeconnect,
    source_code_link: "https://github.com/Aarya48/Code-Connect",
  },
  {
    name: "Nebula OS",
    description:
      "Nebula OS is a custom terminal-inspired operating system simulation featuring unique Nebula-themed commands, file management, and navigation utilities. Designed with a futuristic interface and interactive user experience, it demonstrates my skills in system design, problem-solving, and building innovative software solutions.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: nebulaos,
    source_code_link: "https://github.com/Aarya48/NebulaOS",
  },
  {
    name: "NGO Platform",
    description:
      "The NGO Platform is a full-stack web application built using React, Node.js, Express.js, and MongoDB. It enables NGOs, volunteers, and donors to connect through secure authentication, RESTful APIs, and efficient data management, providing a scalable and responsive solution for community engagement",

    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: ngo,
    source_code_link: "https://github.com/CfRadar/GoogleSolnProject",
  },
];

export { services, technologies, navlinks, projects };