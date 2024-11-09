import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaUserPlus,
} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  {
    title: "facebook",
    icon: <FaFacebookF className="text-black sm:text-lg hover:text-blue-600" />,
    bgColor: "bg-gray-300",
    path: "https://www.facebook.com/manojbelbasay",
  },
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
