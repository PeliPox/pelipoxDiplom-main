import Link from "next/link";

import { Logo } from "@/views/base_svg";
import { address, phoneNumber } from "../../../../config";
import { Button } from "@/views/ui/Button";

const headerLink = [
    {
        link: '/',
        name: 'Главная'
    },
    {
        link: '/price',
        name: 'Прайс лист'
    },
    {
        link: '/#services',
        name: 'Услуги'
    },
    {
        link: '/contacts',
        name: 'Контакты'
    },
    {
        link: '/sertificates',
        name: 'Сертификаты'
    },
    {
        link: '/gallery',
        name: 'Галерея'
    },
    {
        link: '/documentation',
        name: 'Документация'
    },
]

const HeaderMain = () => {

    return (
        <header className="header">
            <div className="header__container container flex">
                <Link href="/" className="header__logo">
                    <Logo />
                </Link>
                <address className="header__address flex">
                    <svg
                        className="address-icon"
                        width="14"
                        height="20"
                        viewBox="0 0 14 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.8304 0.615242C3.23672 0.615242 0.312988 3.53898 0.312988 7.13265C0.312988 11.6495 6.83681 19.3652 6.83681 19.3652C6.83681 19.3652 13.3478 11.4274 13.3478 7.13265C13.3478 3.53898 10.4242 0.615242 6.8304 0.615242ZM8.79684 9.04095C8.25461 9.58306 7.54256 9.85417 6.8304 9.85417C6.11835 9.85417 5.40607 9.58306 4.86407 9.04095C3.77975 7.95674 3.77975 6.19252 4.86407 5.10819C5.38913 4.58291 6.08756 4.2936 6.8304 4.2936C7.57323 4.2936 8.27155 4.58302 8.79684 5.10819C9.88116 6.19252 9.88116 7.95674 8.79684 9.04095Z"
                            fill="#E1E1E1"
                        />
                    </svg>
                    <p className="address__">{address}</p>
                </address>
                <div className="header__contact">
                    <a className="header__phone" href={`tel:${phoneNumber}`}>
                        {phoneNumber}
                    </a>
                    <Button>Написать нам</Button>
                </div>
            </div>

            <nav className="header__nav">
                <div className="container flex">
                    <ul className="nav__list list-reset flex">
                        {headerLink.map((link) => (
                            <li className="nav__item" key={link.name}>
                                <a href={link.link} className="nav__link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export { HeaderMain }