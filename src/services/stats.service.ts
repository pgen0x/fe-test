import { api } from '../lib/api';

export const StatsService = {
  getDashboardStats: async (month: number, year: number) => {
    return api(`/stats/dashboard?month=${month}&year=${year}`, {
      method: 'GET',
    });
  },
};
