"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { IMG } from "@/lib/images";
import { KANZLEI } from "@/lib/data";

export default function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pb-24 pt-40 sm:pt-48"
    >
      {/* Static blobs — no motion loop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-[36rem] w-[36rem] rounded-full bg-teal-200/35 blur-2xl" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-brass-400/20 blur-2xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <motion.div style={reduce ? undefined : { y: textY, willChange: "transform" }}>
          <div className="chip">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-600" />
            </span>
            Kanzleitradition seit 1963 · Saarbrücken
          </div>

          <h1 className="mt-8 display text-[3.5rem] leading-[0.95] tracking-tight text-ink-800 sm:text-[5rem] lg:text-[6.25rem]">
            Recht,
            <br />
            <span className="display-italic text-teal-700">das zuhört.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Andrae &amp; Simmer beraten Privatpersonen und Unternehmen im Saarland. Präzise, diskret
            und – vor allem – auf Augenhöhe. Wir nehmen uns Zeit für Ihr Anliegen, bevor wir eine
            Empfehlung aussprechen.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
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
            <Link
              href="/rechtsgebiete"
              className="inline-flex items-center gap-2 rounded-full border border-ink-700/12 bg-white/60 px-6 py-3.5 text-sm font-medium text-ink-700 transition hover:bg-white"
            >
              Rechtsgebiete entdecken
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-ink-500">
            <a
              href={`tel:${KANZLEI.phoneRaw}`}
              className="inline-flex items-center gap-2 hover:text-ink-700"
            >
              <Phone size={15} className="text-teal-700" />
              {KANZLEI.phone}
            </a>
            <div className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-teal-700" />
              Altenkesseler Str. 17, Saarbrücken
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={reduce ? undefined : { y: imgY, willChange: "transform" }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2rem] bg-ink-800 shadow-lift">
            <Image
              src={IMG.heroPortrait}
              alt="Rechtsanwältin im Beratungsgespräch"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-900/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Persönlich
              </div>
              <div className="display text-2xl">Ein Ansprechpartner. Ein Ergebnis.</div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="paper-card-lift absolute -left-4 top-6 hidden rounded-2xl px-5 py-4 sm:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Sozietät
            </div>
            <div className="flex items-baseline gap-2 text-ink-700">
              <span className="display text-3xl leading-none">1963</span>
              <span className="text-xs text-ink-500">→ heute</span>
            </div>
          </div>

          <div className="paper-card-lift absolute -bottom-6 right-2 hidden max-w-[220px] rounded-2xl p-4 sm:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Nähe zur Lehre
            </div>
            <div className="mt-1 text-sm leading-snug text-ink-700">
              30 Jahre Lehrauftrag an der Universität des Saarlandes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
