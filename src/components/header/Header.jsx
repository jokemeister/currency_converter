import React from "react";

import { useCurrency } from "../../hooks/useCurrency";

import styles from "./Header.module.css";

export const Header = () => {
  const { currencyBase } = useCurrency();

  return (
    <header>
      <div className="container">
        <p className={styles.title_desc}>Курс на сьогодні</p>
        <h2 className={styles.title}>
          Офіційний курс гривні щодо іноземних валют (НБУ)
        </h2>
        <ul className={styles.currency_list}>
          {
            currencyBase.rates &&
            Object.keys(currencyBase.rates).map((currency) => {
              return (
                <li
                  className={styles.currency_item}
                  key={currency + new Date()}
                >
                  <h3 className={styles.currency_title}>{currency}</h3>
                  <span className={styles.currency_text}>
                    {(1 / currencyBase.rates[currency]).toFixed(3) +
                      " " +
                      currencyBase.base}
                  </span>
                </li>
              );
            })
          }
        </ul>
      </div>
    </header>
  );
};
