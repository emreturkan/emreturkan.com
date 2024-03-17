import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function minToHour(min) {
  const hour = Math.floor(min / 60);
  const reMin = min % 60;
  return `${hour},${reMin}`;
}
