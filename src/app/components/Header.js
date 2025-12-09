'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'App', href: '/app' },
    { name: 'Servicios', href: '/services' },
    /*{ name: 'Planes', href: '/plans' },*/
    { name: 'Sobre nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Socios', href: '/partners' },
  ];

  return (
    <header className={`relative w-full ${isOpen ? 'bg-white' : 'bg-background'} top-0 left-0 z-50 h-20`}>
      {/* Cabecera principal */}
      <div className="mx-auto w-full px-6 py-8 flex flex-row items-center h-full">
        {/* Mobile menu button */}
        <button
          className={`xl:hidden p-2 rounded-md  z-50 transition-colors duration-300 ${isOpen ? 'text-black' : 'text-foreground'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop links juntos */}
        <nav className="hidden xl:flex ml-4 gap-6 2xl:gap-10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="transition hover:scale-110 hover:shadow-xl rounded-lg px-3 py-1"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <nav className="hidden xl:flex justify-start items-center mx-auto gap-10" style={{ width: '520px' }}>
        </nav>
      </div>

      {/* Logo centrado */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hover:scale-110 transition-all ${
          isOpen ? "opacity-80" : "opacity-100"
        }`}
      >
        <a
          href="/"
          style={{ pointerEvents: "auto" }}
          className="transition-all duration-300"
        >
          <Image
            src="/images/logo.png"
            alt="Gueros Logo"
            width={160}         // valores “base” para Next
            height={40}
            className="h-10 w-auto md:h-12 object-contain" // aquí mandas tú el tamaño real
            priority
          />
        </a>
      </div>


      {/* Mobile dropdown */}
      {isOpen && (
        <div className="fixed left-0 right-0 z-40 bg-white text-black flex flex-col items-center justify-center transition-colors duration-300" style={{ top: '5rem', height: 'calc(100vh - 5rem)' }}>
          <nav className="w-full h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-2xl font-semibold uppercase tracking-widest hover:text-accent-green hover:scale-110 hover:shadow-xl transition block text-center"
                    style={{ letterSpacing: '0.12em' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

