import Image from "next/image";

export default function AboutBlock({
  title,
  text,
  imgMain,
  imgMini,
  reverse = false,
  hasButton = false,
  buttonText = "",
  buttonHref = ""
}) {
  return (
    <div className={`w-10/12 md:w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 flex flex-col gap-4 text-md text-primary max-w-xl order-2 md:order-1 md:p-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p>{text}</p>
        {hasButton && buttonText && buttonHref && (
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = buttonHref;
              }
            }}
            className="mt-4 px-6 py-2 rounded-full bg-accent text-white font-bold shadow hover:bg-accent/80 transition-all"
          >
            {buttonText}
          </button>
        )}
      </div>
      <div className="flex-1 flex justify-center order-1 md:order-2">
        <div className="relative w-96 h-96 flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden aspect-square bg-primary-foreground flex items-center justify-center w-80 h-80">
            <Image src={imgMain} alt={title + ' principal'} width={320} height={320} className="object-cover w-full h-full" />
          </div>
          <div className={`hidden md:block absolute ${reverse ? 'bottom-4 right-4 md:bottom-28 md:-right-8' : 'bottom-4 right-4 md:bottom-28 md:-left-8'}  rounded-2xl overflow-hidden aspect-square bg-primary-foreground flex items-center justify-center w-40 h-40 border-8 border-background`}>
            <Image src={imgMini} alt={title + ' secundaria'} width={160} height={160} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
