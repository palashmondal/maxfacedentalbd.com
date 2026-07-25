import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { bn } from "./dictionaries/bn";

const dictionaries: Record<Locale, Dictionary> = { en, bn };

/** Synchronous selector — dictionaries are plain in-repo objects. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from "./config";
export * from "./href";
export * from "./metadata";
export * from "./template";
