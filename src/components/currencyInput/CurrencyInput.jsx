import React from "react";
import styles from "./CurrencyInput.module.css";

export const CurrencyInput = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="number"
      value={value}
      onChange={onChange}
      min={0}
      pattern="^[0-9]"
    />
  );
};
