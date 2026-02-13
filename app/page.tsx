import { LoveCounters } from "@/components/love-counters";

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden bg-valentine-glow">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-fuchsia-950/60 to-slate-950" />
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-200/90">Para mi amor</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
          Nuestro <span className="text-blush">San Valentín</span> para recordar cada instante juntos.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-pink-100/90 md:text-lg">
          Cada día a tu lado hace que la vida se vea más bonita. Este pequeño rincón es para celebrar
          nuestra historia, nuestros recuerdos y todo lo que aún nos falta vivir.
        </p>

        <div className="mt-10">
          <LoveCounters />
        </div>
      </section>
    </main>
  );
}
