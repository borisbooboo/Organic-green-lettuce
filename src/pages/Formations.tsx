import { FadeInSection } from "@/components/AnimationUtils";
import { useState } from "react";
import { GraduationCap, Leaf, FlaskConical, Egg, Rabbit, Wrench, ArrowRight, Check, Clock, Users, Star } from "lucide-react";
import formationImg from "@/assets/formation.jpg";
import champs2 from "@/assets/champs2.jpg";
import champs3 from "@/assets/champs3.jpg";
import flyers from "@/assets/flyers.jpg";

/* ─── Data ─────────────────────────────────────────────────── */
const formations = [
  {
    icon: FlaskConical,
    title: "Fabrication d'intrants biologiques",
    desc: "Apprenez à produire vos propres intrants : compost, vermicompost, EM et purins biologiques.",
    duree: "5 jours",
    niveau: "Débutant",
    places: "12 places",
    color: "from-teal-600 to-emerald-500",
    accent: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    border: "border-teal-200 dark:border-teal-800/40",
    cardBg: "bg-teal-50/50 dark:bg-teal-950/20",
  },
  {
    icon: Leaf,
    title: "Techniques de compostage rapide",
    desc: "Maîtrisez la technique du compost en 21 jours pour enrichir rapidement vos sols.",
    duree: "3 jours",
    niveau: "Débutant",
    places: "15 places",
    color: "from-green-600 to-lime-500",
    accent: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    border: "border-green-200 dark:border-green-800/40",
    cardBg: "bg-green-50/50 dark:bg-green-950/20",
  },
  {
    icon: Wrench,
    title: "Montage de projets agricoles",
    desc: "De l'idée au business plan : structurez votre projet agricole pour le rendre viable et rentable.",
    duree: "5 jours",
    niveau: "Intermédiaire",
    places: "10 places",
    color: "from-blue-600 to-indigo-500",
    accent: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    border: "border-blue-200 dark:border-blue-800/40",
    cardBg: "bg-blue-50/50 dark:bg-blue-950/20",
  },
  {
    icon: GraduationCap,
    title: "Techniques d'agriculture biologique",
    desc: "Formation complète aux méthodes de culture biologique adaptées au contexte camerounais.",
    duree: "7 jours",
    niveau: "Tous niveaux",
    places: "20 places",
    color: "from-emerald-600 to-green-500",
    accent: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    border: "border-emerald-200 dark:border-emerald-800/40",
    cardBg: "bg-emerald-50/50 dark:bg-emerald-950/20",
  },
  {
    icon: Egg,
    title: "Élevage de poulets",
    desc: "Techniques d'aviculture biologique, alimentation naturelle et gestion sanitaire du cheptel.",
    duree: "4 jours",
    niveau: "Débutant",
    places: "12 places",
    color: "from-amber-600 to-orange-500",
    accent: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    border: "border-amber-200 dark:border-amber-800/40",
    cardBg: "bg-amber-50/50 dark:bg-amber-950/20",
  },
  {
    icon: Rabbit,
    title: "Élevage de lapins",
    desc: "Cuniculture biologique : reproduction, alimentation, soins et commercialisation.",
    duree: "4 jours",
    niveau: "Débutant",
    places: "12 places",
    color: "from-orange-600 to-amber-500",
    accent: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    border: "border-orange-200 dark:border-orange-800/40",
    cardBg: "bg-orange-50/50 dark:bg-orange-950/20",
  },
];

const publics = [
  { label: "Étudiants en agronomie", icon: "🎓" },
  { label: "Jeunes entrepreneurs", icon: "🚀" },
  { label: "Agriculteurs en reconversion", icon: "🌱" },
  { label: "Passionnés d'agriculture", icon: "❤️" },
];

const avantages = [
  "Formateurs experts terrain avec +5 ans de pratique bio",
  "Matériel et équipements fournis sur place",
  "Certificat officiel de participation remis à l'issue",
  "Petits groupes pour un suivi personnalisé",
  "Méthodes adaptées au contexte camerounais",
  "Accompagnement post-formation disponible",
];

const inputClass =
  "w-full px-5 py-3.5 rounded-xl text-sm font-body transition-all duration-200 " +
  "focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 " +
  "bg-white/60 border border-green-200 text-stone-800 placeholder:text-stone-400 " +
  "hover:border-green-300 shadow-sm hover:shadow-md " +
  "dark:bg-white/5 dark:border-white/10 dark:text-stone-100 dark:placeholder:text-stone-500 " +
  "dark:hover:border-green-600/50 dark:focus:border-green-500";

