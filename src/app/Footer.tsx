import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-gray-500 py-4 px-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-4 md:mb-0 text-sm">
          <p>&copy; {new Date().getFullYear()} RemoteJobs-Job Portal. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-400">
            <FaYoutube size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
