import { address, email, phoneNumber } from "../../../../config";


const ContactsPage = () => {

    return (
        <section className="contacts section-offset">
            <div className="container">
                <h1 className="contacts__title section-title">Контакты</h1>
                <div className="contacts__caption flex">
                    <ul className="contacts__list list-reset flex">
                        <li className="contacts__item flex">
                            <svg
                                className="contacts-item__icon"
                                width="61"
                                height="61"
                                viewBox="0 0 61 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_337649_348)">
                                    <path
                                        d="M30.4999 5.08331C20.6637 5.08331 12.7083 13.0387 12.7083 22.875C12.7083 33.4737 23.9424 48.0883 28.5683 53.6546C29.5849 54.8746 31.4403 54.8746 32.457 53.6546C37.0574 48.0883 48.2916 33.4737 48.2916 22.875C48.2916 13.0387 40.3362 5.08331 30.4999 5.08331ZM30.4999 29.2291C26.9924 29.2291 24.1458 26.3825 24.1458 22.875C24.1458 19.3675 26.9924 16.5208 30.4999 16.5208C34.0074 16.5208 36.8541 19.3675 36.8541 22.875C36.8541 26.3825 34.0074 29.2291 30.4999 29.2291Z"
                                        fill="#FF543E"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_337649_348">
                                        <rect
                                            width="60"
                                            height="60"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="contacts-item__title">Адрес</h3>
                            <p className="conacts-item__descr">
                                {address}
                            </p>
                        </li>
                        <li className="contacts__item flex">
                            <svg
                                className="contacts-item__icon"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_337649_339)">
                                    <path
                                        d="M52.5 38.65L39.325 37.125L33.025 43.425C25.95 39.825 20.15 34.05 16.55 26.95L22.875 20.625L21.35 7.5H7.575C6.125 32.95 27.05 53.875 52.5 52.425V38.65V38.65Z"
                                        fill="#FF543E"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_337649_339">
                                        <rect
                                            width="60"
                                            height="60"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="contacts-item__title">Телефон</h3>
                            <a
                                href={`tel:${phoneNumber}`}
                                className="contacts-item__link"
                            >
                                {phoneNumber}
                            </a>
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
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_337649_333)">
                                    <path
                                        d="M50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15C55 12.25 52.75 10 50 10ZM49 20.625L32.65 30.85C31.025 31.875 28.975 31.875 27.35 30.85L11 20.625C10.375 20.225 10 19.55 10 18.825C10 17.15 11.825 16.15 13.25 17.025L30 27.5L46.75 17.025C48.175 16.15 50 17.15 50 18.825C50 19.55 49.625 20.225 49 20.625Z"
                                        fill="#FF543E"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_337649_333">
                                        <rect
                                            width="60"
                                            height="60"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="contacts-item__title">Почта</h3>
                            <a
                                href={`mailto:${email}`}
                                className="contacts-item__link"
                            >
                                {email}
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="contacts-item__link"
                            >
                                {email}
                            </a>
                        </li>
                    </ul>
                    <div className="contacts__map">
                        <div style={{ overflow: 'hidden' }}>
                            <iframe
                                className="map"
                                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.750379%2C47.245841&mode=search&oid=1077234984&ol=biz&z=19.4"
                                frameBorder={1}
                                allowFullScreen={true}
                                style={{
                                    border: '3px solid #ff5842',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ContactsPage }