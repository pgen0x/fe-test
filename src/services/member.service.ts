import { api } from '@/lib/api';

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string; // Added username
  role: string;
  status: string; // Added status
  isKycVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MemberResponse {
  users: Member[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export const MemberService = {
  getMembers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }) => {
    const query = new URLSearchParams(params as any).toString();
    return api(`/users${query ? `?${query}` : ""}`, {
      method: "GET",
    });
  },
};
