import Layout from "@/views/Layout";
import Page404 from "@/views/pages/Page404";
import { FC } from "react";

interface _Page404Props {
    toggleMenuMobile: boolean;
    setToggleMenuMobile: () => void;
};

const _Page404: FC<_Page404Props> = ({
    toggleMenuMobile,
    setToggleMenuMobile,
}) => {
    return (
        <Layout title='Страница не найдена'>
            <main>
                <div className="container">
                    <Page404 />
                </div>
            </main>
        </Layout>
    );
};

export default _Page404;