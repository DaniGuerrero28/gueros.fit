"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppPromoExtended from "../components/AppPromoExtended";

export default function AppPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center">
        <AppPromoExtended />
      </main>
      <Footer />
    </div>
  );
}
