import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import LogoTriUpakara from "../assets/img/logo-triupakara.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Keunggulan", id: "why-choose" },
    { label: "Mitra Kami", id: "artisans" },
    { label: "Produk", id: "products" },
    { label: "Paket Langganan", id: "subscription" },
    { label: "Edukasi Budaya", id: "education" },
  ];

  return (
    <footer className="bg-[#0f0d0b] text-[#ede7d9]">
      {/* ── QUOTE ── */}
      <div className="border-b border-[rgba(200,184,154,0.2)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-serif italic text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            "Teknologi boleh berubah,
            <br />
            <span className="text-[#b85c2a]">tapi yadnya tetap suci.</span>"
          </p>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 border-b border-[rgba(200,184,154,0.2)]">
          {/* BRAND */}
          <div className="py-12 md:pr-8">
            <img
              src={LogoTriUpakara}
              alt="Tri Upakara"
              className="w-16 mb-6 brightness-0 invert opacity-80"
            />

            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b85c2a] mb-4">
              Tentang Kami
            </p>

            <p className="text-sm text-[#c8b89a] leading-relaxed max-w-sm">
              Platform digital yang menghubungkan umat Hindu Bali dengan
              pengrajin lokal untuk memenuhi kebutuhan upakara secara mudah,
              cepat, dan tetap menjaga kesucian tradisi.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-[rgba(200,184,154,0.35)] text-[#c8b89a] hover:border-[#b85c2a] hover:text-[#b85c2a] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div className="py-12 md:px-8 md:border-x border-[rgba(200,184,154,0.2)]">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b85c2a] mb-6">
              Tautan Cepat
            </p>

            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex justify-between items-center py-3 border-b border-[rgba(200,184,154,0.15)] text-left text-lg font-serif hover:text-[#b85c2a] transition"
                >
                  {link.label}
                  <span className="text-[10px] tracking-widest text-[rgba(200,184,154,0.4)] font-semibold">
                    0{index + 1}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="py-12 md:pl-8">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b85c2a] mb-6">
              Hubungi Kami
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: MapPin,
                  text: "Jl. Tukad Badung No.135, Renon, Denpasar Selatan, Bali",
                },
                {
                  icon: Phone,
                  text: "+6282340202905",
                },
                {
                  icon: Mail,
                  text: "tri.upakara@gmail.com",
                },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-7 h-7 flex items-center justify-center border border-[rgba(200,184,154,0.25)]">
                    <Icon size={12} className="text-[#b85c2a]" />
                  </div>
                  <span className="text-sm text-[#c8b89a] leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-6 text-center md:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[rgba(200,184,154,0.45)] font-semibold">
            © 2025 Tri Upakara — Semua hak cipta dilindungi.
          </span>

          <span className="text-sm italic text-[rgba(200,184,154,0.35)]">
            Menjaga tradisi, merangkul masa depan.
          </span>
        </div>
      </div>
    </footer>
  );
}
