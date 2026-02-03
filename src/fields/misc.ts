import { pick, number } from "../core/random.js";

export const misc = {
  city: (l: any) => pick(l.cities),
  phone: () => `+${number(1,99)} ${number(60000000,79999999)}`,
  zipCode: () => number(10000, 99999).toString(),
  uuid: () => crypto.randomUUID(),
  boolean: () => Math.random() < 0.5,
  currency: () => pick(["USD", "EUR", "BOB"]),
  percentage: () => number(0, 100),
  numberBetween: (minNum: number, maxNum: number) => number(minNum = 1, maxNum),
  lorem: () => "Lorem ipsum dolor sit amet"
};
