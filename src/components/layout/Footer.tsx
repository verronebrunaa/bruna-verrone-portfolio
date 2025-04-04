import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-4 mt-auto">
      <div className="flex flex-col items-center">
        <p>© {new Date().getFullYear()} Bruna Verrone</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/verronebrunaa" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/verronebruna/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-400 transition" />
          </a>
          <a href="https://codepen.io/verronebruna" target="_blank" rel="noopener noreferrer">
            <FaCodepen className="text-xl hover:text-gray-400 transition" />
          </a>
          <a href="mailto:bruna@portfolio.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-xl hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
