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
} from "lucide-react";

// Product data
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

// Artisan data
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

// Educational content
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

// Testimonials
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

function App() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (selectedProduct) {
    return (
      <>
        <Header />
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
        <Footer />
      </>
    );
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 poleng-pattern opacity-30" />

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544486383-5a7dd6a60932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpbmVzZSUyMG9mZmVyaW5ncyUyMGNhbmFuZ3xlbnwxfHx8fDE3NjE0NzUzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F3] via-transparent to-[#FFF9F3]" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-5xl md:text-7xl text-[#8C6A43] mb-6">
              Tradisi Suci, Kini Lebih Dekat
            </h1>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#D8C49A] mb-8">
              Tri Upakara
            </h2>
            <p className="text-lg md:text-xl text-[#2d1810] opacity-75 mb-12 max-w-2xl mx-auto leading-relaxed">
              Platform digital yang menghubungkan umat Hindu Bali dengan
              pengrajin lokal terpercaya untuk memenuhi kebutuhan upakara dengan
              mudah, cepat, dan tetap menjaga kesucian tradisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("products")}
                className="bg-[#8C6A43] hover:bg-[#6d5335] text-white px-8 py-6 rounded-full shadow-lg text-lg"
              >
                Pesan Sekarang
              </Button>
              <Button
                onClick={() => scrollToSection("artisans")}
                variant="outline"
                className="border-2 border-[#8C6A43] text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white px-8 py-6 rounded-full text-lg"
              >
                Lihat Mitra Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Mengapa Memilih Tri Upakara?
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Kami berkomitmen menjaga kesucian tradisi sambil memberikan
              kemudahan modern
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Asli dari Pengrajin Lokal",
                description:
                  "Dibuat oleh pengrajin berpengalaman yang memahami tradisi.",
              },
              {
                icon: ShieldCheck,
                title: "Suci & Terjaga",
                description:
                  "Dikerjakan dengan mantra suci sesuai ajaran Hindu.",
              },
              {
                icon: Zap,
                title: "Mudah & Cepat",
                description:
                  "Pesan via WhatsApp, pengiriman cepat ke lokasi Anda.",
              },
              {
                icon: Leaf,
                title: "Ramah Lingkungan",
                description: "Bahan alami, mendukung keberlanjutan tradisi.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-[#D8C49A] rounded-2xl h-full bg-gradient-to-b from-white to-[#FFF9F3] flex items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#E6B980]/20 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-[#8C6A43] text-center" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#8C6A43] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2d1810] opacity-75">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Showcase */}
      <section id="artisans" className="py-24 bg-[#FFF9F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Mitra Pengrajin Kami
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Bertemu dengan para pengrajin berpengalaman yang menjaga tradisi
              dengan sepenuh hati
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-[#D8C49A] rounded-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#8C6A43] text-white">
                        {artisan.experience}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-playfair text-xl text-[#8C6A43] mb-2">
                      {artisan.name}
                    </h3>
                    <p className="text-sm text-[#2d1810] opacity-60 mb-2">
                      {artisan.location}
                    </p>
                    <p className="text-[#2d1810] mb-4">{artisan.specialty}</p>
                    <Button
                      onClick={() => scrollToSection("products")}
                      variant="outline"
                      className="w-full border-[#8C6A43] text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white rounded-full"
                    >
                      Lihat Produk
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Kategori Produk
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Pilihan lengkap upakara untuk berbagai kebutuhan upacara Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-[#D8C49A] rounded-2xl h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <div className="mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-[#E6B980]/20 text-[#8C6A43]"
                      >
                        {product.category}
                      </Badge>
                    </div>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-playfair text-xl text-[#8C6A43] mb-2 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#2d1810] opacity-75 mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C6A43]">{product.price}</span>
                      <ArrowRight
                        onClick={() => setSelectedProduct(product)}
                        className="h-5 w-5 text-[#8C6A43] group-hover:translate-x-1 transition-transform cursor-pointer"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscription" className="py-24 bg-[#FFF9F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Paket Langganan
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Hemat waktu dan biaya dengan berlangganan canang untuk kebutuhan
              harian Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Harian",
                price: "Rp 5.000",
                period: "/hari",
                features: [
                  "1 set canang sari",
                  "Bunga segar setiap hari",
                  "Pengiriman pagi hari",
                  "Fleksibel berhenti kapan saja",
                ],
              },
              {
                name: "Mingguan",
                price: "Rp 30.000",
                period: "/minggu",
                popular: true,
                features: [
                  "7 set canang sari",
                  "Hemat Rp 5.000",
                  "Pengiriman 2x seminggu",
                  "Prioritas pengiriman",
                ],
              },
              {
                name: "Bulanan",
                price: "Rp 100.000",
                period: "/bulan",
                features: [
                  "30 set canang sari",
                  "Hemat Rp 50.000",
                  "Gratis ongkir",
                  "Bonus banten hari raya",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-8 rounded-2xl ${
                    plan.popular
                      ? "border-2 border-[#8C6A43] shadow-2xl bg-gradient-to-b from-[#E6B980]/10 to-white"
                      : "border-[#D8C49A] bg-white"
                  } hover:shadow-xl transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#8C6A43] text-white px-4 py-1">
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  <h3 className="font-playfair text-2xl text-[#8C6A43] mb-2 text-center">
                    {plan.name}
                  </h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl text-[#8C6A43]">
                      {plan.price}
                    </span>
                    <span className="text-[#2d1810] opacity-60">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[#2d1810] opacity-75"
                      >
                        <span className="text-[#8C6A43] mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => {
                      const message = `Halo, saya tertarik dengan Paket Langganan ${plan.name} (${plan.price}${plan.period}). Mohon informasi lebih lanjut.`;
                      window.open(
                        `https://wa.me/6282340202905?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                    className={`w-full rounded-full ${
                      plan.popular
                        ? "bg-[#8C6A43] hover:bg-[#6d5335] text-white"
                        : "bg-white border-2 border-[#8C6A43] text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white"
                    }`}
                  >
                    Mulai Langganan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Education Carousel */}
      <section id="education" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Edukasi Budaya
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Memahami makna dan filosofi di balik setiap upakara
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {educationalContent.map((content, index) => (
                  <CarouselItem key={index}>
                    <Card className="p-8 md:p-12 bg-gradient-to-br from-[#FFF9F3] to-white border-[#D8C49A] rounded-2xl">
                      <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="h-8 w-8 text-[#8C6A43]" />
                        <h3 className="font-playfair text-3xl text-[#8C6A43]">
                          {content.title}
                        </h3>
                      </div>
                      <p className="text-[#2d1810] opacity-75 mb-6 leading-relaxed text-lg">
                        {content.description}
                      </p>
                      <div className="bg-[#E6B980]/10 p-6 rounded-xl border-l-4 border-[#8C6A43]">
                        <p className="text-[#2d1810] italic">
                          💫 <strong>Filosofi:</strong> {content.meaning}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#FFF9F3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-[#8C6A43] mb-4">
              Testimoni
            </h2>
            <p className="text-[#2d1810] opacity-75 max-w-2xl mx-auto">
              Kepercayaan dan kepuasan pelanggan adalah prioritas kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white border-[#D8C49A] rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#E6B980] text-[#E6B980]"
                      />
                    ))}
                  </div>
                  <p className="text-[#2d1810] opacity-75 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#D8C49A]">
                    <div>
                      <p className="text-[#8C6A43]">{testimonial.name}</p>
                      <p className="text-sm text-[#2d1810] opacity-60">
                        {testimonial.location}
                      </p>
                    </div>
                    <Badge
                      className="bg-[#8C6A43]/10 text-[#8C6A43] border-[#8C6A43]"
                      variant="outline"
                    >
                      <Users className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section
        id="join"
        className="py-24 bg-gradient-to-br from-[#8C6A43] to-[#6d5335] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">
              Bergabung Sebagai Mitra Pengrajin
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Apakah Anda seorang pengrajin upakara? Bergabunglah dengan kami
              untuk menjangkau lebih banyak umat yang membutuhkan karya tangan
              Anda. Mari bersama melestarikan tradisi sambil memberdayakan
              ekonomi lokal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const message =
                    "Halo, saya tertarik untuk bergabung sebagai mitra pengrajin Tri Upakara. Mohon informasi lebih lanjut.";
                  window.open(
                    `https://wa.me/6282340202905?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="bg-white text-[#8C6A43] hover:bg-[#FFF9F3] px-8 py-6 rounded-full text-lg"
              >
                Daftar Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
