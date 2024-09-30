import {ProductsType, ProductType} from '../types/products.type'
import {GetLocalStorageData} from '../utilities/getLocalStorageData'

export class Products {

    private productList: HTMLElement | null;
    private productError: HTMLElement | null;
    // private activeTypeButton: Element | null;
    private localData: GetLocalStorageData;

    private filtersBtn: Array<string>;

    // private currentCategory: string | null;

    constructor() {
        this.productList = document.getElementById('products-list');
        this.productError = document.getElementById('product-error');
        this.filtersBtn = ['creams', 'smells', 'showers'];
        // this.activeTypeButton = document.getElementsByClassName('active')[0];
        this.localData = new GetLocalStorageData();

        this.init();
    }

    init(): void {
        this.filtersBtn.forEach(btn => {
            let btnEl = document.getElementById(btn);

            if (btnEl) {
                btnEl.onclick = () => {
                    console.log('Hf,odofv')
                    console.log(btnEl)

                    this.filtersBtn.forEach(item => {
                        (document.getElementById(item) as HTMLElement).classList.remove('active');
                    });

                    btnEl!.classList.add('active');

                    this.getData('part');
                }
            }

        })

        this.getData('part');
    }

    async getData(type: 'full' | 'part'): Promise<any> {
        const response = await fetch('./data/products.json')
            .then(response => response.text())
            .catch(error => {
                console.log('Возникла ошибка');
                (this.productError as HTMLElement).style.display = 'block';
            });

        const result = JSON.parse((response as string));

        if (!result) {
            (this.productError as HTMLElement).style.display = 'block';
        }

        if (type === 'part') {
            let activeTypeButton = document.getElementsByClassName('active')[0];
            if (activeTypeButton) {
                let currentCategory = (activeTypeButton as Element).id;
                let data = result[currentCategory];
                this.showProducts(data, currentCategory);

                // this.showProducts(data, currentCategory);
            }

        } else if (type === 'full') {
            return result;
        }

    }

    showProducts(data: ProductType[], category?: string): void {
        // showProducts(): void {

        (this.productList as HTMLElement).innerHTML = '';
        console.log(this.productList);
        console.log(data)
        data.forEach(item => {
            let productItem = document.createElement('div');
            productItem.classList.add('product');

            let productImg = document.createElement('div');
            productImg.classList.add('product__img');

            if (!item.images) {
                // productImg.innerHTML = `<img src="img/nophoto.png" alt="Фото отсутствует">`
                productImg.style.backgroundImage = "url('img/nophoto.png')";
            } else {
                productImg.style.backgroundImage = "url(`img/${item.images[0]})`)";

                // item.images.forEach(img => {
                //
                //     let image = document.createElement('img');
                //     image.src = `img/${img}`;
                //     productImg.appendChild(image);
                // })
            }
            ;

            let productInfo = document.createElement('div');
            productInfo.classList.add('product__info');

            let productTitle = document.createElement('h3');
            productTitle.classList.add('product__title');
            productTitle.innerText = item.name;

            let productCountry = document.createElement('p');
            productCountry.classList.add('product__desc');
            productCountry.innerText = `Страна: ${item.country}`;

            let productDesc = document.createElement('p');
            productDesc.classList.add('product__desc');
            productDesc.innerText = item.desc;

            let productPrice = document.createElement('p');
            productPrice.classList.add('product__price');
            productPrice.innerText = `${item.price.toString()} ₽`;

            let productAction = document.createElement('div');
            productAction.classList.add('product__action');

            let addToCartButton = document.createElement('button');
            addToCartButton.innerText = 'В корзину';
            addToCartButton.id = `cart-${category}-${item.id}`;

            addToCartButton.onclick = () => {
                let data = JSON.parse((localStorage.getItem('cartProduct') as string));

                if (data) {
                    if (data.find((item: string) => item === `${addToCartButton.id}`) === undefined) {
                        data.push(`${addToCartButton.id}`)
                    }
                } else {
                    data = [`${addToCartButton.id}`]
                }

                localStorage.setItem('cartProduct', JSON.stringify(data));
                this.localData.getData();

            };

            let addToFavButton = document.createElement('button');
            addToFavButton.innerText = 'В избранное';
            addToFavButton.id = `fav-${category}-${item.id}`;

            addToFavButton.onclick = () => {
                let data = JSON.parse((localStorage.getItem('favProduct') as string));

                if (data) {
                    if (data.find((item: string) => item === `${addToFavButton.id}`) === undefined) {
                        data.push(`${addToFavButton.id}`)
                    }
                } else {
                    data = [`${addToFavButton.id}`]
                }

                localStorage.setItem('favProduct', JSON.stringify(data));
                this.localData.getData();

            };

            productAction.appendChild(addToCartButton);
            productAction.appendChild(addToFavButton);

            productInfo.appendChild(productTitle);
            productInfo.appendChild(productCountry);
            productInfo.appendChild(productDesc);
            productInfo.appendChild(productPrice);
            productInfo.appendChild(productAction);

            productItem.appendChild(productImg);
            productItem.appendChild(productInfo);

            (this.productList as HTMLElement).appendChild(productItem)
        })
    }
}