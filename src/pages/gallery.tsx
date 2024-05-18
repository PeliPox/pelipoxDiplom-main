

import Layout from "@/views/Layout";
import { FooterMain } from "@/views/components/Footer";
import { HeaderMain } from "@/views/components/Header";
import { GalleryPage } from "@/views/pages/GalleryPage";

export default function Documentation() {
    return (
        <Layout title='Галлерея'>
            <HeaderMain />
            <GalleryPage />
            <FooterMain />
        </Layout>
    )
}