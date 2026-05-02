export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl max-w-sm md:max-w-md xl:max-w-4xl xl:text-6xl font-bold leading-tight font-montserrat text-center px-4">
        {title}
      </h2>
      <div className="w-16 h-1 rounded-full mt-4" style={{ background: "var(--color-accent-gradient)" }} />
      {description && (
        <p className="md:w-full w-10/12 text-md text-center mt-6 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
