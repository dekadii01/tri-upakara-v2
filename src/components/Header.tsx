import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoTriUpakara from "../assets/img/logo-triupakara.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Keunggulan", id: "why-choose" },
    { label: "Mitra Kami", id: "artisans" },
    { label: "Produk", id: "products" },
    { label: "Paket", id: "subscription" },
    { label: "Edukasi", id: "education" },
  ];

  const headerBg = isScrolled
    ? "bg-[rgba(245,240,232,0.97)] backdrop-blur-md border-b border-neutral-300"
    : "bg-[rgba(245,240,232,0.97)] md:bg-transparent md:border-transparent";

  return (
    <header
      className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${
      isScrolled
        ? "bg-[rgba(245,240,232,0.97)] backdrop-blur-md border-b border-neutral-300"
        : "bg-[rgba(245,240,232,0.97)] md:bg-transparent md:border-transparent"
    }
  `}
    >
      {/* Top thin rule — only visible when not scrolled */}
      {!isScrolled && (
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #b85c2a 30%, #b85c2a 70%, transparent)",
            opacity: 0.4,
          }}
        />
      )}

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <img src={LogoTriUpakara} width={72} alt="Tri Upakara" />
            {/* Vertical rule separator */}
            <div
              style={{
                width: "1px",
                height: "28px",
                background: "#c8b89a",
                margin: "0 0.25rem",
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#b85c2a",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}
              >
                Platform
              </p>
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "0.95rem",
                  color: "#0f0d0b",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Upakara Digital
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "0" }}
          >
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                  background: "none",
                  border: "none",
                  padding: "0.5rem 1.25rem",
                  cursor: "pointer",
                  borderRight:
                    index < navLinks.length - 1 ? "1px solid #c8b89a" : "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b85c2a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a4e42")}
              >
                {link.label}
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("products")}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.6rem 1.5rem",
                marginLeft: "1.5rem",
                border: "2px solid #b85c2a",
                background: "#b85c2a",
                color: "#fdfaf6",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#b85c2a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#b85c2a";
                e.currentTarget.style.color = "#fdfaf6";
              }}
            >
              Pesan Sekarang
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0f0d0b",
              padding: "0.25rem",
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden"
            style={{
              borderTop: "1.5px solid #c8b89a",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            {/* Issue-style header */}
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#b85c2a",
                marginBottom: "1rem",
              }}
            >
              Navigasi
            </p>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.5rem",
                    color: "#0f0d0b",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid #ede7d9",
                    padding: "0.85rem 0",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#b85c2a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#0f0d0b")
                  }
                >
                  {link.label}
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#c8b89a",
                    }}
                  >
                    0{index + 1}
                  </span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollToSection("products")}
              style={{
                marginTop: "1.5rem",
                width: "100%",
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.85rem",
                border: "2px solid #b85c2a",
                background: "#b85c2a",
                color: "#fdfaf6",
                cursor: "pointer",
              }}
            >
              Pesan Sekarang →
            </button>
          </div>
        )}
      </div>

      {/* Bottom rule line */}
      {isScrolled && (
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #c8b89a 20%, #c8b89a 80%, transparent)",
            opacity: 0.5,
          }}
        />
      )}
    </header>
  );
}
