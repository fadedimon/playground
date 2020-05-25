import { NextFunction, Request, Response } from 'express';

interface BaseController {
    new (req: Request, res: Response, next: NextFunction);
}

type _Request<T extends {}> = Request<T> & { params: T };

type RequestHandler<TParams extends {}, TController extends BaseController> = (
    c: InstanceType<TController>,
    req: _Request<TParams>,
) => any;

export const useController = <TParams extends {}, TController extends BaseController = BaseController>(
    Controller: TController,
    handleRequest: RequestHandler<TParams, TController>,
) => {
    return async (req: _Request<TParams>, res: Response, next: NextFunction) => {
        try {
            const controller = new Controller(req, res, next);

            await handleRequest(controller, req);
            console.log(1);
        } catch (err) {
            err.message = `Error: ${err.message}`;
            next(err);
        }
    };
};
