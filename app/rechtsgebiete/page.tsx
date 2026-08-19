import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import RechtsgebietIcon from "@/components/RechtsgebietIcon";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import { RECHTSGEBIETE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Rechtsgebiete",
  description:
    "Rechtsgebiete der Kanzlei Andrae & Simmer: Arbeitsrecht, Verkehrsrecht, Vertragsrecht, Familien- und Erbrecht, Autohausrecht, Rechtsfragen rund ums Pferd u.v.m."
};

const specials = RECHTSGEBIETE.filter((r) =>
  ["autohausrecht", "pferderecht"].includes(r.slug)
);

export default function RechtsgebietePage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtsgebiete"
        title={
          <>
            Ein Anwaltsbüro.
            <br />
            <span className="display-italic text-teal-700">Fast jedes Feld.</span>
          </>
        }
        intro="Wir beraten in nahezu allen Gebieten des Zivilrechts sowie des Straf- und Ordnungswidrigkeitenrechts – offline wie online. Zwei Rechtsfelder sind unsere Spezialgebiete."
        image={IMG.papers}
        imageAlt="Rechtsakten"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="display text-3xl text-ink-800 sm:text-4xl">Spezialgebiete</h2>
              <span className="text-[10px] uppercase tracking-[0.24em] text-teal-700">
                Besondere Expertise
              </span>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {specials.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.1}>
                <GlassCard variant="lift" className="relative h-full overflow-hidden p-8 sm:p-10">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
                  <div className="flex items-start gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                      <RechtsgebietIcon name={r.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-teal-700">
                        Spezialgebiet
                      </div>
                      <h3 className="mt-1 display text-3xl leading-tight text-ink-800">
                        {r.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-6 text-ink-500">{r.intro}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {r.bullets.map((b) => (
                      <span key={b} className="chip">{b}</span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollScaleBackground
        src={IMG.consult}
        alt="Beratung in der Kanzlei"
        eyebrow="Zivil · Wirtschaft · Straf"
        title={
          <>
            Ein Rechtsleben.
            <br />
            <span className="display-italic text-teal-200">Eine Kanzlei.</span>
          </>
        }
        intro="Kaufrecht, Miete, Arbeit, Familie, Erben, Verkehr, Steuern, Verträge im Netz — wir bündeln, was zusammengehört. Und verweisen dort, wo Spezialisierung wichtiger ist."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="display text-3xl text-ink-800 sm:text-4xl">Alle Rechtsgebiete</h2>
              <span className="text-[10px] uppercase tracking-[0.24em] text-teal-700">
                {RECHTSGEBIETE.length} Felder
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RECHTSGEBIETE.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 6) * 0.04}>
                <div id={r.slug} className="scroll-mt-28">
                  <GlassCard className="h-full p-6">
                    <div className="flex h-full flex-col">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                        <RechtsgebietIcon name={r.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 display text-xl leading-tight text-ink-800">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{r.intro}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {r.bullets.slice(0, 3).map((b) => (
                          <li
                            key={b}
                            className="rounded-full border border-ink-700/10 bg-white/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-500"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <Reveal>
            <p className="text-ink-500">
              Ihr Thema ist nicht dabei? Sprechen Sie uns an – wir prüfen gerne, ob wir das Mandat
              übernehmen oder an eine spezialisierte Kollegin, einen spezialisierten Kollegen
              verweisen.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
