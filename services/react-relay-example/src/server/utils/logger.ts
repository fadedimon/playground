type Type = 'INFO' | 'WARN' | 'ERROR';

export const createLogger = (name: string) => {
    const log = (type: Type, message: string, data: Object = {}) => {
        const date = new Date().toISOString();

        console.log(
            [
                '>',
                ...Object.entries({ date, type, name, message, ...data }).map(([key, value]) => `${key}=${value}`),
            ].join('\t'),
        );
    };

    return {
        info(message: string, data?: Object) {
            log('INFO', message, data);
        },
        warn(message: string, data?: Object) {
            log('WARN', message, data);
        },
        error(message: string, data?: Object) {
            log('ERROR', message, data);
        },
    };
};
