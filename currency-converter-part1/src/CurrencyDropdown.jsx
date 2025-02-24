import { useEffect } from "react";
import "./CurrencyStyling.css";
import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyList(data.supported_codes));
  }, []);

  return (
    <div>
      <div className="container">
        <p>I want to convert</p>
        <select name="currency" id="currencySelect">
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
        <p>to</p>
        <select name="currency" id="currencySelect">
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
      </div>
      <CurrencyConverter />
    </div>
  );
}

export default CurrencyDropdown;
