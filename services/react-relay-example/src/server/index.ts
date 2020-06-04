import express from 'express';
import { config } from './config';
import { globalErrorCatch, pageRouter } from './middlewares';
import { createLogger } from './utils';

const app = express();
const logger = createLogger('app');

app.use('/favicon.svg', express.static('public/favicon.svg'));
app.use('/assets', express.static('_dist/assets'));
app.use(pageRouter());
app.use(globalErrorCatch());

app.listen(config.app.port, () => {
    logger.info(`🚀 Relay server is up and running on http://localhost:${config.app.port}`);
});
