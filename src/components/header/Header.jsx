import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { CurrencyContext } from "../../hoc/CurrencyProvider";

import styles from"./Header.module.css";

export const Header = () => {
  const [currencyBase, setCurrencyBase] = useState([]);
  const { getCurrency } = useContext(CurrencyContext);

  useEffect(() => {
    // getCurrency("https://privat24-api.herokuapp.com/?date=12.10.2022").then(
    //   (data) => {
    //     console.log(data);
    //     setUSDCurrency({ buy: data[3].buy, sale: data[3].sale });
    //     setEURCurrency({ buy: data[2].buy, sale: data[3].sale });
    //   }
    // );
    setCurrencyBase(getCurrency());
  }, []);

  return (
    <header>
      <div className="container">
        <p className={styles.title_desc}>Курс на сьогодні</p>
        <h2 className={styles.title}>Курс валют в банках</h2>
        <ul className={styles.currency_list}>
          {
            currencyBase && currencyBase.map(currency => {
              return (
                <li className={styles.currency_item} key={currency.ccy}>
                  <h3 className={styles.currency_title}>{ currency.ccy }</h3>
                  <span className={styles.currency_text}>
                    { currency.buy } / { currency.sale }
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </header>
  );
};
