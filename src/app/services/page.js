"use client";
import Header from "../components/Header";
import ExtendedServicesPanel from "../components/ExtendedServicesPanel";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <ExtendedServicesPanel/>
      <Footer />
    </div>
  );
}
