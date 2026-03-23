import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Leaf,
  Star,
  Users,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    id: "canang-sari",
    name: "Canang Sari",
    category: "Canang",
    description:
      "Canang sari tradisional untuk persembahan sehari-hari, dibuat dengan bunga segar dan perlengkapan lengkap.",
    price: "Rp 5.000",
    image:
      "https://images.unsplash.com/photo-1544486383-5a7dd6a60932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5ncyUyMGNhbmFuZ3xlbnwxfHx8fDE3NjE0NzUzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1649744588747-1c51d6c3102d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGNhbmFuZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxNDc2MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1671904713548-23be25957f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2MTQ3NjAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759574981243-de19797f80e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMHRlbXBsZSUyMGZsb3dlcnxlbnwxfHx8fDE3NjE0NzYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    details:
      "• Bunga segar pilihan (jempiring, sandat, kamboja)\n• Janur lengkap dengan aturan\n• Porosan dan daksina\n• Dikerjakan dengan mantra suci\n• Siap pakai untuk persembahan harian",
  },
  {
    id: "banten-pejati",
    name: "Banten Pejati",
    category: "Banten",
    description:
      "Banten pejati untuk upacara piodalan dan hari raya, dilengkapi dengan segala perlengkapan yang diperlukan.",
    price: "Rp 250.000",
    image:
      "https://images.unsplash.com/photo-1745739193791-c2d4153f5e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMHRlbXBsZSUyMG9mZmVyaW5nc3xlbnwxfHx8fDE3NjE0NzUzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1755077005329-13ce030aa794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwQmFsaXxlbnwxfHx8fDE3NjE0NzYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1671904713548-23be25957f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2MTQ3NjAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1544486383-5a7dd6a60932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5ncyUyMGNhbmFuZ3xlbnwxfHx8fDE3NjE0NzUzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    details:
      "• Perlengkapan lengkap sesuai aturan\n• Sajen, jajan, buah-buahan\n• Janur dan sampian\n• Dupa, canang, dan beras\n• Dikonsultasikan dengan sulinggih",
  },
  {
    id: "rayunan",
    name: "Rayunan",
    category: "Rayunan",
    description:
      "Rayunan (gebogan) dengan buah-buahan dan perlengkapan lengkap untuk upacara besar.",
    price: "Rp 500.000",
    image:
      "https://images.unsplash.com/photo-1712129461255-c5386eafb0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEJhbGluZXNlJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYxNDc1MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1755077005329-13ce030aa794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwQmFsaXxlbnwxfHx8fDE3NjE0NzYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1649744588747-1c51d6c3102d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGNhbmFuZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxNDc2MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759574981243-de19797f80e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMHRlbXBsZSUyMGZsb3dlcnxlbnwxfHx8fDE3NjE0NzYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    details:
      "• Buah-buahan segar berkualitas\n• Rangkaian sesuai tradisi\n• Janur dan hiasan lengkap\n• Tinggi 1-1.5 meter\n• Cocok untuk odalan dan pawiwahan",
  },
  {
    id: "paket-langganan",
    name: "Paket Canang Harian",
    category: "Paket Langganan",
    description:
      "Paket berlangganan canang harian untuk kebutuhan persembahan rutin Anda.",
    price: "Mulai Rp 100.000/bulan",
    image:
      "https://images.unsplash.com/photo-1631189187034-03605a4af96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGxlYXZlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjE0NzQ4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1544486383-5a7dd6a60932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5ncyUyMGNhbmFuZ3xlbnwxfHx8fDE3NjE0NzUzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1649744588747-1c51d6c3102d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGNhbmFuZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxNDc2MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1671904713548-23be25957f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2MTQ3NjAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    details:
      "• Pengiriman setiap hari\n• Canang segar berkualitas\n• Jadwal fleksibel\n• Harga lebih hemat\n• Bisa di-pause sementara",
  },
];

