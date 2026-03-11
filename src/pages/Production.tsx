import { FadeInSection } from "@/components/AnimationUtils";
import { useState, useEffect, useRef } from "react";
import { Leaf, Droplets, Shield, ArrowRight, Sprout, Sun, Wind } from "lucide-react";
import harvestImg from "@/assets/harvest.jpg";
import greenhouseImg from "@/assets/greenhouse.jpg";
import heroImg from "@/assets/hero-farm.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const methods = [
  {
    icon: Leaf,
    title: "Compost biologique",
    desc: "Fabrication de compost rapide en 21 jours et super compost enrichi pour nourrir les sols naturellement.",
    detail: "Notre compost est produit sur place à partir de matières organiques locales, garantissant un amendement riche en nutriments.",
    color: "from-green-600 to-emerald-500",
    accent: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    border: "border-green-200 dark:border-green-800/40",
    cardBg: "bg-green-50/60 dark:bg-green-950/20",
  },
  {
    icon: Droplets,
    title: "Fertilisants naturels",
    desc: "EM (micro-organismes efficaces), purins de plantes et solutions biologiques pour stimuler la croissance.",
    detail: "Nos mélanges fermentés activent la vie microbienne du sol et améliorent la disponibilité des nutriments pour les cultures.",
    color: "from-teal-600 to-cyan-500",
    accent: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    border: "border-teal-200 dark:border-teal-800/40",
    cardBg: "bg-teal-50/60 dark:bg-teal-950/20",
  },
  {
    icon: Shield,
    title: "Protection phytosanitaire bio",
    desc: "Traitements naturels contre les ravageurs et maladies, sans produits chimiques de synthèse.",
    detail: "Extraits de plantes, prédateurs naturels et pièges biologiques forment notre bouclier contre les nuisibles.",
    color: "from-emerald-600 to-green-500",
    accent: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    border: "border-emerald-200 dark:border-emerald-800/40",
    cardBg: "bg-emerald-50/60 dark:bg-emerald-950/20",
  },
];

const principles = [
  { icon: Sun, label: "Énergie solaire", desc: "Cultures optimisées selon l'ensoleillement naturel" },
  { icon: Wind, label: "Zéro pollution", desc: "Aucun produit chimique dans nos champs" },
  { icon: Sprout, label: "Sol vivant", desc: "Préservation et enrichissement permanent des terres" },
  { icon: Leaf, label: "Biodiversité", desc: "Rotation des cultures et associations végétales" },
];

const steps = [
  { num: "01", title: "Préparation du sol", desc: "Application de compost mature et amendements biologiques pour enrichir la terre avant plantation." },
  { num: "02", title: "Semis & plantation", desc: "Sélection rigoureuse des variétés adaptées au climat camerounais, plants robustes et sains." },
  { num: "03", title: "Suivi de croissance", desc: "Surveillance quotidienne, irrigation naturelle et traitements bio préventifs selon les besoins." },
  { num: "04", title: "Récolte & conditionnement", desc: "Cueillette à maturité optimale, conditionnement rapide pour préserver fraîcheur et nutriments." },
];

