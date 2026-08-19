import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer, ArrowUpRight } from "lucide-react";
import { KANZLEI, NAV, RECHTSGEBIETE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-40 border-t border-ink-700/10 bg-gradient-to-b from-transparent to-paper-100/60">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-24 sm:px-10">
        <div className="mb-16 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Andrae & Simmer Rechtsanwälte"
                width={520}
                height={140}
                className="h-16 w-auto sm:h-20"
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500">
                Rechtsberatung mit Weitsicht. Seit über sechs Jahrzehnten im Saarland – heute im
                Gebäude C1 in der Altenkesseler Straße.
              </p>
            </div>
          </div>
          <Link
            href="/kontakt"
            className="group flex items-end justify-end"
          >
            <div className="paper-card-lift flex items-center gap-4 rounded-2xl px-5 py-4">
              <div className="text-right">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Termin
                </div>
                <div className="display text-xl text-ink-700">Anfragen</div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-ink-800 text-paper-50 transition group-hover:bg-teal-700">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="paper-card rounded-2xl p-5">
              <div className="flex items-start gap-3 text-sm text-ink-500">
                <MapPin size={16} className="mt-0.5 text-teal-700" />
                <div>
                  <div className="text-ink-700">{KANZLEI.address.street}</div>
                  <div>
                    {KANZLEI.address.zip} {KANZLEI.address.city}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-ink-500">
              <a
                href={`tel:${KANZLEI.phoneRaw}`}
                className="flex items-center gap-2.5 transition hover:text-ink-700"
              >
                <Phone size={14} className="text-teal-700" /> {KANZLEI.phone}
              </a>
              <div className="flex items-center gap-2.5">
                <Printer size={14} className="text-teal-700" /> {KANZLEI.fax}
              </div>
              <a
                href={`mailto:${KANZLEI.email}`}
                className="flex items-center gap-2.5 transition hover:text-ink-700"
              >
                <Mail size={14} className="text-teal-700" /> {KANZLEI.email}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Kanzlei
            </div>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-500 transition hover:text-ink-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Ausgewählte Felder
            </div>
            <ul className="space-y-2.5 text-sm">
              {RECHTSGEBIETE.slice(0, 8).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/rechtsgebiete#${r.slug}`}
                    className="text-ink-500 transition hover:text-ink-700"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Recht
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/impressum" className="text-ink-500 transition hover:text-ink-700">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-ink-500 transition hover:text-ink-700">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-700/8 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} RAe Andrae &amp; Simmer GbR</div>
          <div className="display-italic text-ink-500/70">Recht mit Weitsicht.</div>
        </div>
      </div>
    </footer>
  );
}
