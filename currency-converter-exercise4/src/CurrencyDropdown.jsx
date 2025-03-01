import { useEffect } from "react";
import "./CurrencyStyling.css";
import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("SGD");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyList(data.supported_codes));

    // setCurrencyList([
    //   ["USD", "United States Dollar"],
    //   ["SGD", "Singapore Dollar"],
    // ]);
  }, []);

  return (
    <div>
      <div className="container">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            setCurrencyFrom(event.target.value);
          }}
          value={currencyFrom}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            setCurrencyTo(event.target.value);
          }}
          value={currencyTo}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
      </div>
      <CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />
    </div>
  );
}

export default CurrencyDropdown;
