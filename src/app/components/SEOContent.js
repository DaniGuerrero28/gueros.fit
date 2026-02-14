import { SEO_CONFIG } from "../config";

export default function SEOContent() {
  return (
    <>
      {/* Hidden for SEO purposes */}
      <h1 className="text-4xl md:text-5xl font-light hidden">
        {SEO_CONFIG.homeH1}
      </h1>
      <section className="mt-12 max-w-3xl space-y-4 hidden">
        {SEO_CONFIG.homeDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </>
  );
}
