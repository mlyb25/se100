import { useEffect, useState } from "react";

function CurrencyConverter(props) {
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("");

  // props.currencyFrom
  // props.currencyTo

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        props.currencyFrom +
        "/" +
        props.currencyTo +
        "/" +
        fromAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [fromAmount, props.currencyFrom, props.currencyTo]);

  function onUserInput(event) {
    setFromAmount(event.target.value);
  }

  return (
    <div className="container">
      {/* Controlled component */}
      <input
        value={fromAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={onUserInput}
      />
      <p>{props.currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">{convertedAmount}</p>
      <p>{props.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
