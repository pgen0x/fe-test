import { useAuth } from "@/context/AuthContext";
import { Cpu } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "1", value: 65 },
  { name: "2", value: 15 },
  { name: "3", value: 35 },
  { name: "4", value: 45 },
  { name: "5", value: 75 },
  { name: "6", value: 50 },
  { name: "7", value: 10 },
  { name: "8", value: 20 },
  { name: "9", value: 30 },
];

const StatCard = ({ title, value, subValue, icon: Icon }: any) => (
  <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 bg-[#0D1421] p-6 transition-all hover:border-yellow-500/30">
    <div className="flex items-start justify-between">
      <div className="rounded-xl bg-white/5 p-3 transition-all group-hover:bg-yellow-500/10">
        <Icon size={24} className="text-gray-400 group-hover:text-yellow-500" />
      </div>
      <div className="absolute right-0 top-0 p-1">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
      </div>
    </div>
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-400">{title}</h3>
      <div className="mb-1 text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-500">{subValue}</div>
    </div>
    <div className="absolute -bottom-2 -right-2 opacity-5">
      <Icon size={80} />
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Welcome {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-400">How are you today...</p>
        </div>

        <div className="flex gap-3">
          <select className="bg-[#0D1421] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50">
            <option>Januari</option>
            <option>Februari</option>
          </select>
          <select className="bg-[#0D1421] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50">
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart Section */}
        <div className="lg:col-span-7 bg-[#0D1421] border border-white/5 p-8 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-8">Bar Chart</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#ffffff05"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  dx={-10}
                />
                <Tooltip
                  cursor={{ fill: "#ffffff05" }}
                  contentStyle={{
                    backgroundColor: "#0D1421",
                    borderColor: "#ffffff10",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 4 ? "#10b981" : "#10b981cc"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard
            title="Total Deposit"
            value="IDR 0"
            subValue="0 Deposit(s)"
            icon={Cpu}
          />
          <StatCard
            title="Total Withdraw"
            value="IDR 0"
            subValue="0 Withdraw(s)"
            icon={Cpu}
          />
          <StatCard
            title="Total Verified KYC"
            value="0 Verified"
            subValue="0 Verified"
            icon={Cpu}
          />
          <StatCard
            title="Total Registration"
            value="0 Registered"
            subValue="0 Registered"
            icon={Cpu}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
