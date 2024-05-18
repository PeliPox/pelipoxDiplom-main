import { methodDefault } from "./defaultAPI";

export interface IDocument {
    _id: string,
    title: string,
    img: string,
}

interface GetDocumentsResponce {
    documents: Array<IDocument>
}

export const getDocumentsService = () => methodDefault<GetDocumentsResponce>('document/get', {
    method: 'GET',
});