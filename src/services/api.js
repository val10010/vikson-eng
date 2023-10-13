import axios from 'axios';

// Default instance
export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://api-routes-rest-git-main-val10010.vercel.app',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});
