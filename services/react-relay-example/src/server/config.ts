const { HTTP_PORT } = process.env;

export const config = {
    app: {
        port: Number(HTTP_PORT),
    },
};
