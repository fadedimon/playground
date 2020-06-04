import { createLogger } from '../utils';

export const globalErrorCatch = () => {
    const logger = createLogger('globalErrorCatchMiddleware');

    return async (error, req, res, next) => {
        res.status(500);
        res.end('Ooops :(');

        logger.error(`There's an error`, {
            error: error.stack,
        });
    };
};
