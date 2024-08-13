import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: process.env.REACT_APP_LINKEDIN_URL,
    },
    {
      icon: <FaGithub />,
      url: process.env.REACT_APP_GITHUB_URL,
    },
    {
      icon: <FaEnvelope />,
      url: process.env.REACT_APP_MAIL_URL,
    },
  ];