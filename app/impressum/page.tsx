import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { KANZLEI } from "@/lib/data";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={<>Impressum</>} />
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <Reveal>
            <GlassCard className="p-8 sm:p-10">
              <div className="space-y-6 text-sm leading-relaxed text-ink-500">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Kanzlei
                  </div>
                  <div className="mt-2 text-ink-800">{KANZLEI.fullName}</div>
                  <div>{KANZLEI.address.street}</div>
                  <div>
                    {KANZLEI.address.zip} {KANZLEI.address.city}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Kontakt
                  </div>
                  <div className="mt-2">Telefon: {KANZLEI.phone}</div>
                  <div>Fax: {KANZLEI.fax}</div>
                  <div>E-Mail: {KANZLEI.email}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Vertretungsberechtigte Gesellschafter
                  </div>
                  <div className="mt-2">Rechtsanwältin Marion Andrae</div>
                  <div>Rechtsanwalt Volker Simmer</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Berufsbezeichnung & berufsrechtliche Regelungen
                  </div>
                  <p className="mt-2">
                    Rechtsanwältin / Rechtsanwalt (Bundesrepublik Deutschland). Die
                    berufsrechtlichen Regelungen (Bundesrechtsanwaltsordnung, Berufsordnung für
                    Rechtsanwälte, Fachanwaltsordnung, Rechtsanwaltsvergütungsgesetz) sind
                    einsehbar unter www.brak.de.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Zuständige Kammer
                  </div>
                  <p className="mt-2">Rechtsanwaltskammer des Saarlandes, Saarbrücken.</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
