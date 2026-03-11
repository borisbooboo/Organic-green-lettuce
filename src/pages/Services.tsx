import { FadeInSection } from "@/components/AnimationUtils";
import { Link } from "react-router-dom";
import { Sprout, Bug, BarChart3, Users, Rabbit, Egg, ArrowRight, Check } from "lucide-react";
import greenhouseImg from "@/assets/greenhouse.jpg";
import elevageImg from "@/assets/elevage.jpg";
import lapin1 from "@/assets/lapin1.jpg";
import ferme1 from "@/assets/ferme1.jpg";
import champs1 from "@/assets/champs1.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const mainServices = [
  {
    icon: Sprout,
    title: "Installation de Fermes Agricoles",
    desc: "Conception, mise en place et suivi de fermes agricoles biologiques. Nous vous accompagnons de la planification à la première récolte.",
    features: ["Étude de faisabilité", "Aménagement du terrain", "Installation des infrastructures", "Formation du personnel"],
    image: ferme1,
    tag: "Infrastructure",
    color: "from-green-600 to-emerald-500",
    accent: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    cardBg: "bg-green-50/60 dark:bg-green-950/20",
    border: "border-green-200 dark:border-green-800/30",
    glow: "bg-green-400/10",
  },
  {
    icon: Bug,
    title: "Conseil en Agrobiologie",
    desc: "Expertise en agriculture biologique pour optimiser vos rendements tout en respectant l'environnement.",
    features: ["Diagnostic des cultures", "Plan de fertilisation", "Gestion phytosanitaire bio", "Optimisation des rotations"],
    image: champs1,
    tag: "Expertise",
    color: "from-emerald-600 to-teal-500",
    accent: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    cardBg: "bg-emerald-50/60 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800/30",
    glow: "bg-emerald-400/10",
  },
  {
    icon: BarChart3,
    title: "Suivi des Exploitations",
    desc: "Accompagnement continu de vos exploitations pour garantir des rendements optimaux et durables.",
    features: ["Visites régulières", "Analyses de performance", "Rapports de suivi", "Recommandations adaptées"],
    image: greenhouseImg,
    tag: "Suivi",
    color: "from-teal-600 to-green-500",
    accent: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    cardBg: "bg-teal-50/60 dark:bg-teal-950/20",
    border: "border-teal-200 dark:border-teal-800/30",
    glow: "bg-teal-400/10",
  },
  {
    icon: Users,
    title: "Accompagnement des Producteurs",
    desc: "Formation et mentorat des producteurs locaux pour développer des projets agricoles rentables.",
    features: ["Mentorat personnalisé", "Accès aux intrants", "Mise en réseau", "Suivi post-formation"],
    image: champs1,
    tag: "Formation",
    color: "from-lime-600 to-green-500",
    accent: "text-lime-600 dark:text-lime-400",
    iconBg: "bg-lime-100 dark:bg-lime-900/40",
    cardBg: "bg-lime-50/60 dark:bg-lime-950/20",
    border: "border-lime-200 dark:border-lime-800/30",
    glow: "bg-lime-400/10",
  },
];

const elevageServices = [
  {
    icon: Egg,
    title: "Élevage de Poulets",
    desc: "Production avicole biologique avec des pratiques respectueuses du bien-être animal et de l'environnement.",
    image: elevageImg,
    color: "from-amber-600 to-orange-500",
    accent: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    border: "border-amber-200 dark:border-amber-800/30",
  },
  {
    icon: Rabbit,
    title: "Élevage de Lapins",
    desc: "Cuniculture biologique avec des techniques modernes et des soins naturels pour une production saine.",
    image: lapin1,
    color: "from-orange-600 to-amber-500",
    accent: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    border: "border-orange-200 dark:border-orange-800/30",
  },
];

const stats = [
  { number: "500+", label: "Producteurs accompagnés" },
  { number: "4", label: "Services spécialisés" },
  { number: "100%", label: "Agriculture biologique" },
  { number: "5+", label: "Années d'expérience" },
];

