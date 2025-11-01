import { Flower2, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#8C6A43] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Quote */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="h-8 w-8" />
              <span className="font-playfair text-xl">Tri Upakara</span>
            </div>
            <p className="text-sm opacity-90 italic mb-4">
              "Teknologi boleh berubah, tapi yadnya tetap suci."
            </p>
            <p className="text-sm opacity-75">
              Platform digital yang menghubungkan umat Hindu Bali dengan pengrajin lokal untuk memenuhi kebutuhan upakara secara mudah, cepat, dan tetap menjaga kesucian tradisi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('why-choose')} className="hover:text-[#E6B980] transition-colors">
                  Keunggulan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('artisans')} className="hover:text-[#E6B980] transition-colors">
                  Mitra Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-[#E6B980] transition-colors">
                  Produk
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('subscription')} className="hover:text-[#E6B980] transition-colors">
                  Paket Langganan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('education')} className="hover:text-[#E6B980] transition-colors">
                  Edukasi Budaya
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Jl. Raya Ubud, Gianyar, Bali 80571</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@triupakara.id</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-[#E6B980] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#E6B980] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Tri Upakara. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
