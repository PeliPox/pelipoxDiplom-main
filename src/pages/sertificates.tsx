import Layout from "@/views/Layout";
import { FooterMain } from "@/views/components/Footer";
import { HeaderMain } from "@/views/components/Header";
import { SertificatesPage } from "@/views/pages/SertificatesPage";

export default function Documentation() {
    return (
        <Layout title='Сертификаты'>
            <HeaderMain />
            <SertificatesPage />
            <FooterMain />
        </Layout>
    )
}