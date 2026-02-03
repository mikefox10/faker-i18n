import { pick } from "../core/random.js";
import type { LocaleData } from "../types/locale";

export const person = {
  firstName: (l: LocaleData) => pick(l.firstNames),
  lastName: (l: LocaleData) => pick(l.lastNames),
  company: (l: LocaleData) => pick(l.companies),
  jobTitle: () => pick(["Dev", "QA", "Manager", "Designer"])
};
