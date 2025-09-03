"use client"
import PlanSection from "../components/PlanSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PlansPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <PlanSection />
      <Footer />
    </div>
  );
}
