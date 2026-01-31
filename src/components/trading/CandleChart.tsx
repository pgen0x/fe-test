import { useEffect, useRef } from "react";

export default function CandleChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear any existing instances
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
      backgroundColor: "rgba(0, 5, 13, 1)",
      gridColor: "rgba(255, 255, 255, 0.05)",
      hide_side_toolbar: false,
    });

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.height = "100%";
    widget.style.width = "100%";

    container.current.appendChild(widget);
    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#00050D] overflow-hidden rounded-lg h-full">
      {/* Header */}
      <div className="flex px-4 py-3 justify-between items-center bg-white/10 rounded-t-lg text-[13px]">
        <div className="flex items-center gap-2">
          <button className="text-white/60 hover:text-white transition-colors">
            Waktu
          </button>
          <button className="text-yellow-500 font-medium">15M</button>
          <button className="text-white/60 hover:text-white transition-colors">
            15M
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            1J
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            4J
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            1H
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            1M
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors">
              Asli
            </button>
            <button className="text-yellow-500 font-medium">
              Trading View
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              Kedalaman
            </button>
          </div>
        </div>
      </div>

      {/* Data Info Bar */}
      <div className="px-4 py-1 flex items-center gap-4 text-[12px] bg-white/10 border-b border-white/5 mt-1">
        <span className="text-white">2025/02/05</span>
        <div className="flex items-center gap-3">
          <span className="text-white/60">
            Buka: <span className="text-[#12B76A]">12227</span>
          </span>
          <span className="text-white/60">
            Tinggi: <span className="text-[#12B76A]">12412</span>
          </span>
          <span className="text-white/60">
            Renda: <span className="text-[#12B76A]">12072</span>
          </span>
          <span className="text-white/60">
            Tutup: <span className="text-[#12B76A]">12323</span>
          </span>
          <span className="text-white/60">
            Perubahan: <span className="text-[#12B76A]">0.19%</span>
          </span>
          <span className="text-white/60">
            Amplitudo: <span className="text-[#12B76A]">2.76%</span>
          </span>
        </div>
      </div>

      <div className="relative flex-1 min-h-[400px] w-full h-full">
        <div
          ref={container}
          className="tradingview-widget-container h-full w-full"
        />
      </div>
    </div>
  );
}
