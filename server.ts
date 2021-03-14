import http from 'http';
import app from './api/app';

const server = http.createServer(app);

server.listen(5000, () => console.log("API Server started at 5000"));