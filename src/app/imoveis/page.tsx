"use client";

import { useState } from "react";
import Slider from "react-slick";
import { FaBed, FaBath, FaExpand, FaMoneyBillWave, FaWhatsapp, FaShareAlt, FaHeart } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ImovelDetalhes() {
  const images = ["/mockup1.jpg", "/mockup3.jpg", "/mockup4.jpg", "/mockup5.jpg"];
  const [showFav, setShowFav] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Copiar link
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  // Mostrar modal favoritos
  const handleFavorite = () => setShowFav(true);
  const closeFavorite = () => setShowFav(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 relative">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* TABS */}
          <div className="flex gap-6 border-b pb-2 text-sm font-medium">
            <button className="border-b-2 border-red-600 pb-2">Resumo</button>
            <button className="text-gray-400 hover:text-gray-800">Descrição</button>
            <button className="text-gray-400 hover:text-gray-800">Detalhes</button>
          </div>

          {/* TITLE & LOCATION */}
          <div>
            <h1 className="text-2xl font-bold mt-2">Apartamento T3 Moderno</h1>
            <p className="text-gray-500 mt-1">Luanda • Talatona • Via Expressa</p>
          </div>

          {/* PRICE & ACTION ICONS */}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-3xl font-bold text-red-600">Kz 250.000.000</h2>
            <div className="flex gap-4 text-xl text-gray-600">
              <FaShareAlt
                className="cursor-pointer hover:text-blue-600"
                title="Partilhar"
                onClick={handleShare}
              />
              <FaHeart
                className="cursor-pointer hover:text-red-600"
                title="Favorito"
                onClick={handleFavorite}
              />
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <div className="mt-4 rounded-xl">
            <Slider {...settings}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-[420px] object-cover rounded-xl"
                  alt={`Imagem ${i + 1}`}
                />
              ))}
            </Slider>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 mt-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-20 object-cover rounded cursor-pointer border"
                alt={`Thumbnail ${i + 1}`}
              />
            ))}
          </div>

          {/* OVERVIEW */}
          <div className="mt-6 border-b pb-4">
            <h2 className="font-semibold text-lg mb-2">Resumo</h2>
            <div className="flex gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1"><FaBed />3 Quartos</span>
              <span className="flex items-center gap-1"><FaBath />2 WC</span>
              <span className="flex items-center gap-1"><FaExpand />180m²</span>
              <span className="flex items-center gap-1"><FaMoneyBillWave />Kz 250.000.000</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Descrição</h2>
            <p className="text-gray-600 text-sm leading-6">
              Apartamento moderno com vista panorâmica, cozinha equipada, elevador,
              segurança 24h, área de lazer, piscina e parqueamento privado.
            </p>
          </div>

          {/* ADDRESS */}
          <div className="mt-6 p-4 rounded-xl bg-white border">
            <h2 className="font-semibold text-lg mb-2">Endereço</h2>
            <p className="text-sm text-gray-600">Talatona • Via Expressa</p>
            <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Ver no Google Maps
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">

          {/* FEATURED */}
          <div className="border p-4 rounded-xl bg-white">
            <h3 className="font-semibold text-lg mb-2">Imóveis Destaque</h3>
            <ul className="text-sm space-y-1 text-red-600">
              <li>Apartamento T3 - Kz 250M</li>
              <li>Vivenda Luxo - Kz 900M</li>
              <li>Estúdio Talatona - Kz 90M</li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="border p-4 rounded-xl bg-white">
            <h3 className="font-semibold text-lg mb-2">Categorias</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Apartamentos (322)</li>
              <li>Venda (778)</li>
              <li>Arrendamento (304)</li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="border p-4 rounded-xl bg-white">
            <h3 className="font-semibold text-lg mb-2">Redes</h3>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/244912345678" className="flex items-center gap-2 text-black-500">
                <FaWhatsapp /> +244 912 345 678
              </a>
              <a href="https://facebook.com" className="flex items-center gap-2 text-black-600">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="https://instagram.com" className="flex items-center gap-2 text-black-500">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </aside>

        

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/244912345678"
          className="fixed bottom-5 left-5 bg-green-500 text-white p-4 rounded-full shadow-lg animate-pulse"
        >
          <FaWhatsapp size={28} />
        </a>
      </main>

      {/* FAVORITE MODAL */}
      {showFav && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[300px] text-center space-y-4">
            <h3 className="font-semibold text-lg">""</h3>
            <button
              onClick={closeFavorite}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
