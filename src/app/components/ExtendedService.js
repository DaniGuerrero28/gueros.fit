import React from "react";
import ReactMarkdown from "react-markdown";

export default function ExtendedService({ title, image, description, imgContain }) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className={`w-full h-full rounded-xl ${imgContain ? "object-contain" : "object-cover"}`}
          style={{ aspectRatio: "21/9" }}
        />
      </div>
      <h3 className="text-3xl font-bold mb-4 text-left text-primary w-full">{title}</h3>
      <div className="prose prose-lg prose-invert text-primary text-left w-full max-w-4xl md:mb-48">
        <ReactMarkdown components={{
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-2" {...props} />,
          li: ({node, ...props}) => <li className="mb-1" {...props} />,
        }}>{description}</ReactMarkdown>
      </div>
    </div>
  );
}
