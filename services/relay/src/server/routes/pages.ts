import { Router, Request, Response, NextFunction } from 'express';
import { IndexPageController, AuthorsController } from '../controllers';
import { useController } from '@shooting-range/server-utils';

export const getPagesRouter = () => {
    const router = Router();

    router.get(
        '/',
        useController(IndexPageController, (c) => c.renderIndexPage()),
    );

    router.get(
        '/authors',
        useController(AuthorsController, (c) => c.renderAuthorsPage()),
    );

    router.get(
        '/authors/:authorId',
        useController<{ authorId: string }>(AuthorsController, (c, req) => {
            c.renderAuthorPage(req.params.authorId);
        }),
    );

    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.send(err);
    });

    return router;
};
