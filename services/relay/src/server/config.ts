import { ServerConfig } from './types';

const { HTTP_PORT } = process.env;

export const config: ServerConfig = {
    app: {
        port: Number(HTTP_PORT),
    },
};
