import { pick, number, alpha } from "../core/random.js";

export const internet = {
  email: (l: any) => `${alpha(6)}@${pick(l.domains)}`,
  username: () => `user_${alpha(3)}${number(1, 999)}`,
  password: () => alpha(12),
  domain: (l: any) => pick(l.domains),
  url: () => `https://site${number(1, 999)}.com`,
  ip: () => `${number(1,255)}.${number(1,255)}.${number(1,255)}.${number(1,255)}`,
  color: () => `#${number(100000, 999999)}`,
  avatarUrl: () => `https://i.pravatar.cc/${number(100,300)}`,
  mac: () => `${alpha(2)}:${alpha(2)}:${alpha(2)}`
};
