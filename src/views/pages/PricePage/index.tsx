import { useEffect, useState } from "react";
import { IProduct, getProductsService } from "../../../../data/api/getProducts";

const PricePage = () => {
    const [priceItems, setPriceItems] = useState<IProduct[]>([])

    useEffect(() => {
        getProductsService().then((e) => {
            setPriceItems(e?.products);
        })
    }, [])

    return (
        <section className="price-list section-offset">
            <div className="container">
                <h1 className="price-list__title section-title">Прайс-лист</h1>
                <p className="price-list__descr">
                    Здесь вы найдете подробную информацию о ценах на
                    комплектующие для ремонта сельскохозяйственной техники.
                    Наша компания предлагает профессиональные услуги по
                    диагностике, техническому обслуживанию и ремонту
                    сельхозтехники различных марок и моделей.
                </p>
                <ul className="price__list flex list-reset">
                    {priceItems?.map((item) => (
                        <li className="price__item flex">
                            <img
                                src={item.img}
                                alt="product-image"
                                className="price-item__img"
                            />
                            <div className="price-item__descr flex">
                                <h2 className="price-item__name">
                                    {item.title}
                                </h2>
                                <p className="price-item__sh-descr">
                                    {item.text}
                                </p>
                            </div>
                            <p className="price-item__price">{item.price}р.</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export { PricePage }