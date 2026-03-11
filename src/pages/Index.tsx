import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sprout, Leaf, FlaskConical, GraduationCap, ArrowRight,
  Phone, Mail, Quote, ChevronDown, Star, Play, X
} from "lucide-react";
import { FadeInSection, AnimatedCounter } from "@/components/AnimationUtils";
import heroImg from "@/assets/hero-farm.jpg";
import greenhouseImg from "@/assets/greenhouse.jpg";
import compostImg from "@/assets/compost.jpg";
import formationImg from "@/assets/formation.jpg";
import kitImg from "@/assets/kit-laitue.jpg";
import elevageImg from "@/assets/elevage.jpg";
import harvestImg from "@/assets/harvest.jpg";
import ferme1 from "@/assets/pdg.png";

import champs1 from "@/assets/champs1.jpg";


/* ─── Data ─────────────────────────────────────────────────── */
const services = [
  { icon: Sprout, title: "Installation de Fermes", desc: "Conception et mise en place de fermes agricoles biologiques clé en main.", link: "/services", color: "from-green-600 to-emerald-500", iconBg: "bg-green-100 dark:bg-green-900/40", accent: "text-green-600 dark:text-green-400" },
  { icon: Leaf, title: "Production Biologique", desc: "Cultures maraîchères et laitues biologiques sans produits chimiques.", link: "/production", color: "from-emerald-600 to-teal-500", iconBg: "bg-emerald-100 dark:bg-emerald-900/40", accent: "text-emerald-600 dark:text-emerald-400" },
  { icon: FlaskConical, title: "Intrants Agricoles", desc: "Compost, vermicompost, EM et purins biologiques pour enrichir vos sols.", link: "/intrants", color: "from-teal-600 to-green-500", iconBg: "bg-teal-100 dark:bg-teal-900/40", accent: "text-teal-600 dark:text-teal-400" },
  { icon: GraduationCap, title: "Formations Agricoles", desc: "Programmes de formation en agriculture biologique et élevage.", link: "/formations", color: "from-lime-600 to-green-500", iconBg: "bg-lime-100 dark:bg-lime-900/40", accent: "text-lime-600 dark:text-lime-400" },
];

const testimonials = [
  { name: "Jean-Pierre K.", role: "Agriculteur, Bafoussam", text: "Grâce à Organic Green Lettuce, j'ai doublé ma production de légumes en utilisant leurs intrants biologiques. Un accompagnement exceptionnel.", stars: 5 },
  { name: "Marie N.", role: "Restauratrice, Douala", text: "Les laitues biologiques sont d'une fraîcheur incomparable. Mes clients adorent la qualité des produits. Je recommande vivement.", stars: 5 },
  { name: "Paul T.", role: "Stagiaire, Yaoundé", text: "La formation en compostage m'a ouvert les yeux sur l'agriculture durable. J'ai lancé mon propre projet grâce à leurs enseignements.", stars: 5 },
  { name: "Carine M.", role: "Entrepreneur agricole", text: "L'analyse des sols et les recommandations personnalisées ont transformé mes rendements. Un service professionnel et rigoureux.", stars: 5 },
];

