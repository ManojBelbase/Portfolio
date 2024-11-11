import yt from "../../assets/project/yt.png";
import nationExplore from "../../assets/project/nationExplore.png";
const projectData = [
  {
    id: 1,
    title: "Youtube Clone with API Integration",
    images: [yt, yt, nationExplore],
    description:
      "This is a YouTube clone project where I designed the YouTube UI and integrated a free YouTube API",
    language: "ReactJs,API",
    githubRepo: "https://github.com/ManojBelbase/Youtube_clone",
    url: "https://youtube-clone-delta-tan.vercel.app/",
  },
  {
    id: 2,
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
