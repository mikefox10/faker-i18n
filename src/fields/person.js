"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
const random_1 = require("../core/random");
exports.person = {
    firstName: (l) => (0, random_1.pick)(l.firstNames),
    lastName: (l) => (0, random_1.pick)(l.lastNames),
    fullName: (l) => `${(0, random_1.pick)(l.firstNames)} ${(0, random_1.pick)(l.lastNames)}`,
    initials: (l) => `${(0, random_1.pick)(l.firstNames)[0]}${(0, random_1.pick)(l.lastNames)[0]}`,
    company: (l) => (0, random_1.pick)(l.companies),
    jobTitle: () => (0, random_1.pick)(["Dev", "QA", "Manager", "Designer"]),
    gender: () => (0, random_1.pick)(["male", "female"]),
    age: () => Math.floor(Math.random() * 60) + 18,
    birthYear: () => new Date().getFullYear() - (18 + Math.random() * 50),
    bio: () => "Lorem ipsum dolor sit amet",
    idNumber: () => `${Math.random().toString().slice(2, 10)}`,
    nickname: (l) => (0, random_1.pick)(l.firstNames).toLowerCase(),
    title: () => (0, random_1.pick)(["Mr", "Ms", "Dr"]),
    maritalStatus: () => (0, random_1.pick)(["single", "married"]),
    nationality: () => (0, random_1.pick)(["local", "foreign"])
};
