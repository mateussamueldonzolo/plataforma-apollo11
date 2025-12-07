
"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Página única (Next.js App Router /page.tsx)
// TailwindCSS é necessário no projecto

// =========================
// Mock data (substituir pelo teu backend)
// =========================
const LISTINGS = [
  {
    id: "A001",
    title: "Apartamento moderno em Talatona",
    location: "Talatona, Luanda",
    province: "Luanda",
    price: 95000000,
    beds: 3,
    baths: 2,
    area: 140,
    featured: true,
   img: "/mockup4.jpg"
  },
  {
    id: "A002",
    title: "Moradia T4 com jardim - R/C + 1",
    location: "Kilamba, Luanda",
    province: "Luanda",
    price: 250000000,
    beds: 4,
    baths: 4,
    area: 320,
    featured: false,
   img: "/mockup4.jpg"
  },
  {
    id: "A003",
    title: "Estúdio compacto em bairro central",
    location: "Bairro Central, Benguela",
    province: "Benguela",
    price: 18000000,
    beds: 1,
    baths: 1,
    area: 38,
    featured: false,
    img: "/mockup2.jpg"
  },
  {
    id: "A004",
    title: "Apartamento de luxo com piscina comum",
    location: "Palanca, Luanda",
    province: "Luanda",
    price: 135000000,
    beds: 2,
    baths: 2,
    area: 110,
    featured: true,
    img: "/mockup3.jpg"
  },
    {
    id: "A004",
    title: "Apartamento de luxo com piscina comum",
    location: "Palanca, Luanda",
    province: "Luanda",
    price: 135000000,
    beds: 2,
    baths: 2,
    area: 110,
    featured: true,
   img: "/mockup1.jpg"
  }
];

export const PROVINCIAS = [
  "Luanda",
  "Benguela",
  "Huíla",
  "Cuando Cubango",
  "Cunene",
  "Bengo",
  "Huambo",
  "Bié",
  "Cabinda",
  "Cuanza Norte",
  "Cuanza Sul",
  "Malanje",
  "Lunda Norte",
  "Lunda Sul",
  "Zaire",
  "Namibe",
  "Moxico",
];


