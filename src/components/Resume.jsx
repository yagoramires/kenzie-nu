import React from 'react';
import Card from './Card';
import styles from './Resume.module.css';

const Resume = ({ transactions, setTransactions }) => {
  return (
    <div className={styles.resume}>
      <h2>Resumo financeiro</h2>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Card
            key={transaction.id}
            transaction={transaction}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </div>
  );
};

export default Resume;
