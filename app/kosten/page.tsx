import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { Shield, Scale, Coins, CircleDollarSign } from "lucide-react";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Kosten & Honorare",
  description:
    "Transparente Kosten und Honorare bei Andrae & Simmer. Gebühren nach RVG und Gegenstandswert, Rechtsschutzabwicklung, Kostenvoranschlag im Erstgespräch."
};

const cards = [
  {
    icon: Shield,
    title: "Rechtsschutzversichert?",
    text: "Sind Sie rechtsschutzversichert, übernimmt Ihre Versicherung in der Regel unsere Kosten. Wir klären die Deckung direkt mit dem Versicherer ab."
  },
  {
    icon: Scale,
    title: "Prozessgewinn",
    text: "Gewinnen Sie mit uns einen Prozess, trägt die Gegenseite in der Regel die Ihnen entstandenen Kosten."
  },
  {
    icon: Coins,
    title: "Vertragsberatung",
    text: "Vor wichtigen Verträgen zu beraten, erspart häufig Kosten und Ärger und gibt Ihnen die Sicherheit eines ausgewogenen Ergebnisses."
  },
  {
    icon: CircleDollarSign,
    title: "Aussichtslose Prozesse",
    text: "Können wir einen aussichtslosen Prozess vermeiden, liegt Ihr Vorteil auf der Hand – auch ohne Verfahren."
  }
];

export default function KostenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kosten · Honorare"
        title={
          <>
            Klare Kosten,
            <br />
            <span className="display-italic text-teal-700">klare Sprache.</span>
          </>
        }
        intro="Nur ein Rechtsanwalt ist gesetzlich verpflichtet, unnötige Kostenrisiken für seine Mandantschaft zu vermeiden und entsprechend zu beraten. Wir nehmen diese Pflicht sehr ernst."
        image={IMG.papers}
        imageAlt="Vertragsunterlagen"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                    <c.icon className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 display text-xl text-ink-800">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal>
            <GlassCard variant="lift" className="relative overflow-hidden p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                Kostenvoranschlag
              </div>
              <h2 className="mt-4 display text-3xl leading-tight text-ink-800 sm:text-4xl">
                Fragen Sie uns direkt.
              </h2>
              <p className="mt-4 text-ink-500">
                In aller Regel können wir bereits im ersten Beratungsgespräch überschlägig darlegen,
                welche Kosten und welches Kostenrisiko auf Sie zukommen. Gerne unterbreiten wir
                Ihnen vor Mandatsaufnahme einen{" "}
                <span className="display-italic text-ink-700">„Kostenvoranschlag"</span>.
              </p>
              <div className="mt-8 rounded-2xl border border-ink-700/10 bg-paper-50 p-5 text-xs leading-relaxed text-ink-500">
                <span className="font-semibold uppercase tracking-[0.24em] text-teal-700">
                  § 49 b Abs. 5 BRAO
                </span>
                <p className="mt-2">
                  Gemäß § 49 b Abs. 5 der Bundesrechtsanwaltsordnung sind wir verpflichtet darauf
                  hinzuweisen, dass sich die von uns zu erhebenden Gebühren in aller Regel nach dem
                  Gegenstandswert richten.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
