"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-50 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
              APOLLO 11
            </div>
            
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 font-medium">
            <Link href="/" className="hover:text-slate-900">Início</Link>
            <Link href="/destaques" className="hover:text-slate-900">Destaques</Link>
            <Link href="/empreendimentos" className="hover:text-slate-900">Empreendimentos</Link>
            <Link href="/contactos" className="hover:text-slate-900">Contactos</Link>

            <Link
              href="/auth"
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-slate-900 transition"
            >
              Entrar
            </Link>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden px-3 py-2 border rounded-md"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </header>

      {/* MENU MOBILE OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-72 bg-white h-full p-6 flex flex-col gap-6">

            {/* FECHAR */}
            <button onClick={() => setOpen(false)} className="self-end">
              <FiX className="text-2xl text-slate-700" />
            </button>

            {/* LINKS MOBILE */}
            <nav className="flex flex-col gap-4 text-slate-700 text-sm">
              <Link href="/" onClick={() => setOpen(false)} className="hover:text-black">Início</Link>
              <Link href="/destaques" onClick={() => setOpen(false)} className="hover:text-black">Destaques</Link>
              <Link href="/empreendimentos" onClick={() => setOpen(false)} className="hover:text-black">Empreendimentos</Link>
              <Link href="/contactos" onClick={() => setOpen(false)} className="hover:text-black">Contactos</Link>

              <Link
                href="/auth"
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-slate-900 transition text-center"
              >
                Entrar
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
