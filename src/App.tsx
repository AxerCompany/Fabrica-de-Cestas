/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Play, 
  Star, 
  Shield, 
  Clock, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Zap, 
  Lock, 
  CreditCard,
  User,
  ArrowUpRight,
  Info,
  ShoppingBag,
  Gift,
  Heart,
  Palette,
  DollarSign,
  Smartphone,
  Calculator,
  Sparkles,
  ListChecks,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Artisanal Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-creme-claro/80 backdrop-blur-sm border-b border-laranja-suave/20">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-black text-xl tracking-tight uppercase text-marrom-suave">Cesta<span className="text-rosa-acolhedor">Lucrativa</span></span>
      </div>
      <button className="bg-marrom-suave text-white text-[10px] font-bold py-2 px-5 rounded-full hover:bg-marrom-suave/80 transition-colors uppercase tracking-wider">
        Acessar
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-10 md:pt-14 pb-8 md:pb-10 bg-creme-claro">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-rosa-acolhedor/10 text-rosa-acolhedor px-6 py-2 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4"
        >
          OPORTUNIDADE ÚNICA DE<br />RENDA EXTRA
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-3xl font-bold leading-tight md:leading-[1.15] tracking-tight mb-6 md:mb-8 text-marrom-suave"
        >
          Ganhe até <span className="text-rosa-acolhedor">R$ 1.000 por semana</span> vendendo cestas de café da manhã e presente — mesmo começando do zero.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-marrom-suave/80 text-xs md:text-base font-bold max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed"
        >
          Assista ao vídeo abaixo e descubra como o aplicativo mostra quais cestas montar, quanto cobrar e quanto você pode lucrar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[9/16] max-w-[320px] mx-auto bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-marrom-suave/5 group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src="https://i.postimg.cc/TP4cZD2B/Whats_App_Image_2026_03_14_at_22_26_20.webp" 
                alt="Thumbnail do Vídeo" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md text-marrom-suave rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="fill-current w-6 h-6 ml-1" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-rosa-acolhedor text-white px-4 py-2 rounded-full text-xs font-bold shadow-md uppercase tracking-wider"
                >
                  Clique para assistir
                </motion.div>
              </div>
            </>
          ) : (
            <iframe
              src="https://player.vimeo.com/video/1173769301?h=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Mini VSL"
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="pt-8 pb-24 bg-creme-claro">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-marrom-suave">Comece a vender cestas em 3 passos simples</h2>
        <div className="w-12 h-1 bg-rosa-acolhedor mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            step: "01", 
            title: "IDEIAS DIRETAS NO CELULAR", 
            desc: "Você abre o aplicativo e ele mostra cestas prontas para vender, com itens e sugestão de montagem. Sem precisar quebrar a cabeça.", 
            icon: Smartphone 
          },
          { 
            step: "02", 
            title: "CALCULE CUSTOS E LUCROS", 
            desc: "O aplicativo calcula o custo da cesta, preço ideal de venda e lucro possível. Saiba exatamente quanto vai ganhar.", 
            icon: Calculator 
          },
          { 
            step: "03", 
            title: "DIVULGUE E VENDA", 
            desc: "O app cria textos prontos para WhatsApp e Instagram. Você publica a cesta e começa a receber pedidos imediatamente.", 
            icon: ArrowUpRight 
          },
        ].map((item, i) => (
          <div key={i} className="group p-8 bg-white rounded-3xl border border-marrom-suave/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-marrom-suave/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rosa-acolhedor/10 transition-colors">
              <item.icon className="w-6 h-6 text-marrom-suave group-hover:text-rosa-acolhedor transition-colors" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-marrom-suave">{item.title}</h3>
            <p className="text-marrom-suave/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppTechnology = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 text-marrom-suave leading-tight">
              SEU NEGÓCIO DE CESTAS NA PALMA DA MÃO
            </h2>
            <span className="inline-block text-rosa-acolhedor text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              TECNOLOGIA EXCLUSIVA
            </span>
            <p className="text-marrom-suave/60 text-sm md:text-base leading-relaxed">
              O aplicativo mostra ideias de cestas, calcula o lucro e ajuda você a começar a vender.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[300px] md:max-w-[320px] mx-auto relative group px-4">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-marrom-suave hover:text-rosa-acolhedor transition-all duration-300 border border-marrom-suave/5"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-marrom-suave hover:bg-rosa-acolhedor hover:text-white transition-all duration-300 border border-marrom-suave/5"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 md:pb-12 scrollbar-hide snap-x snap-mandatory"
        >
          {[
            "https://i.postimg.cc/TP4cZD2B/Whats-App-Image-2026-03-14-at-22-26-20.webp",
            "https://i.postimg.cc/8C0bq6k3/Whats-App-Image-2026-03-14-at-22-26-21.webp",
            "https://i.postimg.cc/5tRmZC9T/Whats-App-Image-2026-03-14-at-22-26-22.webp",
            "https://i.postimg.cc/R0DTjHCb/Whats-App-Image-2026-03-14-at-22-26-22_(1).webp",
            "https://i.postimg.cc/pd6BgFVG/Whats-App-Image-2026-03-14-at-22-26-22_(2).webp",
            "https://i.postimg.cc/s2NJthfH/Whats-App-Image-2026-03-14-at-22-26-23.webp",
            "https://i.postimg.cc/KYH5dMcH/Whats-App-Image-2026-03-14-at-22-26-21_(1).webp",
            "https://i.postimg.cc/rpP9vryj/Whats-App-Image-2026-03-14-at-22-26-21_(2).webp",
            "https://i.postimg.cc/q75G93Bj/Whats-App-Image-2026-03-14-at-22-26-21_(3).webp",
            "https://i.postimg.cc/LsbVr14x/Whats-App-Image-2026-03-14-at-22-26-21_(4).webp",
            "https://i.postimg.cc/XvzgTCNx/Whats-App-Image-2026-03-14-at-22-26-21_(5).webp",
            "https://i.postimg.cc/tgMzLxRz/Whats-App-Image-2026-03-14-at-22-26-21_(6).webp",
            "https://i.postimg.cc/vmNvpV8L/Whats-App-Image-2026-03-14-at-22-26-22_(3).webp",
            "https://i.postimg.cc/PqRMBwfQ/Whats-App-Image-2026-03-14-at-22-26-22_(4).webp",
            "https://i.postimg.cc/N0zxWHG4/Whats-App-Image-2026-03-14-at-22-26-22_(5).webp"
          ].map((url, i) => (
            <div key={i} className="w-full flex-shrink-0 aspect-[9/16] bg-creme-claro rounded-2xl overflow-hidden border border-marrom-suave/5 snap-center shadow-sm">
              <img 
                src={url} 
                alt={`App Screen ${i + 1}`} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "IDEIAS DE CESTAS EXCLUSIVAS", 
              desc: "Descubra vários modelos de cestas exclusivas para vender.", 
              icon: Sparkles 
            },
            { 
              title: "LISTA DE ITENS COMPLETA", 
              desc: "Veja exatamente quais produtos colocar em cada cesta.", 
              icon: ListChecks 
            },
            { 
              title: "CÁLCULO DE LUCRO", 
              desc: "Saiba quanto custa montar e quanto você pode ganhar tudo automático.", 
              icon: Calculator 
            },
            { 
              title: "TEXTOS PARA VENDER", 
              desc: "Copie e use mensagens prontas para divulgar suas cestas em todas as redes sociais.", 
              icon: MessageSquare 
            },
            { 
              title: "PASSO A PASSO SIMPLES", 
              desc: "Aprenda como montar, divulgar e vender suas primeiras cestas de forma simples e descomplicada.", 
              icon: CheckCircle 
            },
          ].map((f, i) => (
            <div 
              key={i} 
              className={`p-8 bg-white rounded-3xl border border-marrom-suave/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i === 3 || i === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 bg-rosa-acolhedor/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-rosa-acolhedor" />
              </div>
              <h4 className="font-bold text-marrom-suave text-lg mb-3 leading-tight">{f.title}</h4>
              <p className="text-marrom-suave/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-creme-claro">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-marrom-suave tracking-tight mb-2">
          O QUE ELAS ESTÃO DIZENDO
        </h2>
        <span className="text-rosa-acolhedor text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
          RESULTADOS REAIS
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            name: "CARLA SOUZA", 
            role: "Empreendedora",
            image: "https://i.postimg.cc/dVXGbZmW/image_13_229x300_(1).webp",
            text: "Eu sempre quis vender cestas, mas não sabia por onde começar. O aplicativo me mostrou ideias prontas e até quanto cobrar. Consegui fazer minhas primeiras vendas muito mais rápido do que imaginava." 
          },
          { 
            name: "RENATA OLIVEIRA", 
            role: "Vendedora de Cestas",
            image: "https://i.postimg.cc/fRFYGSj8/image_14_300x300_(1).webp",
            text: "O que mais gostei foi ver o lucro antes de montar a cesta. Isso me deu segurança para começar. Fiz minha primeira venda na mesma semana que comecei a usar." 
          },
          { 
            name: "ANA PAULA LIMA", 
            role: "Mãe e Empreendedora",
            image: "https://i.postimg.cc/CKqbSMmc/image_15_300x300_(1)_(1).webp",
            text: "Eu tinha medo de investir e não vender. O app me ajudou com ideias de cestas e textos para divulgar. Hoje já recebo pedidos pelo WhatsApp." 
          },
          { 
            name: "JULIANA FERREIRA", 
            role: "Empreendedora",
            image: "https://i.postimg.cc/YSWQM2bb/image_16_281x300_(1)_(1).webp",
            text: "Para quem está começando do zero é perfeito. O aplicativo mostra o que colocar na cesta, quanto cobrar e como divulgar. Ficou muito mais fácil começar." 
          },
        ].map((t, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-marrom-suave/5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rosa-acolhedor text-rosa-acolhedor" />
              ))}
            </div>
            <p className="text-marrom-suave/80 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rosa-acolhedor/20 shrink-0">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-bold text-marrom-suave text-xs tracking-wider mb-1 uppercase">{t.name}</p>
                <p className="text-rosa-acolhedor text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Results = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-creme-claro/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-marrom-suave tracking-tight mb-2">
            O RESULTADO QUE VOCÊ VAI ENTREGAR
          </h2>
          <span className="text-rosa-acolhedor text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
            CESTAS QUE GERAM PEDIDOS
          </span>
          <p className="text-marrom-suave/60 text-sm max-w-xl mx-auto mb-8">
            Modelos de cestas que você pode montar e vender mesmo começando do zero.
          </p>
        </div>
        
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-marrom-suave hover:bg-rosa-acolhedor hover:text-white transition-all duration-300 border border-marrom-suave/5"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-marrom-suave hover:bg-rosa-acolhedor hover:text-white transition-all duration-300 border border-marrom-suave/5"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

            <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {[
              "https://i.postimg.cc/VNm0w16Y/bc3e3da1e0ae952dde1585787fe2b957.webp",
              "https://i.postimg.cc/Xv4BW3Jn/0e41856d2bd755872a1f6f85c49cedeb.webp",
              "https://i.postimg.cc/5tbQJ10V/526e4f9ab7334fed9865512085d2f4b7.webp",
              "https://i.postimg.cc/JhMH8mnV/03ab7fd77fa8ec384072c6627e53ea36.webp",
              "https://i.postimg.cc/vmbxyMmJ/46f9a52cbb6167160e29550a2b22c08e.webp",
              "https://i.postimg.cc/bvpSP8v5/4bf79d0e330985d6ca3e66a9d6378ef9.webp",
              "https://i.postimg.cc/YSML7kSJ/752c68c25f501fd5f1da26f6e25e71c9.webp",
              "https://i.postimg.cc/bvpSP8vM/6e84e0e38706d7a5fbfe17b5bb19605f.webp",
              "https://i.postimg.cc/Zq4vmZRz/7c5b2bbc423094d86d5e33c74fd17128.webp",
              "https://i.postimg.cc/1zsVSPz2/ef7737a848897620f1e13384ec3fa411.webp",
              "https://i.postimg.cc/hGcQngG5/fda8a74bcb0ea1b02a5bd74ba91664d3.webp"
            ].map((url, i) => (
              <div key={i} className="min-w-[260px] md:min-w-[300px] aspect-[9/16] bg-white rounded-2xl overflow-hidden snap-center shadow-sm border border-marrom-suave/5">
                <img 
                  src={url} 
                  alt={`Cesta Exemplo ${i + 1}`} 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatYouGet = () => (
  <section className="py-24 bg-creme-claro overflow-hidden relative">
    {/* Background Glows (Subtle for light mode) */}
    <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-rosa-acolhedor/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 leading-tight text-marrom-suave">
          MONTAR É FÁCIL.<br />
          <span className="text-rosa-acolhedor">AGORA APRENDA A VENDER.</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-marrom-suave/10" />
          <span className="text-rosa-acolhedor text-[10px] font-black tracking-[0.3em] uppercase">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <div className="h-[1px] w-8 bg-marrom-suave/10" />
        </div>
        <p className="text-marrom-suave/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Além do acesso vitalício ao aplicativo, você garante estes bônus especiais para acelerar seus resultados.
        </p>
      </div>

      <div className="space-y-16">
        {/* Bonus 1 - Super Bonus */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-rosa-acolhedor to-laranja-suave rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-marrom-suave/5 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-rosa-acolhedor text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    BÔNUS 01
                  </span>
                  <span className="text-laranja-suave text-[9px] font-black uppercase tracking-widest animate-pulse">
                    🔥 SUPER BÔNUS
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-marrom-suave">
                  COMO CONSEGUIR AS<br />PRIMEIRAS VENDAS
                </h3>
                
                <p className="text-marrom-suave/70 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                  Ter as cestas prontas é só o começo. Aqui você aprende como fazer as pessoas quererem comprar.
                </p>

                <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                  {[
                    "Divulgação em redes sociais, Instagram, WhatsApp, Facebook",
                    "Posts que despertam interesse",
                    "Conseguir primeiros clientes",
                    "Vender sem parecer insistente",
                    "Transformar clientes em novos pedidos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-rosa-acolhedor/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-rosa-acolhedor" />
                      </div>
                      <p className="text-marrom-suave/70 text-xs md:text-sm text-left">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-creme-claro rounded-xl border border-marrom-suave/5">
                  <span className="text-marrom-suave/30 text-[10px] line-through uppercase tracking-widest">Valor: R$ 197,00</span>
                  <span className="text-rosa-acolhedor text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus 2 */}
        <div className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-marrom-suave/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="bg-marrom-suave/5 text-marrom-suave/60 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  BÔNUS 02
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-marrom-suave">
                COMO COMEÇAR A VENDER<br />CESTAS DO ZERO
              </h3>
              
              <p className="text-marrom-suave/70 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                Um guia simples para quem quer começar mesmo sem experiência, direto ao ponto.
              </p>

              <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                {[
                  "Quantas cestas fazer no início",
                  "Montagem da primeira cesta",
                  "Onde comprar itens baratos",
                  "Fotos bonitas com o celular",
                  "Como evitar erros de iniciantes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-marrom-suave/5 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-marrom-suave/40" />
                    </div>
                    <p className="text-marrom-suave/70 text-xs md:text-sm text-left">{item}</p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-creme-claro rounded-xl border border-marrom-suave/5">
                <span className="text-marrom-suave/30 text-[10px] line-through uppercase tracking-widest">Valor: R$ 97,00</span>
                <span className="text-rosa-acolhedor text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 + 20);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 bg-marrom-suave text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rosa-acolhedor rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-laranja-suave rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-medium uppercase mb-2">Cesta Lucrativa</h2>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-laranja-suave bg-white/5 px-4 py-2 rounded-full border border-white/10 inline-block mb-8">
            OFERTA EXCLUSIVA • VAGAS LIMITADAS
          </span>
          <p className="text-laranja-suave text-xs font-bold tracking-widest uppercase">ACESSO TOTAL + MOLDES + BÔNUS</p>
        </div>

        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-rosa-acolhedor/5">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-rosa-acolhedor/20 to-laranja-suave/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative">
            <div className="mb-8">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-rosa-acolhedor mb-4 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" /> OFERTA EXPIRA EM: {formatTime(timeLeft)}
            </p>
            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-6">
              O preço subirá para <span className="text-white font-bold">R$ 197,00</span> após o cronômetro zerar
            </p>
            
            <div className="space-y-2 mb-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>Vagas Preenchidas:</span>
                <span className="text-laranja-suave">71%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "71%" }}
                  className="h-full bg-laranja-suave"
                />
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/40 italic">Últimas 9 licenças disponíveis com desconto</p>
          </div>

          <div className="mb-8">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2 italic">Aproveite a oferta de lançamento</p>
            <p className="text-white/40 line-through text-lg mb-1">DE R$ 197,00</p>
            <div className="flex items-start justify-center gap-1">
              <span className="text-2xl font-black italic mt-2">R$</span>
              <span className="text-7xl font-black italic tracking-tighter text-laranja-suave">37</span>
              <span className="text-2xl font-black italic mt-2">,00</span>
            </div>
          </div>

          <div className="space-y-3 mb-10 text-left max-w-[280px] mx-auto">
            {[
              "Acesso Completo ao App",
              "Ideias de Cestas Exclusivas",
              "Cálculo de Lucro Automático",
              "Textos para Vender Prontos",
              "Garantia Incondicional",
              "Bônus: Guia Começar do Zero",
              "Bônus: Primeiras Vendas",
              "Suporte Exclusivo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-laranja-suave/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-laranja-suave" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tight text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-rosa-acolhedor hover:bg-rosa-acolhedor/90 text-white font-black py-5 rounded-xl transition-all flex flex-col items-center justify-center gap-1 uppercase italic tracking-tight animate-pulse-subtle shadow-lg shadow-rosa-acolhedor/20">
            <span className="text-lg flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> LIBERAR MEU ACESSO AGORA</span>
          </button>
          
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] mt-4 text-white/40">
            PIX • CARTÃO • BOLETO
          </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 opacity-30 grayscale invert">
          <Shield className="w-5 h-5" />
          <Lock className="w-5 h-5" />
          <CreditCard className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "Como recebo o acesso?", a: "O acesso é enviado automaticamente para o seu e-mail após a confirmação do pagamento." },
    { q: "Preciso de experiência?", a: "Não, o método foi feito para iniciantes que querem começar do zero com artesanato." },
    { q: "Tem garantia?", a: "Sim, oferecemos 7 dias de garantia incondicional." },
  ];

  return (
    <section className="py-24 bg-creme-claro">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium uppercase mb-12 text-center text-marrom-suave">Dúvidas</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-b border-marrom-suave/10 pb-4">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span className="font-bold text-sm uppercase italic text-marrom-suave">{item.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-marrom-suave/40 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-marrom-suave/60 py-4 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-creme-claro border-t border-marrom-suave/5">
    <div className="max-w-6xl mx-auto px-6 text-center text-[10px] text-marrom-suave/40 uppercase tracking-widest">
      <div className="flex justify-center gap-8 mb-6 font-bold">
        <a href="#" className="hover:text-rosa-acolhedor transition-colors">Privacidade</a>
        <a href="#" className="hover:text-rosa-acolhedor transition-colors">Termos</a>
      </div>
      <p className="mb-2">CNPJ: 00.000.000/0001-00</p>
      <p>© 2026 CestaLucrativa. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const FloatingScarcity = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Mariana");

  useEffect(() => {
    const names = ["Mariana", "Ana Paula", "Carla", "Julia", "Renata", "Beatriz", "Fernanda", "Luciana", "Patrícia", "Camila", "Amanda", "Larissa"];
    const timer = setInterval(() => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 bg-white border border-laranja-suave/20 p-4 rounded-lg shadow-xl flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-laranja-suave rounded-full animate-pulse" />
          <p className="text-[10px] font-bold uppercase italic tracking-tight text-marrom-suave">
            {name} acabou de garantir o acesso
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-creme-claro font-sans antialiased selection:bg-rosa-acolhedor/20 selection:text-marrom-suave">
      <Hero />
      <HowItWorks />
      <AppTechnology />
      <Testimonials />
      <Results />
      <WhatYouGet />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingScarcity />
    </div>
  );
}
