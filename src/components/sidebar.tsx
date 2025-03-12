import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import Logo from "/white.svg";
import { Link } from "@heroui/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="h-screen sticky top-0">
      {isMobile && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
        >
          <FaBars size={22} />
        </button>
      )}

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`${
          isMobile
            ? "fixed top-0 left-0 h-full w-64 p-5 bg-white text-primary shadow-lg z-50 transition-transform"
            : "h-screen bg-white text-primary transition-all duration-300 flex flex-col justify-between rounded-r-2xl shadow-lg"
        } ${isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : isSidebarOpen ? "w-64 p-5" : "w-20 p-3"}`}
      >
        <div className="flex items-center justify-between mt-2">
          {isSidebarOpen && (
            <div className="bg-primary p-2 rounded-lg">
              <img src={Logo} alt="Fitflo Logo" className="w-[120px] h-8" />
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-black focus:outline-none"
          >
            {isMobile ? "✕" : <FaBars size={22} />}
          </button>
        </div>

        <nav className="mt-4 space-y-6">
          <SidebarLink href="/dashboard" icon={<FaHome size={18} />} text="Dashboard" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
          <SidebarLink href="/pathway" icon={<MdEventNote size={18} />} text="Pathway Planner" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
          <SidebarLink href="/healthcare" icon={<FaBriefcaseMedical size={18} />} text="Healthcare" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
          <SidebarLink href="/personal-care" icon={<FaHeartbeat size={18} />} text="Personal Care" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
        </nav>

        <div className={`${isMobile ? "mt-16 space-y-6" : "mt-10 space-y-6"}`}>
          <SidebarLink href="/faq" icon={<FaQuestionCircle size={18} />} text="FAQ" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
          <SidebarLink href="/settings" icon={<FaCog size={18} />} text="Settings" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
          <SidebarLink href="/profile" icon={<FaUser size={18} />} text="Profile" isSidebarOpen={isSidebarOpen} currentPath={location.pathname} />
        </div>
        <button 
           onClick={handleLogout}
           className="mt-6 flex items-center text-red-600 font-medium p-2 rounded-lg hover:bg-gray-100 transition-all"
        >
          <FaSignOutAlt size={18} />
          {isSidebarOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
    isSidebarOpen: boolean;
    currentPath: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, text, isSidebarOpen, currentPath }) => {
    const isActive = currentPath === href;
    return (
      <Link
        href={href}
        className={`flex items-center text-[15px] font-medium p-2 rounded-lg transition-all ${isActive ? "bg-primary text-white" : "text-black hover:bg-accent hover:text-primary"}`}
      >
        {icon}
        {isSidebarOpen && <span className="ml-3">{text}</span>}
      </Link>
    );
};

export default Sidebar;