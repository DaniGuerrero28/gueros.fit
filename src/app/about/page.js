"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsSection from "../components/AboutUsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
