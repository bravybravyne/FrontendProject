import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  BarChart2,
  Activity,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection,
}) => {
  const sections = [
    {
      title: "Main",
      items: [{ id: "dashboard", label: "Dashboard", icon: Home }],
    },
    {
      title: "Activities",
      items: [
        { id: "students", label: "Students", icon: Users },
        { id: "predictions", label: "Predictions", icon: BarChart2 },
        { id: "interventions", label: "Interventions", icon: Activity },
      ],
    },
    {
      title: "Data",
      items: [{ id: "reports", label: "Reports", icon: FileText }],
    },
  ];

  const bottomItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    if (window.innerWidth < 1024) {
      setIsOpen(false); // auto close on mobile
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{
          x: window.innerWidth >= 1024 ? 0 : isOpen ? 0 : -280,
        }}
        transition={{ duration: 0.3 }}
        className="fixed lg:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-white to-green-50 shadow-md z-50 flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-center border-b border-green-100">
          <h1 className="text-2xl font-extrabold text-green-700">EduKenya</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <p className="px-2 mb-2 text-xs font-semibold uppercase text-green-600">
                  {section.title}
                </p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleItemClick(item.id)}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-full text-sm font-medium transition
                          ${
                            isActive
                              ? "bg-green-600 text-white shadow-sm"
                              : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                          }`}
                      >
                        <Icon
                          size={18}
                          className={`${
                            isActive ? "text-white" : "text-gray-500"
                          }`}
                        />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="border-t border-green-100 px-4 py-4 space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-full text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                  }`}
              >
                <Icon
                  size={18}
                  className={`${isActive ? "text-white" : "text-gray-500"}`}
                />
                {item.label}
              </button>
            );
          })}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;