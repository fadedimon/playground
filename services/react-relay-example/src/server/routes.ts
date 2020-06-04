import { Router, Request, Response, NextFunction } from 'express';
import { PagesController } from './controllers';
import { useController } from '@shooting-range/server-utils';

export const getPagesRouter = () => {
    const router = Router();

    router.get(
        '/',
        useController(PagesController, (c) => c.renderIndexPage()),
    );

    router.get(
        '/countries/:countryId',
        useController<{ countryId: string }, typeof PagesController>(PagesController, (c, { params: { countryId } }) =>
            c.renderCountryPage(countryId),
        ),
    );

    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.end('Error :(');
        console.log(err);
    });

    return router;
};
