import React from "react";

import { CurrencySelector } from "../../components/currencySelector/CurrencySelector";
import { CurrencyInput } from "../../components/currencyInput/CurrencyInput";

import styles from "./HomePage.module.css";
import { useCurrency } from "../../hooks/useCurrency";

export const HomePage = () => {
  const {
    currencyBase,
    buyCurrency,
    setBuyCurrency,
    buyAmount,
    changeBuyAmount,
    saleCurrency,
    setSaleCurrency,
    saleAmount,
    changeSaleAmount,
  } = useCurrency();

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.convertion_section}>
          <h2 className={styles.section_title}>
            Конвертація {saleCurrency} в {buyCurrency}
          </h2>
          <div className={styles.convertion_block}>
            <div className={styles.sale_block}>
              <p className={styles.sale_title}>У мене є</p>
              <CurrencyInput value={saleAmount} onChange={changeBuyAmount} />
              {
                currencyBase.rates &&
                <CurrencySelector
                  options={Object.keys(currencyBase.rates)}
                  value={saleCurrency}
                  onChange={setSaleCurrency}
                />
              }
            </div>
            <div className={styles.buy_block}>
              <p className={styles.buy_title}>Я отримаю</p>
              <CurrencyInput value={buyAmount} onChange={changeSaleAmount} />
              {
              currencyBase.rates &&
              <CurrencySelector
                options={Object.keys(currencyBase.rates)}
                value={buyCurrency}
                onChange={setBuyCurrency}
              />
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
