import axios from 'axios';

// Default instance
export const instance = axios.create({
    baseURL: '',
    responseType: 'json'
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
