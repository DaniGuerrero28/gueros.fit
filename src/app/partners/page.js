"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnerDealsSection from "../components/PartnerDealsSection";

export default function PartnersPage() {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
                <Header />
                <PartnerDealsSection />
                <Footer />
            </div>
        </>
    );
}
