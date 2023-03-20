import React from 'react';
import Form from '../components/Form';
import Resume from '../components/Resume';
import Total from '../components/Total';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.form}>
        <Form />
        <Total />
      </div>
      <div className={styles.resume}>
        <Resume />
      </div>
    </main>
  );
};

export default Home;