const teamMembers = [
  {
    name: "Yannick Simokamdem",
    initials: "YS",
    image: ferme1,
    role: "Fondateur & Directeur",
    desc: "Visionnaire de l'agriculture biologique au Cameroun, Yannick pilote la stratégie et la croissance d'Organic Green Lettuce depuis sa création.",
    quote: "La terre ne ment jamais. Si tu la respectes, elle te nourrit.",
    gradient: "from-green-700 to-emerald-600",
    accent: "text-green-600 dark:text-green-400",
    tagBg: "bg-green-100 dark:bg-green-900/40",
    skills: ["Leadership", "Agrobiologie", "Formation"],
  },
  {
    name: "Sandrine A.",
    initials: "SA",
    image: harvestImg,
    role: "Responsable Production",
    desc: "Sandrine supervise les cultures maraîchères et veille à la qualité biologique de chaque récolte sur les parcelles de Bandjoun.",
    quote: "Chaque plant de laitue est une promesse de santé pour nos clients.",
    gradient: "from-emerald-700 to-teal-600",
    accent: "text-emerald-600 dark:text-emerald-400",
    tagBg: "bg-emerald-100 dark:bg-emerald-900/40",
    skills: ["Maraîchage", "Contrôle qualité", "Récolte"],
  },
  {
    name: "Didier N.",
    initials: "DN",
    image: champs1,
    role: "Expert Intrants Bio",
    desc: "Spécialiste du compost et du vermicompost, Didier formule les intrants biologiques qui enrichissent les sols de centaines de producteurs.",
    quote: "Un sol vivant, c'est la base de tout. Sans microbiologie, pas de vraie agriculture.",
    gradient: "from-teal-700 to-green-600",
    accent: "text-teal-600 dark:text-teal-400",
    tagBg: "bg-teal-100 dark:bg-teal-900/40",
    skills: ["Compost", "Vermicompost", "Analyse sols"],
  },
  {
    name: "Christelle F.",
    initials: "CF",
    image: formationImg,
    role: "Coordinatrice Formations",
    desc: "Christelle conçoit et anime les programmes de formation agricole, accompagnant chaque apprenant vers l'autonomie sur le terrain.",
    quote: "Transmettre le savoir, c'est planter des graines qui pousseront toute une vie.",
    gradient: "from-lime-700 to-green-600",
    accent: "text-lime-600 dark:text-lime-500",
    tagBg: "bg-lime-100 dark:bg-lime-900/40",
    skills: ["Pédagogie", "Élevage", "Accompagnement"],
  },
];

const galleryImages = [
  { src: greenhouseImg, alt: "Serre de culture biologique" },
  { src: compostImg, alt: "Compost et vermicompost" },
  { src: elevageImg, alt: "Élevage de poulets et lapins" },
  { src: kitImg, alt: "Kit de laitues urbaines" },
  { src: formationImg, alt: "Formation agricole" },
  { src: harvestImg, alt: "Récolte de légumes" },
];

const productionItems = [
  "Laitues biologiques de qualité supérieure",
  "Cultures maraîchères diversifiées",
  "Méthodes 100% naturelles et durables",
];

/* ─── Floating particles ────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: `${8 + i * 7.5}%`,
    delay: i * 0.4,
    duration: 5 + (i % 4),
    size: 4 + (i % 3) * 3,
    opacity: 0.06 + (i % 4) * 0.02,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-green-400"
          style={{ left: p.x, bottom: 0, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -window.innerHeight - 100], opacity: [p.opacity, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ─── Animated text reveal ──────────────────────────────────── */
const words = ["Cultiver", "Nourrir", "Bâtir", "Élever"];
function RotatingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={idx}
        initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-green-300 italic inline-block"
      >
        {words[idx]}
      </motion.span>
    </AnimatePresence>
  );
}

