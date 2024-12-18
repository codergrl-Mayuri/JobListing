import { PiBag } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Header: React.FC = () => {
  return (
    <header
      className={`w-full py-5 px-8 shadow-sm transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Logo" className="cursor-default text-blue-500">
            <PiBag size={26} />
          </a>
          <h1 className="text-xl font-bold">RemoteJobs</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Notification">
            <VscBell size={20} />
          </a>
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
