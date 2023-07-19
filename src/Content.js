// import images
import Hero_person from "./assets/images/Hero/person.jpg";

import javascript from "./assets/images/Skills/javascript.png";
import coreldraw from "./assets/images/Skills/coreldraw.webp";
import project from "./assets/images/Skills/project.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import Writing from "./assets/images/Skills/Writing.jpg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import img1 from "./assets/images/Projects/img1.PNG";
import img2 from "./assets/images/Projects/img2.PNG";
import img3 from "./assets/images/Projects/img3.PNG";
import myperson from "./assets/images/Projects/myperson.jpg";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title:"Software Engineer ",
    firstName: "Adaeze .H.",
    LastName: "Egba",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experince in Software Engeering  (MERN)",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Javascript",
       
        logo: javascript,
      },
      {
        name: "Node js",
        
        logo: nodejs,
      },
      {
        name: "Project Management",
        
        logo: project,
      },
      {
        name: "React js",
       
        logo: reactjs,
      },
      {
        name: "Corel Draw",
       
        logo: coreldraw,
      },
      {
        name: "Technical Writing",
       
        logo: Writing,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development(MERN)",
        para: "Web development using MERN (MongoDB, Express.js, React, and Node.js) offer a comprehensive and powerful stack for building modern and robust web applications. With MERN, you can create dynamic and interactive websites that provide seamless user experiences.",
        logo: services_logo1,
      },
      {
        title: "Project Management",
        para: "My Project management services to help organizations effectively plan, organize, and execute their projects, ensuring successful outcomes and streamlined workflows. We understand the importance of efficient project management in delivering high-quality results within the specified timelines and budgets.",
        logo: services_logo2,
      },
      {
        title: "Technical Writing",
        para: " My technical writing service offers clear, concise, and comprehensive documentation solutions that effectively communicate complex technical information to diverse audiences. We specialize in transforming intricate concepts into easily understandable content, enabling users to effectively utilize products, technologies, or processes.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: myperson,
    project_content: [
      {
        title: "Task App Manager",
        image: img1,
      },
      {
        title: "Quote Generator",
        image: img2,
      },
      {
        title: "Github user search",
        image: img3,
      },
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  // Hireme: {
  //   title: "Hire Me",
  //   subtitle: "FOR YOUR PROJECTS",
  //   image1: Hireme_person,
  //   image2: Hireme_person2,
  //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //   btnText: "Hire Me",
  // },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "helenadaeze@gmail.com",
        icon: GrMail,
        link: "mailto:helenadaeze@gmail.com",
      },
      {
        text: "+234 8132308959",
        icon: MdCall,
        link: "https://wa.link/dt7n7s",
      },
      {
        text: "babybrownian",
        icon: BsInstagram,
        link: "https://www.instagram.com/babybrownian/" ,
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
