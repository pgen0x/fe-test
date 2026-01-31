import React, { useEffect, useState } from "react";
import type { Member } from "@/services/member.service";
import { MemberService } from "@/services/member.service";
import clsx from "clsx";

const MemberList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState<{
    totalCount: number;
    currentPage: number;
    limit: number;
    totalPages: number;
  } | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true);
      try {
        const data = await MemberService.getMembers({
          page,
          limit: 10,
          search,
        });
        setMembers(data.data.users);
        setPagination({
          totalCount: data.data.totalCount,
          currentPage: data.data.currentPage,
          totalPages: data.data.totalPages,
          limit: 10,
        });
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [page, search]);

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in duration-700">
      <div className="bg-[#13213F]/40 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">List of Member</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search member..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // Reset to first page on search
              }}
              className="bg-[#0D1421] text-white border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-500/50 w-64 placeholder-gray-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500">
                <th className="px-8 py-6 font-semibold">No</th>
                <th className="px-8 py-6 font-semibold">Email</th>
                <th className="px-8 py-6 font-semibold">Username</th>
                <th className="px-8 py-6 font-semibold">Name</th>
                <th className="px-8 py-6 font-semibold text-center">Status</th>
                <th className="px-8 py-6 font-semibold text-center">Kyc</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={6} className="px-8 py-6">
                      <div className="h-4 bg-white/5 rounded w-full"></div>
                    </td>
                  </tr>
                ))
              ) : members.length > 0 ? (
                members.map((member, index) => (
                  <tr
                    key={member.id}
                    className="group transition-all hover:bg-white/[0.02]"
                  >
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {(page - 1) * 10 + index + 1}
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {member.email}
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {member.username}
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-white/80">
                      {member.firstName} {member.lastName}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span
                        className={clsx(
                          "inline-flex items-center justify-center min-w-[80px] px-2 py-1 rounded-lg text-xs font-bold border",
                          member.status === "Active"
                            ? "bg-[#01B574]/10 text-[#01B574] border-[#01B574]/20"
                            : "bg-gray-500/10 text-gray-500 border-gray-500/20",
                        )}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span
                        className={clsx(
                          "inline-flex items-center justify-center min-w-[80px] px-2 py-1 rounded-lg text-xs font-bold border",
                          member.isKycVerified
                            ? "bg-[#01B574]/10 text-[#01B574] border-[#01B574]/20"
                            : "bg-[#2D3748] text-white/50 border-white/5",
                        )}
                      >
                        {member.isKycVerified ? "Verified" : "No-KYC"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-8 py-20 text-center text-gray-500"
                  >
                    No members found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {pagination && (
          <div className="flex items-center justify-between px-8 py-6 border-t border-white/5 bg-[#0D1421]/50">
            <span className="text-sm text-gray-400">
              Showing {(pagination.currentPage - 1) * pagination.limit + 1} to{" "}
              {Math.min(
                pagination.currentPage * pagination.limit,
                pagination.totalCount,
              )}{" "}
              of {pagination.totalCount} entries
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
                  Page {pagination.currentPage} of {pagination.totalPages}
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

export default MemberList;
