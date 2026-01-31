import { api } from '@/lib/api';

export interface Deposit {
  id: number;
  depositId: string;
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

export interface DepositResponse {
  deposits: Deposit[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const DepositService = {
  getDeposits: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    asset?: string;
    status?: string;
  }) => {
    const query = new URLSearchParams(params as any).toString();
    return api(`/deposits${query ? `?${query}` : ""}`, {
      method: "GET",
    });
  },
};
