export const API_URL = 'http://localhost:8080/api/v1';

export interface Credentials {
    username: string;
    password: string;
}

export const token = localStorage.getItem('token');