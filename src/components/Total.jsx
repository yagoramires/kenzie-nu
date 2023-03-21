import React, { useEffect, useState } from 'react';
import styles from './Total.module.css';

const Total = ({ transactions }) => {
  const [total, setTotal] = useState(0);

  const totalValue = () => {
    const total = transactions.reduce((acc, cur) => {
      return acc + Number(cur.value);
    }, 0);

    return total;
  };

  useEffect(() => {
    setTotal(totalValue());
  }, [transactions]);

  return (
    <div className={styles.totalContainer}>
      <div>
        <h2>Valor total:</h2>
        <p>
          {total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
