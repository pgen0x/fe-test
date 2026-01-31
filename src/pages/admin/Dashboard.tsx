import { useAuth } from "@/context/AuthContext";
import { StatsService } from "@/services/stats.service";
import { Cpu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatCard = ({ title, value, subValue, isLoading }: any) => (
  <div className="flex flex-col gap-6 rounded-2xl bg-[#13213F]/40 p-8 border border-white/5 relative group transition-all hover:bg-[#0C1421]">
    <div className="flex items-center gap-4">
      <div className="text-white">
        <Cpu size={36} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>

    <div className="space-y-2">
      {isLoading ? (
        <div className="h-9 w-32 animate-pulse rounded-md bg-white/5" />
      ) : (
        <div className="text-3xl font-bold text-white tracking-tight leading-none">
          {value}
        </div>
      )}
      <div className="text-base text-gray-400 font-medium">{subValue}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2024);

  const months = [
    { value: 1, label: "Januari" },
    { value: 2, label: "Februari" },
    { value: 3, label: "Maret" },
    { value: 4, label: "April" },
    { value: 5, label: "Mei" },
    { value: 6, label: "Juni" },
    { value: 7, label: "Juli" },
    { value: 8, label: "Agustus" },
    { value: 9, label: "September" },
    { value: 10, label: "Oktober" },
    { value: 11, label: "November" },
    { value: 12, label: "Desember" },
  ];

  const years = [2023, 2024];

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const response = await StatsService.getDashboardStats(
          selectedMonth,
          selectedYear,
        );
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [selectedMonth, selectedYear]);

  const chartData = stats?.chartData || [];

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

        <div className="flex items-center gap-4">
          <span className="text-white text-[14px] font-medium">Filter By:</span>
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="bg-white/30 border-none rounded-xl px-5 py-2 pr-10 text-[14px] text-white focus:outline-none appearance-none cursor-pointer"
              >
                {months.map((m) => (
                  <option
                    key={m.value}
                    value={m.value}
                    className="text-white bg-[#050911]"
                  >
                    {m.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.182761 1.23812L4.55089 6.33562C4.6213 6.41775 4.70864 6.48366 4.80692 6.52886C4.9052 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0H0.750886C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="bg-white/30 border-none rounded-xl px-5 py-2 pr-10 text-[14px] text-white focus:outline-none appearance-none cursor-pointer"
              >
                {years.map((y) => (
                  <option key={y} value={y} className="text-white bg-[#050911]">
                    {y}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.182761 1.23812L4.55089 6.33562C4.6213 6.41775 4.70864 6.48366 4.80692 6.52886C4.9052 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0H0.750886C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart Section */}
        <div className="lg:col-span-12 xl:col-span-7 bg-[#13213F]/40 border border-white/5 p-8 rounded-2xl relative overflow-hidden">
          <h2 className="text-lg font-bold text-white mb-8">
            Deposit & Withdraw
          </h2>
          <div className="h-[300px] w-full">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#ffffff05"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 10 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 10 }}
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
                  <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ paddingBottom: "20px", fontSize: "12px" }}
                  />
                  <Bar
                    dataKey="deposit"
                    name="Deposit"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="withdraw"
                    name="Withdraw"
                    fill="#ef4444"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            title="Total Deposit"
            value={`IDR ${stats?.totalDeposit?.toLocaleString() || 0}`}
            subValue={`${stats?.depositCount || 0} Deposit(s)`}
            isLoading={isLoading}
          />
          <StatCard
            title="Total Withdraw"
            value={`IDR ${stats?.totalWithdraw?.toLocaleString() || 0}`}
            subValue={`${stats?.withdrawCount || 0} Withdraw(s)`}
            isLoading={isLoading}
          />
          <StatCard
            title="Total Verified KYC"
            value={`${stats?.totalVerifiedKyc || 0} Verified`}
            subValue={`${stats?.totalVerifiedKyc || 0} Verified`}
            isLoading={isLoading}
          />
          <StatCard
            title="Total Registration"
            value={`${stats?.totalRegistered || 0} Registered`}
            subValue={`${stats?.totalRegistered || 0} Registered`}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
