import React from 'react';
import styles from './Total.module.css';

const Total = () => {
  return (
    <div className={styles.totalContainer}>
      <div>
        <h2>Valor total:</h2>
        <p>R$ 8184,00</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
