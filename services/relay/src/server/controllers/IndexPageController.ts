import { IndexPage } from '../../pages/IndexPage';
import { BaseController } from './BaseController';

export class IndexPageController extends BaseController {
    renderIndexPage() {
        this.renderComponent(IndexPage, {
            componentProps: {},
        });
    }
}
