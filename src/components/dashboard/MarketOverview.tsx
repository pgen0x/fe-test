import { Card, CardContent } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer } from "recharts";

interface StatCardProps {
  pair: string;
  price: string;
  change: string;
  isPositive: boolean;
  volume: string;
  data: { value: number }[];
}

export function StatCard({
  pair,
  price,
  change,
  isPositive,
  volume,
  data,
}: StatCardProps) {
  return (
    <Card className="bg-[#0B1322]/50 text-white rounded-[8px]">
      <CardContent className="p-[18px]">
        <div className="flex items-stretch justify-between h-full">
          <div className="space-y-1">
            <p className="text-xs text-white">{pair}</p>
            <h3 className="text-xl font-bold pt-[18px]">{price}</h3>
          </div>
          <div className="shrink-0 w-28">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="linear"
                  dataKey="value"
                  stroke={isPositive ? "#22c55e" : "#ef4444"}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-4 pt-4 flex items-center justify-between text-[14px]">
          <p className={` ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {change}
          </p>
          <p className="text-[#959595] font-bold">Volume : {volume}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MarketOverview() {
  const stats = [
    {
      pair: "TKO/IDR",
      price: "Rp 5,261.3",
      change: "-3.82%",
      isPositive: false,
      volume: "2,258 IDR",
      data: [
        { value: 70 },
        { value: 100 },
        { value: 60 },
        { value: 80 },
        { value: 40 },
        { value: 60 },
        { value: 30 },
      ],
    },
    {
      pair: "TKO/IDR",
      price: "Rp 5,261.3",
      change: "-3.82%",
      isPositive: false,
      volume: "2,258 IDR",
      data: [
        { value: 70 },
        { value: 100 },
        { value: 60 },
        { value: 80 },
        { value: 40 },
        { value: 60 },
        { value: 30 },
      ],
    },
    {
      pair: "TKO/IDR",
      price: "Rp 5,261.3",
      change: "+3.82%",
      isPositive: true,
      volume: "2,258 IDR",
      data: [
        { value: 30 },
        { value: 60 },
        { value: 40 },
        { value: 80 },
        { value: 60 },
        { value: 100 },
        { value: 70 },
      ],
    },
    {
      pair: "TKO/IDR",
      price: "Rp 5,261.3",
      change: "+3.82%",
      isPositive: true,
      volume: "2,258 IDR",
      data: [
        { value: 30 },
        { value: 60 },
        { value: 40 },
        { value: 80 },
        { value: 60 },
        { value: 100 },
        { value: 70 },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
}
