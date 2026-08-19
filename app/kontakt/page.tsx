import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { Phone, Mail, MapPin, Printer, ArrowUpRight } from "lucide-react";
import { KANZLEI } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Kanzlei Andrae & Simmer. Telefon 0681/38943-0. Altenkesseler Str. 17, Gebäude C1, 66115 Saarbrücken."
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Ein Anruf.
            <br />
            <span className="display-italic text-teal-700">Ein Termin.</span>
          </>
        }
        intro="Erreichen Sie uns nach Terminabsprache persönlich, per Telefon oder E-Mail. Im Erstgespräch klären wir Ihr Anliegen und den Kostenrahmen."
        image={IMG.office}
        imageAlt="Kanzleiräume"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="grid gap-3">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="mt-1 text-teal-700" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Adresse
                      </div>
                      <div className="mt-1 text-lg text-ink-800">
                        {KANZLEI.address.street}
                        <br />
                        {KANZLEI.address.zip} {KANZLEI.address.city}
                      </div>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="mt-1 text-teal-700" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Telefon
                      </div>
                      <a
                        href={`tel:${KANZLEI.phoneRaw}`}
                        className="mt-1 block text-lg text-ink-800 hover:text-teal-700"
                      >
                        {KANZLEI.phone}
                      </a>
                      <div className="text-sm text-ink-500">Termine nach Vereinbarung</div>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Printer size={20} className="mt-1 text-teal-700" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Fax
                      </div>
                      <div className="mt-1 text-lg text-ink-800">{KANZLEI.fax}</div>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="mt-1 text-teal-700" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        E-Mail
                      </div>
                      <a
                        href={`mailto:${KANZLEI.email}`}
                        className="mt-1 block text-lg text-ink-800 hover:text-teal-700"
                      >
                        {KANZLEI.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard variant="lift" className="relative overflow-hidden p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                  Anfrage
                </div>
                <h2 className="mt-3 display text-3xl leading-tight text-ink-800 sm:text-4xl">
                  Ihr Anliegen kurz umrissen.
                </h2>
                <p className="mt-3 text-ink-500">
                  Beschreiben Sie uns Ihr Thema in ein bis zwei Sätzen. Wir melden uns zeitnah für
                  einen Termin zurück.
                </p>

                <form
                  className="mt-8 grid gap-4"
                  action={`mailto:${KANZLEI.email}`}
                  method="post"
                  encType="text/plain"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Name
                      </span>
                      <input
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white/80 px-4 py-3 text-sm text-ink-800 outline-none transition placeholder:text-ink-500/60 focus:border-teal-500/60 focus:bg-white"
                        placeholder="Vor- und Nachname"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                        E-Mail
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white/80 px-4 py-3 text-sm text-ink-800 outline-none transition placeholder:text-ink-500/60 focus:border-teal-500/60 focus:bg-white"
                        placeholder="name@domain.de"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Thema
                    </span>
                    <input
                      name="thema"
                      className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white/80 px-4 py-3 text-sm text-ink-800 outline-none transition placeholder:text-ink-500/60 focus:border-teal-500/60 focus:bg-white"
                      placeholder="z. B. Verkehrsunfall, Kündigung, Vertragsprüfung"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Nachricht
                    </span>
                    <textarea
                      name="nachricht"
                      rows={4}
                      className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white/80 px-4 py-3 text-sm text-ink-800 outline-none transition placeholder:text-ink-500/60 focus:border-teal-500/60 focus:bg-white"
                      placeholder="Ihr Anliegen in ein bis zwei Sätzen"
                    />
                  </label>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink-800 px-6 py-3.5 text-sm font-semibold text-paper-50 transition hover:bg-teal-700"
                  >
                    Nachricht senden
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                  <p className="text-[11px] leading-relaxed text-ink-500">
                    Das Formular öffnet Ihr E-Mail-Programm mit den eingegebenen Angaben. Ein
                    Mandatsverhältnis entsteht erst mit ausdrücklicher Bestätigung.
                  </p>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
