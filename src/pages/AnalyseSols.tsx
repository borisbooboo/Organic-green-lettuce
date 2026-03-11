import { FadeInSection } from "@/components/AnimationUtils";
import { Search, Beaker, Leaf } from "lucide-react";
import soilImg from "@/assets/soil-analysis.jpg";

const services = [
  { icon: Search, title: "Diagnostic de fertilité des sols", desc: "Évaluation complète de la qualité et de la fertilité de vos sols pour orienter vos choix culturaux." },
  { icon: Beaker, title: "Analyse nutritionnelle des cultures", desc: "Détection des carences et excès nutritionnels pour optimiser la santé et le rendement de vos plantes." },
  { icon: Leaf, title: "Recommandations en fertilisation biologique", desc: "Plans de fertilisation personnalisés utilisant exclusivement des intrants naturels et biologiques." },
];

export default function AnalyseSols() {
  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={soilImg} alt="Analyse des sols" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth-night/60" />
        <div className="relative container-custom z-10">
          <FadeInSection>
            <p className="text-earth-beige/80 font-body text-sm uppercase tracking-[0.3em] mb-3">Analyse</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-beige max-w-2xl">
              Analyse des sols
            </h1>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Comprendre votre sol</h2>
              <p className="text-muted-foreground font-body">Un sol sain est la base d'une agriculture productive. Nos services d'analyse vous aident à comprendre et améliorer la qualité de vos terres.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.1}>
                <div className="card-earth h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <img src={soilImg} alt="Analyse en laboratoire" className="w-full rounded-sm object-cover aspect-[4/3]" />
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Orientation des cultures</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              En fonction des résultats de l'analyse, nous vous orientons vers les cultures les plus adaptées à votre sol et à votre climat. Chaque recommandation est personnalisée pour maximiser vos rendements.
            </p>
            <ul className="space-y-3">
              {["Choix des variétés adaptées", "Planning de rotation des cultures", "Calendrier de fertilisation", "Suivi de l'évolution du sol"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground font-body">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
