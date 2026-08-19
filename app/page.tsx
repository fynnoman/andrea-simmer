import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, Sparkles } from "lucide-react";

import HeroHome from "@/components/HeroHome";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import RechtsgebietIcon from "@/components/RechtsgebietIcon";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import StickyPortraitStory from "@/components/StickyPortraitStory";
import ParallaxImage from "@/components/ParallaxImage";
import { RECHTSGEBIETE, TEAM, KANZLEI } from "@/lib/data";
import { IMG } from "@/lib/images";

const featured = RECHTSGEBIETE.slice(0, 8);

const marqueeItems = [
  "Kanzleitradition seit 1963",
  "Autohausrecht",
  "Rechtsfragen rund ums Pferd",
  "Lehrauftrag Universität des Saarlandes",
  "Vertragsrecht mit Weitsicht",
  "Diskrete Beratung",
  "Wirtschaft · Zivil · Straf",
  "Andrae & Simmer · Saarbrücken"
];

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Marquee band */}
      <section className="relative border-y border-ink-700/8 bg-paper-100/70 py-8 backdrop-blur">
        <Marquee duration={45}>
          {marqueeItems.map((t) => (
            <div
              key={t}
              className="flex items-center gap-6 display text-2xl tracking-tight text-ink-500"
            >
              <span>{t}</span>
              <Sparkles size={16} className="text-teal-600" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Rechtsgebiete Section */}
      <section id="rechtsgebiete" className="relative py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                Rechtsgebiete
              </div>
              <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
                Ein Ansprechpartner.
                <br />
                <span className="display-italic text-teal-700">Viele Rechtsgebiete.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink-500">
                Von der ersten Beratung bis zur letzten Instanz begleiten wir Mandantinnen und
                Mandanten in fast allen Feldern des Zivil- und Strafrechts – online wie offline.
                Zwei Rechtsgebiete zählen zu unseren Spezialgebieten und werden weit über das
                Saarland hinaus nachgefragt.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <Link href={`/rechtsgebiete#${r.slug}`}>
                  <GlassCard className="h-full p-6">
                    <div className="flex h-full flex-col">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                        <RechtsgebietIcon name={r.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 display text-xl leading-tight text-ink-700">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{r.intro}</p>
                      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 opacity-70 transition group-hover:opacity-100">
                        Mehr erfahren <ArrowRight size={13} />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/rechtsgebiete"
                className="inline-flex items-center gap-2 rounded-full border border-ink-700/12 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink-700 backdrop-blur transition hover:bg-white"
              >
                Alle {RECHTSGEBIETE.length} Rechtsgebiete
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==== Scroll-Scale-to-Background: Signature Moment ==== */}
      <ScrollScaleBackground
        src={IMG.meeting}
        alt="Beratung in der Kanzlei"
        eyebrow="Beratung"
        title={
          <>
            Zuhören,
            <br />
            <span className="display-italic text-teal-200">bevor wir schreiben.</span>
          </>
        }
        intro="Bei uns beginnt jedes Mandat mit einem Gespräch, nicht mit einem Formular. Wir nehmen uns die Zeit, Ihr Anliegen zu verstehen — und geben Ihnen früh eine Einschätzung zum weiteren Vorgehen und zu den zu erwartenden Kosten."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-800 shadow-lg transition hover:bg-teal-100"
          >
            Termin anfragen <ArrowUpRight size={15} />
          </Link>
          <Link
            href="/kanzlei"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Über die Kanzlei
          </Link>
        </div>
      </ScrollScaleBackground>

      {/* ==== Sticky Portrait Story: Team & Werte ==== */}
      <section className="relative py-24">
        <div className="mx-auto mb-16 max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Menschen
            </div>
            <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
              Zwei Sozietätsinhaber,
              <br />
              <span className="display-italic text-teal-700">eine Handschrift.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
              Marion Andrae und Volker Simmer führen die Kanzlei gemeinsam. Zwei
              Persönlichkeiten, zwei Schwerpunkte, ein Anspruch: exzellente Beratung mit Zeit für
              den Menschen dahinter.
            </p>
          </Reveal>
        </div>

        <StickyPortraitStory
          side="left"
          chapters={[
            {
              eyebrow: "Marion Andrae",
              title: (
                <>
                  Praxisnah,
                  <br />
                  <span className="display-italic text-teal-700">präzise, persönlich.</span>
                </>
              ),
              body: (
                <>
                  Seit 1997 als Rechtsanwältin tätig – mit Stationen in Zweibrücken und Merzig.
                  2004 in die Selbstständigkeit, 2008 Fusion zur heutigen Sozietät. Ihre
                  Schwerpunkte liegen im Familien-, Miet- und Erbrecht sowie in einem
                  bundesweit gefragten Spezialgebiet: Rechtsfragen rund ums Pferd.
                </>
              ),
              image: IMG.portraitWoman,
              imageAlt: "Portrait Marion Andrae",
              meta: (
                <>
                  <span className="chip">Familien- & Erbrecht</span>
                  <span className="chip">Mietrecht</span>
                  <span className="chip">Pferderecht</span>
                </>
              )
            },
            {
              eyebrow: "Volker Simmer",
              title: (
                <>
                  Wirtschaft, Vertrag,
                  <br />
                  <span className="display-italic text-teal-700">Verantwortung.</span>
                </>
              ),
              body: (
                <>
                  Lehrbeauftragter an der Universität des Saarlandes seit nahezu 30 Jahren.
                  Übernahm die Traditionskanzlei am Standort Saarbrücken und verantwortet heute
                  die Sozietät gemeinsam mit Frau Andrae. Sein Fokus: Handels- und
                  Gesellschaftsrecht sowie das Autohausrecht.
                </>
              ),
              image: IMG.portraitMan,
              imageAlt: "Portrait Volker Simmer",
              meta: (
                <>
                  <span className="chip">Autohausrecht</span>
                  <span className="chip">Handels- & Gesellschaftsrecht</span>
                  <span className="chip">Vertragsrecht</span>
                </>
              )
            },
            {
              eyebrow: "Bürogemeinschaft",
              title: (
                <>
                  Steuerrechtliche Tiefe,
                  <br />
                  <span className="display-italic text-teal-700">unter einem Dach.</span>
                </>
              ),
              body: (
                <>
                  In Bürogemeinschaft mit Rechtsanwalt Ernst-Walter Motzheim, Fachanwalt für
                  Steuerrecht. Damit bündeln wir zivil- und wirtschaftsrechtliche Beratung mit
                  fachanwaltlicher Steuerexpertise – kurze Wege, ein Ansprechpartner.
                </>
              ),
              image: IMG.consult,
              imageAlt: "Bürogemeinschaft in der Beratung",
              meta: (
                <>
                  <span className="chip">Fachanwalt für Steuerrecht</span>
                  <span className="chip">Autohausrecht</span>
                </>
              )
            }
          ]}
        />
      </section>

      {/* Kennzahlen */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "1963", v: "Kanzleitradition seit" },
              { k: "17+", v: "Rechtsgebiete" },
              { k: "30", v: "Jahre Lehrauftrag Uni Saar" },
              { k: "1:1", v: "Persönliche Beratung" }
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 0.06}>
                <GlassCard variant="paper" className="p-8">
                  <div className="display text-5xl leading-none text-ink-800">{s.k}</div>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-teal-700">
                    {s.v}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==== Second Scroll-Scale-to-Background: History ==== */}
      <ScrollScaleBackground
        src={IMG.library}
        alt="Bibliothek der Kanzlei"
        eyebrow="Tradition"
        title={
          <>
            Sechs Jahrzehnte
            <br />
            <span className="display-italic text-teal-200">Kanzleigeschichte.</span>
          </>
        }
        intro="1963 gegründet. Über Standorte am Stiefel, in Merzig, Dillingen, an der Christ-König-Kirche und im Medienzentrum bis heute in die Altenkesseler Straße – dieselbe Sorgfalt, dieselbe Handschrift."
      />

      {/* Sticky Timeline */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                  Meilensteine
                </div>
                <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
                  Tradition,
                  <br />
                  <span className="display-italic text-teal-700">weitergedacht.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-500">
                  Die wichtigsten Stationen der Kanzlei – vom kleinen Büro am Stiefel bis zur
                  überörtlichen Sozietät im Herzen Saarbrückens.
                </p>
              </Reveal>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-teal-500/40 via-ink-700/10 to-transparent sm:left-8" />
              <ul className="space-y-6">
                {[
                  { year: "1963", title: "Gründung am Stiefel", text: "Rechtsanwalt Manfred Holtschmit lässt sich als Einzelanwalt in Saarbrücken nieder." },
                  { year: "1997", title: "Eintritt Volker Simmer", text: "Zunächst als Rechtsreferendar, später als Rechtsanwalt in der Kanzlei Holtschmit." },
                  { year: "2004", title: "Selbstständigkeit Marion Andrae", text: "Eigene Kanzlei in Merzig, später Dillingen." },
                  { year: "2008", title: "Fusion Andrae & Simmer", text: "Gründung der überörtlichen Sozietät mit den Standorten Saarbrücken und Dillingen." },
                  { year: "2017", title: "Umzug ins Medienzentrum", text: "Zeitgemäße, moderne Räume in zentraler Lage." },
                  { year: "2024", title: "Altenkesseler Straße", text: "Neue Anschrift: Altenkesseler Str. 17, Gebäude C1, 66115 Saarbrücken." }
                ].map((item, i) => (
                  <Reveal key={item.year} delay={i * 0.05}>
                    <li className="relative pl-14 sm:pl-20">
                      <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-2xl bg-teal-100 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-200 sm:left-3 sm:h-11 sm:w-11">
                        {item.year.slice(-2)}
                      </div>
                      <div className="paper-card rounded-2xl p-5">
                        <div className="flex items-baseline gap-3">
                          <span className="display text-2xl text-ink-800">{item.year}</span>
                          <span className="font-medium text-teal-700">{item.title}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wide parallax image */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[110rem] px-4 sm:px-6">
          <ParallaxImage
            src={IMG.window}
            alt="Blick aus den Kanzleiräumen"
            className="aspect-[16/8] w-full"
            intensity={120}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal>
            <div className="paper-card-lift relative overflow-hidden rounded-[2.5rem] p-8 sm:p-16">
              <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-200/50 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brass-400/30 blur-3xl" />

              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Erstberatung
                  </div>
                  <h2 className="mt-4 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl">
                    Sprechen Sie mit uns –
                    <br />
                    <span className="display-italic text-teal-700">
                      bevor es kompliziert wird.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
                    Vereinbaren Sie einen Termin persönlich, per Telefon oder E-Mail. In den
                    meisten Fällen können wir bereits im Erstgespräch eine erste Einschätzung und
                    einen Kostenrahmen geben.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/kontakt"
                      className="group inline-flex items-center gap-2 rounded-full bg-ink-800 px-6 py-3.5 text-sm font-semibold text-paper-50 shadow-lift transition hover:bg-teal-700"
                    >
                      Termin vereinbaren
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                    <a
                      href={`tel:${KANZLEI.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink-700/12 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink-700 transition hover:bg-white"
                    >
                      <Phone size={15} className="text-teal-700" /> {KANZLEI.phone}
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="paper-card rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-1 text-teal-700" />
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                          Adresse
                        </div>
                        <div className="mt-1 text-sm text-ink-700">
                          {KANZLEI.address.street}
                          <br />
                          {KANZLEI.address.zip} {KANZLEI.address.city}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="paper-card rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="mt-1 text-teal-700" />
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                          Telefon
                        </div>
                        <div className="mt-1 text-sm text-ink-700">{KANZLEI.phone}</div>
                        <div className="text-xs text-ink-500">Fax {KANZLEI.fax}</div>
                      </div>
                    </div>
                  </div>
                  <div className="paper-card rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="mt-1 text-teal-700" />
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                          E-Mail
                        </div>
                        <a
                          href={`mailto:${KANZLEI.email}`}
                          className="mt-1 text-sm text-ink-700 hover:text-teal-700"
                        >
                          {KANZLEI.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
