import { FadeInSection } from "@/components/AnimationUtils";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", sujet: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleWhatsApp = () => {
    const { nom, email, tel, sujet, message } = form;
    if (!nom || !message) {
      alert("Veuillez renseigner au minimum votre nom et votre message.");
      return;
    }
    setSending(true);
    const text = [
      `👋 *Nouveau message depuis le site*`,
      ``,
      `👤 *Nom :* ${nom}`,
      email ? `📧 *Email :* ${email}` : null,
      tel ? `📞 *Tél :* ${tel}` : null,
      sujet ? `📌 *Sujet :* ${sujet}` : null,
      ``,
      `💬 *Message :*`,
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const encoded = encodeURIComponent(text);
    setTimeout(() => {
      setSending(false);
      window.open(`https://wa.me/237658809698?text=${encoded}`, "_blank");
    }, 600);
  };

  const inputClass = [
    "w-full px-5 py-3.5 rounded-lg text-sm font-body transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400",
    "hover:shadow-md",
    // light
    "bg-white/60 border border-green-200 text-stone-800 placeholder:text-stone-400",
    "hover:border-green-300 shadow-sm",
    // dark
    "dark:bg-white/5 dark:border-white/10 dark:text-stone-100 dark:placeholder:text-stone-500",
    "dark:hover:border-green-600/50 dark:focus:border-green-500",
  ].join(" ");

  return (
    <main className="pt-20 bg-[#f7f5f0] dark:bg-[#0d1a10] min-h-screen transition-colors duration-300">

      {/* ── Hero banner with background image ── */}
      <section className="relative overflow-hidden py-28 px-6">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Overlay — deeper in dark mode */}
        <div className="absolute inset-0 bg-green-950/70 dark:bg-black/80" />

        {/* Glow blobs */}
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <span className="inline-block text-green-300 font-body text-xs uppercase tracking-[0.35em] mb-4 border border-green-400/40 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/5">
            Contactez-nous
          </span>
          <h1
            className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Parlons de votre{" "}
            <span className="text-green-300 italic">projet</span>
          </h1>
          <p className="text-green-100/80 font-body text-base md:text-lg leading-relaxed">
            Que vous soyez agriculteur, distributeur ou simple curieux — nous sommes là pour vous.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-green-100 dark:border-white/10 p-8 md:p-10 transition-colors duration-300">
                <h2
                  className="font-heading text-2xl font-bold text-stone-800 dark:text-stone-100 mb-1"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Envoyez-nous un message
                </h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm font-body mb-7">
                  Remplissez le formulaire ci-dessous. Votre message sera envoyé directement via WhatsApp.
                </p>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                        Sujet
                      </label>
                      <input
                        type="text"
                        placeholder="Commande, partenariat..."
                        value={form.sujet}
                        onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-1.5 font-body">
                      Message *
                    </label>
                    <textarea
                      placeholder="Décrivez votre projet ou posez vos questions..."
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* WhatsApp button */}
                  <button
                    onClick={handleWhatsApp}
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-body font-semibold text-sm text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
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
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Envoyer via WhatsApp
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 dark:text-stone-500 font-body">
                    Votre message s'ouvrira dans WhatsApp — aucune donnée n'est stockée.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Info cards ── */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: <MapPin size={18} className="text-green-600 dark:text-green-400" />,
                  label: "Notre adresse",
                  content: "Bandjoun Échangeur, Cameroun",
                  href: null,
                },
                {
                  icon: <Phone size={18} className="text-green-600 dark:text-green-400" />,
                  label: "Téléphone",
                  content: "+237 658 809 698",
                  href: "tel:+237658809698",
                },
                {
                  icon: <Mail size={18} className="text-green-600 dark:text-green-400" />,
                  label: "Email",
                  content: "yanicksimokamdem@gmail.com",
                  href: "mailto:yanicksimokamdem@gmail.com",
                },
              ].map(({ icon, label, content, href }) => (
                <div
                  key={label}
                  className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-xl border border-green-100 dark:border-white/10 p-5 shadow-sm hover:shadow-md hover:border-green-200 dark:hover:border-green-700/50 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-900/40 border border-green-100 dark:border-green-800/50 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider font-body mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-stone-700 dark:text-stone-300 font-body hover:text-green-700 dark:hover:text-green-400 transition-colors break-all"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-sm text-stone-700 dark:text-stone-300 font-body">{content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* TikTok card */}
              <a
                href="https://www.tiktok.com/@organic.green.let8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 rounded-xl border border-stone-700 dark:border-stone-800 p-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-200 block group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-body mb-0.5">TikTok</p>
                    <p className="text-sm text-white font-body group-hover:text-green-300 transition-colors">
                      @organic.green.let8
                    </p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-stone-500 group-hover:text-green-400 transition-colors" />
                </div>
              </a>

              {/* Facebook card */}
              <a
                href="https://www.facebook.com/yanicksimokamdem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-700 to-blue-600 dark:from-blue-900 dark:to-blue-800 rounded-xl border border-blue-500/40 dark:border-blue-700/50 p-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-200 block group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider font-body mb-0.5">Facebook</p>
                    <p className="text-sm text-white font-body group-hover:text-blue-200 transition-colors">
                      Yannick Simokamdem
                    </p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-blue-300/60 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Hours */}
              <div className="bg-green-800/10 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/40 p-5">
                <p className="text-xs font-semibold text-green-800 dark:text-green-400 uppercase tracking-wider font-body mb-3">
                  Disponibilités
                </p>
                <div className="space-y-2 text-sm font-body text-stone-600 dark:text-stone-400">
                  <div className="flex justify-between">
                    <span>Lun – Ven</span>
                    <span className="text-green-700 dark:text-green-400 font-medium">7h00 – 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-green-700 dark:text-green-400 font-medium">8h00 – 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-stone-400 dark:text-stone-600">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Google Maps ── */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-2xl shadow-xl border border-green-100 dark:border-white/10">
              <iframe
                title="Localisation Organic Green Lettuce"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.032!2d10.41!3d5.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f9e5f3e8a2a1%3A0x0!2sBandjoun%2C+Cameroun!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}