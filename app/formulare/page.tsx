import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { Download, FileText, Info } from "lucide-react";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Formulare",
  description:
    "Formulare der Kanzlei Andrae & Simmer zum Download: Vollmachten, Schweigepflichtsentbindung, Unfallregulierung."
};

const formulare = [
  { title: "Außergerichtliche Vollmacht", version: "08/2024", href: "#" },
  { title: "Prozessvollmacht", version: "08/2024", href: "#" },
  { title: "Strafprozessvollmacht", version: "08/2024 · auch für Ordnungswidrigkeiten", href: "#" },
  { title: "Erklärung zur Entbindung von der Schweigepflicht", version: "08/2024", href: "#" },
  { title: "Formulare Unfallregulierung", version: "Aktuell", href: "#" }
];

export default function FormularePage() {
  return (
    <>
      <PageHero
        eyebrow="Formulare"
        title={
          <>
            Alles direkt
            <br />
            <span className="display-italic text-teal-700">zum Download.</span>
          </>
        }
        intro="Vollmachten, Schweigepflichtsentbindung, Unfallregulierung – am Bildschirm ausfüllbar oder ausdruckbar. Bitte den Adobe Reader nutzen."
        image={IMG.writing}
        imageAlt="Formulare"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="grid gap-3">
            {formulare.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <a
                  href={f.href}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-ink-700/10 bg-white/70 p-5 transition hover:border-teal-500/40 hover:bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                      <FileText className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <div>
                      <div className="display text-lg text-ink-800">{f.title}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-teal-700">
                        {f.version}
                      </div>
                    </div>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 rounded-full border border-teal-500/30 bg-teal-100 px-4 py-2 text-xs font-medium text-teal-700 sm:flex">
                    <Download size={14} /> Download
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal>
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                  <Info className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <div className="text-sm leading-relaxed text-ink-500">
                  <p>
                    Die Formulare sind größtenteils am Bildschirm ausfüllbar (PDF-Formular).
                    Benutzen Sie zum Öffnen bitte nicht das Web-Plug-In des Browsers, sondern eine
                    lokal installierte Version des Adobe Reader.
                  </p>
                  <p className="mt-4">
                    Bei Vollmachten benötigen wir in der Regel den Namen der Mandantschaft, den
                    Namen des Gegners bzw. die Bezeichnung der Behörde sowie eine Bezeichnung der
                    Sache. Bitte auch Ort und Datum der Unterschrift angeben.
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
