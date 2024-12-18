import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-500 py-4 px-6 md:px-12">
      <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left space-y-4 md:space-y-0">
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} RemoteJobs-Job Portal. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6 md:justify-end">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-400 transition-colors">
            <FaYoutube size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
