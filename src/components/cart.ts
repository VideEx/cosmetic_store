import {ProductType} from '../types/products.type';
import {Products} from './products';

export class Cart {
    private cartList: Array<string>;
    private products: Products;
    private productArray: ProductType[];
    private productList: HTMLElement | null;

    constructor() {
        this.cartList = JSON.parse((localStorage.getItem('cartProduct') as string));
        this.products = new Products;
        this.productList = document.getElementById('products-list');

        this.productArray = [];
        console.log(this.products)


        if (this.cartList) {
            let data = this.products.getData('full').then(response => {
                console.log(response);

                console.log(Object.keys(response))
                this.cartList.forEach(item => {

                    let currentType = item.split('-')[1];
                    let currentId = item.split('-')[2];

                    // console.log(currentType);
                    // console.log(response)

                    if (currentType in response) {
                        response[currentType].forEach((i: object) => {
                            // @ts-ignore
                            console.log(typeof i.id)
                            console.log(typeof currentId)

                            // @ts-ignore
                            if (i.id == currentId) {

                                this.productArray.push((i as ProductType))
                            }
                        })
                    }
                })

                console.log(this.productArray);

                this.products.showProducts(this.productArray)

            });


        }
        // console.log(data);
        // console.log(this.favList);

    }
}


