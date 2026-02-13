export type Duration = {
  years: number;
  months: number;
  days: number;
};

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function addMonthsClamped(date: Date, monthsToAdd: number): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const targetMonthIndex = month + monthsToAdd;
  const targetYear = year + Math.floor(targetMonthIndex / 12);
  const normalizedMonth = ((targetMonthIndex % 12) + 12) % 12;
  const targetDay = Math.min(day, daysInMonth(targetYear, normalizedMonth));

  return new Date(targetYear, normalizedMonth, targetDay);
}

export function getDifference(from: Date, to: Date): Duration {
  const fromDate = startOfDay(from);
  const toDate = startOfDay(to);

  if (toDate < fromDate) {
    return { years: 0, months: 0, days: 0 };
  }

  let years = toDate.getFullYear() - fromDate.getFullYear();
  let cursor = addMonthsClamped(fromDate, years * 12);

  if (cursor > toDate) {
    years -= 1;
    cursor = addMonthsClamped(fromDate, years * 12);
  }

  let months = 0;
  while (months < 11) {
    const next = addMonthsClamped(cursor, 1);
    if (next > toDate) {
      break;
    }
    months += 1;
    cursor = next;
  }

  const days = Math.floor((toDate.getTime() - cursor.getTime()) / MS_PER_DAY);

  return { years, months, days };
}

export function getDaysUntilNextAnniversary(startDate: Date, now: Date): number {
  const today = startOfDay(now);
  const currentYearAnniversary = new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate());

  if (today.getTime() === currentYearAnniversary.getTime()) {
    return 0;
  }

  const nextAnniversary = currentYearAnniversary > today
    ? currentYearAnniversary
    : new Date(today.getFullYear() + 1, startDate.getMonth(), startDate.getDate());

  const diffInMs = nextAnniversary.getTime() - today.getTime();
  return Math.ceil(diffInMs / MS_PER_DAY);
}
