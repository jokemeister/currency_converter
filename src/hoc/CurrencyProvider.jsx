import React, { createContext } from "react";
import axios from "axios";

const currencyApi = {
  apiUrl : "https://api.apilayer.com/exchangerates_data/latest?symbols=GBP%2C%20EUR%2C%20USD&base=UAH", 
  reqOptions: {
    method: "GET",
    redirect: "follow",
    headers: {
      apikey: "K8Nk9qWEXaUhkdZMmODAuux3wIYfrUIc",
    },
  }
};

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  function getCurrency() {
    return axios(currencyApi.apiUrl, currencyApi.reqOptions)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });
  }

  const currencyInfo = getCurrency();

  const currencyData = { getCurrency, currencyInfo };
  return (
    <CurrencyContext.Provider value={currencyData}>
      {children}
    </CurrencyContext.Provider>
  );
};
