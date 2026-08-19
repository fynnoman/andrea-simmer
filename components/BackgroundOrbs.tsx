export default function BackgroundOrbs({ variant = "hero" }: { variant?: "hero" | "subtle" }) {
  if (variant === "subtle") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-teal-200/40 blur-2xl" />
        <div className="absolute -right-40 top-60 h-96 w-96 rounded-full bg-brass-400/20 blur-2xl" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-teal-200/40 blur-2xl" />
      <div className="absolute -right-32 top-40 h-[32rem] w-[32rem] rounded-full bg-brass-400/20 blur-2xl" />
    </div>
  );
}
