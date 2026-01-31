import { api } from '../lib/api';

export const AuthService = {
    login: async (credentials: any) => {
        return api('/auth/login', {
            method: 'POST',
            body: credentials,
        });
    },
    
    register: async (userData: any) => {
        return api('/auth/register', {
            method: 'POST',
            body: userData,
        });
    },

    getMe: async () => {
        return api('/auth/me', {
            method: 'GET',
        });
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};
