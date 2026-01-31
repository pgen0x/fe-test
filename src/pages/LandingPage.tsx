import MarketOverview from "@/components/dashboard/MarketOverview";
import MarketTable from "@/components/dashboard/MarketTable";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <MainLayout className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <Link to="/trade">
          <h1 className="text-4xl font-bold hover:text-yellow-500 transition-colors inline-block cursor-pointer">
            Pasar
          </h1>
        </Link>
        <p className="text-white/50">
          Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </section>

      {/* Stats Grid */}
      <section>
        <MarketOverview />
      </section>

      {/* Market Table */}
      <section className="bg-[linear-gradient(0deg,#010C28_0%,rgba(2,21,69,0)_81.23%)] rounded-xl  p-8">
        <MarketTable />
      </section>
    </MainLayout>
  );
}
