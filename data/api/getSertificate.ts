import { methodDefault } from "./defaultAPI";

export interface ISertificate {
    _id: string,
    title: string,
    img: string,
}

interface GetSertificateResponce {
    sertificate: Array<ISertificate>
}

export const getSertificateService = () => methodDefault<GetSertificateResponce>('sertificate/get', {
    method: 'GET',
});