import React from 'react';
import Card from './Card';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <h2>Resumo financeiro</h2>

      <p>Você ainda não possui nenhum lançamento</p>
      <Card />
    </div>
  );
};

export default Resume;
