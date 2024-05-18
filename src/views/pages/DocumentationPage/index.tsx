import { useEffect, useState } from "react";
import { DocumentIcon } from "../../base_svg";
import { IDocument, getDocumentsService } from "../../../../data/api/getDocuments";
import { serverUrl } from "../../../../config";

const DocumentationPage = () => {

    const [documentItems, setDocumentItems] = useState<IDocument[]>([])

    useEffect(() => {
        getDocumentsService().then((e) => {
            setDocumentItems(e.documents);
        })
    }, [])

    const downloadAllImages = async () => {
        try {
            const response = await fetch(`${serverUrl}/document/download-all`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'all_images.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Ошибка загрузки архива:', error);
        }
    };

    return (
        <section className="documentation section-offset">
            <div className="container">
                <h1 className="documentation__title section-title">
                    Документация
                </h1>
                {documentItems.length ? (
                    <ul className="documentation__list list-reset">
                        {documentItems.map((item) => (
                            <li className="documentation__item flex" key={item._id}>
                                <DocumentIcon />
                                <a
                                    className="documentation-file__name"
                                    href={item.img}
                                    target="_blank"
                                >{item.title}</a>
                            </li>
                        ))}
                        <li className="documentation__item flex">
                            <button className="documentation__btn btn btn-reset" onClick={downloadAllImages}>
                                Скачать все одним архивом
                            </button>
                        </li>
                    </ul>
                ) : (
                    <h2>Документов пока нет</h2>
                )}
            </div>
        </section >
    );
};

export { DocumentationPage }