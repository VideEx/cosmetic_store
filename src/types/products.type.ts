export type ProductsType = {
    type: Array<ProductType>
}

export type ProductType = {
    id: number,
    name: string,
    desc: string,
    price: number,
    country: string,
    images: Array<string>
}