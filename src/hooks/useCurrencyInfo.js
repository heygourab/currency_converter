/**
 * A custom React hook that fetches and returns currency information based on the provided currency code.
 *
 * @function useCurrencyInfo
 * @param {string} currency - The ISO 4217 currency code for which to fetch information.
 * @returns {Object} - An object containing currency information.
 */
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  /**
   * State variable to hold the fetched currency data.
   * @type {Object}
   */
  const [data, setData] = useState({});

  /**
   * Effect hook that fetches currency data from the API when the currency prop changes.
   */
  useEffect(() => {
    const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data[currency]))
      .catch((err) => console.error(err));
  }, [currency]);

  /**
   * Returns the fetched currency data.
   * @returns {Object} - The fetched currency data.
   */
  return data;
}

export default useCurrencyInfo;
