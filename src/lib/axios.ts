// src/lib/axios.tsx

import axios from 'axios';
import { API_BASE_URL } from '@/config/api';


export const client_axios = axios.create({
    baseURL: API_BASE_URL
})

client_axios.interceptors.request.use(async (config) => {
        // Cria a variavel token
        let token: string | undefined;

        // Pega o token
        if (typeof window === 'undefined') {
            const { cookies } = await import('next/headers');
            const cookies_client = await cookies();
            token = cookies_client.get('auth_token')?.value;
        } else {
            token = document.cookie
                .split('; ')
                .find(row => row.startsWith('auth_token='))
                ?.split('=')[1];
        }

        
        // Adiciona o token no header Authorization
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {    // Trata erros de requisição
        return Promise.reject(error);
    }
);
