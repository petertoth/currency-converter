import { getCurrencyEmoji } from "./getCurrencyEmoji";

export function getCurrencyValue(currency: string) {
  return [getCurrencyEmoji(currency), currency].filter(Boolean).join(" ");
}
