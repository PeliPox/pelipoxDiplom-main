import { methodDefault } from "./defaultAPI";

export interface ISlide {
    _id: string,
    title: string,
    img: string,
}

interface GetSlidesResponce {
    slides: Array<ISlide>
}

export const getSlidesService = () => methodDefault<GetSlidesResponce>('slide/get', {
    method: 'GET',
});