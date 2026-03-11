import { FadeInSection } from "@/components/AnimationUtils";
import { useState, useEffect, useRef } from "react";
import { Leaf, Target, Eye, Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import greenhouseImg from "@/assets/greenhouse.jpg";
import formationImg from "@/assets/formation.jpg";
import harvestImg from "@/assets/harvest.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const timeline = [
  { year: "2019", title: "Création", desc: "Lancement de l'activité agricole à Bandjoun avec la culture de laitues biologiques.", color: "from-green-600 to-emerald-500" },
  { year: "2020", title: "Intrants biologiques", desc: "Début de la production d'intrants naturels : compost, vermicompost et EM.", color: "from-emerald-600 to-teal-500" },
  { year: "2021", title: "Élevage", desc: "Extension vers l'élevage de poulets et de lapins en méthodes biologiques.", color: "from-teal-600 to-green-500" },
  { year: "2022", title: "Formations", desc: "Lancement des programmes de formation en agriculture biologique.", color: "from-green-700 to-emerald-600" },
  { year: "2023", title: "Projet Kits Laitues", desc: "Création du projet innovant de kits de culture de laitues en sacs.", color: "from-emerald-700 to-green-500" },
  { year: "2024", title: "Expansion", desc: "Accompagnement de plus de 500 producteurs et entrepreneurs agricoles.", color: "from-green-600 to-lime-500" },
];

