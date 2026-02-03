"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faker = void 0;
const es_1 = require("./locales/es");
const en_1 = require("./locales/en");
const pt_1 = require("./locales/pt");
const fr_1 = require("./locales/fr");
const de_1 = require("./locales/de");
const ru_1 = require("./locales/ru");
const ja_1 = require("./locales/ja");
const zh_1 = require("./locales/zh");
const tr_1 = require("./locales/tr");
const person_1 = require("./fields/person");
const internet_1 = require("./fields/internet");
const misc_1 = require("./fields/misc");
const locales = {
    en: en_1.en, es: es_1.es, pt: pt_1.pt, fr: fr_1.fr, de: de_1.de, ru: ru_1.ru, ja: ja_1.ja, zh: zh_1.zh, tr: tr_1.tr
};
function faker(initialLocale = "en") {
    let currentLocale = initialLocale;
    const api = {
        setLocale(locale) {
            currentLocale = locale;
            return api;
        }
    };
    const withLocale = (fn) => (...args) => fn(locales[currentLocale], ...args);
    return Object.assign(Object.assign({}, api), { 
        // PERSON
        firstName: () => person_1.person.firstName(locales[currentLocale]), lastName: () => person_1.person.lastName(locales[currentLocale]), fullName: () => person_1.person.fullName(locales[currentLocale]), company: () => person_1.person.company(locales[currentLocale]), 
        // INTERNET
        email: () => internet_1.internet.email(locales[currentLocale]), username: internet_1.internet.username, password: internet_1.internet.password, url: internet_1.internet.url, 
        // MISC
        city: () => misc_1.misc.city(locales[currentLocale]), phone: misc_1.misc.phone, uuid: misc_1.misc.uuid, price: misc_1.misc.price, status: misc_1.misc.status });
}
exports.faker = faker;
