import { SalesIcon } from "../../base_svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { address, email, phoneNumber } from "../../../../config";
import { useEffect, useState } from "react";
import { ISlide, getSlidesService } from "../../../../data/api/getSlides";

const MainPage = () => {
    const [sliderItems, setSliderItems] = useState<ISlide[]>([])

    useEffect(() => {
        getSlidesService().then((e) => {
            setSliderItems(e?.slides);
        })
    }, [])

    return (
        <main className="main-section">
            <section className="main" id="main">
                <div className="container">
                    <div className="main__content flex">
                        <h1 className="main__title">
                            Производственная компания ООО &laquo;Селянин&raquo;
                        </h1>
                        <p className="main__descr">
                            Компания &laquo;СЕЛЯНИН&raquo; осуществляет
                            производство автожгутов и&nbsp;поставки расходных
                            комплектующих (подшипники, ремни, фильтры) для
                            сельхозтехники и&nbsp;грузового автотранспорта
                            российского и&nbsp;зарубежного производства.
                        </p>
                        <a className="main__btn main-btn__phone" href="tel:+79381111682">
                            Позвонить
                        </a>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-offset">
                <div className="container services__container">
                    <h2 className="services__title section-title">Услуги</h2>
                    <p className="section-descr services__descr">
                        Наш раздел услуг по&nbsp;ремонту сельхозтехники
                        предлагает полный спектр услуг для обслуживания
                        и&nbsp;восстановления сельскохозяйственной техники.
                        От&nbsp;диагностики до&nbsp;ремонта различных узлов
                        и&nbsp;агрегатов&nbsp;&mdash; мы&nbsp;готовы помочь
                        быстро и&nbsp;качественно восстановить вашу технику.
                    </p>
                    <ul className="services__items list-reset flex">
                        <li className="services__item flex">
                            <svg
                                className="services-item__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="70"
                                height="70"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="m23.013,3.776l-4.598,4.598c-.781.781-2.047.781-2.828,0-.781-.781-.781-2.047,0-2.828L20.172.959l-.292-.148c-1.062-.539-2.2-.812-3.381-.812-4.136,0-7.5,3.364-7.5,7.5,0,.959.178,1.886.531,2.767L.918,18.879c-1.168,1.17-1.168,3.072,0,4.242.585.585,1.353.877,2.121.877s1.537-.292,2.122-.877l8.631-8.631c.865.339,1.773.51,2.708.51,4.136,0,7.5-3.364,7.5-7.5,0-1.208-.283-2.366-.841-3.442l-.146-.282Z"
                                />
                                <defs>
                                    <clipPath id="clip0_7_34">
                                        <rect
                                            width="70"
                                            height="70"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="services-item__title">Ремонт</h3>
                            <p className="services-item__descr">
                                Быстрое и&nbsp;качественное восстановление
                                работоспособности вашей техники.
                            </p>
                        </li>
                        <li className="services__item flex">
                            <svg
                                className="services-item__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                width="70"
                                height="70"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="m20,3v10H4V3c0-1.654,1.346-3,3-3h2v7h6V0h2c1.654,0,3,1.346,3,3ZM13,0h-2v5h2V0Zm11,19.5c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5h15c2.481,0,4.5,2.019,4.5,4.5Zm-18,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm7.5,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm7.5,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"
                                />
                                <defs>
                                    <clipPath id="clip0_7_34">
                                        <rect
                                            width="70"
                                            height="70"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="services-item__title">
                                Производство жгутов
                            </h3>
                            <p className="services-item__descr">
                                Изготовление высококачественных электрических
                                жгутов для сельскохозяйственной техники.
                            </p>
                        </li>
                        <li className="services__item flex">
                            <SalesIcon />
                            <h3 className="services-item__title">Торговля</h3>
                            <p className="services-item__descr">
                                Предложение широкого ассортимента запчастей
                                и&nbsp;комплектующих для сельхозтехники.
                            </p>
                        </li>
                        <li className="services__item flex">
                            <svg
                                className="services-item__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                width="70"
                                height="70"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="m3.638,9c-.618,0-1.098-.558-.989-1.166.359-2.001,1.356-3.861,2.855-5.266C7.439.753,9.966-.152,12.63.021c5.021.324,8.943,4.695,8.869,9.917-.04,2.818-2.389,5.063-5.208,5.063h-2.932c-.36.346-.846.561-1.384.561-1.105,0-2-.895-2-2s.895-2,2-2c.908,0,1.666.609,1.91,1.439h2.406c1.736,0,3.189-1.383,3.208-3.118.046-4.146-3.045-7.609-6.998-7.865-2.099-.13-4.101.578-5.63,2.011-1.209,1.133-1.988,2.584-2.261,4.178-.08.466-.5.795-.972.795Zm8.362,8c-3.695,0-6.892,2.292-7.955,5.702-.095.304-.04.635.149.891s.488.407.806.407h14c.318,0,.617-.151.806-.407s.244-.587.149-.891c-1.063-3.41-4.26-5.702-7.955-5.702Zm2.934-6h2.354c.135-.477.212-.979.212-1.5,0-3.038-2.462-5.5-5.5-5.5s-5.5,2.462-5.5,5.5c0,1.491.596,2.841,1.559,3.832.121-2.066,1.819-3.709,3.916-3.709,1.191,0,2.241.541,2.96,1.377Z"
                                />
                                <defs>
                                    <clipPath id="clip0_7_34">
                                        <rect
                                            width="70"
                                            height="70"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="services-item__title">Обслуживание</h3>
                            <p className="services-item__descr">
                                Регулярное техническое обслуживание и&nbsp;уход
                                за&nbsp;вашей сельскохозяйственной техникой для
                                ее&nbsp;бесперебойной работы.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {sliderItems?.length && (
                <section id="gallery" className="gallery section-offset">
                    <div className="gallery__container container">
                        <h2 className="gallery__title section-title">
                            Фото нашей продукции
                        </h2>
                        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
                            {sliderItems?.map((slide) => (
                                <SwiperSlide key={slide._id}>
                                    <img src={slide.img} alt={slide.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            )}

            <section id="contacts" className="contacts section-offset">
                <div className="container">
                    <h2 className="section-title contacts__title">Контакты</h2>
                    <address className="contacts__address">
                        <ul className="contacts__list__main list-reset flex">
                            <li className="contacts__item flex">
                                <svg
                                    className="contacts-item__icon"
                                    width="29"
                                    height="29"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_32_128)">
                                        <path
                                            d="M14.5 2.41675C9.82374 2.41675 6.04166 6.19883 6.04166 10.8751C6.04166 15.9138 11.3825 22.8617 13.5817 25.508C14.065 26.088 14.9471 26.088 15.4304 25.508C17.6175 22.8617 22.9583 15.9138 22.9583 10.8751C22.9583 6.19883 19.1762 2.41675 14.5 2.41675ZM14.5 13.8959C12.8325 13.8959 11.4792 12.5426 11.4792 10.8751C11.4792 9.20758 12.8325 7.85425 14.5 7.85425C16.1675 7.85425 17.5208 9.20758 17.5208 10.8751C17.5208 12.5426 16.1675 13.8959 14.5 13.8959Z"
                                            fill="#ff543e"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_128">
                                            <rect
                                                width="29"
                                                height="29"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="contacts-item__caption">Адрес</p>
                                <p className="contacts-item__text">
                                    {address}
                                </p>
                            </li>
                            <li className="contacts__item flex">
                                <svg
                                    className="contacts-item__icon"
                                    width="29"
                                    height="29"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_32_125)">
                                        <path
                                            d="M25.375 18.6808L19.0071 17.9437L15.9621 20.9888C12.5425 19.2487 9.73917 16.4575 7.99917 13.0258L11.0563 9.96875L10.3192 3.625H3.66125C2.96042 15.9258 13.0742 26.0396 25.375 25.3387V18.6808Z"
                                            fill="#ff543e"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_125">
                                            <rect
                                                width="29"
                                                height="29"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="contacts-item__caption">Телефон</p>
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="contacts-item__link"
                                >
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="contacts__item flex">
                                <svg
                                    className="contacts-item__icon"
                                    width="29"
                                    height="29"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_32_116)">
                                        <path
                                            d="M24.1666 4.83325H4.83329C3.50413 4.83325 2.41663 5.92075 2.41663 7.24992V21.7499C2.41663 23.0791 3.50413 24.1666 4.83329 24.1666H24.1666C25.4958 24.1666 26.5833 23.0791 26.5833 21.7499V7.24992C26.5833 5.92075 25.4958 4.83325 24.1666 4.83325ZM23.6833 9.96867L15.7808 14.9108C14.9954 15.4062 14.0045 15.4062 13.2191 14.9108L5.31663 9.96867C5.01454 9.77533 4.83329 9.44909 4.83329 9.09867C4.83329 8.28909 5.71538 7.80575 6.40413 8.22867L14.5 13.2916L22.5958 8.22867C23.2845 7.80575 24.1666 8.28909 24.1666 9.09867C24.1666 9.44909 23.9854 9.77533 23.6833 9.96867Z"
                                            fill="#ff543e"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_116">
                                            <rect
                                                width="29"
                                                height="29"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p className="contacts-item__caption">Почта</p>
                                <a
                                    href={`mailto:${email}`}
                                    className="contacts-item__link"
                                >
                                    {email}
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
            </section>
        </main >
    );
};

export { MainPage }