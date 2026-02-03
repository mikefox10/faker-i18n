import { ES } from "./locales/es.js";
import { EN } from "./locales/en.js";
import { PT } from "./locales/pt.js";
import { FR } from "./locales/fr.js";
import { DE } from "./locales/de.js";
import { RU } from "./locales/ru.js";
import { JA } from "./locales/ja.js";
import { ZH } from "./locales/zh.js";
import { TR } from "./locales/tr.js";

import { person } from "./fields/person.js";
import { internet } from "./fields/internet.js";
import { misc } from "./fields/misc.js";

type Locale =
  | "EN"
  | "ES"
  | "PT"
  | "FR"
  | "DE"
  | "RU"
  | "JA"
  | "ZH"
  | "TR";


const locales: Record<Locale, any> = {
  EN, ES, PT, FR, DE, RU, JA, ZH, TR
};

function faker(initialLocale: Locale = "EN") {
  let currentLocale = initialLocale;

  const api = {
    setLocale(locale: Locale) {
      currentLocale = locale;
      return api;
    }
  };

  const withLocale = (fn: Function) => (...args: any[]) =>
    fn(locales[currentLocale], ...args);

  return {
    ...api,

    // PERSON
    firstName: () => person.firstName(locales[currentLocale]),
    lastName: () => person.lastName(locales[currentLocale]),
    company: () => person.company(locales[currentLocale]),
    jobTitle: () => person.jobTitle(),

    // INTERNET
    email: () => internet.email(locales[currentLocale]),
    username: () => internet.username(),
    password: () => internet.password(),
    domain: () => internet.domain(locales[currentLocale]),
    avatarUrl: () => internet.avatarUrl(),
    url: () => internet.url(),
    ip: () => internet.ip(),
    mac: () => internet.mac(),
    color: () => internet.color(),

    // MISC
    city: () => misc.city(locales[currentLocale]),
    zipCode: () => misc.zipCode(),
    phone: () => misc.phone(),
    uuid: () => misc.uuid(),
    boolean: () => misc.boolean(),
    currency: () => misc.currency(),
    numberBetween: misc.numberBetween,
    lorem: () => misc.lorem()
  };
}

export { faker }
export default faker;