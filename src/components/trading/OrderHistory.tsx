export default function OrderHistory() {
  const tabs = [
    "Transaksi Terbuka (0)",
    "Riwayat Order",
    "Riwayat Perdagangan",
  ];

  return (
    <div className="bg-[#0B1322]/50  flex flex-col min-h-[300px] rounded-t-xl mt-[24px]">
      <div className="border-b border-white/5 overflow-x-auto scrollbar-hide">
        <div className="p-4 pb-2 flex gap-8 w-max min-w-full">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`font-bold pb-2 cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${i === 0 ? "text-white border-b-2 border-white" : "text-[#959595] hover:text-white"}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide mt-2">
        <div className="min-w-[800px]">
          <div className="p-4 border-t border-[#121B2E] text-[11px] text-[#959595] grid grid-cols-9 uppercase tracking-wider bg-white/5">
            <span>Tanggal</span>
            <span>Pasangan</span>
            <span>Jenis</span>
            <span>Sisi</span>
            <span>Harga</span>
            <span>Jumlah</span>
            <span>Terisi</span>
            <span>Total</span>
            <span>Kondisi Pemicu</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-[#959595] text-sm py-12">
            <p>Anda tidak memiliki order Terbuka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
