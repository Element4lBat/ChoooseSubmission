import { getEmissionCount } from "./trip.utils";

describe("Trip Util", () => {
  it("Should round kg up to a ton", () => {
    expect(getEmissionCount(500)).toBe("500 kg");
    expect(getEmissionCount(200.123)).toBe("200 kg");
    expect(getEmissionCount(300.555)).toBe("301 kg");
    expect(getEmissionCount(800.888)).toBe("801 kg");
    expect(getEmissionCount(1000)).toBe("1000 kg");
  });

  it("Should convert kg above a ton to tons with 1 decimal", () => {
    expect(getEmissionCount(1001)).toBe("1 t");
    expect(getEmissionCount(2000)).toBe("2 t");
    expect(getEmissionCount(3500.8)).toBe("3.5 t");
    expect(getEmissionCount(4560)).toBe("4.6 t");
  });
});
