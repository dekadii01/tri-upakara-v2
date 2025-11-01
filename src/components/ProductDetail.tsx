import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ArrowLeft, Plus, Minus, MessageCircle } from "lucide-react";
import BarcodeQris from "../assets/img/qris-example.jpeg";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
    images?: string[];
    details: string;
  };
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("COD (Bayar di Tempat)");
  const [alamat, setAlamat] = useState("");

  // Gabungkan gambar utama + tambahan
  const allImages = product.images
    ? [product.image, ...product.images]
    : [product.image];

  const handleWhatsAppOrder = () => {
    // Ubah harga string ke angka (hilangkan "Rp", titik, dan spasi)
    const priceNumber = parseInt(product.price.replace(/[^\d]/g, ""));
    const totalPrice = priceNumber * quantity;

    const formattedTotalPrice = totalPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    const message =
      `Halo, saya ingin memesan:\n\n` +
      `Produk: ${product.name}\n` +
      `Kategori: ${product.category}\n` +
      `Jumlah: ${quantity}\n` +
      `Harga Satuan: ${product.price}\n` +
      `Total Harga: ${formattedTotalPrice}\n` +
      `Metode Pembayaran: ${paymentMethod}\n` +
      `Alamat Pengiriman: ${alamat}\n\n` +
      `Mohon informasi lebih lanjut. Terima kasih.`;

    const whatsappUrl = `https://wa.me/6282340202905?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-[#FFF9F3] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Tombol Kembali */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 text-[#8C6A43] hover:bg-[#D8C49A]/20"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Produk
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gambar Produk */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <Carousel className="w-full">
                <CarouselContent>
                  {allImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square w-full">
                        <ImageWithFallback
                          src={image}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {allImages.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
            </div>

            {/* Thumbnail */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-[#8C6A43] shadow-md"
                        : "border-[#D8C49A] hover:border-[#8C6A43]/50"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detail Produk */}
          <div>
            <div className="mb-2">
              <span className="inline-block px-4 py-1 bg-[#E6B980]/20 text-[#8C6A43] rounded-full text-sm">
                {product.category}
              </span>
            </div>
            <h1 className="font-playfair text-4xl text-[#8C6A43] mb-4">
              {product.name}
            </h1>
            <p className="text-[#2d1810] opacity-75 mb-6 leading-relaxed">
              {product.description}
            </p>

            <Card className="bg-white border-[#D8C49A] p-6 mb-6 rounded-xl shadow-md">
              <h3 className="font-playfair text-xl text-[#8C6A43] mb-3">
                Detail Produk
              </h3>
              <p className="text-[#2d1810] opacity-75 leading-relaxed whitespace-pre-line">
                {product.details}
              </p>
            </Card>

            <div className="bg-[#D8C49A]/20 p-6 rounded-xl mb-6">
              {/* Harga */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#2d1810]">Harga</span>
                <span className="font-playfair text-2xl text-[#8C6A43]">
                  {product.price}
                </span>
              </div>

              {/* Jumlah */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#2d1810]">Jumlah</span>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={decreaseQuantity}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-[#8C6A43] text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl w-12 text-center">{quantity}</span>
                  <Button
                    onClick={increaseQuantity}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-[#8C6A43] text-[#8C6A43] hover:bg-[#8C6A43] hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Input Alamat */}
              <div className="mb-6 bg-white border border-[#D8C49A] rounded-xl p-4 shadow-inner">
                <label
                  htmlFor="alamat"
                  className="block text-[#8C6A43] mb-2 font-medium"
                >
                  Alamat Lengkap Pengiriman:
                </label>
                <input
                  id="alamat"
                  type="text"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Contoh: Jl. Raya Sibangkaja No. 15, Abiansemal, Badung"
                  className="w-full px-3 py-4 border border-[#D8C49A] rounded-lg focus:outline-none focus:border-[#8C6A43] text-[#2d1810]"
                />
                <p className="text-sm text-[#2d1810]/70 mt-2">
                  Pastikan alamat lengkap agar pengiriman berjalan lancar.
                </p>
              </div>

              {/* Metode Pembayaran */}
              <div className="mb-6">
                <span className="block text-[#2d1810] mb-3">
                  Metode Pembayaran
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {["COD (Bayar di Tempat)", "QRIS"].map((method) => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`px-3 py-2 rounded-xl border-2 transition-all text-sm font-medium ${
                        paymentMethod === method
                          ? "border-[#8C6A43] bg-[#8C6A43]/10 text-[#8C6A43]"
                          : "border-[#D8C49A] hover:border-[#8C6A43]/50 text-[#2d1810]"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                {/* QRIS Barcode */}
                {paymentMethod === "QRIS" && (
                  <div className="mt-4 bg-white border border-[#D8C49A] rounded-xl p-4 shadow-inner text-center">
                    <p className="text-[#8C6A43] mb-3 font-medium">
                      Silakan scan QRIS di bawah untuk pembayaran:
                    </p>
                    <div className="flex justify-center">
                      <img
                        src={BarcodeQris}
                        width={300}
                        alt="QRIS Barcode"
                        className="w-48 h-48 object-contain rounded-lg border border-[#D8C49A]"
                      />
                    </div>
                    <b className="text-base text-[#2d1810] opacity-70">
                      SS bukti pembayaran lalu konfirmasi via WhatsApp.
                    </b>
                  </div>
                )}
              </div>

              {/* Tombol WhatsApp */}
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full py-6 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Pesan via WhatsApp
              </Button>
            </div>

            <div className="bg-[#8C6A43]/5 p-4 rounded-xl border border-[#8C6A43]/20">
              <p className="text-sm text-[#2d1810] opacity-75">
                ✨ <strong>Catatan:</strong> Semua produk dibuat dengan penuh
                kehati-hatian dan kesucian oleh pengrajin lokal kami yang
                berpengalaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