const artisans = [
  {
    id: 1,
    name: "I Made Suartana",
    location: "Ubud, Gianyar",
    specialty: "Canang & Banten",
    experience: "25 tahun",
    image:
      "https://images.unsplash.com/photo-1726931535415-edbc43d42c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGFydGlzYW4lMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjE0NzUzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Ni Ketut Sari",
    location: "Sanur, Denpasar",
    specialty: "Rayunan & Gebogan",
    experience: "18 tahun",
    image:
      "https://images.unsplash.com/photo-1711783059489-8a0da5564785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNDc1MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "I Wayan Sukerta",
    location: "Tabanan",
    specialty: "Banten Upacara Besar",
    experience: "30 tahun",
    image:
      "https://images.unsplash.com/photo-1726931535415-edbc43d42c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMGFydGlzYW4lMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjE0NzUzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const educationalContent = [
  {
    title: "Canang Sari",
    description:
      "Simbol rasa syukur dan penghormatan kepada Sang Hyang Widhi. Diletakkan di berbagai tempat suci sebagai ungkapan terima kasih atas keselamatan dan berkah yang diberikan.",
    meaning:
      "Filosofi canang mengajarkan tentang kerendahan hati dan keikhlasan dalam beryakti.",
  },
  {
    title: "Daksina",
    description:
      "Perlengkapan yang terdiri dari uang kepeng, beras, bunga, dan kapur yang melambangkan kesucian dan persembahan material dalam beribadah.",
    meaning:
      "Daksina adalah wujud nyata dari persembahan bhakti kepada Ida Sang Hyang Widhi.",
  },
  {
    title: "Rayunan (Gebogan)",
    description:
      "Susunan buah-buahan dan janur yang disusun tinggi sebagai persembahan dalam upacara besar. Melambangkan kemakmuran dan hasil bumi yang dipersembahkan.",
    meaning:
      "Rayunan mengajarkan tentang bersyukur atas kelimpahan dan berbagi dengan sesama.",
  },
];

const testimonials = [
  {
    name: "I Putu Darma",
    location: "Denpasar",
    rating: 5,
    comment:
      "Sangat membantu untuk kebutuhan upacara sehari-hari. Canang selalu segar dan pengrajinnya sangat berpengalaman. Terima kasih Tri Upakara!",
  },
  {
    name: "Ni Luh Ayu",
    location: "Gianyar",
    rating: 5,
    comment:
      "Paket langganan bulanan sangat praktis. Tidak perlu repot lagi setiap hari. Kualitas terjaga dan harga terjangkau.",
  },
  {
    name: "I Made Sudiarta",
    location: "Badung",
    rating: 5,
    comment:
      "Untuk upacara besar kemarin, rayunan yang dipesan sangat indah dan lengkap. Sesuai dengan tradisi dan dikerjakan dengan penuh kehati-hatian.",
  },
];

// Typography styles injected globally
const typographyStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&family=Instrument+Serif:ital@0;1&family=Syne:wght@400;500;600;700;800&display=swap');

  :root {
    --ink: #0f0d0b;
    --ink-muted: #5a4e42;
    --paper: #f5f0e8;
    --paper-warm: #ede7d9;
    --accent: #b85c2a;
    --accent-light: #d4896a;
    --rule: #c8b89a;
    --white: #fdfaf6;
  }

  * { box-sizing: border-box; }

  body {
    background-color: var(--paper);
    color: var(--ink);
    font-family: 'Syne', sans-serif;
  }

  .font-display { font-family: 'DM Serif Display', serif; }
  .font-serif { font-family: 'Instrument Serif', serif; }
  .font-sans { font-family: 'Syne', sans-serif; }

  /* Typographic rule lines */
  .rule-top { border-top: 1.5px solid var(--rule); }
  .rule-bottom { border-bottom: 1.5px solid var(--rule); }
  .rule-left { border-left: 4px solid var(--accent); }

  /* Running number/label style */
  .overline {
    font-family: 'Syne', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
  }

  /* Giant pull quote style */
  .display-xl {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(3.5rem, 10vw, 9rem);
    line-height: 0.9;
    letter-spacing: -0.03em;
    color: var(--ink);
  }

  .display-lg {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.5rem, 6vw, 5.5rem);
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--ink);
  }

  .display-md {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .body-serif {
    font-family: 'Instrument Serif', serif;
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--ink-muted);
  }

  .caption {
    font-family: 'Syne', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
  }

  /* Editorial card hover */
  .editorial-card {
    background: var(--white);
    border: 1.5px solid var(--rule);
    transition: all 0.3s ease;
  }
  .editorial-card:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 6px 6px 0px var(--accent);
  }

  /* Outlined button */
  .btn-ink {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    border: 2px solid var(--ink);
    background: transparent;
    color: var(--ink);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-ink:hover {
    background: var(--ink);
    color: var(--paper);
  }

  .btn-accent {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.75rem 2rem;
    border: 2px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-accent:hover {
    background: transparent;
    color: var(--accent);
  }

  /* Column grid */
  .col-rule {
    border-right: 1.5px solid var(--rule);
  }

  /* Marquee */
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .marquee-track {
    animation: marquee 18s linear infinite;
    white-space: nowrap;
    display: flex;
  }

  /* Image overlay on hover */
  .img-overlay {
    position: relative;
    overflow: hidden;
  }
  .img-overlay img {
    transition: transform 0.6s ease;
  }
  .img-overlay:hover img {
    transform: scale(1.05);
  }
  .img-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(15,13,11,0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .img-overlay:hover::after {
    opacity: 1;
  }

  /* Drop cap */
  .drop-cap::first-letter {
    font-family: 'DM Serif Display', serif;
    font-size: 4rem;
    line-height: 0.8;
    float: left;
    margin-right: 0.1em;
    margin-top: 0.05em;
    color: var(--accent);
  }

  /* Section counter */
  .section-num {
    font-family: 'Syne', sans-serif;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.25em;
    color: var(--rule);
  }
`;

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (selectedProduct) {
    return (
      <>
        <style>{typographyStyles}</style>
        <Header />
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
        <Footer />
      </>
    );
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappOrder = (msg) => {
    window.open(
      `https://wa.me/6282340202905?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <>
      <style>{typographyStyles}</style>
      <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <Header />

        {/* ── HERO ── */}
        <section
          id="hero"
          style={{
            paddingTop: "7rem",
            paddingBottom: "4rem",
            borderBottom: "1.5px solid var(--rule)",
          }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            {/* ── META BAR ── */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-12 pb-4 border-b border-(--rule) text-[10px] tracking-[0.2em] uppercase font-semibold">
              <span className="overline">Edisi Khusus · 2025</span>
              <span className="overline">Upakara Tradisional Bali</span>
              <span className="overline">Est. Sejak Zaman Dahulu</span>
            </div>

            {/* Giant headline grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <p className="overline" style={{ marginBottom: "1.5rem" }}>
                  Platform Upakara Digital
                </p>
                <h1 className="display-xl" style={{ color: "var(--ink)" }}>
                  Tri
                  <br />
                  <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                    Upakara
                  </em>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                style={{ paddingBottom: "0.5rem" }}
              >
                <div
                  className="rule-left"
                  style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}
                >
                  <p className="body-serif">
                    Platform digital yang menghubungkan umat Hindu Bali dengan
                    pengrajin lokal terpercaya. Memenuhi kebutuhan upakara
                    dengan mudah, cepat, dan tetap menjaga kesucian tradisi
                    leluhur.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <button
                    className="btn-accent"
                    onClick={() => scrollToSection("products")}
                  >
                    Pesan Sekarang
                  </button>
                  <button
                    className="btn-ink"
                    onClick={() => scrollToSection("artisans")}
                  >
                    Lihat Mitra Kami
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Hero image strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:h-[360px]"
            >
              {[
                "https://images.unsplash.com/photo-1544486383-5a7dd6a60932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1745739193791-c2d4153f5e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                "https://images.unsplash.com/photo-1712129461255-c5386eafb0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              ].map((src, i) => (
                <div
                  key={i}
                  className="img-overlay"
                  style={{ borderRadius: "2px", overflow: "hidden" }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {i === 0 && (
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-[var(--accent)] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                        Tradisi · Suci · Otentik
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── MARQUEE BAND ── */}
        <div
          style={{
            background: "var(--ink)",
            padding: "0.9rem 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track">
            {Array(8)
              .fill(
                "Upakara Suci · Pengrajin Lokal · Tradisi Bali · Canang Sari · Banten Pejati · Rayunan ·",
              )
              .map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--paper-warm)",
                    marginRight: "3rem",
                  }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <section
          id="why-choose"
          style={{ padding: "6rem 0", background: "var(--white)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start pb-16 mb-16 border-b border-neutral-200">
              {/* Title */}
              <div>
                <span className="section-num">§ 01</span>
                <h2 className="display-md mt-2 leading-tight">
                  Mengapa <br />
                  <em className="italic text-accent">Memilih</em> <br />
                  Kami?
                </h2>
              </div>

              {/* Description */}
              <p className="md:col-span-2 body-serif drop-cap text-neutral-700 leading-relaxed">
                Kami berkomitmen menjaga kesucian tradisi Bali sambil memberikan
                kemudahan modern kepada setiap umat. Setiap produk dikerjakan
                dengan niat suci, bahan terpilih, dan penuh penghayatan terhadap
                nilai-nilai leluhur yang telah diwariskan turun-temurun.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
              {[
                {
                  icon: Sparkles,
                  num: "01",
                  title: "Asli dari Pengrajin Lokal",
                  desc: "Dibuat oleh pengrajin berpengalaman yang memahami tradisi.",
                },
                {
                  icon: ShieldCheck,
                  num: "02",
                  title: "Suci & Terjaga",
                  desc: "Dikerjakan dengan mantra suci sesuai ajaran Hindu.",
                },
                {
                  icon: Zap,
                  num: "03",
                  title: "Mudah & Cepat",
                  desc: "Pesan via WhatsApp, pengiriman cepat ke lokasi Anda.",
                },
                {
                  icon: Leaf,
                  num: "04",
                  title: "Ramah Lingkungan",
                  desc: "Bahan alami, mendukung keberlanjutan tradisi.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "2rem",
                    borderRight: index < 3 ? "1.5px solid var(--rule)" : "none",
                  }}
                >
                  <span
                    className="overline"
                    style={{ display: "block", marginBottom: "1.5rem" }}
                  >
                    {item.num}
                  </span>
                  <item.icon
                    size={24}
                    style={{ color: "var(--accent)", marginBottom: "1rem" }}
                  />
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.2rem",
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTISANS ── */}
        <section
          id="artisans"
          style={{ padding: "6rem 0", background: "var(--paper)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid var(--rule)",
              }}
            >
              <div>
                <span className="section-num">§ 02</span>
                <h2 className="display-md" style={{ marginTop: "0.5rem" }}>
                  Mitra Pengrajin
                  <br />
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                    Kami
                  </em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1rem",
                  color: "var(--ink-muted)",
                  maxWidth: "320px",
                  textAlign: "right",
                  lineHeight: 1.6,
                }}
              >
                Bertemu dengan para pengrajin berpengalaman yang menjaga tradisi
                dengan sepenuh hati.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {artisans.map((artisan, index) => (
                <motion.div
                  key={artisan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    {/* Title */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl text-neutral-900 leading-tight">
                        {artisan.name}
                      </h3>
                      <span className="overline text-accent">
                        {artisan.experience}
                      </span>
                    </div>

                    {/* Location */}
                    <p className="text-xs text-neutral-500 mb-1">
                      {artisan.location}
                    </p>

                    {/* Specialty */}
                    <p className="text-sm text-neutral-600 mb-5 leading-relaxed font-serif">
                      {artisan.specialty}
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => scrollToSection("products")}
                      className="mt-auto w-full border border-neutral-900 text-neutral-900 text-xs font-semibold tracking-widest uppercase py-3 transition-all duration-200 hover:bg-neutral-900 hover:text-white"
                    >
                      Lihat Produk →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section
          id="products"
          style={{ padding: "6rem 0", background: "var(--ink)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid rgba(200,184,154,0.3)",
              }}
            >
              <div>
                <span
                  className="section-num"
                  style={{ color: "rgba(200,184,154,0.6)" }}
                >
                  § 03
                </span>
                <h2
                  className="display-md"
                  style={{ marginTop: "0.5rem", color: "var(--paper)" }}
                >
                  Kategori
                  <br />
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--accent-light)",
                    }}
                  >
                    Produk
                  </em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1rem",
                  color: "var(--rule)",
                  maxWidth: "300px",
                  textAlign: "right",
                  lineHeight: 1.6,
                }}
              >
                Pilihan lengkap upakara untuk berbagai kebutuhan upacara Anda.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{
                background: "rgba(200,184,154,0.2)",
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{
                    background: "var(--ink)",
                    padding: "2.5rem",
                    gap: "2rem",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1a1612")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--ink)")
                  }
                  onClick={() => setSelectedProduct(product)}
                >
                  <div
                    className="img-overlay"
                    style={{ height: "220px", borderRadius: "2px" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <span
                      className="overline"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {product.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "1.8rem",
                        color: "var(--paper)",
                        margin: "0.75rem 0 1rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "0.95rem",
                        color: "var(--rule)",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {product.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: "1.2rem",
                          color: "var(--accent-light)",
                        }}
                      >
                        {product.price}
                      </span>
                      <ArrowUpRight
                        size={20}
                        style={{ color: "var(--accent-light)" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUBSCRIPTION ── */}
        <section
          id="subscription"
          style={{ padding: "6rem 0", background: "var(--paper-warm)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div
              style={{
                marginBottom: "3rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid var(--rule)",
              }}
            >
              <span className="section-num">§ 04</span>
              <h2 className="display-md" style={{ marginTop: "0.5rem" }}>
                Paket{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  Langganan
                </em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Harian",
                  price: "Rp 5.000",
                  period: "/ hari",
                  features: [
                    "1 set canang sari",
                    "Bunga segar setiap hari",
                    "Pengiriman pagi hari",
                    "Fleksibel berhenti kapan saja",
                  ],
                  popular: false,
                },
                {
                  name: "Mingguan",
                  price: "Rp 30.000",
                  period: "/ minggu",
                  features: [
                    "7 set canang sari",
                    "Hemat Rp 5.000",
                    "Pengiriman 2x seminggu",
                    "Prioritas pengiriman",
                  ],
                  popular: true,
                },
                {
                  name: "Bulanan",
                  price: "Rp 100.000",
                  period: "/ bulan",
                  features: [
                    "30 set canang sari",
                    "Hemat Rp 50.000",
                    "Gratis ongkir",
                    "Bonus banten hari raya",
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "3rem 2.5rem",
                    background: plan.popular ? "var(--ink)" : "var(--white)",
                    border: "1.5px solid var(--rule)",
                    borderRight: index < 2 ? "none" : "1.5px solid var(--rule)",
                    position: "relative",
                  }}
                >
                  {plan.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--accent)",
                        padding: "0.3rem 1.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--white)",
                        }}
                      >
                        Populer
                      </span>
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: plan.popular ? "var(--rule)" : "var(--ink-muted)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {plan.name}
                  </h3>

                  <div style={{ marginBottom: "2rem" }}>
                    <span
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "2.8rem",
                        color: plan.popular ? "var(--paper)" : "var(--ink)",
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.75rem",
                        color: plan.popular
                          ? "var(--rule)"
                          : "var(--ink-muted)",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <div
                    style={{
                      borderTop: `1px solid ${plan.popular ? "rgba(200,184,154,0.3)" : "var(--rule)"}`,
                      paddingTop: "1.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          marginBottom: "0.75rem",
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "0.82rem",
                          color: plan.popular
                            ? "var(--paper-warm)"
                            : "var(--ink-muted)",
                        }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                          —
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      whatsappOrder(
                        `Halo, saya tertarik dengan Paket Langganan ${plan.name} (${plan.price}${plan.period}). Mohon informasi lebih lanjut.`,
                      )
                    }
                    style={{
                      width: "100%",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.85rem",
                      border: `2px solid ${plan.popular ? "var(--accent)" : "var(--ink)"}`,
                      background: plan.popular
                        ? "var(--accent)"
                        : "transparent",
                      color: plan.popular ? "var(--white)" : "var(--ink)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (plan.popular) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--accent)";
                      } else {
                        e.currentTarget.style.background = "var(--ink)";
                        e.currentTarget.style.color = "var(--paper)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.popular) {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.color = "var(--white)";
                      } else {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--ink)";
                      }
                    }}
                  >
                    Mulai Langganan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section
          id="education"
          style={{ padding: "6rem 0", background: "var(--white)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div
              style={{
                marginBottom: "3rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid var(--rule)",
              }}
            >
              <span className="section-num">§ 05</span>
              <h2 className="display-md" style={{ marginTop: "0.5rem" }}>
                Edukasi{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  Budaya
                </em>
              </h2>
            </div>

            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Carousel className="w-full">
                <CarouselContent>
                  {educationalContent.map((content, index) => (
                    <CarouselItem key={index}>
                      <div
                        style={{
                          border: "1.5px solid var(--rule)",
                          padding: "3rem 4rem",
                          background: "var(--paper)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            marginBottom: "2rem",
                            paddingBottom: "1.5rem",
                            borderBottom: "1.5px solid var(--rule)",
                          }}
                        >
                          <BookOpen
                            size={20}
                            style={{ color: "var(--accent)" }}
                          />
                          <span className="overline">Makna & Filosofi</span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: "2.8rem",
                            color: "var(--ink)",
                            marginBottom: "1.5rem",
                            lineHeight: 1,
                          }}
                        >
                          {content.title}
                        </h3>
                        <p
                          className="body-serif drop-cap"
                          style={{ marginBottom: "2rem" }}
                        >
                          {content.description}
                        </p>
                        <div
                          style={{
                            borderLeft: "4px solid var(--accent)",
                            paddingLeft: "1.5rem",
                            background: "var(--paper-warm)",
                            padding: "1.25rem 1.25rem 1.25rem 1.75rem",
                            borderLeft: "4px solid var(--accent)",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Instrument Serif', serif",
                              fontSize: "1.05rem",
                              fontStyle: "italic",
                              color: "var(--ink-muted)",
                            }}
                          >
                            {content.meaning}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-6 md:mt-0 md:block">
                  <CarouselPrevious
                    className="
          static
          md:absolute md:left-0 md:-translate-x-12 md:top-1/2 md:-translate-y-1/2
        "
                  />

                  <CarouselNext
                    className="
          static
          md:absolute md:right-0 md:translate-x-12 md:top-1/2 md:-translate-y-1/2
        "
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          id="testimonials"
          style={{ padding: "6rem 0", background: "var(--paper)" }}
        >
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div
              style={{
                marginBottom: "3rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid var(--rule)",
              }}
            >
              <span className="section-num">§ 06</span>
              <h2 className="display-md" style={{ marginTop: "0.5rem" }}>
                Suara{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  Pelanggan
                </em>
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                gap: "0",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "2.5rem",
                    borderRight: index < 2 ? "1.5px solid var(--rule)" : "none",
                    borderTop: "1.5px solid var(--rule)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: "var(--accent)", fontSize: "0.9rem" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "var(--ink)",
                      lineHeight: 1.7,
                      marginBottom: "2rem",
                    }}
                  >
                    "{testimonial.comment}"
                  </p>
                  <div
                    style={{
                      paddingTop: "1.25rem",
                      borderTop: "1.5px solid var(--rule)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "var(--ink)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {testimonial.name}
                      </p>
                      <p className="caption">{testimonial.location}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Users size={12} style={{ color: "var(--accent)" }} />
                      <span className="overline">Verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN CTA ── */}
        <section
          id="join"
          className="py-24 bg-[var(--paper-warm)] border-y border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              {/* Left */}
              <div>
                <span className="section-num">§ 07</span>
                <h2 className="mt-2 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[var(--ink)]">
                  Bergabung
                  <br />
                  Bersama
                  <br />
                  <em className="italic text-[var(--accent)]">Kami</em>
                </h2>
              </div>

              {/* Right */}
              <div>
                <p className="body-serif mb-4 text-sm md:text-base">
                  Apakah Anda seorang pengrajin upakara? Bergabunglah dengan
                  kami untuk menjangkau lebih banyak umat yang membutuhkan karya
                  tangan Anda.
                </p>

                <p className="body-serif mb-10 text-sm md:text-base">
                  Mari bersama melestarikan tradisi sambil memberdayakan ekonomi
                  lokal Bali yang kita cintai.
                </p>

                <button
                  onClick={() =>
                    whatsappOrder(
                      "Halo, saya tertarik untuk bergabung sebagai mitra pengrajin Tri Upakara. Mohon informasi lebih lanjut.",
                    )
                  }
                  className="
            btn-accent
            text-xs tracking-widest
            px-6 py-3
            transition-all duration-200
            hover:opacity-90
          "
                >
                  Daftar Sekarang →
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
