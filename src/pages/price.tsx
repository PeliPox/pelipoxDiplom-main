import Layout from "@/views/Layout";
import { FooterMain } from "@/views/components/Footer";
import { HeaderMain } from "@/views/components/Header";
import { PricePage } from "@/views/pages/PricePage";

export default function Documentation() {
    return (
        <Layout title='Прайс лист'>
            <HeaderMain />
            <PricePage />
            <FooterMain />
        </Layout>
    )
}