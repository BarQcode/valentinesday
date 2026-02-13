import { describe, expect, it } from "vitest";
import { getDaysUntilNextAnniversary, getDifference } from "@/lib/love-date-utils";

describe("getDifference", () => {
  it("calcula años, meses y días entre dos fechas", () => {
    const result = getDifference(new Date("2022-09-13T00:00:00"), new Date("2026-02-13T00:00:00"));
    expect(result).toEqual({ years: 3, months: 5, days: 0 });
  });

  it("ajusta correctamente cuando hay préstamo de días", () => {
    const result = getDifference(new Date("2023-01-31T00:00:00"), new Date("2023-03-01T00:00:00"));
    expect(result).toEqual({ years: 0, months: 1, days: 1 });
  });
});

describe("getDaysUntilNextAnniversary", () => {
  const anniversaryBase = new Date("2022-09-13T00:00:00");

  it("devuelve 0 cuando hoy es el aniversario", () => {
    const result = getDaysUntilNextAnniversary(anniversaryBase, new Date("2026-09-13T18:45:00"));
    expect(result).toBe(0);
  });

  it("devuelve días restantes al próximo aniversario", () => {
    const result = getDaysUntilNextAnniversary(anniversaryBase, new Date("2026-02-13T10:00:00"));
    expect(result).toBe(212);
  });
});
