import express from 'express';
import http from 'http';
import cors from './middleware/cors';
import router from './router';

const port = 8080;

const app = express();

app.use(cors);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

app.use('/', router());
