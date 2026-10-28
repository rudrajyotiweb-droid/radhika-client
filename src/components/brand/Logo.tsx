import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Round Radha–Krishna emblem cut from the brand logo (public/assets/brand). */
export function BrandMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/assets/brand/emblem-256.png"
      alt=""
      width={256}
      height={256}
      priority={priority}
      className={cn("h-10 w-10 shrink-0 rounded-full object-contain", className)}
    />
  );
}

/** "Radhika Astro" lettering in gold leaf; size it with a text-* class. `light` is the brighter gold for dark backgrounds. */
export function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span aria-hidden="true" className={cn("block font-serif leading-none font-bold tracking-[0.01em] whitespace-nowrap", light ? "text-gold" : "text-gold-deep", className)}>
      {site.name}
    </span>
  );
}

export function Logo({ className, light = false, compact = false }: { className?: string; light?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2", className)} aria-label={`${site.name} home`}>
      <BrandMark
        priority
        className={cn(
          "shadow-[0_6px_16px_-6px_rgb(11_24_71/0.55)] ring-1 ring-accent/50 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]",
          compact ? "h-10 w-10" : "h-12 w-12",
        )}
      />
      <span className="flex flex-col leading-none">
        <Wordmark light={light} className={cn("transition-all duration-500", compact ? "text-[1.15rem]" : "text-[1.4rem]")} />
        <span className={cn("mt-1 block text-[0.6rem] tracking-[0.08em] whitespace-nowrap", light ? "text-white/80" : "text-primary/80", compact && "text-[0.55rem]")}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
