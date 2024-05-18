import { FC, ReactNode, useState } from "react";
import cls from "./index.module.scss";

interface ButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    upper?: boolean;
    type?: "reset" | "submit" | "button";
    mode?: "main" | "second" | "outline";
    hidden?: boolean;
    disabled?: boolean;
    loader?: boolean;
    longLoading?: boolean
    full?: boolean;
    sm?: boolean;
    shwm?: boolean;
    id?: string;
    onClick?: () => void;
    blue?: boolean;
    green?: boolean;
    whiteFont?: boolean;
    autoH?: boolean;
    smOpacity?: boolean;
    grey?: boolean;
    grey4?: boolean;
    orange?: boolean;
    smallFont?: boolean,
    head?: boolean;
}

const defaultProps: Partial<ButtonProps> = {
    type: "button",
    mode: "main",
    upper: false,
};

const Button: FC<ButtonProps> = ({
    children,
    icon,
    upper,
    type,
    mode,
    hidden,
    disabled,
    loader,
    longLoading,
    full,
    sm,
    id,
    shwm,
    onClick,
    blue,
    green,
    whiteFont,
    autoH,
    smOpacity,
    grey,
    grey4,
    smallFont,
    head,
    orange,
}) => {
    const [isLoding, setLoading] = useState<boolean>(false);

    const handleClick = () => {
        if (loader) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
        if (onClick) {
            onClick();
        }
    };

    const button = (
        <button
            id={id}
            className={cls.button}
            type={type}
            data-hidden={hidden}
            data-mode={mode}
            disabled={disabled}
            data-full={full}
            data-sm={sm}
            data-shwm={shwm}
            onClick={handleClick}
            data-blue={blue}
            data-green={green}
            data-orange={orange}
            data-auto-height={autoH}
            data-small-opacity={smOpacity}
            data-grey={grey}
            data-grey-four={grey4}
            data-head={head}
        >
            {icon ? icon : null}
            <span data-upper={upper} data-white-font={whiteFont} data-small-font={smallFont}>{children}</span>
        </button>
    );

    return button;
};

Button.defaultProps = defaultProps;

export { Button };