/* ─── Service card ──────────────────────────────────────────── */
function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={s.link}
        className="group block bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-green-100 dark:border-white/10 p-7 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 relative overflow-hidden"
      >
        {/* Hover glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-400 rounded-2xl`} />

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className={s.accent} />
        </div>
        <h3 className="font-heading font-bold text-stone-800 dark:text-stone-100 text-lg mb-2 leading-snug" style={{ fontFamily: "'Georgia', serif" }}>
          {s.title}
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 font-body leading-relaxed mb-5">{s.desc}</p>
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold font-body ${s.accent} group-hover:gap-3 transition-all duration-300`}>
          Découvrir <ArrowRight size={13} />
        </span>
      </Link>
    </motion.div>
  );
}

/* ─── Testimonial carousel ──────────────────────────────────── */
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[current];
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white/10 dark:bg-white/5 border border-white/15 rounded-2xl p-8 backdrop-blur-sm"
        >
          <Quote size={28} className="text-green-400/50 mb-5" />
          <p className="text-white/90 font-body text-lg leading-relaxed italic mb-6">"{t.text}"</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 font-body font-bold text-sm">{t.name}</p>
              <p className="text-white/50 font-body text-xs">{t.role}</p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={12} className="fill-green-400 text-green-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-green-400" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Index() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <main className="bg-[#f7f5f0] dark:bg-[#0c180e] transition-colors duration-300">

      {/* ══════════════════════════════════════════════
          HERO — full screen with parallax + particles
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden flex items-center">

        {/* BG image with parallax + scale */}
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={heroImg} alt="Ferme de laitues biologiques" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 via-green-950/55 to-green-950/85 dark:from-black/60 dark:via-black/55 dark:to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 to-transparent" />
        </motion.div>

        {/* Floating particles */}
        <Particles />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c1a0e] dark:from-[#0c180e] to-transparent" />

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.4em] mb-6 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Agriculture biologique · Bandjoun, Cameroun
            </span>
          </motion.div>

          <h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-4xl mb-6"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              <RotatingWord /> la nature,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white/90"
            >
              élever la{" "}
              <span className="relative inline-block">
                <span className="text-green-300">qualité</span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full origin-left"
                />
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-green-100/75 font-body text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Entreprise spécialisée en agriculture biologique, production maraîchère, élevage et formation agricole à Bandjoun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-body font-semibold text-sm shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Découvrir nos services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-body font-semibold text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Nous contacter
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/30 font-body text-xs uppercase tracking-widest">Défiler</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} className="text-white/30" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        >
          {[
            { n: "500+", l: "Producteurs" },
            { n: "100%", l: "Bio certifié" },
            { n: "5+", l: "Années" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + i * 0.15 }}
              className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3 text-center"
            >
              <p className="text-white font-bold text-xl" style={{ fontFamily: "'Georgia', serif" }}>{s.n}</p>
              <p className="text-white/50 text-xs font-body">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT — split layout with stagger
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Qui sommes-nous
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              L'agriculture biologique{" "}
              <span className="text-green-600 dark:text-green-400 italic">au service de la vie</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-4 text-base">
              Organic Green Lettuce by SKY est une entreprise camerounaise basée à Bandjoun, spécialisée dans la production de laitues biologiques, les intrants agricoles naturels, l'élevage de poulets et de lapins, ainsi que la formation agricole.
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-8 text-base">
              Notre mission : accompagner les producteurs et entrepreneurs vers des projets agricoles <strong className="text-stone-800 dark:text-stone-200">durables, innovants et respectueux de l'environnement</strong>.
            </p>
            <div className="pl-5 border-l-2 border-green-500 mb-8">
              <p className="text-stone-700 dark:text-stone-300 font-body italic text-lg">
                "Chaque graine plantée est un acte d'espoir pour les générations futures."
              </p>
            </div>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Notre histoire <ArrowRight size={16} />
            </Link>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-green-400/10 blur-2xl" />
              <motion.img
                src={greenhouseImg}
                alt="Serre biologique"
                className="relative w-full rounded-2xl object-cover shadow-2xl border border-white/10"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-900 border border-green-100 dark:border-green-900 rounded-2xl shadow-xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <Leaf size={22} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-stone-800 dark:text-stone-100 font-bold text-xl" style={{ fontFamily: "'Georgia', serif" }}>5+</p>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-body">Années d'expérience</p>
                </div>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES — hover cards with spring
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white/40 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Nos expertises
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Des services agricoles{" "}
              <span className="text-green-600 dark:text-green-400 italic">complets</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — dark band with counting numbers
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-green-900 dark:bg-green-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { value: 500, suffix: "+", label: "Producteurs accompagnés" },
            { value: 15, suffix: "", label: "Formations dispensées" },
            { value: 3, suffix: "", label: "Types d'intrants" },
            { value: 1000, suffix: "+", label: "Kits de laitues vendus" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <AnimatedCounter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCTION — alternating with image reveal
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="grid grid-cols-2 gap-4">
              {[harvestImg, compostImg].map((src, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                >
                  <motion.img
                    src={src}
                    alt="Production"
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Production biologique
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Des produits sains,{" "}
              <span className="text-green-600 dark:text-green-400 italic">cultivés naturellement</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-7 text-base">
              Nous produisons des laitues biologiques et des cultures maraîchères en utilisant exclusivement des méthodes naturelles : compost biologique, fertilisants naturels et produits phytosanitaires biologiques.
            </p>
            <ul className="space-y-3 mb-8">
              {productionItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-stone-700 dark:text-stone-300 font-body"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                    <Leaf size={11} className="text-green-600 dark:text-green-400" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link
              to="/production"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Voir notre production <ArrowRight size={15} />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GALLERY — horizontal scroll with hover zoom
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white/40 dark:bg-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between"
          >
            <div>
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-3 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Galerie
              </span>
              <h2
                className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Nos activités{" "}
                <span className="text-green-600 dark:text-green-400 italic">en images</span>
              </h2>
            </div>
            <Link
              to="/galerie"
              className="hidden md:inline-flex items-center gap-2 text-sm font-body font-semibold text-green-600 dark:text-green-400 hover:gap-3 transition-all"
            >
              Voir tout <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scrolling gallery */}
        <div className="flex gap-5 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="flex-shrink-0 snap-start w-72 md:w-80 group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg border border-green-100 dark:border-white/10"
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-body text-xs">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ÉQUIPE — member cards with hover reveal
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Notre équipe
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Les visages de{" "}
              <span className="text-green-600 dark:text-green-400 italic">notre mission</span>
            </h2>
            <p className="text-stone-500 dark:text-stone-400 font-body max-w-xl mx-auto">
              Une équipe passionnée, enracinée dans la terre de Bandjoun, unie autour d'une même conviction : l'agriculture biologique change des vies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-green-100 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400">

                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    {/* Real image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay always visible at bottom */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/10 to-transparent`} />
                    {/* Role badge bottom-left */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20`}>
                        {member.role}
                      </span>
                    </div>
                    {/* Hover quote overlay */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center p-5">
                      <p className="text-white/90 font-body text-xs leading-relaxed italic text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-1">
                      <h3
                        className="font-heading font-bold text-stone-800 dark:text-stone-100 text-base leading-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {member.name}
                      </h3>
                    </div>
                    <p className={`text-xs font-body font-semibold uppercase tracking-wider mb-2 ${member.accent}`}>
                      {member.role}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-body leading-relaxed">
                      {member.desc}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[10px] font-body px-2 py-0.5 rounded-full ${member.tagBg} ${member.accent}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/40 rounded-2xl px-8 py-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <Sprout size={18} className="text-green-600 dark:text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-stone-800 dark:text-stone-100 font-body font-semibold text-sm">
                  Rejoignez notre équipe
                </p>
                <p className="text-stone-500 dark:text-stone-400 font-body text-xs">
                  Passionné d'agriculture biologique ? On cherche des talents.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-xs shadow-md hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Postuler <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — dark section with carousel
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-green-900 dark:bg-green-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-500/40 px-3 py-1 rounded-full">
              Témoignages
            </span>
            <h2
              className="font-heading text-4xl font-bold text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ce que disent{" "}
              <span className="text-green-300 italic">nos partenaires</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 to-emerald-700 dark:from-green-950 dark:to-emerald-950 p-12 md:p-16 text-center shadow-2xl">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
              <div className="relative z-10">
                <span className="inline-block text-green-200 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5">
                  Newsletter
                </span>
                <h2
                  className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Restez connecté à la{" "}
                  <span className="text-green-300 italic">terre</span>
                </h2>
                <p className="text-green-100/70 font-body mb-8 max-w-md mx-auto">
                  Recevez nos conseils agricoles, actualités et offres directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-green-300/40 backdrop-blur-sm"
                  />
                  <button className="px-6 py-3.5 rounded-xl bg-white text-green-800 font-body font-semibold text-sm hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA CONTACT — final
      ══════════════════════════════════════════════ */}
      <section className="py-10 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl border border-green-100 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-xl">
              {/* BG accent */}
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-green-400/10 blur-3xl" />

              <div className="flex-1 relative z-10">
                <h2
                  className="font-heading text-3xl font-bold text-stone-800 dark:text-stone-100 mb-3 leading-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Prêt à démarrer votre{" "}
                  <span className="text-green-600 dark:text-green-400 italic">projet agricole ?</span>
                </h2>
                <p className="text-stone-500 dark:text-stone-400 font-body">
                  Contactez-nous pour un accompagnement personnalisé dans votre projet d'agriculture biologique.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 relative z-10">
                <a
                  href="tel:+237658809698"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Phone size={16} /> Appeler
                </a>
                <a
                  href="mailto:yanicksimokamdem@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-stone-100 dark:bg-white/10 border border-stone-200 dark:border-white/15 text-stone-800 dark:text-white font-body font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
