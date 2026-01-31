import { useState, useEffect } from "react";

export default function OrderBook() {
  const generateOrders = (basePrice: number) =>
    Array(10)
      .fill(null)
      .map((_) => ({
        price: (basePrice + (Math.random() * 10 - 5)).toFixed(0),
        amount: (Math.random() * 1000).toFixed(1),
        total: (Math.random() * 15000000).toLocaleString(undefined, {
          maximumFractionDigits: 3,
        }),
        depth: Math.floor(Math.random() * 100),
      }));

  const [sellOrders, setSellOrders] = useState(generateOrders(13272));
  const [buyOrders, setBuyOrders] = useState(generateOrders(13272));

  useEffect(() => {
    const interval = setInterval(() => {
      setSellOrders((prev) =>
        prev.map((order) => ({
          ...order,
          amount: (parseFloat(order.amount) + (Math.random() * 10 - 5)).toFixed(
            1,
          ),
          depth: Math.min(
            100,
            Math.max(0, order.depth + (Math.random() * 20 - 10)),
          ),
        })),
      );
      setBuyOrders((prev) =>
        prev.map((order) => ({
          ...order,
          amount: (parseFloat(order.amount) + (Math.random() * 10 - 5)).toFixed(
            1,
          ),
          depth: Math.min(
            100,
            Math.max(0, order.depth + (Math.random() * 20 - 10)),
          ),
        })),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const TableHeader = () => (
    <div className="grid grid-cols-3 px-4 py-2 text-[14px] text-[#959595]">
      <span>Harga IDR</span>
      <span className="text-right">Jumlah BTC</span>
      <span className="text-right">Total</span>
    </div>
  );

  return (
    <div className="w-full flex flex-col h-auto xl:h-full bg-[#0B1322]/50 xl:overflow-hidden rounded-lg">
      <div className="p-4  border-b border-[#121B2E]">
        <h3 className="font-bold text-white tracking-wide">Buku Order</h3>
      </div>

      <div className="flex-1 flex flex-col text-[14px]">
        <TableHeader />

        <div className="flex-1 min-h-[300px] space-y-3">
          {sellOrders.map((order, i) => (
            <div
              key={`sell-${i}`}
              className="grid grid-cols-3 px-4 py-[3px] relative group overflow-hidden"
            >
              <span className="text-[#E94B4B] font-medium z-10">
                {order.price}
              </span>
              <span className="text-right text-white z-10">{order.amount}</span>
              <span className="text-right text-white z-10 truncate">
                {order.total}
              </span>
              {order.depth > 0 && (
                <div
                  className="absolute right-0 top-0 bottom-0 bg-[#E94B4B]/10 z-0"
                  style={{ width: `${order.depth}%` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="py-5 px-4 flex items-center justify-between border-b border-[#121B2E] mx-2 my-2 rounded">
          <span className="text-xl font-bold text-white">12,323</span>
          <span className="text-[13px] text-[#959595]">Rp 12,323.00</span>
        </div>

        <TableHeader />

        <div className="flex-1 min-h-[300px] pb-4 space-y-3">
          {buyOrders.map((order, i) => (
            <div
              key={`buy-${i}`}
              className="grid grid-cols-3 px-4 py-[3px] relative group overflow-hidden"
            >
              <span className="text-[#12B76A] font-medium z-10">
                {order.price}
              </span>
              <span className="text-right text-white z-10">{order.amount}</span>
              <span className="text-right text-white z-10 truncate">
                {order.total}
              </span>
              {order.depth > 0 && (
                <div
                  className="absolute right-0 top-0 bottom-0 bg-[#12B76A]/10 z-0"
                  style={{ width: `${order.depth}%` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
