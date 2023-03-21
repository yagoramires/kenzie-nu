import React from 'react';
import styles from './Card.module.css';

const Card = ({ transaction, transactions, setTransactions }) => {
  const handleDelete = () => {
    console.log(transactions);
    const removeItem = transactions.filter(
      (item) => item.id !== transaction.id,
    );
    setTransactions(removeItem);
  };

  return (
    <div
      className={`${styles.card} ${
        transaction.type === 'Entrada' ? styles.green : styles.grey
      }`}
    >
      <h3>{transaction.description}</h3>
      <p>{transaction.type}</p>
      <p>
        {Number(transaction.value).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};

export default Card;
