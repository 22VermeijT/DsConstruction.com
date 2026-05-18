import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 text-center dot-grid">
      <Image
        src="/logo.png"
        alt="D's Construction & Remodeling"
        width={72}
        height={72}
        className="object-contain mb-8"
      />
      <p className="text-lime text-xs font-semibold tracking-[0.22em] uppercase mb-4">404 — Page Not Found</p>
      <h1 className="font-display text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
        This page doesn&apos;t exist.
        <br />
        <em className="text-lime not-italic">But we do.</em>
      </h1>
      <p className="text-warm text-sm leading-relaxed max-w-sm mb-10">
        You might have followed a bad link. Head back to the homepage or give us a call — we pick up.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-7 py-4 hover:bg-lime-dark transition-colors text-sm"
        >
          Back to Home
        </Link>
        <a
          href="tel:+16826221532"
          className="inline-flex items-center gap-2 border border-white/20 text-cream font-medium px-7 py-4 hover:border-lime hover:text-lime transition-colors text-sm"
        >
          Call (682) 622-1532
        </a>
      </div>
    </div>
  );
}
