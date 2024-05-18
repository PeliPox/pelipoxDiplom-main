import Link from "next/link";

import { Logo } from "@/views/base_svg";

const FooterItems = [
    {
        name: 'Главная',
        link: '/'
    },
    {
        name: 'Контакты',
        link: '/contacts'
    },
    {
        name: 'Прайс-лист',
        link: '/price'
    },
]

const FooterMain = () => {

    return (
        <footer className="footer">
            <div className="footer__container container flex">
                <Link href="/" className="header__logo">
                    <Logo />
                </Link>
                <ul className="footer-nav__list list-reset flex">
                    {FooterItems.map((item) => (
                        <li className="footer-nav__item" key={item.name}>
                            <a href={item.link} className="footer-nav__link"
                            >{item.name}</a
                            >
                        </li>
                    ))}
                </ul>
            </div>
            <div className="last__footer">
                <p className="last-footer__descr">© 2024 ООО «Селянин»</p>
            </div>
        </footer>
    );
};

export { FooterMain }