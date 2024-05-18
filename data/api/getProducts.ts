import { methodDefault } from "./defaultAPI";

export interface IProduct {
    _id: string,
    title: string,
    text: string,
    price: number,
    img: string,
}

interface GetProductsResponce {
    products: Array<IProduct>
}

export const getProductsService = () => methodDefault<GetProductsResponce>('products/get', {
    method: 'GET',
});