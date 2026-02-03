import { describe, it, expect } from "vitest";
import { faker } from "../src";

describe("faker-lite", () => {
  it("switches locale dynamically", () => {
    const f = faker();
    f.setLocale("es");
    expect(f.firstName()).toBeTypeOf("string");
  });

  it("generates internet data", () => {
    expect(faker("en").email()).toContain("@");
  });
});
