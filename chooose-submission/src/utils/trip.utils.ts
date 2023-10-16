export const getEmissionCount = (co2kilograms: number) =>
  co2kilograms > 1000
    ? `${Math.round(co2kilograms / 100) / 10} t`
    : `${Math.round(co2kilograms)} kg`;
