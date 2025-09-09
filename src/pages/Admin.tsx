import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Search, Menu, X } from "lucide-react";
import { Students } from "../components/students";

// Dummy components for sections
const DashboardOverview = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Dashboard Overview</h1>
    <p className="mt-2">This is a placeholder for the Dashboard section.</p>
  </div>
);



const Predictions = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Predictions</h1>
    <p className="mt-2">This is a placeholder for the Predictions section.</p>
  </div>
);

const Interventions = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Interventions</h1>
    <p className="mt-2">This is a placeholder for the Interventions section.</p>
  </div>
);

const Reports = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Reports</h1>
    <p className="mt-2">This is a placeholder for the Reports section.</p>
  </div>
);

const SettingsPage = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Settings</h1>
    <p className="mt-2">This is a placeholder for the Settings section.</p>
  </div>
);

const Logout = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-700">
    <h1 className="text-xl font-bold text-blue-700">Logout</h1>
    <p className="mt-2">This is a placeholder for Logout functionality.</p>
  </div>
);

// Notification Bell
const NotificationBell = () => (
  <div className="relative cursor-pointer">
    <span className="block w-6 h-6 bg-gray-300 rounded-full" />
    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
  </div>
);

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "students":
        return <Students />;
      case "predictions":
        return <Predictions />;
      case "interventions":
        return <Interventions />;
      case "reports":
        return <Reports />;
      case "settings":
        return <SettingsPage />;
      case "logout":
        return <Logout />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 md:px-6 py-4">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md w-1/2 md:w-1/3 bg-gray-50">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <NotificationBell />
            <button
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setActiveSection("settings")}
            >
              Settings
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-8 h-8 rounded-full border"
              />
              <span className="text-sm font-medium text-gray-700">ADMIN</span>
            </div>
          </div>
        </header>

        {/* Dynamic Section */}
        <main className="flex-1 overflow-y-auto p-6">{renderSection()}</main>
      </div>
    </div>
  );
};

export default AdminPage;