import { useId } from "react";

function InputField({
  label = "TempLable",
  amount = 0,
  isAmountDisable = false,
  selectCurrency = "",
  onAmountChange,
  onCurrencyChange,
  isCurrencyDisable = false,
  currencyList = [],
  placeHolder = "Enter amount",
}) {
  const amountInputId = useId();
  const currencySelectId = useId();

  const handelAmountChange = (e) => {
    if (e.target.value >= 0) {
      onAmountChange && onAmountChange(Number(e.target.value));
    }
  };

  return (
    <div className="flex w-full divide-x divide-secondaryDark rounded-lg border border-secondaryDark p-2 text-bodyTextDark">
      <div className="flex w-1/2 flex-col gap-y-2 p-1">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          type="number"
          value={amount}
          id={amountInputId}
          disabled={isAmountDisable}
          placeholder={placeHolder}
          onChange={handelAmountChange}
          className="h-10 rounded-md bg-bodyTextGray p-1 text-bodyTextLight placeholder-bodyTitleLight outline-none"
        />
      </div>
      <div className="flex w-1/2 flex-col items-end gap-y-2 p-1">
        <label htmlFor={currencySelectId}>Currency Type</label>
        <select
          id={currencySelectId}
          name="currency"
          value={selectCurrency}
          disabled={isCurrencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="h-10 w-full rounded-md bg-bodyTextGray p-1 text-bodyTextLight placeholder-bodyTitleLight outline-none"
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputField;
