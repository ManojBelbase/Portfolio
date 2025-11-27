import nationExplore from "../../assets/project/nationExplore.png";
import p3 from "../../assets/project/p3.png";
import p32 from "../../assets/project/p32.png";
import p33 from "../../assets/project/p33.png";
import b1 from "../../assets/project/b1.png";
import b2 from "../../assets/project/b2.png";
import b3 from "../../assets/project/b3.png";
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
import voting1 from "../../assets/project/voting1.png";
import voting2 from "../../assets/project/voting2.png";
import voting3 from "../../assets/project/voting3.png";
const projectData = [
  {
    id: 1,
    title: "Online Food ordering system",
    images: [foodLogin, food1, food2, food3, food4, food5],
    description:
      "A clean and responsive admin panel featuring separate admin and restaurant logins, an interactive dashboard, category management, food item management, order tracking, and user control for smooth operation of the food ordering system",
    language: "ReactJS, MantineUI, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/online-food-ordering-admin",
    url: "https://online-food-ordering-admin.vercel.app/",
  },
  {
    id: 1,
    title: "Online Clothing Store",
    images: [k1, k2, k3, k4, k5, k6], // replace with actual image variables or URLs for the project thumbnail
    description:
      "An e-commerce platform offering a wide range of clothing for men, women, and kids. Features include product browsing, adding items to the cart, Admins can manage inventory efficiently.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/kapadaa-pasal.git", // replace with your actual GitHub
  },

  {
    id: 2,
    title: "Millennium Photo Printing Services",
    images: [p3, p32, p33], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "This project allows seamless management of products, including adding, editing, and removing, showcasing services like custom framing, banners, and ID cards.",
    language: "ReactJS, Firebase",
    githubRepo: "https://github.com/ManojBelbase/Millennium_Photo_Printing.git", // replace with your actual GitHub repo link
    url: "https://millenniumphoto.netlify.app/", // replace with your actual deployed project URL
  },
  {
    id: 3,
    title: "Online Voting System",
    images: [voting1, voting2, voting3], // replace with actual image variables or URLs
    description:
      "A platform for users to sign in, view candidates, and vote. Features live vote counting, password management, and admin-controlled candidate table without voting access.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/online_voting",
    url: "https://votingappnepal.netlify.app/",
  },

  {
    id: 4,
    title: "Blogging Website with Full CRUD Operations",
    images: [b1, b2, b3], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "A complete blogging platform where users can view blogs, and admins can perform   create, read, update, and delete blogs.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/Blogging_website.git", // replace with your actual GitHub repo link
  },
  {
    id: 5,
    title: "Country Explorer with API Integration",
    images: [nationExplore],
    description:
      "This project displays all countries in the world, with search functionality by name and filters by region using a public API.",
    language: "ReactJS, API",
    githubRepo: "https://github.com/ManojBelbase/REST-Countries-API.git", // replace with your actual GitHub repo link
    url: "https://nationexplorer.netlify.app/", // replace with your actual deployed project URL
  },
];
export default projectData;
