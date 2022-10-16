import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../hoc/CurrencyProvider";

export const useCurrency = () => {
  const [currencyBase, setCurrencyBase] = useState([]);

  const [buyCurrency, setBuyCurrency] = useState("USD");
  const [buyAmount, setBuyAmount] = useState(Number);

  const [saleCurrency, setSaleCurrency] = useState("EUR");
  const [saleAmount, setSaleAmount] = useState(Number);

  const { currencyInfo } = useContext(CurrencyContext);

  useEffect(() => {
    currencyInfo.then((curInf) => {
      curInf.rates.UAH = 1;
      setCurrencyBase(curInf);
    });
  }, []);

  useEffect(() => {
    if (!currencyBase.rates) return;
    setBuyAmount(
      (saleAmount / currencyBase.rates[saleCurrency]) *
        currencyBase.rates[buyCurrency]
    );
  }, [saleCurrency, buyCurrency]);

  function changeSaleAmount(e) {
    console.log(e.target.value);
    if (!currencyBase.rates) return;

    setBuyAmount(e.target.value);
    setSaleAmount(
      (e.target.value / currencyBase.rates[buyCurrency]) *
        currencyBase.rates[saleCurrency]
    );
  }

  function changeBuyAmount(e) {
    console.log(e.target.value);
    if (!currencyBase.rates) return;

    setSaleAmount(e.target.value);
    setBuyAmount(
      (e.target.value / currencyBase.rates[saleCurrency]) *
        currencyBase.rates[buyCurrency]
    );
  }

  return {
    currencyBase,
    buyCurrency,
    setBuyCurrency,
    buyAmount,
    changeBuyAmount,
    saleCurrency,
    setSaleCurrency,
    saleAmount,
    changeSaleAmount,
  };
};
