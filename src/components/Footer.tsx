"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Fale Connosco */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-lg">Fale Connosco</h4>
          <p className="text-sm flex items-start gap-2 leading-relaxed">
            🏢 Rua Via C3 Bairro Talatona (Condomínio Palanca Negra), Nº 31, Talatona - Luanda.
          </p>
          <p className="text-sm flex gap-2">📞 945409669</p>
          <p className="text-sm flex gap-2">✉️ geral@imponenteimobiliaria.ao</p>

          <div className="flex gap-3 mt-3 text-xl">
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaFacebook /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaTiktok /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaXTwitter /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaLinkedin /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaYoutube /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Categorias */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-lg">Categorias</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-white transition">Arrendamento (322)</a></li>
            <li><a href="#" className="hover:text-white transition">Arrendamento / Venda (4)</a></li>
            <li><a href="#" className="hover:text-white transition">Venda (775)</a></li>
            <li><a href="#" className="hover:text-white transition">Venda / Arrendamento (24)</a></li>
          </ul>
        </div>

        {/* Imóveis Recentes */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-lg">Imóveis Recentes</h4>
          <div className="flex flex-col gap-4">

            {/* Item */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=100&auto=format&fit=crop"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">Casa e Coisas</p>
                <p className="text-sm font-semibold">45.000.000 Kz</p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=100&auto=format&fit=crop"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">Edifício de 9 pisos na Maianga</p>
                <p className="text-sm font-semibold">7.000.000 USD</p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a19f5d0b5d?q=80&w=100&auto=format&fit=crop"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">Terreno no Talatona</p>
                <p className="text-sm font-semibold">1.350.000 USD</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-800 pt-4">
        © 2025 Imponente Imobiliária. Todos os direitos reservados.
      </div>
    </footer>
  );
}
