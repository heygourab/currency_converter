import { useId } from "react";
import PropTypes from "prop-types";

function InputField({
  label,
  amount,
  isAmountDisable,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
  isCurrencyDisable,
  currencyList,
  placeHolder,
}) {
  const amountInputId = useId();
  const currencySelectId = useId();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || value >= 0) {
      onAmountChange && onAmountChange(value === "" ? "" : Number(value));
    }
  };

  return (
    <div className="flex w-full divide-x divide-secondaryDark rounded-lg border border-secondaryDark p-2 text-bodyTextDark">
      <div className="flex w-1/2 flex-col gap-y-2 p-1">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          type="number"
          value={amount !== null ? amount : ""}
          id={amountInputId}
          disabled={isAmountDisable}
          placeholder={placeHolder}
          onChange={handleAmountChange}
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

InputField.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isAmountDisable: PropTypes.bool,
  selectCurrency: PropTypes.string,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  isCurrencyDisable: PropTypes.bool,
  currencyList: PropTypes.arrayOf(PropTypes.string),
  placeHolder: PropTypes.string,
};

InputField.defaultProps = {
  label: "TempLabel",
  amount: null,
  isAmountDisable: false,
  selectCurrency: "",
  onAmountChange: null,
  onCurrencyChange: null,
  isCurrencyDisable: false,
  currencyList: [],
  placeHolder: "Enter amount",
};

export default InputField;
