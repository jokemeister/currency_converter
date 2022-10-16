import React from "react";
import styles from "./CurrencySelector.module.css";

export const CurrencySelector = ({ options, value, onChange }) => {
  return (
    <select
      className={styles.selector}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {
        options.map((option) => (
          <option key={option+new Date()} value={option}>{option}</option>
        ))
      }
    </select>
  );
};
