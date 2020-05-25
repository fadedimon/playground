import { BaseController } from './BaseController';
import { AuthorsPage } from '../../pages/AuthorsPage';
import { AuthorPage } from '../../pages/AuthorPage/AuthorPage';

export class AuthorsController extends BaseController {
    renderAuthorsPage() {
        this.renderComponent(AuthorsPage, {});
    }

    renderAuthorPage(authorId) {
        this.renderComponent(AuthorPage, { id: authorId });
    }
}
