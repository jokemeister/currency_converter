import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../hoc/CurrencyProvider";
import styles from "./HomePage.module.css";

const currencyData = new Map();

export const HomePage = () => {
  const [currencyBase, setCurrencyBase] = useState([]);

  const [buyCurrency, setBuyCurrency] = useState("USD");
  const [buyAmount, setBuyAmount] = useState();

  const [saleCurrency, setSaleCurrency] = useState("EUR");
  const [saleAmount, setSaleAmount] = useState();

  const { getCurrency } = useContext(CurrencyContext);

  useEffect(() => {
    setCurrencyBase(getCurrency());
  }, []);

  useEffect(() => {
    if (currencyBase.length > 0) {
      currencyBase.forEach((currency) => {
        currencyData.set(currency.ccy, {
          sale: currency.sale,
          buy: currency.buy,
        });
      });
    }
  }, [currencyBase]);

  function changeSaleAmount(e) {
    if (currencyData.size <= 0) return;
    setSaleAmount(e.target.value);
    setBuyAmount(
      (e.target.value * currencyData.get(saleCurrency).buy) /
        currencyData.get(buyCurrency).buy
    );
  }

  function changeBuyAmount(e) {
    if (currencyData.size <= 0) return;
    setBuyAmount(e.target.value);
    setSaleAmount(
      (e.target.value / currencyData.get(saleCurrency).buy) *
        currencyData.get(buyCurrency).buy
    );
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.convertion_section}>
          <h2 className={styles.section_title}>
            Конвертер {saleCurrency} в {buyCurrency}
          </h2>
          <div className={styles.convertion_block}>
            <div className={styles.sale_block}>
              <p className={styles.sale_title}>У мене є</p>
              <input
                className={styles.sale_input}
                type="number"
                value={saleAmount}
                onChange={changeSaleAmount}
              />
              <select
                className={styles.sale_select}
                value={saleCurrency}
                onChange={(e) => setSaleCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className={styles.buy_block}>
              <p className={styles.buy_title}>Я отримаю</p>
              <input
                className={styles.buy_input}
                type="number"
                value={buyAmount}
                onChange={changeBuyAmount}
              />
              <select
                className={styles.buy_select}
                value={buyCurrency}
                onChange={(e) => setBuyCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
