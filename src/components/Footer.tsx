import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Production", href: "/production" },
  { label: "Formations", href: "/formations" },
  { label: "Galerie", href: "/galerie" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Installation de fermes",
  "Intrants biologiques",
  "Analyse des sols",
  "Formations agricoles",
  "Élevage avicole & cunicole",
  "Kits laitues en sacs",
];

export default function Footer() {
  return (
    <footer className="bg-green-950 dark:bg-[#070f09] text-white relative overflow-hidden">

      {/* Top accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 rounded-xl object-cover border-2 border-green-700/60 group-hover:border-green-400 transition-colors duration-300"
              />
              <div>
                <p
                  className="font-bold text-white text-base leading-tight group-hover:text-green-300 transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Organic Green Lettuce
                </p>
                <p className="text-green-500 text-[10px] font-body uppercase tracking-[0.2em] mt-0.5">by SKY</p>
              </div>
            </Link>

            <p className="text-green-200/60 text-sm font-body leading-relaxed mb-6">
              L'agriculture biologique au service de la vie. Production maraîchère, élevage et formation agricole à Bandjoun, Cameroun.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@organic.green.let8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-green-500/50 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/yanicksimokamdem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/237658809698"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-green-600/30 hover:border-green-500/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href="mailto:yanicksimokamdem@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-emerald-600/30 hover:border-emerald-500/50 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={15} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <span className="w-4 h-0.5 bg-green-500 inline-block" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="group flex items-center gap-2 text-sm text-green-200/60 hover:text-green-300 transition-colors duration-200 font-body"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-green-400 flex-shrink-0"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <span className="w-4 h-0.5 bg-green-500 inline-block" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-green-200/60 font-body">
                  <span className="w-1 h-1 rounded-full bg-green-500/60 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <span className="w-4 h-0.5 bg-green-500 inline-block" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-900/60 border border-green-800/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-green-400" />
                </div>
                <span className="text-sm text-green-200/60 font-body leading-relaxed">
                  Bandjoun Échangeur, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-900/60 border border-green-800/60 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-green-400" />
                </div>
                <a
                  href="tel:+237658809698"
                  className="text-sm text-green-200/60 hover:text-green-300 transition-colors font-body"
                >
                  +237 658 809 698
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-900/60 border border-green-800/60 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-green-400" />
                </div>
                <a
                  href="mailto:yanicksimokamdem@gmail.com"
                  className="text-sm text-green-200/60 hover:text-green-300 transition-colors font-body break-all"
                >
                  yanicksimokamdem@gmail.com
                </a>
              </li>
            </ul>

            {/* Mini CTA */}
            <a
              href="https://wa.me/237658809698"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600/20 border border-green-600/30 text-green-300 font-body text-xs font-semibold hover:bg-green-600/30 transition-colors duration-200 w-fit"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/8 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-200/40 font-body">
            © {new Date().getFullYear()} Organic Green Lettuce by SKY · Bandjoun, Cameroun · Tous droits réservés.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.tiktok.com/@organic.green.let8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-200/40 hover:text-green-400 transition-colors font-body"
            >
              TikTok
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a
              href="https://www.facebook.com/yanicksimokamdem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-200/40 hover:text-green-400 transition-colors font-body"
            >
              Facebook
            </a>
            <span className="w-px h-3 bg-white/10" />
            <Link to="/contact" className="text-xs text-green-200/40 hover:text-green-400 transition-colors font-body">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}