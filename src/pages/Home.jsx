import React, { useState } from 'react';

import Form from '../components/Form';
import Resume from '../components/Resume';
import Total from '../components/Total';
import styles from './Home.module.css';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <main className={styles.home}>
      <div className={styles.form}>
        <Form transactions={transactions} setTransactions={setTransactions} />

        {transactions.length === 0 ? '' : <Total transactions={transactions} />}
      </div>
      <div className={styles.resume}>
        <Resume transactions={transactions} setTransactions={setTransactions} />
      </div>
    </main>
  );
};

export default Home;
