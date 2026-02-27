import React from 'react';

// Componente de Card de Criativo (Para a Galeria)
const CreativeCard = ({ title, type }) => (
  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-green-500 transition-all group">
    <div className="aspect-[9/16] bg-gray-900 flex items-center justify-center relative">
      <span className="text-gray-700 group-hover:text-green-500 transition-colors italic">Preview {type}</span>
      <div className="absolute bottom-4 left-4">
        <p className="text-xs font-bold uppercase tracking-tighter text-white">{title}</p>
      </div>
    </div>
  </div>
);

export default function PublicitaLandingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">PUBLICITA<span className="text-green-500">.</span></div>
        <a href="#qualificar" className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">
          Área de Membros
        </a>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
          ESCALAMOS LOJAS DE <span className="text-green-500 text-outline">DROPSHIPPING</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Criamos anúncios vencedores e gerimos tráfego pago para operações que faturam acima de 50.000 MT/mês.
        </p>
        <a href="#qualificar" className="inline-block bg-white text-black text-xl font-black px-12 py-5 rounded-full hover:scale-105 transition-transform">
          QUERO ESCALAR MINHA LOJA
        </a>
      </section>

      {/* 2. SEÇÃO DE CRIATIVOS (GALERIA) */}
      <section id="criativos" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Criativos que geram vendas</h2>
        <p className="text-gray-500 mb-10 italic">Criamos anúncios pensados para vender, não apenas para parecer bonito.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CreativeCard title="Produto Tech" type="Vídeo" />
          <CreativeCard title="Moda Feminina" type="Imagem" />
          <CreativeCard title="Acessórios" type="Vídeo" />
          <CreativeCard title="Home Decor" type="Vídeo" />
        </div>
      </section>

      {/* 3 & 4. QUEM SOMOS & COMO FUNCIONA */}
      <section className="py-20 bg-[#0f0f0f] border-y border-gray-900 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic underline decoration-green-500 text-white">Quem somos</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              A Publicita é uma agência especializada em gestão de tráfego e criação de criativos. 
              Trabalhamos apenas com lojas que já estão a vender e querem escalar. 
              <span className="block mt-4 font-bold text-white text-xl italic underline decoration-red-500">Não trabalhamos com iniciantes.</span>
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold italic underline decoration-green-500">Como funciona</h2>
            <div className="flex gap-4">
              <span className="text-green-500 font-black text-2xl">01</span>
              <p className="text-gray-300"><strong>Analisamos sua loja:</strong> Vemos seus produtos e anúncios atuais.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-green-500 font-black text-2xl">02</span>
              <p className="text-gray-300"><strong>Criamos novos criativos:</strong> Desenvolvemos anúncios focados em conversão.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-green-500 font-black text-2xl">03</span>
              <p className="text-gray-300"><strong>Gerimos seus anúncios:</strong> Otimizamos campanhas para aumentar vendas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE QUALIFICAÇÃO (FILTRO) */}
      <section id="qualificar" className="py-24 px-6 bg-green-600 text-black">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4 uppercase">Aplicação de Escala</h2>
          <p className="mb-10 font-medium">Preencha os dados abaixo. Filtramos apenas lojas com faturamento real.</p>
          
          <form className="bg-black p-8 rounded-3xl shadow-2xl text-left space-y-6">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase mb-2">WhatsApp</label>
              <input type="text" className="w-full bg-[#111] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-green-500" placeholder="+258 8X XXX XXXX" />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Quanto você fatura por mês?</label>
              <select className="w-full bg-[#111] border border-gray-800 p-4 rounded-xl text-white outline-none appearance-none">
                <option>Menos de 20.000 MT</option>
                <option>20.000 – 50.000 MT</option>
                <option>50.000 – 100.000 MT</option>
                <option>Mais de 100.000 MT</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Link da Loja</label>
              <input type="text" className="w-full bg-[#111] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-green-500" placeholder="sualoja.com" />
            </div>
            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-5 rounded-xl uppercase tracking-widest transition-colors">
              Enviar Candidatura
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
