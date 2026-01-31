import { api } from '@/lib/api';

export interface Withdraw {
  id: number;
  withdrawId: string;
  asset: string;
  amount: number;
  amountNett: number;
  status: 'PENDING' | 'SUCCESS' | 'REJECTED';
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface WithdrawResponse {
  withdraws: Withdraw[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const WithdrawService = {
  getWithdraws: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    asset?: string;
    status?: string;
  }) => {
    const query = new URLSearchParams(params as any).toString();
    return api(`/withdraws${query ? `?${query}` : ""}`, {
      method: "GET",
    });
  },
};
