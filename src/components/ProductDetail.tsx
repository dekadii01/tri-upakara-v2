import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  ArrowLeft,
  Plus,
  Minus,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
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

  const allImages = product.images
    ? [product.image, ...product.images]
    : [product.image];

  const handleWhatsAppOrder = () => {
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

    window.open(
      `https://wa.me/6282340202905?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const priceNumber = parseInt(product.price.replace(/[^\d]/g, ""));
  const totalPrice = (priceNumber * quantity).toLocaleString("id-ID");

  return (
    <div
      style={{
        background: "var(--paper, #f5f0e8)",
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* ── Breadcrumb / Back ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1.5px solid #c8b89a",
          }}
        >
          <button
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#5a4e42",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b85c2a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a4e42")}
          >
            <ArrowLeft size={14} />
            Kembali ke Produk
          </button>
          <ChevronRight size={12} style={{ color: "#c8b89a" }} />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#b85c2a",
            }}
          >
            {product.category}
          </span>
        </div>

        {/* ── Main Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1.5px solid #c8b89a",
          }}
        >
          {/* LEFT — Images */}
          <div style={{ borderRight: "1.5px solid #c8b89a" }}>
            {/* Main carousel */}
            <div
              style={{
                background: "#fdfaf6",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {allImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          aspectRatio: "1/1",
                        }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${product.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
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

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${allImages.length}, 1fr)`,
                  borderTop: "1.5px solid #c8b89a",
                }}
              >
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    style={{
                      border: "none",
                      borderRight:
                        index < allImages.length - 1
                          ? "1.5px solid #c8b89a"
                          : "none",
                      padding: 0,
                      cursor: "pointer",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      background:
                        selectedImageIndex === index ? "#ede7d9" : "#fdfaf6",
                      outline:
                        selectedImageIndex === index
                          ? "2px solid #b85c2a"
                          : "none",
                      outlineOffset: "-2px",
                      transition: "background 0.2s",
                    }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{
                        opacity: selectedImageIndex === index ? 1 : 0.65,
                        transition: "opacity 0.2s",
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Detail produk — under images */}
            <div
              style={{
                borderTop: "1.5px solid #c8b89a",
                padding: "2rem",
                background: "#fdfaf6",
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b85c2a",
                  marginBottom: "1rem",
                }}
              >
                Detail Produk
              </p>
              {product.details.split("\n").map(
                (line, i) =>
                  line.trim() && (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginBottom: "0.6rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "#b85c2a",
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "0.8rem",
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: "1rem",
                          color: "#5a4e42",
                          lineHeight: 1.5,
                        }}
                      >
                        {line.replace(/^•\s*/, "")}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* RIGHT — Order Panel */}
          <div style={{ background: "#fdfaf6" }}>
            {/* Product title block */}
            <div
              style={{
                padding: "2.5rem 2.5rem 2rem",
                borderBottom: "1.5px solid #c8b89a",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#b85c2a",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                {product.category}
              </span>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "#0f0d0b",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                {product.name}
              </h1>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.05rem",
                  color: "#5a4e42",
                  lineHeight: 1.7,
                }}
              >
                {product.description}
              </p>
            </div>

            {/* Price row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 2.5rem",
                borderBottom: "1.5px solid #c8b89a",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                }}
              >
                Harga Satuan
              </span>
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.8rem",
                  color: "#b85c2a",
                  letterSpacing: "-0.01em",
                }}
              >
                {product.price}
              </span>
            </div>

            {/* Quantity */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 2.5rem",
                borderBottom: "1.5px solid #c8b89a",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                }}
              >
                Jumlah
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                <button
                  onClick={decreaseQuantity}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1.5px solid #c8b89a",
                    background: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f0d0b",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#0f0d0b";
                    (e.currentTarget as HTMLElement).style.color = "#fdfaf6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "none";
                    (e.currentTarget as HTMLElement).style.color = "#0f0d0b";
                  }}
                >
                  <Minus size={14} />
                </button>
                <span
                  style={{
                    width: "48px",
                    textAlign: "center",
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.4rem",
                    color: "#0f0d0b",
                    borderTop: "1.5px solid #c8b89a",
                    borderBottom: "1.5px solid #c8b89a",
                    lineHeight: "34px",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1.5px solid #c8b89a",
                    background: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f0d0b",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#0f0d0b";
                    (e.currentTarget as HTMLElement).style.color = "#fdfaf6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "none";
                    (e.currentTarget as HTMLElement).style.color = "#0f0d0b";
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 2.5rem",
                borderBottom: "1.5px solid #c8b89a",
                background: "#ede7d9",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "2rem",
                  color: "#0f0d0b",
                  letterSpacing: "-0.02em",
                }}
              >
                Rp {totalPrice}
              </span>
            </div>

            {/* Alamat */}
            <div
              style={{
                padding: "1.5rem 2.5rem",
                borderBottom: "1.5px solid #c8b89a",
              }}
            >
              <label
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Alamat Pengiriman
              </label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Jl. Raya Sibangkaja No. 15, Abiansemal, Badung"
                style={{
                  width: "100%",
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1rem",
                  color: "#0f0d0b",
                  background: "#fdfaf6",
                  border: "1.5px solid #c8b89a",
                  padding: "0.75rem 1rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#b85c2a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#c8b89a")}
              />
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.65rem",
                  color: "#5a4e42",
                  marginTop: "0.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                Pastikan alamat lengkap agar pengiriman berjalan lancar.
              </p>
            </div>

            {/* Payment Method */}
            <div
              style={{
                padding: "1.5rem 2.5rem",
                borderBottom: "1.5px solid #c8b89a",
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a4e42",
                  marginBottom: "0.75rem",
                }}
              >
                Metode Pembayaran
              </p>
              <div style={{ display: "flex", gap: "0" }}>
                {["COD (Bayar di Tempat)", "QRIS"].map((method, i) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    style={{
                      flex: 1,
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.7rem 0.5rem",
                      border: "1.5px solid #c8b89a",
                      borderLeft: i > 0 ? "none" : "1.5px solid #c8b89a",
                      background: paymentMethod === method ? "#0f0d0b" : "none",
                      color: paymentMethod === method ? "#fdfaf6" : "#5a4e42",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {method}
                  </button>
                ))}
              </div>

              {/* QRIS */}
              {paymentMethod === "QRIS" && (
                <div
                  style={{
                    marginTop: "1rem",
                    border: "1.5px solid #c8b89a",
                    padding: "1.5rem",
                    textAlign: "center",
                    background: "#fdfaf6",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#b85c2a",
                      marginBottom: "1rem",
                    }}
                  >
                    Scan QRIS untuk Pembayaran
                  </p>
                  <img
                    src={BarcodeQris}
                    alt="QRIS Barcode"
                    style={{
                      width: "160px",
                      height: "160px",
                      objectFit: "contain",
                      margin: "0 auto",
                      display: "block",
                      border: "1.5px solid #c8b89a",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      color: "#5a4e42",
                      marginTop: "0.75rem",
                    }}
                  >
                    SS bukti pembayaran lalu konfirmasi via WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div style={{ padding: "1.5rem 2.5rem" }}>
              <button
                onClick={handleWhatsAppOrder}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "1rem",
                  background: "#25D366",
                  border: "2px solid #25D366",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  marginBottom: "1rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#25D366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
              >
                <MessageCircle size={16} />
                Pesan via WhatsApp
              </button>

              {/* Note */}
              <div
                style={{
                  borderLeft: "3px solid #b85c2a",
                  paddingLeft: "1rem",
                  background: "#ede7d9",
                  padding: "0.85rem 0.85rem 0.85rem 1rem",
                  borderLeft: "3px solid #b85c2a",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    color: "#5a4e42",
                    lineHeight: 1.5,
                  }}
                >
                  Semua produk dibuat dengan penuh kehati-hatian dan kesucian
                  oleh pengrajin lokal kami yang berpengalaman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
