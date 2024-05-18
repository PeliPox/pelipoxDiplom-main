import Layout from "@/views/Layout";
import { FooterMain } from "@/views/components/Footer";
import { HeaderMain } from "@/views/components/Header";
import { DocumentationPage } from "@/views/pages/DocumentationPage";

export default function Documentation() {
    return (
        <Layout title='Документация'>
            <HeaderMain />
            <DocumentationPage />
            <FooterMain />
        </Layout>
    )
}