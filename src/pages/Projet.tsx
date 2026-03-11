import { FadeInSection } from "@/components/AnimationUtils";
import { Link } from "react-router-dom";
import { Home, Building2, School, UtensilsCrossed, TreePine, ArrowRight } from "lucide-react";
import kitImg from "@/assets/kit-laitue.jpg";

const usages = [
  { icon: Home, label: "Maisons & Balcons" },
  { icon: Building2, label: "Jardins urbains" },
  { icon: School, label: "Écoles" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: TreePine, label: "Espaces verts" },
];

const objectifs = [
  "Encourager l'agriculture urbaine au Cameroun",
  "Promouvoir la consommation de légumes sains et locaux",
  "Créer des opportunités économiques pour les jeunes",
  "Rendre l'agriculture accessible à tous, même en ville",
];

export default function Projet() {
  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={kitImg} alt="Projet Organic Green Lettuce" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth-night/60" />
        <div className="relative container-custom z-10">
          <FadeInSection>
            <p className="text-earth-beige/80 font-body text-sm uppercase tracking-[0.3em] mb-3">Projet innovant</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-beige max-w-2xl">
              Projet Organic Green Lettuce
            </h1>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Le concept</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Des kits de culture de laitues en sacs
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Le projet Organic Green Lettuce permet à chacun de cultiver ses propres laitues biologiques chez soi, grâce à des kits de culture complets en sacs. Simple, accessible et productif.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Chaque kit contient le substrat biologique, les semences, les intrants naturels et un guide de culture détaillé pour réussir sa production, même sans expérience.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <img src={kitImg} alt="Kit de laitues" className="w-full rounded-sm object-cover aspect-square" />
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">Utilisation</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Pour tous les espaces</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {usages.map((u, i) => (
              <FadeInSection key={u.label} delay={i * 0.08}>
                <div className="card-earth text-center">
                  <u.icon size={32} className="text-primary mx-auto mb-3" />
                  <p className="text-sm font-body font-medium text-foreground">{u.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom max-w-2xl text-center">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold mb-8 text-earth-beige">Nos objectifs</h2>
            <ul className="space-y-4 text-left max-w-lg mx-auto">
              {objectifs.map((o) => (
                <li key={o} className="flex items-start gap-3 font-body text-sm text-earth-beige">
                  <div className="w-2 h-2 rounded-full bg-earth-beige flex-shrink-0 mt-1.5" />
                  {o}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-earth-beige text-earth-green-dark font-body font-semibold text-sm hover:bg-earth-beige/90 transition-colors">
              Commander un kit <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
