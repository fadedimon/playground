import express from 'express';
import { config } from './config';
import { getPagesRouter } from './routes';

const app = express();

app.use(getPagesRouter());

app.listen(config.app.port, () => {
    console.log(`🚀 Relay server is running on http://localhost:${config.app.port}`);
});
