import yt from "../../assets/project/yt.png";
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
const projectData = [
  {
    id: 1,
    title: "Online Clothing Store",
    images: [k1, k2, k3, k4, k5], // replace with actual image variables or URLs for the project thumbnail
    description:
      "An e-commerce platform offering a wide range of clothing for men, women, and kids. Features include product browsing, searching, adding items to the cart, and a seamless checkout process. Admins can manage inventory and orders efficiently.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/Online_Clothing_Store.git", // replace with your actual GitHub repo link
    url: "https://onlineclothingstore.netlify.app/", // replace with your actual deployed project URL
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
    title: "Blogging Website with Full CRUD Operations",
    images: [b1, b2, b3], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "A complete blogging platform where users can view blogs, and admins can perform   create, read, update, and delete blogs.",
    language: "ReactJS, NodeJS, MongoDB, ExpressJS",
    githubRepo: "https://github.com/ManojBelbase/Blogging_website.git", // replace with your actual GitHub repo link
  },
  {
    id: 4,
    title: "Country Explorer with API Integration",
    images: [nationExplore], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "This project displays all countries in the world, with search functionality by name and filters by region using a public API.",
    language: "ReactJS, API",
    githubRepo: "https://github.com/ManojBelbase/REST-Countries-API.git", // replace with your actual GitHub repo link
    url: "https://nationexplorer.netlify.app/", // replace with your actual deployed project URL
  },
  {
    id: 5,
    title: "Youtube Clone with API Integration",
    images: [yt],
    description:
      "This is a YouTube clone project where I designed the YouTube UI and integrated a free YouTube API",
    language: "ReactJs,API",
    githubRepo: "https://github.com/ManojBelbase/Youtube_clone",
    url: "https://youtube-clone-delta-tan.vercel.app/",
  },
];
export default projectData;
