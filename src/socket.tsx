import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_API_URL;

export const Socket = io(URL, { autoConnect: false });