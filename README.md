# faker-i18n

✨ **faker-i18n** is a lightweight library for generating fake data in a simple, fast, and dependency-free way.  
Perfect for **tests**, **seeders**, **mocking**, and **prototyping**.


### 🌍 Supported Locales

Currently supported locales:

- EN – English (Default)
- ES – Spanish
- PT – Portuguese
- FR – French
- DE – German
- RU – Russian
- JA – Japanese
- ZH – Chinese
- TR – Turkish

## 📦 Installation

```bash
npm install faker-i18n
```

## Basic Usage

```bash
import { faker } from "faker-i18n";

const fake = faker("EN");

console.log(fake.firstName());   // Mike
console.log(fake.lastName());    // Taylor
console.log(fake.company());     // Soft Inc
console.log(fake.jobTitle());    // Designer
```

### Person

```bash
fake.firstName();   // Mike
fake.lastName();    // Taylor
fake.company();     // Soft Inc
fake.jobTitle();    // Designer
```

### Internet
```bash
fake.email();       // vwvsqu@gmail.com
fake.username();    // user_irp593
fake.password();    // wriocxwhpxeb
fake.domain();      // gmail.com
fake.avatarUrl();   // https://i.pravatar.cc/131
fake.url();         // https://site966.com
fake.ip();          // 9.92.10.212
fake.mac();         // zn:pl:mt
```

### Location
```bash
fake.city();       // Texas
fake.zipCode();    // 88295
fake.phone();      // +3 63080859
```

### Utilities
```bash
fake.uuid();               // fe4e9431-4fe1-47d1-a16c-8b58ce10bf4e
fake.boolean();            // true
fake.currency();           // USD
fake.numberBetween(1, 4);  // 3
fake.color();              // #823109
fake.lorem();              // Lorem ipsum dolor sit amet

```



## 🎯 Project Goals

- 🪶 Lightweight and fast
- 📦 No unnecessary dependencies
- 🌍 Multi-language support
- 🧪 Ideal for tests and mocks
- 💡 Simple and predictable API



## Contributions are welcome 🙌
Feel free to open issues or pull requests for:

- New locales
- New generators
- Performance improvements
- Bug fixes


### 📄 License

MIT © 2025