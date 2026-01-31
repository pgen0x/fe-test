const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8888/api/v1';

interface RequestOptions extends RequestInit {
    body?: any;
}

export const api = async (endpoint: string, options: RequestOptions = {}) => {
    const { body, headers, ...rest } = options;
    
    // Auto-add Authorization header if token exists
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...rest,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...headers,
        } as Record<string, string>,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Something went wrong');
    }

    return response.json();
};
