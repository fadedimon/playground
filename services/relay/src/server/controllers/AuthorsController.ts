import { BaseController } from './BaseController';
import { AuthorsPage } from '../../pages/AuthorsPage';
import { AuthorPage } from '../../pages/AuthorPage';

export class AuthorsController extends BaseController {
    renderAuthorsPage() {
        this.renderComponent(AuthorsPage, {
            componentProps: {},
        });
    }

    renderAuthorPage(authorId) {
        this.renderComponent(AuthorPage, {
            componentProps: {
                id: authorId,
            },
        });
    }
}