export default function Formations() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", formation: "" });
  const [sending, setSending] = useState(false);

  const handleWhatsApp = () => {
    const { nom, email, tel, formation } = form;
    if (!nom || !formation) {
      alert("Veuillez renseigner votre nom et choisir une formation.");
      return;
    }
    setSending(true);
    const text = [
      `📚 *Inscription à une formation — Organic Green Lettuce*`,
      ``,
      `👤 *Nom :* ${nom}`,
      email ? `📧 *Email :* ${email}` : null,
      tel ? `📞 *Tél :* ${tel}` : null,
      `🌿 *Formation souhaitée :* ${formation}`,
    ]
      .filter(Boolean)
      .join("\n");
    setTimeout(() => {
      setSending(false);
      window.open(`https://wa.me/237658809698?text=${encodeURIComponent(text)}`, "_blank");
    }, 600);
  };

  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0c180e] min-h-screen transition-colors duration-300">

      {/* ── Hero ── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={formationImg}
          alt="Formations agricoles"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/50 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 to-transparent dark:from-black/60" />

        {/* Decorative rings */}
        <div className="absolute top-10 right-12 w-44 h-44 rounded-full border border-white/10" />
        <div className="absolute top-18 right-20 w-24 h-24 rounded-full border border-white/8" />
        <div className="absolute -bottom-12 left-1/3 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative z-10 w-full px-6 pb-16 max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
              Formations certifiantes
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Devenez expert en{" "}
              <span className="text-green-300 italic">agriculture bio</span>
            </h1>
            <p className="text-green-100/75 font-body text-lg max-w-xl mb-8">
              Des formations 100 % pratiques, animées par des professionnels du terrain. Transformez votre passion en source de revenus durable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Voir les programmes <ArrowRight size={15} />
              </a>
              <a
                href="#inscription"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-body font-semibold text-sm hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
              >
                S'inscrire maintenant
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="bg-green-800 dark:bg-green-950 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Apprenants formés" },
            { n: "6", l: "Programmes disponibles" },
            { n: "100%", l: "Pratique terrain" },
            { n: "⭐⭐⭐⭐⭐", l: "Satisfaction" },
          ].map((s, i) => (
            <FadeInSection key={s.l} delay={i * 0.1}>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  {s.n}
                </p>
                <p className="text-green-300/80 text-xs font-body uppercase tracking-wider mt-1">{s.l}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── Accroche marketing ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Pourquoi nous choisir
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Investissez dans{" "}
              <span className="text-green-600 dark:text-green-400 italic">votre avenir</span>{" "}
              agricole
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body text-base leading-relaxed mb-6">
              Chaque formation est une porte ouverte vers l'autonomie. Nous ne vous apprenons pas seulement à cultiver — nous vous donnons les clés pour bâtir une activité agricole <strong className="text-stone-800 dark:text-stone-200">rentable, durable et respectueuse de la terre</strong>.
            </p>
            <p className="text-stone-600 dark:text-stone-400 font-body text-base leading-relaxed mb-8">
              Rejoignez les 500 producteurs qui ont déjà transformé leur quotidien grâce à nos programmes terrain.
            </p>

            {/* Avantages */}
            <ul className="space-y-3">
              {avantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-green-600 dark:text-green-400" strokeWidth={3} />
                  </span>
                  <span className="text-stone-700 dark:text-stone-300 font-body text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* Images stacked */}
          <FadeInSection delay={0.2}>
            <div className="relative">
              <img
                src={champs2}
                alt="Formation en champs"
                className="w-full rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Floating mini card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-900 border border-green-100 dark:border-green-900 rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <Star size={18} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-stone-800 dark:text-stone-100 font-bold text-sm font-body">Certifié terrain</p>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-body">+500 diplômés</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Flyer / Annonce ── */}
      <FadeInSection>
        <section className="px-4 pb-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "16/7" }}>
              <img src={flyers} alt="Programmes de formation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950/80 via-green-950/40 to-transparent dark:from-black/85 dark:via-black/40" />
              <div className="absolute inset-0 flex items-center px-10 md:px-16">
                <div className="max-w-lg">
                  <p className="text-green-300 font-body text-xs uppercase tracking-widest mb-3">Prochaine session</p>
                  <h3
                    className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Les inscriptions sont ouvertes !
                  </h3>
                  <p className="text-green-100/80 font-body text-base mb-6">
                    Ne manquez pas notre prochain cycle de formations. Les places sont limitées.
                  </p>
                  <a
                    href="#inscription"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Réserver ma place <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Programmes ── */}
      <section id="programmes" className="py-20 px-4 bg-white/40 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-4 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
                Catalogue
              </span>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Nos programmes
              </h2>
              <p className="text-stone-500 dark:text-stone-400 font-body max-w-xl mx-auto">
                Six formations intensives pour acquérir des compétences concrètes, applicables dès le lendemain.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeInSection key={f.title} delay={i * 0.08}>
                  <div className={`group relative h-full rounded-2xl border ${f.border} ${f.cardBg} bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${f.iconBg}`}>
                        <Icon size={21} className={f.accent} />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-xs font-bold font-body px-2.5 py-1 rounded-full ${f.iconBg} ${f.accent}`}>
                          {f.duree}
                        </span>
                        <span className="text-xs text-stone-500 dark:text-stone-400 font-body bg-stone-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                          {f.niveau}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="font-heading font-bold text-stone-800 dark:text-stone-100 text-lg mb-2 leading-snug"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 font-body text-sm leading-relaxed mb-5">
                      {f.desc}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-body">
                        <Users size={12} />
                        <span>{f.places}</span>
                      </div>
                      <a
                        href="#inscription"
                        className={`inline-flex items-center gap-1 text-xs font-semibold font-body ${f.accent} group-hover:gap-2 transition-all duration-200`}
                      >
                        S'inscrire <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stages ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeInSection delay={0.1}>
            <div className="relative">
              <img
                src={champs3}
                alt="Stage sur le terrain"
                className="w-full rounded-2xl object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-4 shadow-xl text-white text-center">
                <p className="text-2xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>365</p>
                <p className="text-xs font-body uppercase tracking-wider opacity-80">jours / an</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Stages immersifs
            </span>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Vivez l'agriculture{" "}
              <span className="text-green-600 dark:text-green-400 italic">de l'intérieur</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body text-base leading-relaxed mb-8">
              Nous accueillons des stagiaires <strong className="text-stone-800 dark:text-stone-200">tout au long de l'année</strong> pour une immersion pratique et transformatrice au cœur de notre ferme biologique de Bandjoun. Une expérience qui change des vies.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {publics.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 bg-white/60 dark:bg-white/5 border border-green-100 dark:border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-stone-700 dark:text-stone-300 font-body text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Inscription ── */}
      <section id="inscription" className="py-20 px-4 bg-white/40 dark:bg-white/5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* Left pitch */}
          <FadeInSection>
            <span className="inline-block text-green-600 dark:text-green-400 font-body text-xs uppercase tracking-[0.25em] mb-5 border border-green-300 dark:border-green-700 px-3 py-1 rounded-full">
              Inscription
            </span>
            <h2
              className="font-heading text-4xl font-bold text-stone-800 dark:text-stone-100 leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Prêt à changer votre{" "}
              <span className="text-green-600 dark:text-green-400 italic">trajectoire ?</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-body text-base leading-relaxed mb-8">
              Remplissez le formulaire ci-contre et notre équipe vous contactera dans les 24h pour confirmer votre inscription et vous communiquer les détails pratiques.
            </p>
            {/* Mini visual */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img src={champs2} alt="Formation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-body text-sm italic">
                  "La meilleure décision que j'ai prise pour mon avenir agricole."
                </p>
                <p className="text-green-300 text-xs font-body mt-1">— Marie T., productrice formée en 2023</p>
              </div>
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection delay={0.15}>
            <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-green-100 dark:border-white/10 p-8 shadow-xl">
              <h3
                className="font-heading text-xl font-bold text-stone-800 dark:text-stone-100 mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Formulaire d'inscription
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm font-body mb-7">
                Votre demande sera envoyée directement via WhatsApp.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-1.5 font-body">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-1.5 font-body">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jean@exemple.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-1.5 font-body">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-1.5 font-body">
                    Formation souhaitée *
                  </label>
                  <select
                    value={form.formation}
                    onChange={(e) => setForm({ ...form, formation: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Choisir une formation</option>
                    {formations.map((f) => (
                      <option key={f.title} value={f.title}>{f.title} — {f.duree}</option>
                    ))}
                  </select>
                </div>

                {/* Submit via WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-body font-semibold text-sm text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 mt-2"
                  style={{
                    background: sending
                      ? "#6b9e72"
                      : "linear-gradient(135deg, #25d366 0%, #128c3e 100%)",
                  }}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Ouverture de WhatsApp...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      S'inscrire via WhatsApp
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-stone-400 dark:text-stone-500 font-body">
                  Aucune donnée stockée — inscription directe par messagerie.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={champs3} alt="Champs" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/92 to-emerald-800/80 dark:from-black/92 dark:to-green-950/80" />
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
              />
              <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
                <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-5 border border-green-400/30 px-4 py-1.5 rounded-full bg-white/5">
                  Votre avenir commence ici
                </span>
                <h2
                  className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  La terre vous attend.{" "}
                  <span className="text-green-300 italic">Êtes-vous prêt ?</span>
                </h2>
                <p className="text-green-100/75 font-body text-base mb-10 max-w-lg mx-auto">
                  Chaque saison est une nouvelle opportunité. Rejoignez notre communauté d'agriculteurs bio et commencez votre transformation aujourd'hui.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#inscription"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Réserver ma place <ArrowRight size={15} />
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
                    Nous écrire
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