/* ─── Page ──────────────────────────────────────────────────── */
export default function Services() {
  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">

      {/* ── Hero ── */}
      <section className="relative h-[62vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src={ferme1}
          alt="Services agricoles"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/50 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/60 to-transparent dark:from-black/50" />

        {/* Decorative rings top-right */}
        <div className="absolute top-8 right-10 w-36 h-36 rounded-full border border-white/10" />
        <div className="absolute top-14 right-16 w-20 h-20 rounded-full border border-white/10" />

        <div className="relative z-10 w-full px-6 pb-14 max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Nos services
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Services agricoles{" "}
              <span className="text-green-300 italic">complets</span>
            </h1>
            <p className="mt-4 text-green-100/70 font-body text-lg max-w-xl">
              De l'installation à la formation — un écosystème de services pensé pour votre réussite agricole.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-green-800 dark:bg-green-950 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  {s.number}
                </p>
                <p className="text-green-300/80 text-xs font-body uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── Main Services ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Ce que nous faisons
              </span>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Nos expertises
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-28">
            {mainServices.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <FadeInSection key={s.title} delay={0.05}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

                    {/* Text */}
                    <div>
                      {/* Tag + icon */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.iconBg}`}>
                          <Icon size={20} className={s.accent} />
                        </div>
                        <span className={`font-body text-xs font-bold uppercase tracking-widest ${s.accent}`}>
                          {s.tag}
                        </span>
                      </div>

                      <h3
                        className="font-heading text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-4"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 font-body leading-relaxed text-base mb-8">
                        {s.desc}
                      </p>

                      {/* Feature grid */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {s.features.map((f) => (
                          <div key={f} className={`flex items-center gap-2.5 rounded-xl px-4 py-3 border ${s.cardBg} ${s.border}`}>
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                              <Check size={10} className={s.accent} strokeWidth={3} />
                            </span>
                            <span className="text-stone-700 dark:text-stone-300 font-body text-xs font-medium">{f}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white text-sm font-body font-semibold bg-gradient-to-r ${s.color} shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200`}
                      >
                        En savoir plus <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      {/* Glow */}
                      <div className={`absolute -inset-4 rounded-3xl ${s.glow} blur-2xl`} />
                      <img
                        src={s.image}
                        alt={s.title}
                        className="relative w-full rounded-2xl object-cover shadow-2xl border border-white/10 dark:border-white/5"
                        style={{ aspectRatio: "4/3" }}
                      />
                      {/* Floating badge */}
                      <div className={`absolute ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"} bg-white dark:bg-stone-900 border ${s.border} rounded-xl px-4 py-2.5 shadow-xl`}>
                        <p className={`text-xs font-bold uppercase tracking-wider font-body ${s.accent}`}>{s.tag}</p>
                        <p className="text-stone-500 dark:text-stone-400 text-xs font-body mt-0.5">Organic Green</p>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  {i < mainServices.length - 1 && (
                    <div className="mt-28 flex items-center gap-4">
                      <div className="flex-1 h-px bg-green-100 dark:bg-white/5" />
                      <div className="w-2 h-2 rounded-full bg-green-300 dark:bg-green-700" />
                      <div className="flex-1 h-px bg-green-100 dark:bg-white/5" />
                    </div>
                  )}
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Élevage ── */}
      <section className="py-24 px-4 bg-white/40 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-amber-300 dark:border-amber-700 px-3 py-1 rounded-full">
                Élevage biologique
              </span>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Production avicole &{" "}
                <span className="text-amber-600 dark:text-amber-400 italic">cunicole</span>
              </h2>
              <p className="mt-4 text-stone-500 dark:text-stone-400 font-body max-w-xl mx-auto">
                Des méthodes d'élevage respectueuses du bien-être animal et certifiées biologiques.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {elevageServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeInSection key={s.title} delay={i * 0.15}>
                  <div className={`group relative overflow-hidden rounded-2xl border ${s.border} bg-white/70 dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Icon badge */}
                      <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${s.iconBg} backdrop-blur-sm`}>
                        <Icon size={20} className={s.accent} />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="font-heading text-xl font-bold text-stone-800 dark:text-stone-100 mb-2"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-stone-500 dark:text-stone-400 font-body text-sm leading-relaxed">
                        {s.desc}
                      </p>
                      <Link
                        to="/contact"
                        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold font-body ${s.accent} hover:gap-2.5 transition-all duration-200`}
                      >
                        En savoir plus <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          {/* Wide elevage image */}
          <FadeInSection delay={0.2}>
            <div className="mt-10 relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "21/9" }}>
              <img
                src={lapin1}
                alt="Notre élevage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center px-10">
                <div className="max-w-sm">
                  <p className="text-amber-300 font-body text-xs uppercase tracking-widest mb-2">Notre engagement</p>
                  <p
                    className="text-white text-2xl font-bold leading-snug"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Un élevage naturel, sain et responsable.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={champs1}
                alt="Nos champs"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/92 to-emerald-800/80 dark:from-black/92 dark:to-green-950/80" />

              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
              />

              <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
                <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5">
                  Passez à l'action
                </span>
                <h2
                  className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Besoin d'un{" "}
                  <span className="text-green-300 italic">accompagnement ?</span>
                </h2>
                <p className="text-green-100/75 font-body text-base mb-10 max-w-lg mx-auto">
                  Contactez-nous pour discuter de votre projet agricole et bénéficier de notre expertise terrain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Nous contacter <ArrowRight size={15} />
                  </Link>
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