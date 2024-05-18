import { FC, PropsWithChildren } from 'react';
import { IMeta } from './seo/meta.interface';
import Meta from './seo/Meta';


const Layout: FC<PropsWithChildren<IMeta>> = ({ 
    children, 
    title, 
    description, 
    type 
}) => {
    return (
        <Meta title={title} description={description}>
            { children }
        </Meta>
    );
};

export default Layout;