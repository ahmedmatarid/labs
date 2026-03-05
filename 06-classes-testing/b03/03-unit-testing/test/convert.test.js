import convert from "convert";
import { describe, test, expect } from "bun:test";

describe("convert", () => {
  describe("time", () => {
    test("should convert 60 s to 1 m", () => {
      expect(convert(60, "seconds").to("minutes")).toBe(1);
    });
    test("should convert 1 h to 3600 s", () => {
      expect(convert(1, "hours").to("seconds")).toBe(3600);
    });
  });

  describe("mass", () => {
    test("should convert 1 kg to 2.2 lb", () => {
      expect(Number(convert(1, "kg").to("pounds").toFixed(1))).toBe(2.2);
    });
  });

  describe("best", () => {
    test("should convert to best with unit and quantity properties", () => {
      console.log(convert(1500, "meters").to("best"));
      expect(convert(1500, "meters").to("best")).toHaveProperty("unit");
      expect(convert(1500, "meters").to("best")).toHaveProperty("quantity");
      expect(convert(1500, "meters").to("best")).toHaveProperty("toString");
    });
  });
});
