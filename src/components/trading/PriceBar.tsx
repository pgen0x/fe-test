export default function PriceBar() {
  return (
    <div className="bg-[#0B1322]/50 px-6 py-4 flex items-center justify-between mx-4 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-12 min-w-max">
        <h2 className="text-2xl font-black tracking-tight">BTC/IDR</h2>

        <div className="flex items-center gap-10">
          <div className="space-y-1">
            <p className="text-sm font-bold">12.323</p>
            <p className="text-xs text-[#959595]">Rp 12, 323.00</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#959595]">Perubahan 24jam</p>
            <p className="text-sm font-bold text-[#E94B4B]">-687-5.28%</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#959595]">High 24jam</p>
            <p className="text-sm font-bold">13,010</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#959595]">Low 24jam</p>
            <p className="text-sm font-bold">11,860</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#959595]">Volume 24jam(BTC)</p>
            <p className="text-sm font-bold">42,556.70</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#959595]">Volume 24jam(IDR)</p>
            <p className="text-sm font-bold">520,707,732.80</p>
          </div>
        </div>
      </div>
    </div>
  );
}
