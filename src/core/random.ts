export function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function number(min = 0, max = 9999): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function bool(): boolean {
  return Math.random() < 0.5;
}

export function alpha(length = 8): string {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () => pick(chars.split(""))).join("");
}
