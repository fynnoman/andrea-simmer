import {
  Scale,
  Gavel,
  Briefcase,
  Car,
  Heart,
  Home,
  ShieldCheck,
  Handshake,
  Coins,
  Leaf,
  BookOpen,
  Rocket,
  Building2,
  Stamp,
  Users,
  Landmark,
  type LucideIcon
} from "lucide-react";
import type { Rechtsgebiet } from "@/lib/data";

const map: Record<Rechtsgebiet["icon"], LucideIcon> = {
  gavel: Gavel,
  briefcase: Briefcase,
  car: Car,
  heart: Heart,
  home: Home,
  scale: Scale,
  shield: ShieldCheck,
  handshake: Handshake,
  coin: Coins,
  leaf: Leaf,
  book: BookOpen,
  horse: Rocket,
  wheel: Car,
  flame: Rocket,
  spark: Rocket,
  building: Building2,
  seal: Stamp,
  family: Users,
  bank: Landmark
};

export default function RechtsgebietIcon({
  name,
  className
}: {
  name: Rechtsgebiet["icon"];
  className?: string;
}) {
  const Comp = map[name] ?? Scale;
  return <Comp className={className} strokeWidth={1.4} />;
}
