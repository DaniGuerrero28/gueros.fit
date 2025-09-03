"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import TeamSection from "../components/TeamSection";
import { TEAM } from "../components/AboutUsSection";
import SocialPromoSection from "../components/SocialPromoSection";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center py-8 gap-16">
        <ContactSection />
        <TeamSection team={TEAM} />
        <SocialPromoSection />
      </main>
      <Footer />
    </div>
  );
}
