import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { Car, ParkingSquare, MapPin, Compass } from "lucide-react";
import { IMG } from "@/lib/images";
import { KANZLEI } from "@/lib/data";

export const metadata = {
  title: "Anfahrt & Parken",
  description:
    "Kanzlei Andrae & Simmer in der Altenkesseler Str. 17, Gebäude C1, 66115 Saarbrücken. Kostenfreie Parkplätze rund um das Gebäude."
};

export default function AnfahrtPage() {
  return (
    <>
      <PageHero
        eyebrow="Anfahrt · Parken"
        title={
          <>
            So finden Sie
            <br />
            <span className="display-italic text-teal-700">zu uns.</span>
          </>
        }
        intro="Seit August 2024 in neuen Räumen im Gebäude C1, Altenkesseler Straße 17. Kostenfreie Stellplätze rund um das Gebäude."
        image={IMG.building}
        imageAlt="Bürogebäude"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Adresse", text: `${KANZLEI.address.street}\n${KANZLEI.address.zip} ${KANZLEI.address.city}` },
              { icon: ParkingSquare, title: "Parken", text: "Kostenfreie Stellplätze direkt rund um das Gebäude C1." },
              { icon: Compass, title: "Terminvereinbarung", text: "Persönliche Termine bitte vorab telefonisch oder per E-Mail vereinbaren." }
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-200">
                    <c.icon className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 display text-xl text-ink-800">{c.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-500">
                    {c.text}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <GlassCard variant="lift" className="overflow-hidden p-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <iframe
                  title="Karte Andrae & Simmer"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=6.9155%2C49.2288%2C6.9455%2C49.2488&layer=mapnik&marker=49.2388%2C6.9305"
                  loading="lazy"
                />
              </div>
            </GlassCard>
          </Reveal>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Altenkesseler+Str+17+66115+Saarbr%C3%BCcken"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-700/12 bg-white/70 px-5 py-3 text-sm text-ink-700 transition hover:bg-white"
            >
              <Car size={15} className="text-teal-700" />
              Route in Google Maps
            </a>
            <a
              href="https://www.openstreetmap.org/?mlat=49.2388&mlon=6.9305#map=17/49.2388/6.9305"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-700/12 bg-white/70 px-5 py-3 text-sm text-ink-700 transition hover:bg-white"
            >
              <MapPin size={15} className="text-teal-700" />
              In OpenStreetMap öffnen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
