"use client";

import { useEffect, useMemo, useState } from "react";
import { getDaysUntilNextAnniversary, getDifference } from "@/lib/love-date-utils";

const RELATIONSHIP_START = new Date("2022-09-13T00:00:00");
const FIRST_DATE = new Date("2022-08-05T00:00:00");

function TimeCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <article className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-romantic transition hover:-translate-y-0.5 hover:bg-white/15">
      <h2 className="text-sm uppercase tracking-[0.2em] text-pink-100/90">{title}</h2>
      <p className="mt-4 text-2xl font-semibold md:text-3xl">{value}</p>
      <p className="mt-2 text-sm text-pink-100/90">{subtitle}</p>
    </article>
  );
}

export function LoveCounters() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const relationshipDuration = useMemo(() => getDifference(RELATIONSHIP_START, now), [now]);
  const firstDateDuration = useMemo(() => getDifference(FIRST_DATE, now), [now]);
  const daysUntilAnniversary = useMemo(
    () => getDaysUntilNextAnniversary(RELATIONSHIP_START, now),
    [now],
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <TimeCard
        title="Juntos desde"
        value={`${relationshipDuration.years} años, ${relationshipDuration.months} meses y ${relationshipDuration.days} días`}
        subtitle="Desde el 13 de septiembre de 2022 💞"
      />
      <TimeCard
        title="Desde la primera cita"
        value={`${firstDateDuration.years} años, ${firstDateDuration.months} meses y ${firstDateDuration.days} días`}
        subtitle="Desde el 5 de agosto de 2022 🌹"
      />
      <TimeCard
        title="Próximo aniversario"
        value={`${daysUntilAnniversary} días`}
        subtitle="Faltan para volver a celebrar nuestro día especial ✨"
      />
    </div>
  );
}
