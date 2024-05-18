import { useEffect, useState } from "react"
import { ISertificate, getSertificateService } from "../../../../data/api/getSertificate"

const SertificatesPage = () => {
    const [sertificateItems, setSertificateItems] = useState<ISertificate[]>([])

    useEffect(() => {
        getSertificateService().then((e) => {
            setSertificateItems(e.sertificate);
        })
    }, [])

    return (
        <section className="sertificates section-offset">
            <div className="container">
                <h1 className="sertificate__title section-title">
                    Сертификаты
                </h1>
                <ul className="sertificate__list list-reset flex">
                        <li className="sertificate__item flex">
                            <img
                                src="/sertificates/sertificate_1.png"
                                alt="Сертификат-1"
                                className="sertificate__img"
                            />
                        </li>
                        <li className="sertificate__item flex">
                            <img
                                src="/sertificates/sertificate_2.png"
                                alt="Сертификат-2"
                                className="sertificate__img"
                            />
                        </li>
                    </ul>
            </div>
        </section>
    )
}

export { SertificatesPage }