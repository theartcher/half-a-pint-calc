export const conversionRates = {
  mL_conversion: 568,
  cL_conversion: 57,
  dL_conversion: 5.7,
  L_conversion: 0.57,
  kL_conversion: 0.00057,
  tsp_conversion: 96,
  tbsp_conversion: 32,
  floz_conversion: 20,
  cup_conversion: 2,
  quart_conversion: 0.5,
  gal_conversion: 0.15,
};

export function convertToHalfPint(value, conversionType) {
  if (!value) {
    return "0 halve pinten";
  }

  const conversionRate = conversionRates[conversionType];
  const result = (value / conversionRate) * 2;

  if (result >= 1) {
    const wholePart = Math.floor(result);
    const fractionPart = result - wholePart;

    if (fractionPart === 0 || fractionPart > 0.875) {
      return `${wholePart} halve pinten`;
    }

    const fractionValues = [
      1 / 16,
      1 / 8,
      1 / 6,
      1 / 4,
      1 / 3,
      3 / 8,
      1 / 2,
      5 / 8,
      2 / 3,
      3 / 4,
      7 / 8,
    ];

    const closestFraction = fractionValues.reduce((prev, curr) => {
      return Math.abs(curr - fractionPart) < Math.abs(prev - fractionPart)
        ? curr
        : prev;
    });

    console.log(closestFraction);

    const predefinedFractions = {
      0.0625: "1/16",
      0.125: "1/8",
      0.1667: "1/6",
      0.25: "1/4",
      0.3333: "1/3",
      0.375: "3/8",
      0.5: "1/2",
      0.625: "5/8",
      0.6667: "2/3",
      0.75: "3/4",
      0.875: "7/8",
    };

    const formattedFraction = predefinedFractions[closestFraction];
    return `${wholePart} & ${formattedFraction} halve pinten`;
  }

  const fractionValues = [
    1 / 16,
    1 / 8,
    1 / 6,
    1 / 4,
    1 / 3,
    3 / 8,
    1 / 2,
    5 / 8,
    2 / 3,
    3 / 4,
    7 / 8,
  ];

  const closestFraction = fractionValues.reduce((prev, curr) => {
    return Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev;
  });

  const predefinedFractions = {
    0.0625: "1/16",
    0.125: "1/8",
    0.1667: "1/6",
    0.25: "1/4",
    0.3333: "1/3",
    0.375: "3/8",
    0.5: "1/2",
    0.625: "5/8",
    0.6667: "2/3",
    0.75: "3/4",
    0.875: "7/8",
  };

  if (predefinedFractions[closestFraction]) {
    return `${predefinedFractions[closestFraction]} halve pinten`;
  }

  return `${result.toFixed(2)} halve pinten`;
}
