import { FaHeart } from "react-icons/fa";
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa6";
import { COMPANY_SOCIALS } from "../constants";

const instagramPosts = [
  {
    img: "/images/insta-post.png",
    url: "https://www.instagram.com/p/DKR6GQHshPk/",
    user: {
      name: "gueros_official",
      avatar: "/images/instagramlogo.png"
    }
  },
  {
    img: "/images/insta-post-2.gif",
    url: "https://www.instagram.com/p/DMDgoYsIRyV/",
    user: {
      name: "gueros_official",
      avatar: "/images/instagramlogo.png"
    }
  },
  {
    img: "/images/insta-post-3.png",
    url: "https://www.instagram.com/gueros_official/reel/DMNU0YmMDNh/",
    user: {
      name: "gueros_official",
      avatar: "/images/instagramlogo.png"
    }
  }
];

export default function SocialPromoSection() {
  // Función para obtener un número aleatorio entre 100 y 500
  function getRandomLikes() {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  }

  return (
    <section id="social-section" className="w-full max-w-5xl mx-auto mt-12 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-center">Síguenos en redes sociales</h3>
      <div className="flex gap-6 mb-8">
        {COMPANY_SOCIALS.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary hover:scale-150 hover:shadow-xl transition-all">
            {s.icon}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-10/12 md:w-full">
        {instagramPosts.map((post, idx) => (
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
            <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-100 hover:scale-105 hover:shadow-xl transition-all">
              {/* Header: avatar y nombre */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <img src={post.user.avatar} alt={post.user.name + ' avatar'} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                <span className="font-semibold text-gray-800 text-sm">{post.user.name}</span>
              </div>
              {/* Imagen principal */}
              <img src={post.img} alt={`Instagram post ${idx + 1}`} className="w-full object-cover aspect-square bg-gray-100" />
              {/* Footer: avatar y botones */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center gap-4 text-xl text-gray-500">
                  <div className="flex flex-row gap-1 items-center ">
                    <button type="button" className="text-red-400"><FaHeart /></button>
                    <p className="text-red-400 text-xs font-semibold">{getRandomLikes()}</p>
                  </div>
                  <button type="button"><FaRegComment /></button>
                  <button type="button"><FaRegPaperPlane /></button>
                </div>
                <div className="flex items-end gap-4 text-xl text-gray-500" >
                  <button type="button"><FaRegBookmark /></button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section >
  );
}