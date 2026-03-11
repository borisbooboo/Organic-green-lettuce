import { FadeInSection } from "@/components/AnimationUtils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";

import heroImg from "@/assets/hero-farm.jpg";
import greenhouseImg from "@/assets/greenhouse.jpg";
import compostImg from "@/assets/compost.jpg";
import formationImg from "@/assets/formation.jpg";
import kitImg from "@/assets/kit-laitue.jpg";
import elevageImg from "@/assets/elevage.jpg";
import harvestImg from "@/assets/harvest.jpg";
import soilImg from "@/assets/soil-analysis.jpg";
import lapin1 from "@/assets/lapin1.jpg";
import lapin2 from "@/assets/lapin2.jpg";
import champs1 from "@/assets/champs1.jpg";
import champs2 from "@/assets/champs2.jpg";
import champs3 from "@/assets/champs3.jpg";
import ferme1 from "@/assets/ferme1.jpg";
import ferme2 from "@/assets/ferme2.jpg";
import logoImg from "@/assets/logo.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const categories = ["Tout", "Fermes", "Légumes", "Compost", "Élevage", "Formations"] as const;

const images = [
  { src: heroImg,        alt: "Champ de laitues biologiques",   cat: "Légumes",    size: "large" },
  { src: ferme1,         alt: "Vue de notre ferme principale",   cat: "Fermes",     size: "normal" },
  { src: champs1,        alt: "Champs en pleine saison",         cat: "Légumes",    size: "normal" },
  { src: lapin1,         alt: "Lapins biologiques en élevage",   cat: "Élevage",    size: "normal" },
  { src: greenhouseImg,  alt: "Serre de production",             cat: "Fermes",     size: "tall" },
  { src: champs2,        alt: "Culture maraîchère diversifiée",  cat: "Légumes",    size: "normal" },
  { src: compostImg,     alt: "Compost et vermicompost maison",  cat: "Compost",    size: "large" },
  { src: lapin2,         alt: "Cuniculture biologique",          cat: "Élevage",    size: "normal" },
  { src: ferme2,         alt: "Infrastructure de la ferme",      cat: "Fermes",     size: "normal" },
  { src: formationImg,   alt: "Session de formation terrain",    cat: "Formations", size: "large" },
  { src: champs3,        alt: "Récolte de champs bio",           cat: "Légumes",    size: "normal" },
  { src: harvestImg,     alt: "Récolte de légumes frais",        cat: "Légumes",    size: "normal" },
  { src: elevageImg,     alt: "Élevage de poulets biologiques",  cat: "Élevage",    size: "tall" },
  { src: soilImg,        alt: "Analyse et fertilité des sols",   cat: "Compost",    size: "normal" },
  { src: kitImg,         alt: "Kit de laitues urbaines",         cat: "Légumes",    size: "normal" },
];

const stats = [
  { n: `${images.length}+`, label: "Photos" },
  { n: "5", label: "Catégories" },
  { n: "5+", label: "Années" },
  { n: "100%", label: "Bio" },
];

/* ─── Lightbox ──────────────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: typeof images;
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const img = images[current];

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md px-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/60 font-body text-sm">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl w-full mx-14"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
        />
        <div className="mt-4 text-center">
          <p className="text-white/80 font-body text-sm">{img.alt}</p>
          <span className="inline-block mt-1 text-green-400 font-body text-xs uppercase tracking-widest">{img.cat}</span>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Thumbnails strip */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xs md:max-w-xl px-4 pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`flex-shrink-0 w-12 h-9 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current ? "border-green-400 scale-110" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Gallery() {
  const [filter, setFilter] = useState<string>("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "Tout" ? images : images.filter((img) => img.cat === filter);

  // Reindex filtered for lightbox
  const openLightbox = (idx: number) => setLightboxIndex(idx);

  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-6">
        <img
          src={ferme1}
          alt="Notre ferme"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/65 to-green-950/85 dark:from-black/90 dark:via-black/75 dark:to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/50 to-transparent dark:from-black/50" />

        {/* Rings */}
        <div className="absolute top-8 right-14 w-44 h-44 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute top-16 right-22 w-24 h-24 rounded-full border border-white/8" />
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" />

        {/* Logo flottant */}
        <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
          <img src={logoImg} alt="Logo Organic Green Lettuce" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Galerie photo
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Nos activités{" "}
              <span className="text-green-300 italic">en images</span>
            </h1>
            <p className="text-green-100/75 font-body text-lg leading-relaxed max-w-xl mx-auto">
              Plongez dans l'univers d'Organic Green Lettuce — champs, élevage, formations et récoltes, capturés au fil des saisons à Bandjoun.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-green-800 dark:bg-green-950 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{s.n}</p>
                <p className="text-green-300/80 text-xs font-body uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    filter === cat
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-white/60 dark:bg-white/5 text-stone-600 dark:text-stone-400 border border-green-200 dark:border-white/10 hover:border-green-400 dark:hover:border-green-600"
                  }`}
                >
                  {cat}
                  <span className={`ml-2 text-xs font-normal ${filter === cat ? "text-green-200" : "text-stone-400 dark:text-stone-500"}`}>
                    ({cat === "Tout" ? images.length : images.filter(i => i.cat === cat).length})
                  </span>
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Count */}
          <FadeInSection>
            <div className="flex items-center gap-2 mb-8">
              <Images size={14} className="text-green-600 dark:text-green-400" />
              <p className="text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-widest">
                {filtered.length} photo{filtered.length > 1 ? "s" : ""}
              </p>
            </div>
          </FadeInSection>

          {/* Masonry-style grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-0">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-green-100/50 dark:border-white/5"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{
                      aspectRatio: img.size === "tall" ? "3/4" : img.size === "large" ? "4/3" : "1/1",
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Zoom icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn size={18} className="text-white" />
                  </div>

                  {/* Category chip */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-body text-xs font-semibold bg-green-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {img.cat}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-body text-xs leading-snug">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Brand strip ── */}
      <section className="py-16 px-4 bg-white/40 dark:bg-white/5 border-t border-green-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-green-200 dark:border-green-800 shadow-lg flex-shrink-0">
            <img src={logoImg} alt="Organic Green Lettuce" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3
              className="font-heading text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Organic Green Lettuce <span className="text-green-600 dark:text-green-400">by SKY</span>
            </h3>
            <p className="text-stone-500 dark:text-stone-400 font-body text-sm leading-relaxed">
              Ferme biologique basée à Bandjoun Échangeur, Cameroun. Production de laitues, intrants bio, élevage et formations depuis 2019.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Nous contacter
          </a>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}