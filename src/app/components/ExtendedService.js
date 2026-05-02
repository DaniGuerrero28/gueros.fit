import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ExtendedService({ title, image, description, itemList, imgContain }) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-6">
        <img
          src={image}
          alt={`Imagen de ${title}`}
          className={`w-full h-full rounded-xl ${imgContain ? "object-contain" : "object-cover"}`}
          style={{ aspectRatio: "21/9" }}
        />
      </div>
      <h3 className="text-3xl font-bold mb-4 text-left text-primary w-full">{title}</h3>
      <div className="text-primary text-left w-full max-w-4xl md:mb-48">
        {description && <p className="text-lg mb-4 leading-relaxed">{description}</p>}
        {itemList && itemList.length > 0 && (
          <ul className="flex flex-col gap-2">
            {itemList.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheck className="mt-1 shrink-0" style={{ color: "var(--color-accent)" }} size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
