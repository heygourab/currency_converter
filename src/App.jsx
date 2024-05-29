import { useState, useEffect, useCallback } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./Components/InputField";
import swapIcon from "./assets/swap.svg";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [isFromAmount, setIsFromAmount] = useState(true);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyList = Object.keys(currencyInfo);

  const handleSwap = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  }, [fromAmount, toAmount, fromCurrency, toCurrency]);

  const convertCurrency = useCallback(() => {
    if (currencyInfo[toCurrency]) {
      if (isFromAmount) {
        setToAmount(fromAmount * currencyInfo[toCurrency]);
      } else {
        setFromAmount(toAmount / currencyInfo[toCurrency]);
      }
    }
  }, [fromAmount, toAmount, currencyInfo, toCurrency, isFromAmount]);

  useEffect(() => {
    convertCurrency();
  }, [fromAmount, toAmount, fromCurrency, toCurrency, convertCurrency]);

  const handleFromAmountChange = (amount) => {
    setFromAmount(amount);
    setIsFromAmount(true);
  };

  const handleToAmountChange = (amount) => {
    setToAmount(amount);
    setIsFromAmount(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <div className="flex w-full max-w-md flex-col overflow-clip rounded-xl border border-secondaryDark bg-secondaryExtraDark">
        <h1 className="border-b border-secondaryDark p-2  text-lg font-semibold text-bodyTitleDark">
          Currency Converter
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 p-2">
            <div className="relative flex w-full flex-col items-center justify-center gap-y-2">
              <InputBox
                label="From"
                amount={fromAmount}
                selectCurrency={fromCurrency}
                currencyList={currencyList}
                onAmountChange={handleFromAmountChange}
                onCurrencyChange={setFromCurrency}
              />
              <button
                type="button"
                className="absolute rounded-full border border-bodyTextExtraDark bg-secondaryDark p-1 hover:bg-secondaryExtraDark"
                onClick={handleSwap}
                title="Swap"
              >
                <img className="size-5" src={swapIcon} alt="swap button icon" />
              </button>
              <InputBox
                label="To"
                amount={toAmount}
                selectCurrency={toCurrency}
                currencyList={currencyList}
                onAmountChange={handleToAmountChange}
                onCurrencyChange={setToCurrency}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
