import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function MarketHistory() {
  const [pairs] = useState([
    { name: "ADA/IDR", price: "12,501", change: "+3.00%" },
    { name: "ARB/IDR", price: "8,125", change: "+2.00%" },
    { name: "AVAX/IDR", price: "439,245", change: "+1.00%" },
    { name: "DOGE/IDR", price: "4,361", change: "+5.00%" },
    { name: "ETH/IDR", price: "46,000,000", change: "-3.00%" },
    { name: "MANTA/IDR", price: "24,4", change: "-1.00%" },
    { name: "NBT/IDR", price: "48.8", change: "-2.30%" },
    { name: "NOT/IDR", price: "975.1", change: "+3.00%" },
    { name: "SOL/IDR", price: "975.1", change: "+3.00%" },
  ]);

  const [recentTrades, setRecentTrades] = useState([
    { price: "13272", amount: "975.1", time: "11:00:12", type: "sell" },
    { price: "13271", amount: "124.5", time: "10:50:12", type: "buy" },
    { price: "13272", amount: "45.2", time: "10:20:12", type: "sell" },
    { price: "13270", amount: "972.1", time: "10:10:12", type: "buy" },
    { price: "13272", amount: "12.8", time: "09:50:12", type: "sell" },
    { price: "13271", amount: "975.1", time: "09:49:12", type: "buy" },
    { price: "13272", amount: "223.4", time: "09:20:12", type: "sell" },
    { price: "13270", amount: "15.0", time: "09:00:12", type: "buy" },
    { price: "13272", amount: "97.1", time: "08:50:12", type: "sell" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });
      const newTrade = {
        price: (13270 + Math.random() * 5).toFixed(0),
        amount: (Math.random() * 1000).toFixed(1),
        time: timeStr,
        type: Math.random() > 0.5 ? "buy" : "sell",
      };
      setRecentTrades((prev) => [newTrade, ...prev.slice(0, 8)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-between gap-2 h-full overflow-hidden text-[14px]">
      {/* Top Section: Pair List */}
      <div className="bg-[#0B1322]/50 rounded-lg flex flex-col min-h-0">
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#959595]" />
            <Input
              placeholder="Cari"
              className="pl-10 bg-white/10 border-none text-[14px] h-10 focus-visible:ring-[#D57C17] rounded-lg"
            />
          </div>

          <Tabs defaultValue="IDR" className="w-full">
            <div className="w-full overflow-x-auto pb-1 scrollbar-hide">
              <TabsList className="bg-transparent gap-4 h-auto p-0 inline-flex w-max min-w-0 justify-start">
                {["Favorites", "IDR", "USD", "BNB", "BTC", "ALTS"].map(
                  (tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="bg-transparent px-0 text-[#959595] hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white cursor-pointer transition-colors h-auto rounded-none border-none shadow-none pb-1 transition-none"
                    >
                      {tab}
                    </TabsTrigger>
                  ),
                )}
              </TabsList>
            </div>
          </Tabs>
        </div>

        <div className="px-4 py-2 grid grid-cols-3 text-[14px] text-[#959595]">
          <span>Pasangan</span>
          <span className="text-right">Harga</span>
          <span className="text-right">Ubah</span>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 custom-scrollbar">
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="grid grid-cols-3 text-[14px] group cursor-pointer hover:bg-white/5 py-1 px-1 rounded transition-colors"
            >
              <span className="text-white/90 font-medium">{pair.name}</span>
              <span className="text-right text-white font-medium">
                {pair.price}
              </span>
              <span
                className={`text-right font-bold ${pair.change.startsWith("+") ? "text-[#12B76A]" : "text-[#E94B4B]"}`}
              >
                {pair.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Market Trades */}
      <div className="bg-[#0B1322]/50 rounded-lg flex flex-col min-h-0 mb-4">
        <Tabs defaultValue="market" className="flex-1 flex flex-col min-h-0">
          <TabsList className="bg-transparent gap-6 h-auto p-4 inline-flex w-max min-w-0 justify-start text-[16px] font-bold border-none border-t border-[#121B2E] rounded-none">
            <TabsTrigger
              value="market"
              className="bg-transparent px-0 text-[16px] text-[#959595] hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white cursor-pointer transition-colors h-auto rounded-none border-none shadow-none pb-1 transition-none"
            >
              Perdagangan Market
            </TabsTrigger>
            <TabsTrigger
              value="my"
              className="bg-transparent px-0 text-[#959595] text-[16px] hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white cursor-pointer transition-colors h-auto rounded-none border-none shadow-none pb-1 transition-none"
            >
              Perdagangan Saya
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="market"
            className="flex-1 flex flex-col min-h-0 m-0"
          >
            <div className="px-4 py-4 grid grid-cols-3 text-[14px] text-[#959595] border-t border-[#121B2E]">
              <span>Harga IDR</span>
              <span className="text-right">Jumlah BTC</span>
              <span className="text-right">Waktu</span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 custom-scrollbar">
              {recentTrades.map((trade, i) => (
                <div key={i} className="grid grid-cols-3 text-[14px]">
                  <span
                    className={`font-medium ${trade.type === "buy" ? "text-[#12B76A]" : "text-[#E94B4B]"}`}
                  >
                    {trade.price}
                  </span>
                  <span className="text-right text-white/90 font-medium">
                    {trade.amount}
                  </span>
                  <span className="text-right text-[#959595]">
                    {trade.time}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my" className="flex-1 flex flex-col min-h-0 m-0">
            <div className="flex-1 flex items-center justify-center text-[#959595] text-sm py-12">
              <p>Anda tidak memiliki riwayat perdagangan</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
