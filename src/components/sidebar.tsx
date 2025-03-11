import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaBars,
} from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import Logo from "/white.svg";
import { Link } from "@heroui/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
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
              <img
                src={Logo}
                alt="Fitflo Logo"
                className="w-[120px] h-8"
              />
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
          <SidebarLink href="/dashboard" icon={<FaHome size={18} />} text="Dashboard" isSidebarOpen={isSidebarOpen} />
          <SidebarLink href="/pathway" icon={<MdEventNote size={18} />} text="Pathway Planner" isSidebarOpen={isSidebarOpen} />
          <SidebarLink href="/healthcare" icon={<FaBriefcaseMedical size={18} />} text="Healthcare" isSidebarOpen={isSidebarOpen} />
          <SidebarLink href="/personal-care" icon={<FaHeartbeat size={18} />} text="Personal Care" isSidebarOpen={isSidebarOpen} />
        </nav>

        {/* Menambahkan lebih banyak jarak antara Personal Care dan FAQ di tampilan mobile */}
        <div className={`${isMobile ? "mt-16 space-y-6" : "mt-10 space-y-6"}`}>
          <SidebarLink href="/faq" icon={<FaQuestionCircle size={18} />} text="FAQ" isSidebarOpen={isSidebarOpen} />
          <SidebarLink href="/settings" icon={<FaCog size={18} />} text="Settings" isSidebarOpen={isSidebarOpen} />
          <SidebarLink href="/profile" icon={<FaUser size={18} />} text="Profile" isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
    isSidebarOpen: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, text, isSidebarOpen }) => {
    return (
      <Link
        href={href}
        className="flex items-center text-black text-[15px] font-medium hover:bg-accent hover:text-primary p-2 rounded-lg transition-all"
      >
        {icon}
        {isSidebarOpen && <span className="ml-3">{text}</span>}
      </Link>
    );
  };

export default Sidebar;