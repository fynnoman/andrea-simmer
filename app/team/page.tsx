import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { TEAM } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Team",
  description:
    "Das Team der Kanzlei Andrae & Simmer: Marion Andrae und Volker Simmer, Rechtsanwälte und Gesellschafter der Sozietät in Saarbrücken."
};

const portraits = [IMG.portraitWoman, IMG.portraitMan];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            Zwei Namen.
            <br />
            <span className="display-italic text-teal-700">Ein Anspruch.</span>
          </>
        }
        intro="Die Sozietät wird von Marion Andrae und Volker Simmer geführt. In Bürogemeinschaft arbeiten wir mit Ernst-Walter Motzheim, Fachanwalt für Steuerrecht."
        image={IMG.meeting}
        imageAlt="Team der Kanzlei Andrae & Simmer"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <GlassCard variant="lift" className="overflow-hidden p-0">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
                    <Image
                      src={portraits[i]}
                      alt={`Portrait ${m.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                        {m.role}
                      </div>
                      <div className="mt-2 display text-4xl leading-tight text-white sm:text-5xl">
                        {m.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-7 sm:p-9">
                    <p className="text-sm leading-relaxed text-ink-500">{m.bio}</p>
                    <div className="mt-6">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Schwerpunkte
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.focus.map((f) => (
                          <span key={f} className="chip">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <Reveal>
            <GlassCard className="grid gap-8 p-8 sm:grid-cols-[1fr_2fr] sm:p-12">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ink-800">
                <Image
                  src={IMG.portraitElder}
                  alt="Portrait Ernst-Walter Motzheim"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                  Bürogemeinschaft
                </div>
                <h3 className="mt-3 display text-3xl leading-tight text-ink-800 sm:text-4xl">
                  Ernst-Walter Motzheim
                </h3>
                <div className="mt-1 text-sm text-ink-500">
                  Rechtsanwalt · Fachanwalt für Steuerrecht
                </div>
                <p className="mt-4 text-ink-500">
                  In Bürogemeinschaft mit unserer Sozietät. Dozent an der Wirtschaftsakademie in
                  Blieskastel; Spezialgebiet Autohausrecht. Ergänzt unser Team um
                  steuerrechtliche Expertise auf Fachanwaltsniveau.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
