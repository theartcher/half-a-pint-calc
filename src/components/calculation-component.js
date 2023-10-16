import React, { useState } from "react";
import { conversionRates, convertToHalfPint } from "@/conversionLogic";

export default function CalcComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedConversionType, setSelectedConversionType] =
    useState("mL_conversion");
  const [inputValue, setInputValue] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const calculatedValue = convertToHalfPint(
        parseFloat(inputValue),
        selectedConversionType
      );
      setResults(calculatedValue);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="text-indigo-600 border-solid border-indigo-600 border-2 rounded-lg p-5 bg-yellow-100">
        <div className="flex flex-col justify-center items-center my-auto mx-auto">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="conversionType" className="mr-2">
                Kies oew ombouwsoort:
              </label>
              <select
                id="conversionType"
                onChange={(e) => setSelectedConversionType(e.target.value)}
                value={selectedConversionType}
                className="p-2 border rounded"
              >
                <option value="mL_conversion">Milliliters (mL)</option>
                <option value="cL_conversion">Centiliters (cL)</option>
                <option value="dL_conversion">Deciliters (dL)</option>
                <option value="L_conversion">Liters (L)</option>
                <option value="kL_conversion">Kiloliters (kL)</option>
                <option value="tsp_conversion">Teaspoons (tsp)</option>
                <option value="tbsp_conversion">Tablespoons (tbsp)</option>
                <option value="floz_conversion">Fluid Ounces (floz)</option>
                <option value="cup_conversion">Cups (cup)</option>
                <option value="quart_conversion">Quarts (quart)</option>
                <option value="gal_conversion">Gallons (gal)</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="inputValue" className="mr-2">
                Vul 'n waarde in om um te bouwe:
              </label>
              <input
                type="number"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-indigo-600 text-white rounded block mx-auto"
            >
              {isLoading ? "Die is aan 't lade jongeuh..." : "Pleur 'm erin"}
            </button>
          </form>
          <div className="mt-4">
            {results ? (
              <p className="text-lg"> Das toch ongeveer precies {results}</p>
            ) : (
              <p>Da ken ik toch neit omrekenen</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
