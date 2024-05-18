import { useEffect, useState } from "react";
import { IGallery, getGalleryService } from "../../../../data/api/getGallery";

const GalleryPage = () => {
    const [galleryItems, setGalleryItems] = useState<IGallery[]>([])

    useEffect(() => {
        getGalleryService().then((e) => {
            setGalleryItems(e.gallery);
        })
    }, [])


    const galleryPage = (
        <section className="gallery">
            <div className="container">
                <h1 className="gallery__title section-title">Галерея</h1>
                {galleryItems.length ? (
                    <ul className="gallery__list flex list-reset">
                        {galleryItems.map((item) => (
                            <li className="gallery__item" key={item._id}>
                                <img
                                    className="gallery-img__item"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div className="gallery-text__block">
                                    <h3 className="gallery-item__caption">{item.title}</h3>
                                    <p className="gallery-item__descr">
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2>Галерея пуста</h2>
                )}
            </div>
        </section >
    )

    return galleryPage;
};

export { GalleryPage }