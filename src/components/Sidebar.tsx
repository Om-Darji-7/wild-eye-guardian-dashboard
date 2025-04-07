
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Camera, 
  Home, 
  AlertTriangle, 
  Bell, 
  Settings,
  User,
  LogOut
} from "lucide-react";
import Logo from "./Logo";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  to,
  isActive,
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        isActive
          ? "bg-wildlife-purple text-white"
          : "text-gray-400 hover:bg-gray-800"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: Home, label: "Dashboard", to: "/dashboard" },
    { icon: Camera, label: "Animal Detection", to: "/detection" },
    { icon: BarChart2, label: "Status Analysis", to: "/status" },
    { icon: AlertTriangle, label: "Incident Reports", to: "/incidents" },
    { icon: Bell, label: "Alerts", to: "/alerts" },
    { icon: Settings, label: "Settings", to: "/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-wildlife-dark-blue flex flex-col border-r border-gray-800">
      <div className="p-4 mb-2">
        <Logo />
      </div>
      
      <div className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={currentPath === item.to}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-wildlife-purple flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Wildlife Ranger</p>
            <p className="text-xs text-gray-400">ranger@wildeye.org</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <LogOut size={16} />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
