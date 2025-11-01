import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Flower2 } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Flower2 className="h-8 w-8 text-[#8C6A43]" />
            <span className="font-playfair text-xl text-[#8C6A43]">Tri Upakara</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('why-choose')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors">
              Keunggulan
            </button>
            <button onClick={() => scrollToSection('artisans')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors">
              Mitra Kami
            </button>
            <button onClick={() => scrollToSection('products')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors">
              Produk
            </button>
            <button onClick={() => scrollToSection('subscription')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors">
              Paket
            </button>
            <button onClick={() => scrollToSection('education')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors">
              Edukasi
            </button>
            <Button onClick={() => scrollToSection('hero')} className="bg-[#8C6A43] hover:bg-[#6d5335] text-white rounded-full">
              Pesan Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8C6A43]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#D8C49A] pt-4">
            <button onClick={() => scrollToSection('why-choose')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors text-left">
              Keunggulan
            </button>
            <button onClick={() => scrollToSection('artisans')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors text-left">
              Mitra Kami
            </button>
            <button onClick={() => scrollToSection('products')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors text-left">
              Produk
            </button>
            <button onClick={() => scrollToSection('subscription')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors text-left">
              Paket
            </button>
            <button onClick={() => scrollToSection('education')} className="text-[#2d1810] hover:text-[#8C6A43] transition-colors text-left">
              Edukasi
            </button>
            <Button onClick={() => scrollToSection('hero')} className="bg-[#8C6A43] hover:bg-[#6d5335] text-white rounded-full w-full">
              Pesan Sekarang
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
