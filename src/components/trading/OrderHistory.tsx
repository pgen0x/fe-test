import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function OrderHistory() {
  const tabs = [
    { id: "open", label: "Transaksi Terbuka (0)" },
    { id: "orders", label: "Riwayat Order" },
    { id: "trades", label: "Riwayat Perdagangan" },
  ];

  return (
    <div className="bg-[#0B1322]/50 flex flex-col min-h-[300px] rounded-t-xl mt-[24px]">
      <Tabs defaultValue="open" className="w-full flex-1 flex flex-col">
        <div className="border-b border-white/5 overflow-x-auto scrollbar-hide">
          <TabsList className="bg-transparent gap-8 p-4 pb-2 inline-flex w-max min-w-full justify-start rounded-none h-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="bg-transparent px-0 text-[14px] font-bold text-[#959595] whitespace-nowrap flex-shrink-0 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none border-none shadow-none h-auto pb-2 transition-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="open" className="m-0 flex-1 flex flex-col min-h-0">
          <div className="overflow-x-auto scrollbar-hide mt-2">
            <div className="min-w-[820px]">
              <div className="p-4 border-t border-[#121B2E] text-[11px] text-[#959595] grid grid-cols-9 uppercase tracking-wider bg-white/5">
                <span className="text-nowrap">Tanggal</span>
                <span className="text-nowrap">Pasangan</span>
                <span className="text-nowrap">Jenis</span>
                <span className="text-nowrap">Sisi</span>
                <span className="text-nowrap">Harga</span>
                <span className="text-nowrap">Jumlah</span>
                <span className="text-nowrap">Terisi</span>
                <span className="text-nowrap">Total</span>
                <span className="text-nowrap">Kondisi Pemicu</span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-[#959595] text-sm py-12">
                <p>Anda tidak memiliki order Terbuka</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="orders"
          className="m-0 flex-1 flex flex-col min-h-0"
        >
          <div className="flex-1 flex items-center justify-center text-[#959595] text-sm py-12">
            <p>Anda tidak memiliki riwayat order</p>
          </div>
        </TabsContent>

        <TabsContent
          value="trades"
          className="m-0 flex-1 flex flex-col min-h-0"
        >
          <div className="flex-1 flex items-center justify-center text-[#959595] text-sm py-12">
            <p>Anda tidak memiliki riwayat perdagangan</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
