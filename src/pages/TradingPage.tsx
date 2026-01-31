import PriceBar from "@/components/trading/PriceBar";
import OrderBook from "@/components/trading/OrderBook";
import CandleChart from "@/components/trading/CandleChart";
import TradeForms from "@/components/trading/TradeForms";
import MarketHistory from "@/components/trading/MarketHistory";
import OrderHistory from "@/components/trading/OrderHistory";
import MainLayout from "@/components/layout/MainLayout";

export default function TradingPage() {
  return (
    <MainLayout className="!p-0 flex flex-col h-screen overflow-hidden">
      {/* Trading Interface Container */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto xl:overflow-hidden">
        {/* Top Price Bar */}
        <div className="sticky top-0 z-20 bg-[#00050D]/80 backdrop-blur-md">
          <PriceBar />
        </div>

        {/* Main Columns Container - Responsive Grid/Flex */}
        <div className="flex flex-col xl:flex-row w-full h-auto xl:flex-1 xl:min-h-0 px-4 gap-4 mt-4 xl:mt-6 overflow-visible xl:overflow-hidden">
          {/* Middle: Chart and Trade Forms. Main content. Appearing FIRST on mobile */}
          <div className="w-full xl:flex-1 flex flex-col xl:min-h-0 order-1 xl:order-2 overflow-visible xl:overflow-y-auto custom-scrollbar xl:pr-1 gap-4">
            <div className="flex-none h-[500px] md:h-[575px] overflow-hidden z-0 rounded-lg">
              <CandleChart />
            </div>
            <TradeForms />
          </div>

          {/* Order Book: Second on mobile, Left on desktop */}
          <div className="w-full xl:w-[320px] flex-none flex flex-col order-2 xl:order-1 h-auto xl:h-full">
            <OrderBook />
          </div>

          {/* Market History: Third on mobile, Right on desktop */}
          <div className="w-full xl:w-[360px] flex-none flex flex-col order-3 xl:order-3 h-auto xl:h-full">
            <MarketHistory />
          </div>
        </div>

        {/* Bottom: Order History. Full width at the very bottom. */}
        <div className="px-4 pb-4 mt-0 xl:mt-6">
          <OrderHistory />
        </div>
      </div>
    </MainLayout>
  );
}
