export default function Service({ title, description, image, imageSide = "left", buttonText = "Descubre más", buttonHref = "/services", buttonClassName = "", imgContain = false }) {
    const offsetClass = imageSide === "left" ? "md:mr-24" : "md:ml-24";
    return (
        <div className={`w-full mx-auto`}> 
            {/* Mobile: columna única */}
            <div className="flex flex-col md:hidden w-10/12 mx-auto">
                <div className="relative w-full aspect-[14/9] rounded-t-lg overflow-hidden bg-foreground">
                    <div
                        className={`w-full h-full bg-cover bg-center rounded-t-lg mask-b-from-70% mask-b-to-100% ${imgContain ? "object-contain" : "object-cover"}`}
                        style={{ backgroundImage: `url(${image})`, filter: 'brightness(1)' }}
                    />
                </div>
                <div className="bg-primary rounded-b-lg px-4 pb-4 md:p-4 flex flex-col items-stretch">
                    <h3 className="text-2xl font-bold mb-2 text-primary-foreground text-center">{title}</h3>
                    <p className="text-sm text-primary-foreground mb-2 text-center">{description}</p>
                    <div className="flex justify-center w-full mt-auto text-white ">
                        <a
                            href={buttonHref}
                            className={`px-5 py-2 rounded-full bg-accent text-white text-center font-semibold transition-all duration-200 max-w-40 hover:bg-accent/80 hover:scale-110 hover:shadow-xl ${buttonClassName}`}
                        >
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
            {/* Desktop: dos columnas */}
            <div className={`hidden md:flex flex-row w-full h-64 items-center gap-4 ${imageSide === "right" ? "flex-row-reverse" : ""} ${offsetClass}`}> 
                <div className="aspect-[14/9] h-full rounded-lg">
                    <div
                        className={`w-full h-full rounded-lg bg-center ${imgContain ? "bg-contain" : "bg-cover"}`}
                        style={{ backgroundImage: `url(${image})`, filter: 'brightness(1)' }}
                    />
                </div>
                <div className="bg-primary rounded-lg p-8 h-full flex flex-col items-stretch">
                    <h3 className="text-3xl font-bold mb-4 text-primary-foreground">{title}</h3>
                    <p className="text-md text-primary-foreground h-max">{description}</p>
                    <div className="flex justify-end w-full mt-auto text-white ">
                        <a
                            href={buttonHref}
                            className={`px-5 py-2 rounded-full bg-accent text-white text-center font-semibold transition-all duration-200 max-w-40 hover:bg-accent/80 hover:scale-110 hover:shadow-xl ${buttonClassName}`}
                        >
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}