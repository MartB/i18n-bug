import { createI18n } from "vue-i18n";
import * as en from "./locales/en.json";
import * as de from "./locales/de.json";

export const MESSAGES = {
  ["en"]: { en },
  ["de"]: { de },
};

export const DEFAULT_LOCALE = "en";

export const i18n = createI18n({
  messages: MESSAGES,
  locale: "en",
  fallbackLocale: "en",
});
