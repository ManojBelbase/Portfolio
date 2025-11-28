import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";

import { TbBrandGithubFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { SiMedium } from "react-icons/si";
const socialLinks = [
  {
    title: "github",
    icon: (
      <TbBrandGithubFilled className="text-black sm:text-xl hover:text-gray-800" />
    ),
    bgColor: "bg-gray-300",
    path: "https://github.com/ManojBelbase",
  },

  {
    title: "linkedin",
    icon: (
      <FaLinkedinIn className="text-black sm:text-xl hover:text-blue-700" />
    ),
    bgColor: "bg-gray-300",
    path: "https://www.linkedin.com/in/manojbelbasay/",
  },
  {
    title: "npm",
    icon: <RiNpmjsFill className="text-black hover:text-red-500" />,
    bgColor: "bg-gray-300",
    path: "https://www.npmjs.com/~manojbelbase",
  },
  {
    title: "medium",
    icon: <SiMedium className="text-black sm:text-xl hover:text-[#000200]" />,
    bgColor: "bg-gray-300",
    path: "https://medium.com/@manojbelbase",
  },
  {
    title: "youtube",
    icon: <FaYoutube className="text-black sm:text-xl hover:text-red-600" />,
    bgColor: "bg-gray-300",
    path: "https://www.youtube.com/@manojbelbasay",
  },
  {
    title: "instagram",
    icon: (
      <RiInstagramFill className="text-black sm:text-xl hover:text-[#cd486b]" />
    ),
    bgColor: "bg-gray-300",
    path: "https://www.instagram.com/manojbelbasay/",
  },
];
export default socialLinks;
