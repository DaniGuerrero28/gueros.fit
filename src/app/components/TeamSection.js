import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaFacebookF, FaXTwitter, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const SOCIAL_ICONS = {
  instagram: { icon: <FaInstagram />, label: "Instagram" },
  tiktok: { icon: <FaTiktok />, label: "TikTok" },
  facebook: { icon: <FaFacebookF />, label: "Facebook" },
  x: { icon: <FaXTwitter />, label: "X" },
  email: { icon: <FaEnvelope />, label: "Email" },
  github: { icon: <FaGithub />, label: "GitHub" },
  linkedin: { icon: <FaLinkedin />, label: "LinkedIn" }
};

export default function TeamSection({ team }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 items-center mb-16">
      <h2 className="text-3xl font-bold mb-2">¿Quiénes somos?</h2>
      <p className="text-primary/80 text-center w-10/12 md:w-full max-w-2xl mb-2">
        Somos un equipo multidisciplinar apasionado por el bienestar, la salud y el acompañamiento personalizado. Cada uno aporta su experiencia para ayudarte a lograr tu mejor versión.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {(showAll ? team : team.slice(0, 3)).map((member) => (
          <div key={member.name} className="flex flex-col items-center rounded-2xl shadow-lg p-4 w-10/12 mx-auto md:m-0 md:w-auto">
            <div className="w-full overflow-hidden mb-4 aspect-[12/9] rounded-lg">
              <Image src={member.img} alt={`Foto de ${member.name}`} width={128} height={128} className="object-cover w-full h-full" />
            </div>
            <div className="font-bold text-lg text-primary mb-1">{member.name}</div>
            <div className="text-md text-primary/80 mb-2">{member.role}</div>
            <div className="flex gap-4 mt-2">
              {Object.entries(member.socials || {}).map(([key, value]) => {
                if (!SOCIAL_ICONS[key]) return null;
                const isEmail = key === "email";
                return (
                  <a
                    key={key}
                    href={isEmail ? `mailto:${value}` : value}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={SOCIAL_ICONS[key].label}
                    className="text-xl hover:scale-150 hover:shadow-xl  transition-all"
                  >
                    {SOCIAL_ICONS[key].icon}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!showAll && team.length > 3 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-6 py-2 rounded-full text-accent-contrast font-semibold shadow hover:scale-110 hover:shadow-xl transition-all"
          style={{ background: 'var(--color-accent-gradient)' }}
        >
          Ver más
        </button>
      )}
    </div>
  );
}
