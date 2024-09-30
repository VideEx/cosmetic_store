export class GetLocalStorageData {

    private favCount: HTMLElement | null;
    private cartCount: HTMLElement | null;

    constructor() {

        this.favCount = document.getElementById('fav-count');
        this.cartCount = document.getElementById('cart-count');
    }

    getData(): void {

        let cartData = JSON.parse((localStorage.getItem('cartProduct') as string));
        let favData = JSON.parse((localStorage.getItem('favProduct') as string));

        let favCount = 0;
        let cartCount = 0;

        if (cartData) {
            cartCount = cartData.length;
        } else {
            cartCount = 0;
        }

        if (favData) {
            favCount = favData.length;
        } else {
            favCount = 0;
        }

        (this.favCount as HTMLElement).innerText =favCount.toString();
        (this.cartCount as HTMLElement).innerText = cartCount.toString();

        // return [favCount, cartCount];
    }
}