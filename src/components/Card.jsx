import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={`${styles.card} ${styles.green}`}>
      <h3>Salário - Mês Dezembro</h3>
      <p>Entrada</p>
      <p>R$ 6.660,00</p>
      <button>Excluir</button>
    </div>
  );
};

export default Card;
