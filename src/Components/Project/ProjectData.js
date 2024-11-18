import yt from "../../assets/project/yt.png";
import nationExplore from "../../assets/project/nationExplore.png";
import p3 from "../../assets/project/p3.png";
import b1 from "../../assets/project/b1.png";
import b2 from "../../assets/project/b2.png";
import b3 from "../../assets/project/b3.png";
const projectData = [
  {
    id: 1,
    title: "Youtube Clone with API Integration",
    images: [yt],
    description:
      "This is a YouTube clone project where I designed the YouTube UI and integrated a free YouTube API",
    language: "ReactJs,API",
    githubRepo: "https://github.com/ManojBelbase/Youtube_clone",
    url: "https://youtube-clone-delta-tan.vercel.app/",
  },

  {
    id: 2,
    title: "Millennium Photo Printing Services",
    images: [p3], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "This project allows seamless management of products, including adding, editing, and removing, showcasing services like custom framing, banners, and ID cards.",
    language: "ReactJS, Firebase",
    githubRepo: "https://github.com/ManojBelbase/Millennium_Photo_Printing.git", // replace with your actual GitHub repo link
    url: "https://millenniumphoto.netlify.app/", // replace with your actual deployed project URL
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
    id: 4,
    title: "Country Explorer with API Integration",
    images: [nationExplore], // replace this with the actual image variable or URL for the project thumbnail
    description:
      "This project displays all countries in the world, with search functionality by name and filters by region using a public API.",
    language: "ReactJS, API",
    githubRepo: "https://github.com/ManojBelbase/REST-Countries-API.git", // replace with your actual GitHub repo link
    url: "https://nationexplorer.netlify.app/", // replace with your actual deployed project URL
  },
];
export default projectData;
