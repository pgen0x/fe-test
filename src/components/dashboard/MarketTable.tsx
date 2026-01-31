import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { useState, useMemo } from "react";

const SortIcon = ({ className }: { className?: string }) => (
  <svg
    width="9"
    height="14"
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0.752053 7.67158H8.18955C8.8583 7.67158 9.19268 8.53154 8.7208 9.03291L5.00205 12.9841C4.7083 13.2962 4.2333 13.2962 3.94268 12.9841L0.220803 9.03291C-0.251072 8.53154 0.0833026 7.67158 0.752053 7.67158ZM8.7208 4.18525L5.00205 0.234082C4.7083 -0.0780273 4.2333 -0.0780273 3.94268 0.234082L0.220803 4.18525C-0.251072 4.68662 0.0833026 5.54658 0.752053 5.54658H8.18955C8.8583 5.54658 9.19268 4.68662 8.7208 4.18525Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

type SortConfig = {
  key: keyof (typeof initialData)[0] | null;
  direction: "ascending" | "descending";
};

const initialData = [
  {
    pair: "BTC/DAI",
    price: "98,832.93 / Rp 1,612,213,281.72",
    price_val: 98832.93,
    change: "+3.89%",
    change_val: 3.89,
    highLow: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    marketCap_val: 31953,
    volume: "1.538M",
    volume_val: 1.538,
    isFavorite: true,
  },
  {
    pair: "ETH/DAI",
    price: "98,832.93 / Rp 1,612,213,281.72",
    price_val: 98832.93,
    change: "+3.89%",
    change_val: 3.89,
    highLow: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    marketCap_val: 31953,
    volume: "1.538M",
    volume_val: 1.538,
    isFavorite: false,
  },
  {
    pair: "XRP/ETH",
    price: "98,832.93 / Rp 1,612,213,281.72",
    price_val: 98832.93,
    change: "-3.89%",
    change_val: -3.89,
    highLow: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    marketCap_val: 31953,
    volume: "1.538M",
    volume_val: 1.538,
    isFavorite: false,
  },
  {
    pair: "BTC/DAI",
    price: "98,832.93 / Rp 1,612,213,281.72",
    price_val: 98832.93,
    change: "+3.89%",
    change_val: 3.89,
    highLow: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    marketCap_val: 31953,
    volume: "1.538M",
    volume_val: 1.538,
    isFavorite: false,
  },
  {
    pair: "BTC/DAI",
    price: "98,832.93 / Rp 1,612,213,281.72",
    price_val: 98832.93,
    change: "+3.89%",
    change_val: 3.89,
    highLow: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    marketCap_val: 31953,
    volume: "1.538M",
    volume_val: 1.538,
    isFavorite: false,
  },
];

export default function MarketTable() {
  const [marketData, setMarketData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  const sortedData = useMemo(() => {
    const sortableItems = [...marketData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a: any, b: any) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [marketData, sortConfig]);

  const requestSort = (key: keyof (typeof initialData)[0]) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const toggleFavorite = (pair: string) => {
    setMarketData((prev) =>
      prev.map((item) =>
        item.pair === pair ? { ...item, isFavorite: !item.isFavorite } : item,
      ),
    );
  };

  const SortableHeader = ({
    label,
    sortKey,
    align = "left",
  }: {
    label: string;
    sortKey: keyof (typeof initialData)[0];
    align?: "left" | "right";
  }) => (
    <TableHead
      className={`${align === "right" ? "text-right" : ""} text-white/50 cursor-pointer transition-colors group`}
      onClick={() => requestSort(sortKey)}
    >
      <div
        className={`flex items-center gap-1 text-nowrap group-hover:text-white ${align === "right" ? "justify-end" : ""}`}
      >
        {label}
        <SortIcon className="text-white/50 group-hover:text-white" />
      </div>
    </TableHead>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-8 border-b border-white/5 pb-2">
        <h2 className="text-[24px] font-bold text-white">Favorit</h2>
        <Tabs defaultValue="IDR" className="w-auto flex-1 overflow-hidden">
          <div className="w-full overflow-x-auto scrollbar-hide">
            <TabsList className="bg-transparent gap-8 text-[16px] inline-flex w-max min-w-0">
              <TabsTrigger
                value="IDR"
                className="data-[state=active]:text-[#D57C17] data-[state=active]:border-b-2 data-[state=active]:border-[#D57C17] rounded-none bg-transparent px-0 text-white/50 flex-shrink-0"
              >
                IDR
              </TabsTrigger>
              <TabsTrigger
                value="USD"
                className="data-[state=active]:text-[#D57C17] data-[state=active]:border-b-2 data-[state=active]:border-[#D57C17] rounded-none bg-transparent px-0 text-white/50 flex-shrink-0"
              >
                USD
              </TabsTrigger>
              <TabsTrigger
                value="BNB"
                className="data-[state=active]:text-[#D57C17] data-[state=active]:border-b-2 data-[state=active]:border-[#D57C17] rounded-none bg-transparent px-0 text-white/50 flex-shrink-0"
              >
                BNB
              </TabsTrigger>
              <TabsTrigger
                value="BTC"
                className="data-[state=active]:text-[#D57C17] data-[state=active]:border-b-2 data-[state=active]:border-[#D57C17] rounded-none bg-transparent px-0 text-white/50 flex-shrink-0"
              >
                BTC
              </TabsTrigger>
              <TabsTrigger
                value="ALTS"
                className="data-[state=active]:text-[#D57C17] data-[state=active]:border-b-2 data-[state=active]:border-[#D57C17] rounded-none bg-transparent px-0 text-white/50 flex-shrink-0"
              >
                ALTS
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <SortableHeader label="Pasangan" sortKey="pair" />
              <SortableHeader
                label="Harga Terakhir"
                sortKey="price_val"
                align="right"
              />
              <SortableHeader
                label="Perubahan 24jam"
                sortKey="change_val"
                align="right"
              />
              <SortableHeader
                label="Tertinggi / Terendah 24jam"
                sortKey="price_val" // Using price_val as proxy for highLow sort
                align="right"
              />
              <SortableHeader
                label="Kapitalisasi Pasar"
                sortKey="marketCap_val"
                align="right"
              />
              <SortableHeader
                label="Volume 24 Jam"
                sortKey="volume_val"
                align="right"
              />
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item, i) => (
              <TableRow
                key={i}
                className="border-white/5 hover:bg-white/5 transition-colors"
              >
                <TableCell className="flex items-center gap-4 font-medium text-white text-nowrap">
                  <button
                    onClick={() => toggleFavorite(item.pair)}
                    className="focus:outline-none transition-transform active:scale-125"
                    aria-label="Toggle Favorite"
                  >
                    <Star
                      className={`h-4 w-4 transition-colors ${
                        item.isFavorite
                          ? "fill-[#FBB05B] text-[#D57C17]"
                          : "text-[#D9D9D9] fill-[#D9D9D9]"
                      }`}
                    />
                  </button>
                  {item.pair}
                </TableCell>
                <TableCell className="text-right text-white/70 text-nowrap">
                  {item.price}
                </TableCell>
                <TableCell
                  className={`text-right ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                >
                  {item.change}
                </TableCell>
                <TableCell className="text-right text-white/70 text-nowrap">
                  {item.highLow}
                </TableCell>
                <TableCell className="text-right text-white/70 text-nowrap">
                  {item.marketCap}
                </TableCell>
                <TableCell className="text-right text-white/70 text-nowrap">
                  {item.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
