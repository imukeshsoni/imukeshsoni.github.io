import { capgemini, arinspect } from '../assets/images/index';
import {
    angular,
    aws,
    bitbucket,
    bootstrap,
    contact,
    css,
    car,
    express,
    firebase,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    netflix,
    ngrx,
    nodejs,
    postman,
    react,
    redux,
    rxjs,
    sass,
    swagger,
    tailwindcss,
    typescript,
} from '../assets/icons';

export const skills = [
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
        imageUrl: javascript,
        name: 'JavaScript',
        type: 'Frontend',
    },

    {
        imageUrl: typescript,
        name: 'TypeScript',
        type: 'Frontend',
    },
    {
        imageUrl: bootstrap,
        name: 'Bootstrap',
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
    {
        imageUrl: mongodb,
        name: 'MongoDB',
        type: 'Database',
    },
    {
        imageUrl: aws,
        name: 'AWS',
        type: 'Cloud Services',
    },
    {
        imageUrl: firebase,
        name: 'Firebase',
        type: 'Cloud Services',
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
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },

    {
        imageUrl: html,
        name: 'HTML',
        type: 'Frontend',
    },
    {
        imageUrl: css,
        name: 'CSS',
        type: 'Frontend',
    },
    {
        imageUrl: postman,
        name: 'Postman',
        type: 'API Testing',
    },
    {
        imageUrl: swagger,
        name: 'Swagger',
        type: 'API Testing',
    },
    {
        imageUrl: git,
        name: 'Git',
        type: 'Version Control',
    },
    {
        imageUrl: github,
        name: 'GitHub',
        type: 'Version Control',
    },
    {
        imageUrl: bitbucket,
        name: 'Bitbucket',
        type: 'Version Control',
    },
];

export const experiences = [
    {
        title: 'Software Engineer',
        company_name: 'ARInspect Pvt. Ltd.',
        icon: arinspect,
        iconBg: '#0C395C',
        date: 'June 2021 - Present',
        points: [
            `Micro-Frontend: Developed a new internal portal with routing, State-Management, Authentication and Authorization.`,
            `Database: Improved legacy code and optimised SQL queries in Postgres, led to a 40% enhancement in database query performance.`,
            `Cloud Architecture: Leveraged AWS services (S3, Lambda, EC2) to enhance application architecture, resulting in a 20% cost reduction in cloud expenses.`,
            `Leadership: Managed a team of 5+ Developers and worked in a team size of 30+ members`,
            `Reusable Components: Created over 15 reusable components, significantly accelerating development cycles across multiple projects.`,
            `Database: Improved legacy code and optimised SQL queries in Postgres, leading to a 40% enhancement in database query performance.`,
            `Micro-Service Architecture: Developed and deployed microservices using Node.js and Express.js, and robust RESTful APIs ensuring scalable and independent service architecture`,
            `Optimised Performance: Reduced application build size by 20% using Webpack and tree-shaking techniques, resulting in a 30% increase in application performance, enhancing user experience for over 10,000 daily active users.`,
        ],
    },
    {
        title: 'Full Stack Developer',
        company_name: 'Capgemini India',
        icon: capgemini,
        iconBg: '#accbe1',
        date: 'Jan 2021 - April 2021',
        points: [
            `Frontend Mastery: Mastered frontend frameworks React and Angular to develop user-friendly web applications with enhanced UX/UI.`,
            `Backend Development: Developed microservices using Java Spring framework, contributing to a modular and scalable backend.`,
            `Team Collaboration: Worked both independently and collaboratively in a team to meet deadlines and achieve project goals.`,
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/imukeshsoni',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/imukeshsoni',
    },
];

export const projects = [
    {
        iconUrl: arinspect,
        theme: 'btn-back-blue',
        name: 'ARInspect (Augmented Field Operations)',
        description: `It is a digital workflow automation tool powered by AI and ML platform acceleration for US government clients that supports Augmented Reality (AR) for field inspections`,
        link: 'https://arinspect.com/',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'Netflix Landing Page Prototype',
        description:
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/imukeshsoni/netflix-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-black',
        name: 'Washivo',
        description:
            'Created a full-stack application for car wash services, enabling users to book car wash services online.',
        link: 'https://github.com/imukeshsoni/car-wash',
    },
];