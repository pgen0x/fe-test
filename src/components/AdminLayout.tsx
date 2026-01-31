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
  Menu,
  X,
  SettingsIcon,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import DashboardIcon from "@/assets/icon/DashboardIcon";
import DepositIcon from "@/assets/icon/DepositIcon";
import WithdrawIcon from "@/assets/icon/WithdrawIcon";
import MemberIcon from "@/assets/icon/MemberIcon";
import VerifiedIcon from "@/assets/icon/VerifiedIcon";
import Reset2FaIcon from "@/assets/icon/Reset2FaIcon";
import ReportIcon from "@/assets/icon/ReportIcon";
import SettingIcon from "@/assets/icon/SettingIcon";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: DashboardIcon, label: "Dashboard", path: "/admin" },
    { icon: DepositIcon, label: "Deposit", path: "/admin/deposit" },
    { icon: WithdrawIcon, label: "Withdraw", path: "/admin/withdraw" },
    { icon: MemberIcon, label: "Member", path: "/admin/member" },
    { icon: VerifiedIcon, label: "Verification (KYC)", path: "/admin/kyc" },
    {
      icon: Reset2FaIcon,
      label: "Reset 2FA Request",
      path: "/admin/reset-2fa",
    },
    { icon: ReportIcon, label: "Daily Report", path: "/admin/report" },
    { icon: SettingIcon, label: "Setting", path: "/admin/setting" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#00050D] text-white flex-col overflow-hidden">
      {/* Top Header */}
      <header className="h-20 bg-[#050911] flex items-center justify-between px-6 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-white font-medium transition-colors"
        >
          Keluar
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#050911] transition-transform duration-300 transform ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          } flex flex-col`}
        >
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "text-[#E5933A] bg-yellow-500/5"
                      : "text-white/40 hover:text-white"
                  }`
                }
              >
                <item.icon className="shrink-0 size-5 " />
                <span className="font-semibold text-[15px]">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#00050D]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
