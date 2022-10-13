import React, { createContext } from "react";
import axios from "axios";

const database = [
  {
    ccy: "GDP",
    base_ccy: "UAH",
    buy: "38.65",
    sale: "39.95",
  },
  {
    ccy: "EUR",
    base_ccy: "UAH",
    buy: "36.50",
    sale: "37.45",
  },
  {
    ccy: "USD",
    base_ccy: "UAH",
    buy: "36.65",
    sale: "37.95",
  },
];

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  function getCurrency(endPoint) {
    // return axios
    //   .get(endPoint)
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new Error(err);
    //   });
    console.log(database);
    return database;
  }

  const currencyData = { getCurrency };
  return (
    <CurrencyContext.Provider value={currencyData}>
      {children}
    </CurrencyContext.Provider>
  );
};