function formatKz(value: number) {

  return (
    "Kz " +
    value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}


function SearchFilters({
  filters,
  setFilters,
  reset,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mt-6 flex flex-col md:flex-row items-center gap-3">
      <div className="flex items-center border rounded-xl px-3 py-2 w-full md:flex-1">
        <svg className="w-5 h-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg>
        <input
          value={filters.keywords}
          onChange={(e) => setFilters({ ...filters, keywords: e.target.value })}
          className="flex-1 outline-none text-sm"
          placeholder="Pesquisar (bairro, referência, id do anúncio...)"
        />
      </div>

      <select
        value={filters.mode}
        onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
        className="px-3 py-2 border rounded-xl text-sm w-full md:w-36"
      >
        <option value="">Qualquer</option>
        <option value="Rent">Para Arrendar</option>
        <option value="Sale">Para Vender</option>
      </select>

      <div className="flex items-center border rounded-xl px-3 py-2 w-full md:w-52">
        <svg className="w-5 h-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m-6 8h12M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" /></svg>
        <select
          value={filters.province}
          onChange={(e) => setFilters({ ...filters, province: e.target.value })}
          className="outline-none bg-transparent text-sm flex-1"
        >
          <option value="">Província</option>
          {PROVINCIAS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <input
          type="number"
          value={filters.minPrice || ""}
          onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
          placeholder="Min (Kz)"
          className="px-3 py-2 border rounded-xl w-28 text-sm"
        />

        <span className="text-slate-400">—</span>

        <input
          type="number"
          value={filters.maxPrice || ""}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          placeholder="Max (Kz)"
          className="px-3 py-2 border rounded-xl w-28 text-sm"
        />
      </div>

      <select
        value={filters.beds}
        onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
        className="px-3 py-2 border rounded-xl text-sm w-full md:w-32"
      >
        <option value="">Quartos</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>

      <button
        onClick={reset}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-slate-800 hover:bg-black transition w-full md:w-auto"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6" /></svg>
        Resetar
      </button>
    </div>
  );
}

function ListingCard({ item }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative h-44 md:h-52 w-full">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        {item.featured && (
          <div className="absolute left-3 top-3 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-semibold">Destaque</div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-slate-900 font-semibold text-sm md:text-base">{item.title}</h3>
          <div className="text-slate-700 text-sm">{formatKz(item.price)}</div>
        </div>

        <p className="text-slate-500 text-xs mt-1">{item.location}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span>{item.beds} quartos</span>
            <span>·</span>
            <span>{item.baths} banhos</span>
            <span>·</span>
            <span>{item.area} m²</span>
          </div>
         <Link
                href="/imoveis"
                onClick={() => setOpen(false)}
                className="text-sm bg-slate-800 text-white px-3 py-1 rounded-md"
              >
                Ver
              </Link>
        
        </div>
      </div>
    </div>
  );
}

// =========================
// Main page component
// =========================
export default function FinderAngolaPage() {
  const [filters, setFilters] = useState({
    keywords: "",
    mode: "",
    province: "",
    minPrice: undefined,
    maxPrice: undefined,
    beds: "",
  });

  const reset = () => {
    setFilters({ keywords: "", mode: "", province: "", minPrice: undefined, maxPrice: undefined, beds: "" });
  };

  const results = useMemo(() => {
    return LISTINGS.filter((l) => {
      if (filters.keywords) {
        const k = filters.keywords.toLowerCase();
        if (!(`${l.title} ${l.location} ${l.id}`.toLowerCase().includes(k))) return false;
      }
      if (filters.mode) {
        // no mock data não temos Rent/Sale por item; ignora ou adapta se tiver
      }
      if (filters.province && l.province !== filters.province) return false;
      if (filters.minPrice && l.price < filters.minPrice) return false;
      if (filters.maxPrice && l.price > filters.maxPrice) return false;
      if (filters.beds && l.beds < Number(filters.beds)) return false;
      return true;
    });
  }, [filters]);

  const featured = LISTINGS.filter((l) => l.featured);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAV */}
      <Header/>

      {/* HERO */}
      <section className="relative">
        <div className="h-71 md:h-130 w-full bg-[url('/mockup2.jpg')] bg-cover bg-center">
          <div className="backdrop-brightness-50 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-white text-3xl md:text-6xl font-bold">Encontre o imóvel <br />ideal em Angola</h2>
              <p className="text-slate-200 mt-2">Apartamentos, moradias, terrenos e <br />empreendimentos — Pesquisa avançada adaptada para o mercado angolano.</p>

              {/* Search bar in hero */}
              <div className="mt-6">
                <div className="bg-white rounded-2xl shadow-md p-4 md:p-5">
                  <SearchFilters filters={filters} setFilters={setFilters} reset={reset} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* LEFT: Listings */}
        <section className="lg:col-span-6">
          {/* Destaques */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Imoveis em Alta</h3>
              <a className="text-sm text-slate-500">Ver todos</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {featured.map((f) => (
                <ListingCard key={f.id} item={f} />
              ))}
            </div>
          </div>

        </section>
      </main>
  <section className="relative mx-auto max-w-7xl mt-10 rounded-xl overflow-hidden shadow-lg">
  {/* Imagem de fundo */}
  <img
    src="/mockup3.jpg"
    alt="Banner Promocional"
    className="w-full h-64 md:h-96 object-cover"
  />

  {/* Overlay escuro */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Conteúdo do banner */}
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
    {/* Texto */}
    <div className="text-white max-w-lg md:max-w-md">
      <h2 className="text-2xl md:text-4xl font-bold mb-2">
        Encontre o imóvel dos seus sonhos
      </h2>
      <p className="text-sm md:text-base mb-4">
        Apartamentos, moradias, terrenos e empreendimentos — pesquisa avançada adaptada para Angola.
      </p>
    </div>

    {/* Botão */}
    <div className="mt-4 md:mt-0">
      <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
        Ver imóveis
      </button>
    </div>
  </div>
</section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">


        {/* LEFT: Listings */}
        <section className="lg:col-span-3">
          {/* Destaques */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Destaques</h3>
              <a className="text-sm text-slate-500">Ver todos</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {featured.map((f) => (
                <ListingCard key={f.id} item={f} />
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Anúncios mais recentes</h3>
              <p className="text-sm text-slate-500">{results.length} resultados</p>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((r) => (
                <ListingCard key={r.id} item={r} />
              ))}

              {results.length === 0 && (
                <div className="col-span-full text-center text-slate-500 py-10">Sem resultados — tenta ajustar os filtros.</div>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT: Sidebar (Empreendimentos / Promo / Contact) */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-4">
            <h4 className="font-semibold">Empreendimentos</h4>
            <p className="text-sm text-slate-500 mt-2">Projetos em destaque e unidades disponíveis.</p>

            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1560185008-5b5a3b6b6c2b?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-md object-cover" />
                <div>
                  <div className="text-sm font-medium">Residencial Talatona</div>
                  <div className="text-xs text-slate-500">Entrega 2026 • 12 un.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-md object-cover" />
                <div>
                  <div className="text-sm font-medium">Kilamba Park</div>
                  <div className="text-xs text-slate-500">Pronto para ocupação</div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button className="w-full bg-slate-800 text-white rounded-md py-2">Ver Empreendimentos</button>
            </div>
          </div>

          <div className="mt-4 bg-white rounded-xl shadow-md p-4">
            <h4 className="font-semibold">Precisa de ajuda?</h4>
            <p className="text-sm text-slate-500 mt-2">Contacta um consultor via WhatsApp ou telefone.</p>

            <div className="mt-3 space-y-2">
              <a className="block text-sm text-slate-700">📞 +244 923 000 000</a>
              <a className="block text-sm text-slate-700">💬 WhatsApp</a>
            </div>
          </div>
        </aside>
      </main>

  
      
{/* FOOTER ESTILO SEMELHANTE AO EXEMPLO */}
      
<Footer/>
    </div>
    
  );
}
