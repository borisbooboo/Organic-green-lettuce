import { FadeInSection } from "@/components/AnimationUtils";
import { FlaskConical, Droplets } from "lucide-react";
import compostImg from "@/assets/compost.jpg";

const solides = [
  { title: "Compost rapide (21 jours)", desc: "Un compost mûr en seulement 21 jours grâce à notre technique accélérée. Enrichit rapidement les sols appauvris." },
  { title: "Super compost biologique", desc: "Compost enrichi en micro-organismes bénéfiques pour une fertilisation longue durée et un sol vivant." },
  { title: "Vermicompost", desc: "Compost produit par les vers de terre, extrêmement riche en nutriments et en micro-organismes essentiels." },
];

const liquides = [
  { title: "EM Indien", desc: "Micro-organismes efficaces d'origine indienne pour améliorer la structure du sol et stimuler la vie microbienne." },
  { title: "EM Agriculture", desc: "Solution biologique spécialement formulée pour les cultures maraîchères et les grandes exploitations." },
  { title: "EM Élevage", desc: "Micro-organismes adaptés à la santé animale, pour améliorer l'hygiène et la productivité du cheptel." },
  { title: "Purin de citronnier concentré", desc: "Répulsif naturel et stimulant de croissance à base d'extraits de citronnier. Renforce les défenses des plantes." },
];

export default function Intrants() {
  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={compostImg} alt="Intrants agricoles" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth-night/60" />
        <div className="relative container-custom z-10">
          <FadeInSection>
            <p className="text-earth-beige/80 font-body text-sm uppercase tracking-[0.3em] mb-3">Intrants</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-beige max-w-2xl">
              Intrants agricoles biologiques
            </h1>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                <FlaskConical size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Intrants solides</h2>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6">
            {solides.map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.1}>
                <div className="card-earth h-full">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                <Droplets size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Intrants liquides</h2>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-6">
            {liquides.map((l, i) => (
              <FadeInSection key={l.title} delay={i * 0.1}>
                <div className="card-earth h-full">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{l.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{l.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center max-w-2xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold mb-4 text-earth-beige">Avantages de nos intrants</h2>
            <ul className="space-y-3 text-left max-w-lg mx-auto">
              {[
                "Améliorent la fertilité et la structure des sols",
                "Renforcent les défenses naturelles des plantes",
                "100% biologiques et sans danger pour l'environnement",
                "Augmentent les rendements de manière durable",
              ].map((a) => (
                <li key={a} className="flex items-center gap-3 font-body text-sm text-earth-beige">
                  <div className="w-2 h-2 rounded-full bg-earth-beige flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
