import p3 from "../../assets/project/p3.png";
import p32 from "../../assets/project/p32.png";
import p33 from "../../assets/project/p33.png";

import k1 from "../../assets/project/kapadaHero.png";
import k2 from "../../assets/project/kapadaDetails.png";
import k3 from "../../assets/project/kapadaAdmin.png";
import k4 from "../../assets/project/kapadaAddtocart.png";
import k5 from "../../assets/project/kapadaCategory.png";
import k6 from "../../assets/project/kapadaAdminProduct.png";
import foodLogin from "../../assets/project/foodLogin.png";
import food1 from "../../assets/project/food1.png";
import food2 from "../../assets/project/food2.png";
import food3 from "../../assets/project/food3.png";
import food4 from "../../assets/project/food4.png";
import food5 from "../../assets/project/food5.png";

import bhojan1 from "../../assets/project/bhojan1.png";
import bhojan2 from "../../assets/project/bhojan2.png";
import bhojan3 from "../../assets/project/bhojan3.png";

import foodDash from "../../assets/project/foodDash.png";

import voting1 from "../../assets/project/voting1.png";
import voting2 from "../../assets/project/voting2.png";
import voting3 from "../../assets/project/voting3.png";

import devGPT1 from "../../assets/project/devGPT1.png";
import devGPT2 from "../../assets/project/devGPT2.png";
import devGPT3 from "../../assets/project/devGPT3.png";
import devGPT4 from "../../assets/project/devGPT4.png";

import caseoPro1 from "../../assets/project/caseoPro1.png";
import caseoPro2 from "../../assets/project/caseoPro2.png";
import caseoPro3 from "../../assets/project/caseoPro3.png";


import quickGPT1 from "../../assets/project/quickGPT1.png";
import quickGPT2 from "../../assets/project/quickGPT2.png";
import quickGPT3 from "../../assets/project/quickGPT3.png";
import quickGPT4 from "../../assets/project/quickGPT4.png";
import quickGPT5 from "../../assets/project/quickGPT5.png";
import quickGPT6 from "../../assets/project/quickGPT6.png";

const projectData = [
{
  id: 3,
  title: "QuickGPT – All-in-One AI Content Platform",
  images: [quickGPT1, quickGPT5,quickGPT2, quickGPT3, quickGPT4, quickGPT6],
  description:
    "QuickGPT is an all-in-one AI platform for generating social media posts, articles, summaries, code, and AI images with real-time previews, prompt-based inputs, authentication, and subscription-based usage limits.",
  language:
    "ReactJS, TailwindCSS, TanStack Query, Clerk, Express.js, Neon (PostgreSQL)",
  githubRepo: "https://github.com/ManojBelbase/quickGPT",
  url: "https://quickgptai.vercel.app/",
},
  {
    id: 1,
    title: "Online Food ordering system(Admin)",
    images: [foodDash, foodLogin, food1, food2, food3, food4, food5],
    description:
      "A clean and responsive admin panel featuring separate admin and restaurant logins, an interactive dashboard, category management, food item management, and user control for smooth operation of the food ordering system.",
    language: "ReactJS, MantineUI, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/online-food-ordering-admin",
    url: "https://online-food-ordering-admin.vercel.app/",
  },
  {
    id: 2,
    title: "Food Ordering Website",
    images: [bhojan1, bhojan2, bhojan3],
    description:
      "A modern and responsive food ordering website that allows customers to browse restaurants, explore menus, and place orders with ease. Built with a clean UI, search functionality, and restaurant-specific pages.",
    language: "NextJs, Tailwind CSS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/online-food-ordering-frontend",
    url: "https://bhojannepal.vercel.app/",
  },


  {
    id: 3,
    title: "CaseoPro – iGaming & Digital Marketing Platform",
    images: [caseoPro2, caseoPro1, caseoPro3],
    description:
      " A powerful and scalable iGaming and digital marketing platform offering smart strategies, engaging user experiences, and tools that help gaming brands grow and succeed.",
    language: "Nextjs, Tailwind, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/caseopro",
    url: "https://caseopro.vercel.app/",
  },

  {
    id: 4,
    title: "devGPT- AI Chatbot for Developers",
    images: [devGPT1, devGPT2, devGPT3, devGPT4],
    description:
      "A powerful, fast and developer-focused AI chatbot that helps you write, debug, explain and refactor code instantly, Khalti payment integration. signin with google and dark and light mode support.",
    language: "ReactJS, Tailwind, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/devGPT",
    url: "https://devgptai.vercel.app",
  },

  {
    id: 5,
    title: "Millennium Photo Printing Services",
    images: [p3, p32, p33], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "This project allows seamless management of products, including adding, editing, and removing, showcasing services like custom framing, banners, and ID cards.",
    language: "ReactJS, Firebase",
    githubRepo: "https://github.com/ManojBelbase/Millennium_Photo_Printing.git", // replace with your actual GitHub repo link
    url: "https://millenniumphoto.netlify.app/", // replace with your actual deployed project URL
  },
  {
    id: 6,
    title: "Online Clothing Store",
    images: [k1, k2, k3, k4, k5, k6],
    description:
      "An e-commerce platform offering a wide range of clothing for men, women, and kids. Features include product browsing, adding items to the cart, Admins can manage inventory efficiently.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/kapadaa-pasal.git", // replace with your actual GitHub
  },
  {
    id: 7,
    title: "Online Voting System",
    images: [voting1, voting2, voting3], // replace with actual image variables or URLs
    description:
      "A platform for users to sign in, view candidates, and vote. Features live vote counting, password management, and admin-controlled candidate table without voting access.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/online_voting",
    url: "https://votingappnepal.netlify.app/",
  },


];
export default projectData;
