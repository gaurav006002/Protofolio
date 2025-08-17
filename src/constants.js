// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
//import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/Akg.jpeg';
import vpsLogo from './assets/education_logo/Surmount_logo.jpeg';

// Project Section Logo's
import studynotion from './assets/work_logo/StudyNotion.jpeg';
import freelancing from './assets/work_logo/freelancing.jpeg';
import Shoping from './assets/work_logo/Shoping.jpeg';
import passwordgenerator from './assets/work_logo/Passwordgenerator.jpeg';
import tictactoe from './assets/work_logo/tic-tac-toe.jpeg';
import weatherapi from './assets/work_logo/weatherapi.jpeg';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //   { name: 'SASS', logo: sassLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    //   { name: 'Angular', logo: angularLogo },
    //   { name: 'Redux', logo: reduxLogo },
      //{ name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     // { name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      //{ name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'Java Script', logo: javascriptLogo },
     // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
     // { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: null,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: null,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: null,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 1,
      img: bsaLogo,
      school: "Ajay Kumar Garg Engineering College, Ghaziabad",
      date: "Nov 2022 - Aug 2026",
      grade: "Current Precentage:75%",
      desc: "I completed my Bachelor's degree in Information Technology from Ajay Kumar Garg Engineering College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Akg college allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Surmount International School, Gorakhpur",
      date: "Apr 2020 - March 2021",
      grade: "88.4%",
      desc: "I completed my class 12 education from  Surmount International School, Gorakhpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Surmount International School, Gorakhpur",
      date: "Apr 2018 - March 2019",
      grade: "87.8%",
      desc: "I completed my class 10 education from Surmount International School, Gorakhpur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    
    {
      id: 1,
      title: "An Freelancing Platform",
      description:"FreelanceHub is a full-featured freelancing platform designed to connect clients with talented freelancers across various domains. With dedicated user roles and intuitive workflows, the platform provides a seamless experience from job posting to project completion.Key Features:🧑‍💼 Client Portal,🧑‍🔧 Freelancer Dashboard ,🔐 User Authentication ,📨 Messaging System ,📱 Fully Responsive Design",
      image: freelancing,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/gaurav006002/Freelancing-Platform",
      webapp: "https://work-free.netlify.app",
    },
    {
      id: 2,
      title: "Shoping Cart",
      description:"SmartCart is a sleek and responsive shopping cart application built with React, HTML, and Tailwind CSS. It allows users to browse products, add their favorites to a cart, and review them for checkout—all with a smooth and modern UI.",
      image: Shoping,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/gaurav006002/Shoping-App",
      webapp: "https://shopinghapp.netlify.app",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe",
      description:"Tic Tac Pro is a classic two-player Tic Tac Toe game built with a clean, interactive interface. It allows players to take turns marking Xs and Os on a 3×3 grid, with real-time win detection and draw conditions. It's a fun way to showcase core programming logic and user interaction.",
      image: tictactoe,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/gaurav006002/Tic-Tac-Toe",
      webapp: "https://xnoarena.netlify.app",
    },
    {
      id: 4,
      title: "Password Generator",
      description:"SecurePass is a fast and secure password generator built to create strong, random passwords based on user-selected criteria. Ideal for improving digital security, it allows users to customize the password length and choose to include uppercase letters, numbers, and special characters.",
      image: passwordgenerator,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/gaurav006002/Password-Generator",
      webapp: "https://generatorpasword.netlify.app",
    },
    {
      id: 5,
      title: "Weather Api",
      description:"WeatherNow is a lightweight and responsive weather application that fetches and displays real-time weather data using a public Weather API. Users can search for any city and instantly get current weather conditions along with key details like temperature, humidity, and wind speed.",
      image: weatherapi,
      tags: ["HTML", "CSS", "JavaScript", "Api"],
      github: "https://github.com/gaurav006002/Weather-Api",
      webapp: "https://sparkling-tulumba-ff3c89.netlify.app",
    },
    {
      id: 6,
      title: "Ed-tech Platform",
      description:
        "Overview:Currently workin on Ed-Tech platform.EduConnect is a full-stack education platform designed to bridge the gap between students and educators. Built with a robust frontend and scalable backend, it enables students to seamlessly explore, purchase, and enroll in online courses, while offering educators a personalized dashboard to manage their content and reach a wider audience.",
      image: studynotion,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  