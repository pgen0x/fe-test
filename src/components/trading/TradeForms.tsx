import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TradeForms() {
  const [buyPrice, setBuyPrice] = useState("12332");
  const [buyAmount, setBuyAmount] = useState("0");
  const [sellPrice, setSellPrice] = useState("12332");
  const [sellAmount, setSellAmount] = useState("0");

  const InputRow = ({
    label,
    suffix,
    value,
    onChange,
  }: {
    label: string;
    suffix: string;
    value: string;
    onChange: (val: string) => void;
  }) => (
    <div className="bg-white/10 border border-white/[0.03] rounded-sm px-4 py-2.5 flex items-center justify-between mb-2 focus-within:border-[#D57C17]/50 transition-colors">
      <span className="text-white text-[13px] font-bold shrink-0">{label}</span>
      <div className="flex items-center gap-3 flex-1 justify-end ml-4">
        <input
          type="number"
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-right text-white text-[14px] w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <div className="flex items-center gap-1 text-white/40 shrink-0">
          <span className="text-[11px] mb-[1px]">{suffix}</span>
          <ChevronDown className="h-3 w-3" strokeWidth={3} />
        </div>
      </div>
    </div>
  );

  const buyTotal = (
    parseFloat(buyPrice) * parseFloat(buyAmount) || 0
  ).toLocaleString();
  const sellTotal = (
    parseFloat(sellPrice) * parseFloat(sellAmount) || 0
  ).toLocaleString();

  return (
    <div className="bg-[#0B1322]/30 p-4 pt-0 flex flex-col gap-6 mt-4">
      {/* Header */}
      <div className="space-y-4 py-4 border-b border-[#121B2E]">
        <h3 className="text-white font-bold text-[16px]">Spot</h3>
        <Tabs defaultValue="limit" className="w-full">
          <TabsList className="bg-transparent gap-4 p-0 h-auto w-full justify-start border-none">
            <TabsTrigger
              value="limit"
              className="bg-transparent px-0 text-[12px] font-bold text-[#959595] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none border-none shadow-none h-auto pb-1 transition-none"
            >
              Limit
            </TabsTrigger>
            <TabsTrigger
              value="pasar"
              className="bg-transparent px-0 text-[12px] font-bold text-[#959595] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none border-none shadow-none h-auto pb-1 transition-none"
            >
              Pasar
            </TabsTrigger>
            <TabsTrigger
              value="stop"
              className="bg-transparent px-0 text-[12px] font-bold text-[#959595] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none border-none shadow-none h-auto pb-1 transition-none"
            >
              Stop Limit
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex gap-8">
        {/* Buy Form */}
        <div className="flex-1 space-y-3">
          <InputRow
            label="Harga"
            suffix="IDR"
            value={buyPrice}
            onChange={setBuyPrice}
          />
          <InputRow
            label="Jumlah"
            suffix="BTC"
            value={buyAmount}
            onChange={setBuyAmount}
          />
          <InputRow
            label="Total"
            suffix="IDR"
            value={buyTotal}
            onChange={() => {}}
          />

          <div className="flex justify-between text-[12px] py-1">
            <span className="text-white font-medium">Tersedia</span>
            <span className="text-white font-bold">1.000.000 IDR</span>
          </div>

          <Button
            variant="ghost"
            className="w-full rounded-full btn-gradient-border px-8 text-white hover:opacity-80 transition-opacity"
          >
            Beli BTC
          </Button>
        </div>

        {/* Sell Form */}
        <div className="flex-1 space-y-3">
          <InputRow
            label="Harga"
            suffix="IDR"
            value={sellPrice}
            onChange={setSellPrice}
          />
          <InputRow
            label="Jumlah"
            suffix="BTC"
            value={sellAmount}
            onChange={setSellAmount}
          />
          <InputRow
            label="Total"
            suffix="IDR"
            value={sellTotal}
            onChange={() => {}}
          />

          <div className="flex justify-between text-[12px] py-1">
            <span className="text-white font-medium">Tersedia</span>
            <span className="text-white font-bold">1.000.000 BTC</span>
          </div>

          <Button
            variant="ghost"
            className="w-full rounded-full btn-gradient-border px-8 text-white hover:opacity-80 transition-opacity"
          >
            Jual BTC
          </Button>
        </div>
      </div>
    </div>
  );
}
