export const KANZLEI = {
  name: "Andrae & Simmer",
  fullName: "Rechtsanwälte Andrae & Simmer GbR",
  address: {
    street: "Altenkesseler Str. 17, Gebäude C1",
    zip: "66115",
    city: "Saarbrücken"
  },
  phone: "0681 / 38943-0",
  phoneRaw: "+4968138943",
  fax: "0681 / 373916",
  email: "kanzlei@andrae-simmer.de"
};

export const NAV = [
  { href: "/", label: "Start" },
  { href: "/kanzlei", label: "Kanzlei" },
  { href: "/team", label: "Team" },
  { href: "/rechtsgebiete", label: "Rechtsgebiete" },
  { href: "/kosten", label: "Honorare" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/formulare", label: "Formulare" }
];

export type Rechtsgebiet = {
  slug: string;
  title: string;
  intro: string;
  bullets: string[];
  icon: "gavel" | "briefcase" | "car" | "heart" | "home" | "scale" | "shield" | "handshake" | "coin" | "leaf" | "book" | "horse" | "wheel" | "flame" | "spark" | "building" | "seal" | "family" | "bank";
};

export const RECHTSGEBIETE: Rechtsgebiet[] = [
  {
    slug: "arbeitsrecht",
    title: "Arbeitsrecht",
    intro: "Vom Aufhebungsvertrag bis zur Kündigungsschutzklage – klare Positionen für Arbeitnehmer und Arbeitgeber.",
    bullets: ["Kündigungsschutz", "Abmahnung", "Aufhebungsverträge", "Zeugnisrecht"],
    icon: "briefcase"
  },
  {
    slug: "verkehrsrecht",
    title: "Verkehrs- & Verkehrsunfallrecht",
    intro: "Unfallregulierung, Bußgeld und Fahrerlaubnis – wir kennen jedes Detail zwischen § und Straße.",
    bullets: ["Unfallregulierung", "Fahrerlaubnis", "Ordnungswidrigkeiten", "Kaskoschäden"],
    icon: "car"
  },
  {
    slug: "vertragsrecht",
    title: "Kauf- & Vertragsrecht",
    intro: "Verträge, die halten. AGB, die stehen. Kaufsachen, die klar geregelt sind.",
    bullets: ["AGB & Individualverträge", "Gewährleistung", "B2B & B2C", "Kaufmängel"],
    icon: "handshake"
  },
  {
    slug: "familien-erbrecht",
    title: "Ehe-, Familien- & Erbrecht",
    intro: "Sensible Themen brauchen klare Beratung: von Trennung bis Nachlassplanung.",
    bullets: ["Scheidung", "Unterhalt", "Testament", "Erbauseinandersetzung"],
    icon: "family"
  },
  {
    slug: "mietrecht",
    title: "Mietrecht",
    intro: "Wohnraum und Gewerbe – wir sortieren Mietverhältnisse, bevor sie eskalieren.",
    bullets: ["Wohnraummiete", "Gewerbemiete", "Nebenkosten", "Räumung"],
    icon: "home"
  },
  {
    slug: "handel-gesellschaft",
    title: "Handels- & Gesellschaftsrecht",
    intro: "Gründung, Beteiligung, Restrukturierung – wir denken unternehmerisch.",
    bullets: ["GmbH & UG", "Gesellschafterstreit", "M&A-Vorbereitung", "Umstrukturierung"],
    icon: "building"
  },
  {
    slug: "gewerblicher-rechtsschutz",
    title: "Gewerblicher Rechtsschutz",
    intro: "Marken, Wettbewerb, Urheber – digitaler und analoger Schutz Ihrer Assets.",
    bullets: ["Abmahnung", "Markenanmeldung", "UWG", "Urheberrecht"],
    icon: "shield"
  },
  {
    slug: "strafrecht",
    title: "Straf- & Bußgeldrecht",
    intro: "Frühzeitige Verteidigung, klare Kommunikation, präzise Strategie.",
    bullets: ["Ermittlungsverfahren", "Hauptverhandlung", "Insolvenzstrafrecht", "OWi-Verfahren"],
    icon: "gavel"
  },
  {
    slug: "steuerrecht",
    title: "Steuerrecht",
    intro: "In Bürogemeinschaft mit Fachanwalt für Steuerrecht – von der Beratung bis zum Finanzgericht.",
    bullets: ["Betriebsprüfung", "Einspruch & Klage", "Steuerstrafrecht", "Gestaltung"],
    icon: "coin"
  },
  {
    slug: "insolvenzrecht",
    title: "Insolvenzrecht",
    intro: "Sanierung, Restschuldbefreiung, Insolvenzanfechtung – strukturiert und diskret.",
    bullets: ["Regelinsolvenz", "Verbraucherinsolvenz", "Anfechtung", "Sanierung"],
    icon: "bank"
  },
  {
    slug: "autohausrecht",
    title: "Autohausrecht",
    intro: "Spezialfeld der Kanzlei – juristische Begleitung entlang der gesamten Vertragskette.",
    bullets: ["Händlerverträge", "Gewährleistung", "Vertrieb", "Werkstatthaftung"],
    icon: "wheel"
  },
  {
    slug: "pferderecht",
    title: "Rechtsfragen rund ums Pferd",
    intro: "Kauf, Haftung, Reitunfall, Pension – Fachwissen in einem oft unterschätzten Rechtsfeld.",
    bullets: ["Pferdekauf", "Tierarzthaftung", "Pensionsvertrag", "Reitunfall"],
    icon: "horse"
  },
  {
    slug: "verwaltungsrecht",
    title: "Verwaltungsrecht",
    intro: "Verwaltungsakte, Widerspruch und Klage – Rechtsschutz gegenüber Behörden.",
    bullets: ["Widerspruch", "Anfechtungsklage", "Verpflichtungsklage", "Beamtenrecht"],
    icon: "seal"
  },
  {
    slug: "vereinsrecht",
    title: "Vereinsrecht",
    intro: "Satzung, Vorstand, Haftung – juristische Basis für starkes Ehrenamt.",
    bullets: ["Satzung", "Vorstandshaftung", "Mitgliederrechte", "Gemeinnützigkeit"],
    icon: "leaf"
  },
  {
    slug: "versicherungsrecht",
    title: "Versicherungsrecht",
    intro: "Ansprüche durchsetzen – gegen Deckungsablehnung und Kürzung.",
    bullets: ["Berufsunfähigkeit", "Sachschaden", "Haftpflicht", "Deckungsklage"],
    icon: "scale"
  },
  {
    slug: "inkasso",
    title: "Inkasso & Forderungsmanagement",
    intro: "Vom Mahnbescheid bis zur Zwangsvollstreckung – strukturiert, schnell, konsequent.",
    bullets: ["Mahnverfahren", "Titulierung", "Vollstreckung", "Bonitätsprüfung"],
    icon: "spark"
  }
];

export const TEAM = [
  {
    slug: "marion-andrae",
    name: "Marion Andrae",
    role: "Rechtsanwältin · Gesellschafterin",
    initials: "MA",
    bio: "Seit 1997 als Rechtsanwältin tätig, mit Stationen in Zweibrücken und Merzig. Gründete 2004 die eigene Kanzlei, die 2008 mit der Kanzlei Simmer zur heutigen Sozietät fusionierte.",
    focus: ["Familien- & Erbrecht", "Miet- & Wohnungseigentumsrecht", "Zivilrecht", "Rechtsfragen rund ums Pferd"]
  },
  {
    slug: "volker-simmer",
    name: "Volker Simmer",
    role: "Rechtsanwalt · Gesellschafter",
    initials: "VS",
    bio: "Lehrbeauftragter an der Universität des Saarlandes seit nahezu 30 Jahren. Übernahm die Kanzlei Holtschmit am Standort Saarbrücken und verantwortet heute die Sozietät gemeinsam mit Frau Andrae.",
    focus: ["Autohausrecht", "Handels- & Gesellschaftsrecht", "Vertragsrecht", "Rechtsfragen rund ums Pferd"]
  }
];

export const KENNZAHLEN = [
  { value: "1963", label: "Kanzleitradition seit" },
  { value: "17+", label: "Rechtsgebiete" },
  { value: "30", label: "Jahre Lehrauftrag Universität" },
  { value: "2", label: "Sozietätsinhaber" }
];
