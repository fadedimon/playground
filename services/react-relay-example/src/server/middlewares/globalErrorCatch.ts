import { createLogger } from '../utils';

export const globalErrorCatch = () => {
    const log = createLogger('globalErrorCatchMiddleware');

    return async (error, req, res, next) => {
        res.status(500);
        res.end('Ooops :(');

        log('INFO', `There's an error in your app :(`, {
            error: error.stack,
        });
    };
};
