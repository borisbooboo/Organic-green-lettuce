import { FadeInSection } from "@/components/AnimationUtils";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Calendar, ArrowRight, Clock, Search, BookOpen, TrendingUp, Leaf } from "lucide-react";
import compostImg from "@/assets/compost.jpg";
import harvestImg from "@/assets/harvest.jpg";
import kitImg from "@/assets/kit-laitue.jpg";
import soilImg from "@/assets/soil-analysis.jpg";
import heroFarmImg from "@/assets/hero-farm.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const articles = [
  {
    img: compostImg,
    title: "Les bases du compostage biologique",
    excerpt: "Découvrez les principes fondamentaux du compostage et comment produire un compost de qualité en seulement 21 jours. Une technique accessible à tous qui transforme vos déchets en or brun.",
    date: "15 Février 2026",
    cat: "Compostage",
    readTime: "5 min",
    featured: true,
    color: "from-teal-600 to-emerald-500",
    accent: "text-teal-600 dark:text-teal-400",
    catBg: "bg-teal-100 dark:bg-teal-900/40",
  },
  {
    img: harvestImg,
    title: "Agriculture biologique : pourquoi passer au bio ?",
    excerpt: "Les avantages de l'agriculture biologique pour la santé, l'environnement et l'économie locale. Un choix qui profite à toute la chaîne alimentaire.",
    date: "8 Février 2026",
    cat: "Agriculture bio",
    readTime: "7 min",
    featured: false,
    color: "from-green-600 to-lime-500",
    accent: "text-green-600 dark:text-green-400",
    catBg: "bg-green-100 dark:bg-green-900/40",
  },
  {
    img: soilImg,
    title: "Comprendre la fertilité de vos sols",
    excerpt: "Guide pratique pour analyser et améliorer la fertilité de vos sols grâce aux intrants naturels. Parce qu'un sol vivant, c'est la garantie d'une récolte abondante.",
    date: "1er Février 2026",
    cat: "Fertilité",
    readTime: "6 min",
    featured: false,
    color: "from-amber-600 to-orange-500",
    accent: "text-amber-600 dark:text-amber-400",
    catBg: "bg-amber-100 dark:bg-amber-900/40",
  },
  {
    img: kitImg,
    title: "L'agriculture urbaine au Cameroun",
    excerpt: "Comment les kits de culture en sacs révolutionnent l'accès aux légumes frais en milieu urbain. Une révolution verte qui s'invite dans les villes.",
    date: "25 Janvier 2026",
    cat: "Agriculture urbaine",
    readTime: "4 min",
    featured: false,
    color: "from-emerald-600 to-teal-500",
    accent: "text-emerald-600 dark:text-emerald-400",
    catBg: "bg-emerald-100 dark:bg-emerald-900/40",
  },
];

const categories = ["Tous", "Compostage", "Agriculture bio", "Fertilité", "Agriculture urbaine"];

const tips = [
  { icon: "🌱", text: "Arrosez vos plants tôt le matin pour limiter l'évaporation." },
  { icon: "🍂", text: "Intégrez des feuilles mortes dans votre compost pour l'équilibrer." },
  { icon: "☀️", text: "Orientez vos serres plein sud pour maximiser l'ensoleillement." },
  { icon: "🐛", text: "Les lombrics sont vos meilleurs alliés pour un sol fertile." },
];

