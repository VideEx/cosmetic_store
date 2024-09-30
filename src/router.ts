import {RouterType} from './types/router.type'
import {Main} from './components/main'
import {Products} from './components/products'
import {Cart} from './components/cart'
import {GetLocalStorageData} from './utilities/getLocalStorageData'
import { Favorites } from './components/favorites'

export class Router {

    private content: HTMLElement | null;
    private pageTitle: HTMLElement | null;
    private routes: RouterType[];
    private localData: GetLocalStorageData;


    constructor() {
        this.content = document.getElementById('content');
        this.pageTitle = document.getElementById('page-title');
        this.localData = new GetLocalStorageData();

        this.routes = [
            {
                title: 'Главная',
                template: 'template/main.html',
                load: () => {
                    new Main()
                },
                route: '#/'
            },
            {
                title: 'Ассортимент',
                template: 'template/products.html',
                load: () => {
                    new Products()
                },
                route: '#/products'
            },
            {
                title: 'Контакты',
                template: 'template/contacts.html',
                load: () => {
                },
                route: '#/contacts'
            },
            {
                title: 'Корзина',
                template: 'template/cart.html',
                load: () => {
                    new Cart()
                },
                route: '#/cart'
            },
            {
                title: 'Избранное',
                template: 'template/favorites.html',
                load: () => {
                    new Favorites()
                },
                route: '#/fav'
            }
        ]
    }

    async openRoute(): Promise<void> {
        const urlRoute : string = window.location.hash.split('?')[0];
        // console.log(newRoute);
        // console.log(window.location);

        const newRoute : RouterType | undefined = this.routes.find(route => {
            return route.route === urlRoute;
        })

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }

        if (!this.content || !this.pageTitle) {
            window.location.href = '#/';
            return;
        }

        this.content.innerHTML = await fetch(newRoute.template).then(response => response.text());
        this.pageTitle.innerText = newRoute.title;

        this.localData.getData();

        newRoute.load();
    }
}