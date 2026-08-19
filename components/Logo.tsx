import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Logo({
  className,
  variant = "wordmark",
  onClick
}: {
  className?: string;
  variant?: "wordmark" | "mono";
  onClick?: () => void;
}) {
  if (variant === "mono") {
    return (
      <Link href="/" onClick={onClick} className={clsx("inline-flex items-center gap-2", className)}>
        <span className="font-display text-2xl tracking-tight text-gradient-teal">A&amp;S</span>
      </Link>
    );
  }

  return (
    <Link href="/" onClick={onClick} className={clsx("inline-flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Andrae & Simmer Rechtsanwälte"
        width={220}
        height={64}
        priority
        className="h-8 w-auto object-contain [filter:brightness(1.15)_saturate(1.05)]"
      />
    </Link>
  );
}
