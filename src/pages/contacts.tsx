import Layout from "@/views/Layout";
import { FooterMain } from "@/views/components/Footer";
import { HeaderMain } from "@/views/components/Header";
import { ContactsPage } from "@/views/pages/ContactsPage";

export default function Documentation() {
    return (
        <Layout title='Контакты'>
            <HeaderMain />
            <ContactsPage />
            <FooterMain />
        </Layout>
    )
}