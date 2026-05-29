// Add 'delta' to your images index file before running this
import { capgemini, arinspect, delta } from "../assets/images/index";

// You will need to add the new icons (postgresql, docker, etc.) to your assets/icons index
import {
  angular,
  aws,
  contact,
  car,
  express,
  firebase,
  git,
  github,
  javascript,
  linkedin,
  mongodb,
  mui,
  ngrx,
  nodejs,
  react,
  redux,
  rxjs,
  tailwindcss,
  typescript,
  // --- NEW ICONS TO ADD ---
  postgresql,
  docker,
  jenkins,
  gitlab,
  netlify,
  supabase,
  jest,
  cypress,
  bitbucket,
  swagger,
  postman,
  sass,
  css,
  html,
  bootstrap,
  bedrock,
} from "../assets/icons";

export const skills = [
    // --- 1. AI & Generative Tech (Latest & Highest Impact) ---
    {
        imageUrl: bedrock, 
        name: 'Bedrock',
        type: 'AI & Generative Tech',
    },
    {
        imageUrl: aws, 
        name: 'AWS',
        type: 'AI & Generative Tech',
    },

    // --- 2. Core Frontend & Architecture ---
    {
        imageUrl: angular,
        name: 'Angular',
        type: 'Frontend',
    },
    {
        imageUrl: react,
        name: 'React',
        type: 'Frontend',
    },
    {
        imageUrl: typescript,
        name: 'TypeScript',
        type: 'Frontend',
    },
    {
        imageUrl: javascript,
        name: 'JavaScript',
        type: 'Frontend',
    },
    {
        imageUrl: ngrx,
        name: 'NgRx',
        type: 'State Management',
    },
    {
        imageUrl: rxjs,
        name: 'RxJs',
        type: 'State Management',
    },
    {
        imageUrl: redux,
        name: 'Redux',
        type: 'State Management',
    },
    
    // --- 3. Backend & APIs ---
    {
        imageUrl: nodejs,
        name: 'Node.js',
        type: 'Backend',
    },
    {
        imageUrl: express,
        name: 'Express',
        type: 'Backend',
    },
    
    // --- 4. Databases ---
    {
        imageUrl: postgresql, 
        name: 'PostgreSQL',
        type: 'Database',
    },
    {
        imageUrl: mongodb,
        name: 'MongoDB',
        type: 'Database',
    },

    // --- 5. Cloud & Infrastructure ---
    {
        imageUrl: firebase,
        name: 'Firebase',
        type: 'Cloud Services',
    },
    {
        imageUrl: supabase, 
        name: 'Supabase',
        type: 'Backend as a Service',
    },

    // --- 6. DevOps & Modern Tooling ---
    {
        imageUrl: docker, 
        name: 'Docker',
        type: 'DevOps',
    },
    {
        imageUrl: jenkins, 
        name: 'Jenkins',
        type: 'DevOps',
    },
    {
        imageUrl: netlify, 
        name: 'Netlify',
        type: 'DevOps',
    },
    {
        imageUrl: github,
        name: 'GitHub',
        type: 'CI/CD & Version Control',
    },
    {
        imageUrl: gitlab, 
        name: 'GitLab',
        type: 'CI/CD & Version Control',
    },
    {
        imageUrl: git,
        name: 'Git',
        type: 'Version Control',
    },
    {
        imageUrl: bitbucket,
        name: 'Bitbucket',
        type: 'Version Control',
    },

    // --- 7. Testing & API Documentation ---
    {
        imageUrl: jest, 
        name: 'Jest',
        type: 'Testing',
    },
    {
        imageUrl: cypress, 
        name: 'Cypress',
        type: 'Testing',
    },
    {
        imageUrl: swagger,
        name: 'Swagger',
        type: 'API Testing',
    },
    {
        imageUrl: postman,
        name: 'Postman',
        type: 'API Testing',
    },

    // --- 8. UI Frameworks & Styling (Foundational) ---
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },
    {
        imageUrl: mui,
        name: 'Material-UI',
        type: 'Frontend',
    },
    {
        imageUrl: sass,
        name: 'Sass',
        type: 'Frontend',
    },
    {
        imageUrl: css,
        name: 'CSS',
        type: 'Frontend',
    },
    {
        imageUrl: html,
        name: 'HTML',
        type: 'Frontend',
    },
    {
        imageUrl: bootstrap,
        name: 'Bootstrap',
        type: 'Frontend',
    },
];

