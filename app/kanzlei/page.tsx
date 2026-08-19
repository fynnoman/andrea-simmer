import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import StickyPortraitStory from "@/components/StickyPortraitStory";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Über die Kanzlei",
  description:
    "Andrae & Simmer Rechtsanwälte: Tradition seit 1963, Sozietät mit Weitsicht. Philosophie, Werte, Kanzleigeschichte."
};

const werte = [
  {
    title: "Zuverlässigkeit",
    text: "Termine, Fristen, Zusagen – wir halten Wort. Die verlässlichste Ressource jeder Rechtsberatung."
  },
  {
    title: "Praxisorientierung",
    text: "Juristisch präzise, wirtschaftlich sinnvoll. Wir arbeiten Ergebnisse aus, die im Alltag tragen."
  },
  {
    title: "Kostentransparenz",
    text: "Sie erhalten früh eine überschlägige Einschätzung, oft bereits im Erstgespräch."
  },
  {
    title: "Innovationsbereitschaft",
    text: "Die Nähe zur universitären Lehre hält unsere Beratung auf dem aktuellen Stand."
  }
];

const meilensteine = [
  ["1963", "Gründung durch RA Manfred Holtschmit in Saarbrücken."],
  ["1985", "Erweiterung um steuer- und betriebswirtschaftliche Beratung."],
  ["1993", "Bürogemeinschaft mit RA und Fachanwalt Ernst-Walter Motzheim."],
  ["1997", "Eintritt Volker Simmer als Referendar, später Anwalt."],
  ["2004", "Marion Andrae gründet eigene Kanzlei in Merzig."],
  ["2007", "Volker Simmer wird alleiniger Kanzleiinhaber am Standort Saarbrücken."],
  ["2008", "Fusion zur überörtlichen Sozietät Andrae & Simmer."],
  ["2012", "Zusammenlegung der Standorte Dillingen und Saarbrücken."],
  ["2017", "Umzug ins Medienzentrum, Nell-Breuning-Allee 6."],
  ["2024", "Neue Adresse: Altenkesseler Str. 17, Gebäude C1, Saarbrücken."]
];

export default function KanzleiPage() {
  return (
    <>
      <PageHero
        eyebrow="Über die Kanzlei"
        title={
          <>
            Tradition,
            <br />
            <span className="display-italic text-teal-700">weitergedacht.</span>
          </>
        }
        intro="Die Rechtsanwälte Andrae & Simmer sind eine Sozietät mit zwei Gesellschaftern. In Bürogemeinschaft arbeiten wir mit Herrn Rechtsanwalt Ernst-Walter Motzheim, Fachanwalt für Steuerrecht."
        image={IMG.office}
        imageAlt="Kanzleiräume Andrae & Simmer"
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                Die Suche nach dem Richtigen
              </div>
              <h2 className="mt-4 display text-4xl leading-tight tracking-tight text-ink-800 sm:text-5xl">
                Kompetenz, Qualität,
                <br />
                <span className="display-italic text-teal-700">Vertrauenswürdigkeit.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Auf der Suche nach einem Anwalt findet man einen fast unüberschaubaren Markt. Ziel
                sollte immer sein, eine Sozietät zu wählen, die langjährige Berufserfahrung mit
                regelmäßiger Fortbildung, engagiertem Einsatz und persönlichem Mandantenkontakt
                verbindet.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Genau dies haben sich die Rechtsanwälte Andrae &amp; Simmer{" "}
                <span className="display-italic text-ink-700">„auf die Fahnen geschrieben"</span>.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink-800 shadow-lift">
                <img
                  src={IMG.consult}
                  alt="Beratungssituation in der Kanzlei"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values sticky story */}
      <section className="relative py-24">
        <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Philosophie
            </div>
            <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
              Der Mandant steht
              <br />
              <span className="display-italic text-teal-700">im Zentrum.</span>
            </h2>
          </Reveal>
        </div>

        <StickyPortraitStory
          side="right"
          chapters={[
            {
              eyebrow: "Vertrauen",
              title: (
                <>
                  Die Beziehung
                  <br />
                  <span className="display-italic text-teal-700">trägt das Ergebnis.</span>
                </>
              ),
              body: (
                <>
                  Der Mandant nimmt bei uns die zentrale Rolle ein. Eine Beziehung, die sich durch
                  ein besonderes Vertrauensverhältnis, individuelle und kostentransparente Beratung
                  sowie eine zügige Leistungserbringung auszeichnet.
                </>
              ),
              image: IMG.meeting,
              imageAlt: "Mandantengespräch"
            },
            {
              eyebrow: "Nähe zur Lehre",
              title: (
                <>
                  Aktuelles Wissen
                  <br />
                  <span className="display-italic text-teal-700">aus erster Hand.</span>
                </>
              ),
              body: (
                <>
                  Herr Rechtsanwalt Simmer ist Lehrbeauftragter an der Universität des Saarlandes
                  und Dozent am Saarländischen Anwaltsinstitut. Herr Rechtsanwalt Motzheim ist
                  Dozent an der Wirtschaftsakademie in Blieskastel. Diese Nähe zur Lehre hält
                  unsere Beratung auf dem aktuellen Stand.
                </>
              ),
              image: IMG.library,
              imageAlt: "Bibliothek"
            },
            {
              eyebrow: "Ausbildung",
              title: (
                <>
                  Wissen weitergeben,
                  <br />
                  <span className="display-italic text-teal-700">Wissen verstehen.</span>
                </>
              ),
              body: (
                <>
                  Wir bilden Rechtsanwaltsfachangestellte, Referendarinnen und Referendare aus –
                  und geben regelmäßig Praktikantinnen und Praktikanten Einblick. Wer Wissen
                  vermitteln kann, beherrscht dieses auch und weiß es zu nutzen.
                </>
              ),
              image: IMG.writing,
              imageAlt: "Ausbildung in der Kanzlei"
            }
          ]}
        />
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Grundlagen
            </div>
            <h2 className="mt-4 display text-4xl leading-tight tracking-tight text-ink-800 sm:text-5xl">
              Vier Werte, jede Beratung.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {werte.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="display text-3xl text-ink-800">{w.title}</div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{w.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Big scale-to-bg quote */}
      <ScrollScaleBackground
        src={IMG.handshake}
        alt="Handschlag zwischen Anwalt und Mandant"
        eyebrow="Selbstverständnis"
        title={
          <>
            „Wer Wissen vermitteln kann,
            <br />
            <span className="display-italic text-teal-200">beherrscht dieses auch."</span>
          </>
        }
        intro="Aus- und Fortbildung, Lehre, Praxis – bei uns greift eines ins andere. Das ist der Kern unserer Beratung."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                  Meilensteine
                </div>
                <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
                  Kanzleigeschichte
                  <br />
                  <span className="display-italic text-teal-700">im Saarland.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-500">
                  Von der Gründung 1963 bis zu unserer heutigen Anschrift in der Altenkesseler
                  Straße – ein Überblick der wichtigsten Stationen.
                </p>
              </Reveal>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-teal-500/40 via-ink-700/10 to-transparent sm:left-8" />
              <ul className="space-y-6">
                {meilensteine.map(([year, text], i) => (
                  <Reveal key={year} delay={i * 0.04}>
                    <li className="relative pl-14 sm:pl-20">
                      <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-2xl bg-teal-100 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-200 sm:left-3 sm:h-11 sm:w-11">
                        {year.slice(-2)}
                      </div>
                      <div className="paper-card rounded-2xl p-5">
                        <div className="flex items-baseline gap-3">
                          <span className="display text-2xl text-ink-800">{year}</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-ink-500">{text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
