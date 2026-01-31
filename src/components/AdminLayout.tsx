import React, { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  ArrowDownCircle,
  Users,
  ShieldCheck,
  RefreshCcw,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Wallet, label: "Deposit", path: "/admin/deposit" },
    { icon: ArrowDownCircle, label: "Withdraw", path: "/admin/withdraw" },
    { icon: Users, label: "Member", path: "/admin/member" },
    { icon: ShieldCheck, label: "Verification (KYC)", path: "/admin/kyc" },
    { icon: RefreshCcw, label: "Reset 2FA Request", path: "/admin/reset-2fa" },
    { icon: FileText, label: "Daily Report", path: "/admin/report" },
    { icon: Settings, label: "Setting", path: "/admin/setting" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#00050D] text-white">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#080E17] border-r border-white/5 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight">CRYPTO</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    isActive
                      ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <item.icon size={20} className="shrink-0" />
                <span className="font-medium">{item.label}</span>
                {item.label === "Dashboard" && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)] opacity-0 group-[.active]:opacity-100"></div>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-white/5">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-[#080E17] border-b border-white/5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-400"
          >
            <Menu size={24} />
          </button>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
