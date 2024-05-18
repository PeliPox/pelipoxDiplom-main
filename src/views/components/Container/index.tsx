import { FC, ReactNode } from 'react';
import cls from './index.module.scss';


interface ContainerProps {
    children: ReactNode;
    flex?: 'col' | 'row';
};

const defaultProps: Partial<ContainerProps> = {
    flex: 'row',
};

const Container: FC<ContainerProps> = ({ children, flex }) => {

    const container = (
        <div className={cls.container}>
            <div className={flex === 'row' ? cls.row : cls.col}>
                { children }
            </div>
        </div>
    );

    return container;
};

Container.defaultProps = defaultProps;

export { Container };