const values = [
  { icon: Leaf, title: "Durabilité", desc: "Agriculture respectueuse de l'environnement et des ressources naturelles.", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-800/40", accent: "text-green-600 dark:text-green-400", iconBg: "bg-green-100 dark:bg-green-900/40" },
  { icon: Target, title: "Excellence", desc: "Recherche constante de la qualité dans nos produits et services.", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800/40", accent: "text-emerald-600 dark:text-emerald-400", iconBg: "bg-emerald-100 dark:bg-emerald-900/40" },
  { icon: Eye, title: "Innovation", desc: "Adoption de techniques modernes adaptées aux réalités locales.", bg: "bg-teal-50 dark:bg-teal-900/20", border: "border-teal-200 dark:border-teal-800/40", accent: "text-teal-600 dark:text-teal-400", iconBg: "bg-teal-100 dark:bg-teal-900/40" },
  { icon: Heart, title: "Engagement", desc: "Accompagnement sincère de chaque producteur et entrepreneur.", bg: "bg-lime-50 dark:bg-lime-900/20", border: "border-lime-200 dark:border-lime-800/40", accent: "text-lime-600 dark:text-lime-400", iconBg: "bg-lime-100 dark:bg-lime-900/40" },
];

const stats = [
  { number: "500+", label: "Producteurs accompagnés" },
  { number: "5", label: "Années d'expérience" },
  { number: "100%", label: "Agriculture biologique" },
  { number: "3", label: "Régions couvertes" },
];

const galleryImages = [
  { src: harvestImg, caption: "Récolte de laitues biologiques à Bandjoun" },
  { src: greenhouseImg, caption: "Nos serres de production certifiées bio" },
  { src: formationImg, caption: "Sessions de formation sur le terrain" },
];

const testimonials = [
  { text: "Grâce à Organic Green Lettuce, j'ai pu lancer ma propre micro-ferme et subvenir aux besoins de ma famille.", author: "Marie T.", role: "Productrice, Bafoussam" },
  { text: "Les kits de culture en sacs ont révolutionné ma façon de cultiver. Simple, efficace et rentable.", author: "Paul N.", role: "Entrepreneur agricole, Douala" },
  { text: "Les formations m'ont donné les clés pour produire sainement. Aujourd'hui je fournis trois restaurants.", author: "Jeanne K.", role: "Maraîchère, Yaoundé" },
];

/* ─── Carousel Component ────────────────────────────────────── */
function Carousel({ items, renderItem, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [items.length, interval]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    if (autoPlay) timerRef.current = setInterval(next, interval);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => { prev(); resetTimer(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => { next(); resetTimer(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-green-500" : "w-1.5 bg-stone-300 dark:bg-stone-600"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function About() {
  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <img src={harvestImg} alt="Récolte" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/60 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent dark:from-black/60" />

        {/* Decorative corner accent */}
        <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute top-12 right-12 w-16 h-16 border border-white/10 rounded-full" />

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-4 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              À propos
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-2xl"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Notre histoire,{" "}
              <span className="text-green-300 italic">notre passion</span>
            </h1>
            <p className="mt-5 text-green-100/70 font-body text-lg max-w-xl">
              Depuis 2019, nous cultivons l'excellence biologique au cœur du Cameroun.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="bg-green-800 dark:bg-green-950 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div>
                <p
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {s.number}
                </p>
                <p className="text-green-300/80 text-xs font-body uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Notre mission
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Promouvoir une agriculture{" "}
              <span className="text-green-600 dark:text-green-400 italic">durable</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-4 text-base">
              Organic Green Lettuce by SKY est née de la conviction que l'agriculture biologique est la voie vers un avenir alimentaire sain et durable au Cameroun et en Afrique.
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed text-base">
              Notre vision : promouvoir une agriculture durable et respectueuse de l'environnement, tout en accompagnant les producteurs et entrepreneurs vers l'autonomie et la réussite.
            </p>

            {/* Highlight quote */}
            <div className="mt-8 pl-5 border-l-2 border-green-500 dark:border-green-400">
              <p className="text-stone-700 dark:text-stone-300 font-body italic text-lg leading-relaxed">
                "Chaque laitue que nous cultivons est un acte d'amour pour la terre et pour les générations futures."
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative">
              <img
                src={greenhouseImg}
                alt="Serre biologique"
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-stone-900 border border-green-100 dark:border-green-900 rounded-xl shadow-xl px-5 py-4">
                <p className="text-green-600 dark:text-green-400 font-bold text-2xl" style={{ fontFamily: "'Georgia', serif" }}>100%</p>
                <p className="text-stone-600 dark:text-stone-400 text-xs font-body uppercase tracking-wider">Bio certifié</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-4 bg-white/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Nos valeurs
              </span>
              <h2
                className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Ce qui nous guide
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeInSection key={v.title} delay={i * 0.1}>
                <div className={`rounded-2xl border p-6 h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${v.bg} ${v.border}`}>
                  <div className={`w-12 h-12 rounded-xl ${v.iconBg} flex items-center justify-center mx-auto mb-5`}>
                    <v.icon size={22} className={v.accent} />
                  </div>
                  <h3 className={`font-heading text-lg font-bold mb-2 ${v.accent}`} style={{ fontFamily: "'Georgia', serif" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 font-body leading-relaxed">{v.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Carousel ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Galerie
              </span>
              <h2
                className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Sur le terrain
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Carousel
              items={galleryImages}
              autoPlay
              interval={4500}
              renderItem={(img) => (
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover rounded-2xl"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                  <p className="absolute bottom-5 left-6 right-6 text-white font-body text-sm">
                    {img.caption}
                  </p>
                </div>
              )}
            />
          </FadeInSection>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 px-4 bg-white/50 dark:bg-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Chronologie
              </span>
              <h2
                className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Notre parcours
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-green-200 dark:bg-green-800/60 -translate-x-px" />

            {timeline.map((t, i) => (
              <FadeInSection key={t.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />

                  {/* Dot */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${t.color} shadow-lg mt-3 z-10 ring-4 ring-[#f7f5f0] dark:ring-[#0c180e]`} />

                  {/* Card */}
                  <div className="ml-14 md:ml-0 flex-1 bg-white dark:bg-white/5 border border-green-100 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${t.color} bg-clip-text text-transparent font-body`}>
                      {t.year}
                    </span>
                    <h3 className="font-heading font-bold text-stone-800 dark:text-stone-100 mt-1 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                      {t.title}
                    </h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400 font-body leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <section className="py-20 px-4 bg-green-900 dark:bg-green-950 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center mb-12">
              <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-500/40 px-3 py-1 rounded-full">
                Témoignages
              </span>
              <h2
                className="font-heading text-4xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Ils nous font confiance
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Carousel
              items={testimonials}
              autoPlay
              interval={5000}
              renderItem={(t) => (
                <div className="px-4 pb-4">
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-center">
                    <Quote size={32} className="text-green-400 mx-auto mb-5 opacity-60" />
                    <p className="text-white font-body text-lg leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="text-green-300 font-bold font-body">{t.author}</p>
                      <p className="text-green-400/70 text-sm font-body">{t.role}</p>
                    </div>
                  </div>
                </div>
              )}
            />
          </FadeInSection>
        </div>
      </section>

      {/* ── Team CTA ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Notre équipe
            </span>
            <h2
              className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100 mb-10"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Sur le terrain à Bandjoun
            </h2>
            <div className="relative inline-block w-full max-w-4xl">
              <img
                src={formationImg}
                alt="Notre équipe"
                className="w-full rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: "16/9" }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}