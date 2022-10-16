import React from "react";
import styles from "./CurrencyInput.module.css";

export const CurrencyInput = ({ value, onChange }) => {

  function preventSymbols(e) {
    if (e.keyCode === 189 || e.keyCode === 187) {
      return e.preventDefault();
    }
  }

  return (
    <input
      className={styles.input}
      type="number"
      value={value}
      onChange={onChange}
      onKeyDown={preventSymbols}
      min={0}
    />
  );
};