export const experiences = [
  {
    title: "Senior Developer I",
    company_name: "Delta Air Lines",
    icon: delta,
    iconBg: "#002A5C",
    date: "Sept 2024 - Present",
    points: [
      `End-to-End Application Ownership - Lead full-stack development and architecture for the enterprise AI Site Search domain (delta.com/sitesearch) across global platform teams, directly owning frontend UI, backend API endpoints, and database schemas.`,
      `Agentic AI & RAG Architecture (AWS) - Designed a cost-optimized Retrieval-Augmented Generation (RAG) framework using AWS Bedrock and Serverless Lambda; successfully built and presented an Action-First Search Agent Proof of Concept (POC) featuring dynamic component UI rendering based on semantic query intent.`,
      `High-Scale System Performance - Scaled the AI search infrastructure to process 7M+ queries; engineered an internal executive analytics dashboard that captured 50,000+ real-user metrics, achieving a 99.5% customer satisfaction rate and reducing repetitive site queries by 8-9%.`,
      `Frontend UI Optimization (Angular 18) - Directed core platform upgrades to Angular 18 and executed the Mach Core UI migration; spearheaded web performance enhancements that elevated the delta.com homepage to the #1 fastest-loading airline site in the U.S. and top 10 globally.`,
      `API & Feature Integration - Spearheading the end-to-end full-stack integration of Delta Concierge generative AI capabilities directly into the frontend ecosystem to drive highly personalized, real-time user experiences.`,
      `Cloud Migration & DevOps (CI/CD) - Drove the "Zulu" modernization initiative by migrating mission-critical on-premise backend services to AWS endpoints; integrated Amazon Q into CI/CD pipelines to refactor unit testing suites and maximize code coverage.`,
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "ARInspect",
    icon: arinspect,
    iconBg: "#0C395C",
    date: "April 2023 - Aug 2024",
    points: [
      `Leadership & Domain Architecture - Led a pod of 5+ engineers to architect digital workflow automation tools powered by AI/ML, Augmented Reality (AR), and real-time Geospatial systems for US government clients, building the core platform value that drove the company's acquisition by Tyler Technologies.`,
      `Micro-Frontend Infrastructure - Spearheaded the development of a secure internal portal using React.js, implementing robust state management, routing, and role-based authorization.`,
      `Cloud Cost Reduction - Architected performance enhancements across core AWS infrastructure (S3, Lambda, EC2), successfully cutting overall cloud operational expenses by 20%.`,
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ARInspect",
    icon: arinspect,
    iconBg: "#0C395C",
    date: "June 2021 - March 2023",
    points: [
      `Full-Stack Performance & Offline PWA - Engineered offline-capable Progressive Web Apps (PWA) and optimized 15+ Angular components, utilizing Webpack tree-shaking to reduce build sizes by 20% and boost performance by 30% for 10,000+ daily active users.`,
      `Backend & Database Optimization - Designed scalable Node.js/Express microservices and refactored complex PostgreSQL queries, driving a 40% enhancement in database query execution speeds.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#accbe1",
    date: "Jan 2021 - April 2021",
    points: [
      `Full Stack Development - Developed modular, scalable backend microservices utilizing the Java Spring framework while simultaneously building intuitive, user-centric interfaces using React and Angular.`,
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/imukeshsoni",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/imukeshsoni",
  },
];

export const projects = [
  {
    iconUrl: delta,
    theme: "btn-back-white", // Change color theme class if desired
    name: "Enterprise AI Site Search & Agentic AI",
    description: `Led the end-to-end full-stack development of Delta Air Lines' AI Site Search and Agentic workflows, processing 7M+ queries, integrating generative AI, and ranking as the fastest-loading airline homepage in the U.S.`,
    link: "https://www.delta.com/sitesearch",
  },
  {
    iconUrl: arinspect,
    theme: "btn-back-blue",
    name: "ARInspect (Augmented Field Operations)",
    description: `Architected a digital workflow automation tool powered by AI/ML and Augmented Reality for US government clients. Built the core platform value that drove the company's acquisition by Tyler Technologies.`,
    link: "https://arinspect.com/",
  },
  {
    iconUrl: car,
    theme: "btn-back-black",
    name: "Washivo",
    description:
      "Created a full-stack application for car wash services, enabling users to book car wash services online.",
    link: "https://github.com/imukeshsoni/car-wash",
  },
];