/* ─── Animated ticker ───────────────────────────────────────── */
function Ticker() {
  return (
    <div className="bg-green-700 dark:bg-green-950 py-2.5 overflow-hidden relative">
      <div className="flex gap-0 animate-[ticker_30s_linear_infinite] whitespace-nowrap">
        {[...tips, ...tips].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-8 text-green-100 font-body text-xs">
            <span>{t.icon}</span>
            <span>{t.text}</span>
            <span className="mx-4 text-green-500">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Animated word reveal ──────────────────────────────────── */
function AnimatedTitle() {
  const words = ["Apprenez.", "Cultivez.", "Récoltez."];
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="text-green-300 italic inline-block transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {words[current]}
    </span>
  );
}

/* ─── Read progress bar ─────────────────────────────────────── */
function ReadProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = articles.filter((a) => {
    const matchesCat = activeCategory === "Tous" || a.cat === activeCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = articles[0];
  const rest = filtered.filter((a) => !a.featured);

  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">
      <ReadProgress />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-32 px-6">
        {/* Background image */}
        <img
          src={heroFarmImg}
          alt="Blog agricole"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/75 via-green-950/65 to-green-950/80 dark:from-black/85 dark:via-black/70 dark:to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 to-transparent dark:from-black/40" />
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        {/* Rings */}
        <div className="absolute top-8 right-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute top-14 right-22 w-24 h-24 rounded-full border border-white/8" />
        <div className="absolute -bottom-8 left-1/4 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Blog & ressources
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              <AnimatedTitle />
              <br />
              <span className="text-white/90">Le savoir bio</span>
            </h1>
            <p className="text-green-100/75 font-body text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Des articles rédigés par nos experts terrain pour vous guider dans votre aventure agricole — de la graine à l'assiette.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Rechercher un article…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 text-white placeholder:text-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-green-400/40 backdrop-blur-sm"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Ticker ── */}
      <Ticker />

      {/* ── Category filters ── */}
      <section className="py-8 px-4 bg-white/30 dark:bg-white/5 border-b border-green-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === c
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white/60 dark:bg-white/5 text-stone-600 dark:text-stone-400 border border-green-100 dark:border-white/10 hover:border-green-300 dark:hover:border-green-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* ── Featured article ── */}
      {(activeCategory === "Tous" || activeCategory === featured.cat) && !searchQuery && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <p className="text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                <TrendingUp size={14} /> À la une
              </p>
              <article className="group relative overflow-hidden rounded-3xl shadow-2xl border border-green-100 dark:border-white/10">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-950/30 dark:to-black/40" />
                    {/* Cat badge on image */}
                    <div className="absolute top-5 left-5">
                      <span className={`${featured.catBg} ${featured.accent} font-body text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                        {featured.cat}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-body">
                        <Calendar size={12} /> {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-body">
                        <Clock size={12} /> {featured.readTime} de lecture
                      </span>
                    </div>
                    <h2
                      className="font-heading text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-4"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 font-body text-base leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                    <Link
                      to="#"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-body font-semibold bg-gradient-to-r ${featured.color} shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 self-start`}
                    >
                      Lire l'article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ── Articles grid ── */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-500 dark:text-stone-400 font-body text-lg">Aucun article trouvé pour « {searchQuery} ».</p>
            </div>
          ) : (
            <>
              {(activeCategory !== "Tous" || searchQuery) && (
                <FadeInSection>
                  <p className="text-stone-500 dark:text-stone-400 font-body text-sm mb-8">
                    {filtered.length} article{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
                  </p>
                </FadeInSection>
              )}

              {!searchQuery && activeCategory === "Tous" && (
                <FadeInSection>
                  <div className="flex items-center gap-3 mb-10">
                    <BookOpen size={14} className="text-green-600 dark:text-green-400" />
                    <p className="text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em]">
                      Tous les articles
                    </p>
                  </div>
                </FadeInSection>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {(searchQuery || activeCategory !== "Tous" ? filtered : rest).map((a, i) => (
                  <FadeInSection key={a.title} delay={i * 0.08}>
                    <article
                      className="group bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-green-100 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <img
                          src={a.img}
                          alt={a.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        {/* Animated overlay on hover */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                        />
                        {/* Category pill */}
                        <div className="absolute top-3 left-3">
                          <span className={`${a.catBg} ${a.accent} font-body text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm`}>
                            {a.cat}
                          </span>
                        </div>
                        {/* Read time */}
                        <div className="absolute bottom-3 right-3">
                          <span className="flex items-center gap-1 text-white/80 font-body text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                            <Clock size={10} /> {a.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-1.5 mb-4">
                          <Calendar size={11} className="text-stone-400" />
                          <span className="text-xs text-stone-500 dark:text-stone-400 font-body">{a.date}</span>
                        </div>

                        <h2
                          className={`font-heading text-lg font-bold text-stone-800 dark:text-stone-100 mb-3 leading-snug transition-colors duration-200 ${hoveredCard === i ? a.accent : ""}`}
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          {a.title}
                        </h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 font-body leading-relaxed mb-5 line-clamp-3">
                          {a.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-white/5">
                          <Link
                            to="#"
                            className={`inline-flex items-center gap-1.5 text-sm font-semibold font-body ${a.accent} group-hover:gap-2.5 transition-all duration-200`}
                          >
                            Lire la suite <ArrowRight size={13} />
                          </Link>
                          {/* Progress bar on hover */}
                          <div className="h-1 w-16 rounded-full bg-stone-100 dark:bg-white/10 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${a.color} transition-all duration-500`}
                              style={{ width: hoveredCard === i ? "100%" : "30%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  </FadeInSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 px-4 bg-green-900 dark:bg-green-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-green-500/10 blur-3xl" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Leaf size={24} className="text-green-300" />
            </div>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5">
              Restez informé
            </span>
            <h2
              className="font-heading text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Le savoir agricole,{" "}
              <span className="text-green-300 italic">livré chez vous</span>
            </h2>
            <p className="text-green-100/70 font-body text-base mb-8 leading-relaxed">
              Rejoignez notre communauté et recevez chaque semaine nos meilleurs conseils en agriculture biologique, directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-green-400/40 backdrop-blur-sm"
              />
              <button className="px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap flex items-center gap-2">
                S'abonner <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-green-400/60 text-xs font-body mt-4">
              Pas de spam. Désabonnement en un clic.
            </p>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}