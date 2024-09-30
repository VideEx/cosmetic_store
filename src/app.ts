import './../styles.less';
import {Router} from './router';
// import {Router} from './router';

class App {

    private router : Router;
    constructor() {
        this.router = new Router();

        window.addEventListener('DOMContentLoaded', this.changedRouter.bind(this));
        window.addEventListener('popstate', this.changedRouter.bind(this));
    }

    changedRouter(): void {
        this.router.openRoute();
    }

}

(new App());