/* ─── Animated Counter ──────────────────────────────────────── */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const end = parseInt(target.replace(/\D/g, ""), 10);
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(current);
            if (current >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ─── Floating leaf particle ────────────────────────────────── */
function FloatingLeaves() {
  const leaves = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 11}%`,
    delay: `${i * 0.7}s`,
    duration: `${4 + (i % 3)}s`,
    size: 8 + (i % 4) * 4,
    opacity: 0.08 + (i % 3) * 0.04,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((l) => (
        <div
          key={l.id}
          className="absolute animate-bounce text-white"
          style={{
            left: l.left,
            bottom: "-10px",
            animationDelay: l.delay,
            animationDuration: l.duration,
            fontSize: l.size,
            opacity: l.opacity,
          }}
        >
          🌿
        </div>
      ))}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Production() {
  const [activeMethod, setActiveMethod] = useState(0);

  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Production biologique"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8000ms] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent dark:from-black dark:via-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/60 to-transparent dark:from-black/50" />

        {/* Animated floating leaves */}
        <FloatingLeaves />

        {/* Decorative rings */}
        <div className="absolute top-10 right-12 w-52 h-52 rounded-full border border-white/8 animate-pulse" />
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/8" />
        <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative z-10 w-full px-6 pb-18 max-w-6xl mx-auto pb-16">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Production biologique
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              La nature comme{" "}
              <span className="text-green-300 italic">seul intrant</span>
            </h1>
            <p className="text-green-100/75 font-body text-lg max-w-xl mb-10">
              Chaque laitue que nous cultivons est un engagement : zéro chimie, zéro compromis. Seulement la terre, l'eau et le soleil de Bandjoun.
            </p>

            {/* Scroll cue */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <div className="w-5 h-px bg-green-400/50" />
                <div className="w-8 h-px bg-green-400/80" />
                <div className="w-5 h-px bg-green-400/50" />
              </div>
              <span className="text-green-400/70 font-body text-xs uppercase tracking-widest">Découvrir</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-green-800 dark:bg-green-950 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { target: "100", suffix: "%", label: "Certifié biologique" },
            { target: "21", suffix: "j", label: "Compost express" },
            { target: "500", suffix: "+", label: "Producteurs aidés" },
            { target: "5", suffix: "+", label: "Années de pratique" },
          ].map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  <Counter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-green-300/80 text-xs font-body uppercase tracking-wider mt-2">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── Laitues section ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Laitues biologiques
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Des laitues cultivées{" "}
              <span className="text-green-600 dark:text-green-400 italic">avec soin</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-5 text-base">
              Nos laitues biologiques poussent sans aucun produit chimique de synthèse. Chaque plant est choyé du semis à la récolte grâce à nos intrants 100 % naturels — compost, vermicompost et EM fermentés sur place.
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-8 text-base">
              Le résultat : des légumes <strong className="text-stone-800 dark:text-stone-200">croquants, savoureux et nutritifs</strong>, qui respectent votre santé et la planète. Notre production maraîchère diversifiée s'étend progressivement à d'autres espèces en rotation.
            </p>

            {/* Quote */}
            <div className="pl-5 border-l-2 border-green-500 dark:border-green-400 mb-8">
              <p className="text-stone-700 dark:text-stone-300 font-body italic text-lg leading-relaxed">
                "Cultiver bio, c'est choisir de nourrir la vie — celle des sols, des plantes et des hommes."
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Commander nos produits <ArrowRight size={15} />
            </a>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-green-400/10 blur-2xl" />
              <img
                src={harvestImg}
                alt="Récolte biologique"
                className="relative w-full rounded-2xl object-cover shadow-2xl border border-white/10 dark:border-white/5"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-stone-900 border border-green-100 dark:border-green-900 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <Leaf size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-stone-800 dark:text-stone-100 font-bold text-sm font-body">100% Bio</p>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-body">Certifié Bandjoun</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Principes ── */}
      <section className="py-16 px-4 bg-white/40 dark:bg-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="text-center text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.3em] mb-10">
              Nos principes fondateurs
            </p>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeInSection key={p.label} delay={i * 0.1}>
                  <div className="text-center group bg-white/60 dark:bg-white/5 border border-green-100 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                      <Icon size={22} className="text-green-600 dark:text-green-400" />
                    </div>
                    <p className="font-heading font-bold text-stone-800 dark:text-stone-100 text-sm mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                      {p.label}
                    </p>
                    <p className="text-stone-500 dark:text-stone-400 font-body text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Méthodes — Interactive tabs ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Nos méthodes
              </span>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Agriculture 100%{" "}
                <span className="text-green-600 dark:text-green-400 italic">naturelle</span>
              </h2>
            </div>
          </FadeInSection>

          {/* Tab selectors */}
          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="flex md:flex-col gap-3 w-full md:w-72 flex-shrink-0">
              {methods.map((m, i) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.title}
                    onClick={() => setActiveMethod(i)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl border text-left transition-all duration-300 w-full ${
                      activeMethod === i
                        ? `${m.cardBg} ${m.border} shadow-md`
                        : "bg-white/40 dark:bg-white/5 border-transparent hover:border-green-100 dark:hover:border-white/10"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${m.iconBg}`}>
                      <Icon size={18} className={m.accent} />
                    </div>
                    <span className={`font-body font-semibold text-sm ${activeMethod === i ? m.accent : "text-stone-600 dark:text-stone-400"}`}>
                      {m.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active method detail */}
            <div className="flex-1">
              {methods.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.title}
                    className={`transition-all duration-500 ${activeMethod === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"}`}
                  >
                    <div className={`rounded-2xl border ${m.border} ${m.cardBg} p-8 md:p-10`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${m.iconBg} mb-6`}>
                        <Icon size={28} className={m.accent} />
                      </div>
                      <h3
                        className="font-heading text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed mb-4">{m.desc}</p>
                      <p className="text-stone-500 dark:text-stone-500 font-body text-sm leading-relaxed border-t border-stone-100 dark:border-white/5 pt-4 mt-4">
                        {m.detail}
                      </p>
                      <div className="mt-6">
                        <span className={`inline-flex items-center gap-2 text-sm font-semibold font-body ${m.accent}`}>
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${m.color}`} />
                          Méthode certifiée biologique
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="py-20 px-4 bg-green-900 dark:bg-green-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-500/40 px-3 py-1 rounded-full">
                De la graine à l'assiette
              </span>
              <h2
                className="font-heading text-4xl font-bold text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Notre processus de production
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeInSection key={s.num} delay={i * 0.12}>
                <div className="relative bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-green-500/30 z-10" />
                  )}
                  <span
                    className="block text-5xl font-bold text-green-500/20 mb-4 leading-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {s.num}
                  </span>
                  <h3 className="font-heading font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-green-200/60 text-sm font-body leading-relaxed">{s.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Greenhouse panorama ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group" style={{ aspectRatio: "21/9" }}>
              <img
                src={greenhouseImg}
                alt="Serre de production"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950/75 via-green-950/30 to-transparent dark:from-black/80 dark:via-black/30" />
              <div className="absolute inset-0 flex items-center px-10 md:px-16">
                <div className="max-w-md">
                  <p className="text-green-300 font-body text-xs uppercase tracking-widest mb-3">Bandjoun, Cameroun</p>
                  <h3
                    className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Notre serre de production
                  </h3>
                  <p className="text-green-100/75 font-body text-sm leading-relaxed mb-6">
                    Un espace conçu pour optimiser lumière, humidité et circulation d'air — au service d'une production bio performante.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Visiter la ferme <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 to-emerald-700 dark:from-green-950 dark:to-emerald-950 p-12 md:p-16 text-center shadow-2xl">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
              <div className="relative z-10">
                <span className="inline-block text-green-200 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5">
                  Nos produits
                </span>
                <h2
                  className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Goûtez la différence du{" "}
                  <span className="text-green-300 italic">bio véritable</span>
                </h2>
                <p className="text-green-100/75 font-body text-base mb-10 max-w-lg mx-auto">
                  Laitues fraîches, intrants biologiques, kits de culture — découvrez nos produits et commandez directement via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-green-800 font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Commander maintenant <ArrowRight size={15} />
                  </a>
                  <a
                    href="https://wa.me/237658809698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-body font-semibold text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}