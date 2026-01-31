import React, { useEffect, useState } from "react";
import type { Deposit } from "@/services/deposit.service";
import { DepositService } from "@/services/deposit.service";
import clsx from "clsx";

const DepositList: React.FC = () => {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<{
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  } | null>(null);

  useEffect(() => {
    const fetchDeposits = async () => {
      setIsLoading(true);
      try {
        const data = await DepositService.getDeposits({ page, limit: 10 });
        setDeposits(data.data.deposits);
        setPagination(data.data.pagination);
      } catch (error) {
        console.error("Failed to fetch deposits:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeposits();
  }, [page]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "REJECTED":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "PENDING":
        return "bg-yellow-500/10 text-[#D57C17] border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "Success";
      case "REJECTED":
        return "Rejected";
      case "PENDING":
        return "Pending";
      default:
        return status;
    }
  };

  const formatAmount = (amount: number, asset: string) => {
    if (asset === "BTC") {
      return amount.toFixed(8);
    }
    return amount.toLocaleString("id-ID");
  };

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in duration-700">
      <div className="bg-[#13213F]/40 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-8 py-6 border-b border-white/5">
          <h1 className="text-2xl font-bold text-white">List of Deposit</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500">
                <th className="px-8 py-6 font-semibold">No</th>
                <th className="px-8 py-6 font-semibold">Deposit ID</th>
                <th className="px-8 py-6 font-semibold">Asset</th>
                <th className="px-8 py-6 font-semibold text-right">
                  Amount Nett
                </th>
                <th className="px-8 py-6 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={5} className="px-8 py-6">
                      <div className="h-4 bg-white/5 rounded w-full"></div>
                    </td>
                  </tr>
                ))
              ) : deposits.length > 0 ? (
                deposits.map((deposit, index) => (
                  <tr
                    key={deposit.id}
                    className="group transition-all hover:bg-white/[0.02]"
                  >
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {(page - 1) * 10 + index + 1}
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-white/80">
                      {deposit.depositId}
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {deposit.asset}
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-white text-right">
                      {formatAmount(deposit.amountNett, deposit.asset)}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span
                        className={clsx(
                          "inline-flex items-center justify-center min-w-[100px] px-3 py-1.5 rounded-lg text-xs font-bold border",
                          getStatusStyle(deposit.status),
                        )}
                      >
                        {getStatusLabel(deposit.status)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-8 py-20 text-center text-gray-500"
                  >
                    No deposits found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {pagination && (
          <div className="flex items-center justify-between px-8 py-6 border-t border-white/5 bg-[#0D1421]/50">
            <span className="text-sm text-gray-400">
              Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
              {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
              of {pagination.total} entries
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                <span className="bg-yellow-500/10 text-[#D57C17] border border-yellow-500/20 px-4 py-2 rounded-lg text-sm font-bold">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
              </div>
              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositList;
