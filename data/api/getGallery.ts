import { methodDefault } from "./defaultAPI";

export interface IGallery {
    _id: string,
    title: string,
    text: string,
    img: string,
}

interface GetGalleryResponce {
    gallery: Array<IGallery>
}

export const getGalleryService = () => methodDefault<GetGalleryResponce>('gallery/get', {
    method: 'GET',
});